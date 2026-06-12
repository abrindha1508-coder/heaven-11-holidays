import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Unlock, Download, RefreshCw, AlertCircle, CheckCircle, Database } from 'lucide-react';
import axios from 'axios';

export const AdminExport: React.FC = () => {
  const [adminKey, setAdminKey] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingType, setLoadingType] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Read key from sessionStorage if it was already verified in the current session
  useEffect(() => {
    const savedKey = sessionStorage.getItem('admin_key');
    if (savedKey) {
      setAdminKey(savedKey);
      setIsVerified(true);
    }
  }, []);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminKey.trim()) {
      setError('Please enter a secret key.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    try {
      // Connect to verify endpoint
      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${backendUrl}/api/admin/verify`, {
        adminKey: adminKey.trim()
      });

      if (response.data.success) {
        setIsVerified(true);
        sessionStorage.setItem('admin_key', adminKey.trim());
        setSuccessMsg('Secret Key verified successfully!');
      } else {
        setError('Verification failed.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Invalid Secret Key or Server Connection Error.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setAdminKey('');
    setIsVerified(false);
    sessionStorage.removeItem('admin_key');
    setSuccessMsg(null);
    setError(null);
  };

  const handleDownload = async (type: string) => {
    setLoadingType(type);
    setError(null);
    setSuccessMsg(null);

    try {
      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.get(`${backendUrl}/api/admin/export/${type}`, {
        headers: {
          'x-admin-key': adminKey.trim()
        },
        responseType: 'blob'
      });

      // Extract filename from headers
      let filename = `${type}_export_${new Date().toISOString().split('T')[0]}.csv`;
      const contentDisposition = response.headers['content-disposition'];
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename=(.+)/);
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1];
        }
      }

      // Create a blob download link
      const blob = new Blob([response.data], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);

      setSuccessMsg(`Exported ${type} successfully as ${filename}!`);
    } catch (err: any) {
      console.error(err);
      setError('Export failed. Verify your secret key and database connection.');
    } finally {
      setLoadingType(null);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50/60 pt-32 pb-24 font-sans select-none">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Card */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-10">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-dark/5 text-primary-dark border border-primary-dark/15 shadow-sm">
            <Shield className="h-7 w-7 text-primary-light" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-black text-slate-800 tracking-tight uppercase">
            Database Export Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Secure administrative tool for exporting system logs, booking forms, and database entries into Microsoft Excel sheets.
          </p>
        </div>

        {/* Messaging Box */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-xl bg-rose-50 border border-rose-100 p-4 text-xs font-semibold text-rose-600 flex items-center gap-3 max-w-md mx-auto text-left shadow-sm"
          >
            <AlertCircle className="h-5 w-5 shrink-0 text-rose-500" />
            <span>{error}</span>
          </motion.div>
        )}

        {successMsg && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-xs font-semibold text-emerald-600 flex items-center gap-3 max-w-md mx-auto text-left shadow-sm"
          >
            <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />
            <span>{successMsg}</span>
          </motion.div>
        )}

        {/* Verification View */}
        {!isVerified ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto rounded-3xl bg-white border border-slate-100 shadow-xl p-8 text-center space-y-6"
          >
            <div className="h-10 w-10 bg-slate-550/5 text-slate-500 rounded-full flex items-center justify-center mx-auto border border-slate-100">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-slate-800 uppercase">Verification Required</h3>
              <p className="text-[11px] text-slate-400 font-medium mt-1 leading-relaxed">
                Provide the credentials configured in the server environment (.env) to unlock dataset operations.
              </p>
            </div>

            <form onSubmit={handleVerify} className="space-y-4 text-left">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5 tracking-wider">
                  Admin Secret Key
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••••••"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-primary-light focus:outline-none bg-slate-50/50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-premium font-bold text-white text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" /> Verifying...
                  </>
                ) : (
                  <>
                    <Unlock className="h-4 w-4" /> Verify & Unlock
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Status Indicator */}
            <div className="flex items-center justify-between bg-white border border-slate-100 shadow-md rounded-2xl py-3 px-6 max-w-xl mx-auto">
              <div className="flex items-center gap-2.5 text-left">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] font-bold text-slate-700 uppercase">Authenticated Session</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer tracking-wider uppercase"
              >
                Logout / Lock Panel
              </button>
            </div>

            {/* Grid Operations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
              
              {/* Card 2: Contacts */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="space-y-2 text-left">
                  <div className="h-9 w-9 bg-primary-light/5 text-primary-light rounded-xl flex items-center justify-center border border-primary-light/10">
                    <Database className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="font-display font-black text-slate-800 text-xs uppercase">Contact Enquiries</h4>
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                    Retrieve general inquiries, client queries, and custom package quotation requests from contacts database.
                  </p>
                </div>
                <button
                  onClick={() => handleDownload('contacts')}
                  disabled={loadingType !== null}
                  className="mt-5 w-full py-2.5 rounded-xl bg-gradient-premium hover:opacity-95 text-white font-bold text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loadingType === 'contacts' ? (
                    <RefreshCw className="h-4 w-4 animate-spin text-white" />
                  ) : (
                    <Download className="h-4 w-4 text-white" />
                  )}
                  Download Contacts
                </button>
              </div>

              {/* Card 3: Enquiries */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="space-y-2 text-left">
                  <div className="h-9 w-9 bg-primary-light/5 text-primary-light rounded-xl flex items-center justify-center border border-primary-light/10">
                    <Database className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="font-display font-black text-slate-800 text-xs uppercase">Traveler Details</h4>
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                    Compile active booking package enquiries, passenger segment splits, and date confirmations.
                  </p>
                </div>
                <button
                  onClick={() => handleDownload('enquiries')}
                  disabled={loadingType !== null}
                  className="mt-5 w-full py-2.5 rounded-xl bg-gradient-premium hover:opacity-95 text-white font-bold text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loadingType === 'enquiries' ? (
                    <RefreshCw className="h-4 w-4 animate-spin text-white" />
                  ) : (
                    <Download className="h-4 w-4 text-white" />
                  )}
                  Download Traveler Details
                </button>
              </div>

              {/* Card 4: All Data Rollup */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="space-y-2 text-left">
                  <div className="h-9 w-9 bg-primary-light/5 text-primary-light rounded-xl flex items-center justify-center border border-primary-light/10">
                    <Database className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="font-display font-black text-slate-800 text-xs uppercase">All Database Rollup</h4>
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                    Package all tables (Contacts and Booking Enquiries) into a single stacked spreadsheet.
                  </p>
                </div>
                <button
                  onClick={() => handleDownload('all')}
                  disabled={loadingType !== null}
                  className="mt-5 w-full py-2.5 rounded-xl bg-gradient-premium hover:opacity-95 text-white font-bold text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loadingType === 'all' ? (
                    <RefreshCw className="h-4 w-4 animate-spin text-white" />
                  ) : (
                    <Download className="h-4 w-4 text-white" />
                  )}
                  Download All Data
                </button>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};
