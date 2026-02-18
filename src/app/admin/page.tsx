"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaSave, FaPlus, FaTrash, FaUpload, FaSpinner, FaImage,
    FaSignOutAlt, FaLock, FaUser, FaHome, FaAddressBook,
    FaBriefcase, FaInfoCircle, FaEye, FaEyeSlash, FaCheckCircle,
    FaExclamationTriangle, FaProjectDiagram, FaCog, FaPalette,
    FaFootballBall, FaKey, FaMagic, FaLink, FaGlobe
} from 'react-icons/fa';
import { PortfolioData } from '@/context/PortfolioContext';

// ─── LOGIN SCREEN ────────────────────────────────────────────
const LoginScreen = ({ onLogin, savedPassword }: { onLogin: () => void; savedPassword?: string }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Fetch the latest password from the server
        try {
            const res = await fetch('/api/portfolio?t=' + Date.now());
            const data = await res.json();
            const correctPassword = data?.settings?.password || 'tahreem2025';

            setTimeout(() => {
                if (password === correctPassword) {
                    sessionStorage.setItem('admin_auth', 'true');
                    onLogin();
                } else {
                    setError('Incorrect password. Please try again.');
                    setLoading(false);
                }
            }, 600);
        } catch {
            setTimeout(() => {
                if (password === 'tahreem2025') {
                    sessionStorage.setItem('admin_auth', 'true');
                    onLogin();
                } else {
                    setError('Incorrect password. Please try again.');
                    setLoading(false);
                }
            }, 600);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 blur-[120px] rounded-full" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-200/20 blur-[150px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-md"
            >
                <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-violet-500/10 border border-white/60 p-8 md:p-10">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/30 mb-5">
                            <FaLock className="text-white text-2xl" />
                        </div>
                        <h1 className="text-2xl font-black text-slate-800 tracking-tight">Admin Portal</h1>
                        <p className="text-sm text-slate-400 mt-2 font-medium">Enter your password to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setError(''); }}
                                    placeholder="Enter admin password"
                                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 pr-12 text-slate-800 font-medium placeholder:text-slate-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all"
                                    autoFocus
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-50 px-4 py-3 rounded-xl border border-red-100">
                                    <FaExclamationTriangle className="text-xs flex-shrink-0" />{error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button type="submit" disabled={loading || !password}
                            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-violet-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2">
                            {loading ? <FaSpinner className="animate-spin" /> : <><FaLock className="text-xs" /> Sign In</>}
                        </button>
                    </form>
                    <p className="text-center text-[10px] text-slate-300 mt-6 font-bold uppercase tracking-widest">Secured Admin Gateway • Portfolio CMS</p>
                </div>
            </motion.div>
        </div>
    );
};

// ─── TOAST ───────────────────────────────────────────────────
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
    useEffect(() => { const timer = setTimeout(onClose, 3000); return () => clearTimeout(timer); }, [onClose]);
    return (
        <motion.div initial={{ opacity: 0, y: -20, x: 20 }} animate={{ opacity: 1, y: 0, x: 0 }} exit={{ opacity: 0, y: -20, x: 20 }}
            className={`fixed top-6 right-6 z-[100] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border ${type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
            {type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
            <span className="text-sm font-semibold">{message}</span>
        </motion.div>
    );
};

// ─── INPUT COMPONENTS ────────────────────────────────────────
const InputField = ({ label, value, onChange, placeholder, type = 'text' }: any) => (
    <div>
        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">{label}</label>
        <input type={type} value={value} onChange={onChange} placeholder={placeholder}
            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-medium focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all" />
    </div>
);

const TextArea = ({ label, value, onChange, placeholder, rows = 4 }: any) => (
    <div>
        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">{label}</label>
        <textarea value={value} onChange={onChange} placeholder={placeholder} rows={rows}
            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-medium focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none resize-none transition-all" />
    </div>
);

const Card = ({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) => (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 md:p-8">
        <h3 className="text-sm font-bold text-slate-700 mb-5 flex items-center gap-2">{icon}{title}</h3>
        {children}
    </div>
);

// ─── ADMIN DASHBOARD ─────────────────────────────────────────
const AdminDashboard = () => {
    const [data, setData] = useState<PortfolioData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('hero');
    const [uploading, setUploading] = useState<string | null>(null);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => { fetchData(); }, []);

    const fetchData = async () => {
        try {
            const res = await fetch('/api/portfolio?t=' + Date.now());
            const json = await res.json();
            setData(json);
        } catch (error) { console.error('Failed to fetch', error); }
        finally { setLoading(false); }
    };

    const handleSave = async () => {
        if (!data) return;
        setSaving(true);
        try {
            await fetch('/api/portfolio', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
            setToast({ message: 'All changes saved successfully!', type: 'success' });
        } catch { setToast({ message: 'Failed to save changes.', type: 'error' }); }
        finally { setSaving(false); }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, path: string) => {
        if (!e.target.files?.[0] || !data) return;
        setUploading(path);
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        try {
            const res = await fetch('/api/upload', { method: 'POST', body: formData });
            const result = await res.json();
            if (result.success) {
                const newData = JSON.parse(JSON.stringify(data));
                const keys = path.split('.');
                let current: any = newData;
                for (let i = 0; i < keys.length - 1; i++) current = current[keys[i]];
                current[keys[keys.length - 1]] = result.url;
                setData(newData);
                setToast({ message: 'File uploaded!', type: 'success' });
            }
        } catch { setToast({ message: 'Upload failed.', type: 'error' }); }
        finally { setUploading(null); }
    };

    const handleChange = (path: string, value: any) => {
        if (!data) return;
        const newData = JSON.parse(JSON.stringify(data));
        const keys = path.split('.');
        let current: any = newData;
        for (let i = 0; i < keys.length - 1; i++) current = current[keys[i]];
        current[keys[keys.length - 1]] = value;
        setData(newData);
    };

    const handleLogout = () => { sessionStorage.removeItem('admin_auth'); window.location.reload(); };

    if (loading) return (
        <div className="flex h-screen items-center justify-center bg-slate-50">
            <div className="text-center"><FaSpinner className="animate-spin text-4xl text-violet-500 mx-auto mb-4" /><p className="text-slate-400 text-sm">Loading...</p></div>
        </div>
    );

    if (!data) return (
        <div className="flex h-screen items-center justify-center bg-slate-50">
            <div className="text-center"><FaExclamationTriangle className="text-4xl text-red-400 mx-auto mb-4" /><p className="text-slate-600 font-semibold">Error loading data</p></div>
        </div>
    );

    const tabs = [
        { id: 'hero', label: 'Hero', icon: <FaHome /> },
        { id: 'about', label: 'About', icon: <FaInfoCircle /> },
        { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
        { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
        { id: 'navbar', label: 'Navbar', icon: <FaImage /> },
        { id: 'contact', label: 'Contact', icon: <FaAddressBook /> },
        { id: 'footer', label: 'Footer', icon: <FaGlobe /> },
        { id: 'settings', label: 'Settings', icon: <FaCog /> },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex">
            <AnimatePresence>{toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}</AnimatePresence>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {sidebarOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" />}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={`fixed lg:sticky top-0 left-0 h-screen w-[260px] bg-white border-r border-slate-200/80 z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                            <span className="text-white text-sm font-black">TA</span>
                        </div>
                        <div>
                            <h2 className="text-sm font-black text-slate-800 tracking-tight">Portfolio CMS</h2>
                            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Admin Panel</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300 px-3 mb-3">Content Manager</p>
                    {tabs.map(tab => (
                        <button key={tab.id} onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === tab.id ? 'bg-violet-50 text-violet-700 shadow-sm border border-violet-100' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}>
                            <span className={`text-base ${activeTab === tab.id ? 'text-violet-500' : 'text-slate-400'}`}>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <a href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-500 hover:text-violet-600 hover:bg-violet-50 transition-all mb-1">
                        <FaEye className="text-base" /> View Live Site
                    </a>
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:text-red-600 hover:bg-red-50 transition-all">
                        <FaSignOutAlt className="text-base" /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-h-screen">
                <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 px-4 md:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-xl hover:bg-slate-100 text-slate-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            </button>
                            <div>
                                <h1 className="text-lg md:text-xl font-black text-slate-800 capitalize">{activeTab} Section</h1>
                                <p className="text-xs text-slate-400 font-medium hidden sm:block">Manage your {activeTab} content</p>
                            </div>
                        </div>
                        <button onClick={handleSave} disabled={saving}
                            className="flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-50 transition-all">
                            {saving ? <FaSpinner className="animate-spin" /> : <FaSave />}
                            <span className="hidden sm:inline">Save Changes</span><span className="sm:hidden">Save</span>
                        </button>
                    </div>
                </header>

                <div className="p-4 md:p-8">
                    <div className="max-w-5xl mx-auto">

                        {/* ═══ HERO TAB ═══ */}
                        {activeTab === 'hero' && data?.hero && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                <Card title="Hero Image" icon={<FaImage className="text-violet-500" />}>
                                    <div className="flex flex-col sm:flex-row items-start gap-5">
                                        <div className="w-32 h-32 bg-slate-100 rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 flex items-center justify-center relative flex-shrink-0">
                                            {data.hero?.heroImage ? <Image src={data.hero.heroImage} alt="Hero" fill className="object-cover" /> : <FaImage className="text-3xl text-slate-300" />}
                                            {uploading === 'hero.heroImage' && <div className="absolute inset-0 bg-white/80 flex items-center justify-center"><FaSpinner className="animate-spin text-violet-500 text-xl" /></div>}
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 mb-3">Main hero image. Recommended: square, high-res PNG.</p>
                                            <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-50 text-violet-700 rounded-xl font-semibold text-sm cursor-pointer hover:bg-violet-100 transition-colors border border-violet-200">
                                                <FaUpload /> Upload Image
                                                <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'hero.heroImage')} accept="image/*" />
                                            </label>
                                        </div>
                                    </div>
                                </Card>
                                {/* Personal Info and other Hero cards check ... */}

                                <Card title="Personal Info" icon={<FaUser className="text-violet-500" />}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <InputField label="First Name" value={data.hero?.firstName || ''} onChange={(e: any) => handleChange('hero.firstName', e.target.value)} />
                                        <InputField label="Last Name" value={data.hero?.lastName || ''} onChange={(e: any) => handleChange('hero.lastName', e.target.value)} />
                                        <div className="md:col-span-2">
                                            <InputField label="Title / Designation" value={data.hero?.title || ''} onChange={(e: any) => handleChange('hero.title', e.target.value)} />
                                        </div>
                                    </div>
                                </Card>

                                <Card title="Hero Stats" icon={<FaMagic className="text-violet-500" />}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <InputField label="Stat 1 Value" value={data.hero?.stat1Value || ''} onChange={(e: any) => handleChange('hero.stat1Value', e.target.value)} placeholder="05+" />
                                        <InputField label="Stat 1 Label" value={data.hero?.stat1Label || ''} onChange={(e: any) => handleChange('hero.stat1Label', e.target.value)} placeholder="Frameworks" />
                                        <InputField label="Stat 2 Value" value={data.hero?.stat2Value || ''} onChange={(e: any) => handleChange('hero.stat2Value', e.target.value)} placeholder="100%" />
                                        <InputField label="Stat 2 Label" value={data.hero?.stat2Label || ''} onChange={(e: any) => handleChange('hero.stat2Label', e.target.value)} placeholder="Coverage" />
                                    </div>
                                </Card>

                                <Card title="Rotating Icons Animation" icon={<FaMagic className="text-violet-500" />}>
                                    <p className="text-xs text-slate-400 mb-4">The icons (Selenium, Cypress, etc.) that rotate around the hero image.</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                                        {[
                                            { value: 'rotate', label: 'Normal' },
                                            { value: 'fast', label: 'Fast' },
                                            { value: 'slow', label: 'Slow' },
                                            { value: 'reverse', label: 'Reverse' },
                                            { value: 'none', label: 'Off' }
                                        ].map(opt => (
                                            <button key={opt.value} onClick={() => handleChange('hero.heroAnimation', opt.value)}
                                                className={`px-4 py-3 rounded-xl text-sm font-bold border-2 transition-all ${(data.hero?.heroAnimation || 'rotate') === opt.value
                                                    ? 'bg-violet-50 border-violet-500 text-violet-700' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'}`}>
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                </Card>

                                <Card title="CV / Resume" icon={<FaUpload className="text-violet-500" />}>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                        <span className="text-sm text-slate-400 truncate max-w-xs">{data.hero?.cvPdf || 'No CV uploaded'}</span>
                                        <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-50 text-violet-700 rounded-xl font-semibold text-sm cursor-pointer hover:bg-violet-100 transition-colors border border-violet-200 whitespace-nowrap">
                                            <FaUpload /> Upload CV (PDF)
                                            <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'hero.cvPdf')} accept=".pdf" />
                                        </label>
                                    </div>
                                </Card>

                                <Card title="Typewriter Sentences" icon={<span>✨</span>}>
                                    <p className="text-xs text-slate-400 mb-3">Comma-separated sentences for the typewriter effect.</p>
                                    <TextArea label="" value={data.hero?.typewriterSentences?.join(', ') || ''} onChange={(e: any) => handleChange('hero.typewriterSentences', e.target.value.split(',').map((s: string) => s.trim()))} rows={3} />
                                </Card>

                                <Card title="QA Words (Rotating Label)" icon={<span>🔄</span>}>
                                    <p className="text-xs text-slate-400 mb-3">Comma-separated words that rotate under the hero image.</p>
                                    <TextArea label="" value={data.hero?.qaWords?.join(', ') || ''} onChange={(e: any) => handleChange('hero.qaWords', e.target.value.split(',').map((s: string) => s.trim()))} rows={3} />
                                </Card>
                            </motion.div>
                        )}

                        {/* ═══ ABOUT TAB ═══ */}
                        {activeTab === 'about' && data?.about && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                <Card title="About Image" icon={<FaImage className="text-violet-500" />}>
                                    <div className="flex flex-col sm:flex-row items-start gap-5">
                                        <div className="w-32 h-32 bg-slate-100 rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 flex items-center justify-center relative flex-shrink-0">
                                            {data.about?.aboutImage ? <Image src={data.about.aboutImage} alt="About" fill className="object-cover" /> : <FaImage className="text-3xl text-slate-300" />}
                                            {uploading === 'about.aboutImage' && <div className="absolute inset-0 bg-white/80 flex items-center justify-center"><FaSpinner className="animate-spin text-violet-500 text-xl" /></div>}
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 mb-3">Image for the About section.</p>
                                            <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-50 text-violet-700 rounded-xl font-semibold text-sm cursor-pointer hover:bg-violet-100 border border-violet-200">
                                                <FaUpload /> Upload Image
                                                <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'about.aboutImage')} accept="image/*" />
                                            </label>
                                        </div>
                                    </div>
                                </Card>

                                <Card title="About Content" icon={<FaInfoCircle className="text-violet-500" />}>
                                    <div className="space-y-5">
                                        <InputField label="Badge Title" value={data.about?.subheading || ''} onChange={(e: any) => handleChange('about.subheading', e.target.value)} />
                                        <InputField label="Main Heading" value={data.about?.heading || ''} onChange={(e: any) => handleChange('about.heading', e.target.value)} />
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <InputField label="Accuracy %" value={data.about?.stats?.accuracy || ''} onChange={(e: any) => handleChange('about.stats.accuracy', e.target.value)} />
                                            <InputField label="Years Experience" value={data.about?.stats?.experienceYears || ''} onChange={(e: any) => handleChange('about.stats.experienceYears', e.target.value)} />
                                        </div>
                                        <TextArea label="Description" value={data.about?.description || ''} onChange={(e: any) => handleChange('about.description', e.target.value)} />
                                    </div>
                                </Card>

                                <Card title="Services / Features" icon={<span>🧩</span>}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {(data.about?.features || []).map((feat: any, idx: number) => (
                                            <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                                                <input value={feat.title} onChange={(e) => { const f = [...data.about.features]; f[idx] = { ...f[idx], title: e.target.value }; handleChange('about.features', f); }}
                                                    className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-800 focus:border-violet-500 outline-none" placeholder="Title" />
                                                <input value={feat.desc} onChange={(e) => { const f = [...data.about.features]; f[idx] = { ...f[idx], desc: e.target.value }; handleChange('about.features', f); }}
                                                    className="w-full bg-white border-2 border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-500 focus:border-violet-500 outline-none" placeholder="Description" />
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        )}

                        {/* ═══ PROJECTS TAB ═══ */}
                        {activeTab === 'projects' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <p className="text-sm text-slate-400 font-medium">Total {data.projects?.length || 0} projects</p>
                                    <button onClick={() => {
                                        const newId = Math.max(...(data.projects || []).map(p => p.id), 0) + 1;
                                        handleChange('projects', [...(data.projects || []), {
                                            id: newId, title: 'New Project', link: '#', type: 'Web Application',
                                            image: '', description: 'Project description', testing: ['Testing Type'],
                                            tools: ['Tool'], bugs: 'Bug report', color: 'blue'
                                        }]);
                                    }} className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 shadow-sm transition-all">
                                        <FaPlus /> Add Project
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {(data.projects || []).map((proj, idx) => (
                                        <motion.div key={proj.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                                            className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 md:p-8 relative group hover:border-violet-300 transition-colors">
                                            <button onClick={() => handleChange('projects', data.projects.filter(p => p.id !== proj.id))}
                                                className="absolute top-5 right-5 p-2 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all"><FaTrash size={14} /></button>

                                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                                                {/* Project Image */}
                                                <div className="space-y-3">
                                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Image</label>
                                                    <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden relative border-2 border-dashed border-slate-200">
                                                        {proj.image ? <Image src={proj.image} alt={proj.title} fill className="object-cover" /> :
                                                            <div className="w-full h-full flex items-center justify-center text-slate-300"><FaImage size={24} /></div>}
                                                        {uploading === `projects.${idx}.image` && <div className="absolute inset-0 bg-white/80 flex items-center justify-center"><FaSpinner className="animate-spin text-violet-500" /></div>}
                                                    </div>
                                                    <label className="w-full cursor-pointer bg-slate-100 hover:bg-violet-50 py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 hover:text-violet-600 transition-all border border-slate-200">
                                                        <FaUpload /> Upload
                                                        <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, `projects.${idx}.image`)} accept="image/*" />
                                                    </label>
                                                </div>

                                                <div className="lg:col-span-4 space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <InputField label="Project Title" value={proj.title} onChange={(e: any) => { const p = [...data.projects]; p[idx] = { ...p[idx], title: e.target.value }; handleChange('projects', p); }} />
                                                        <InputField label="Live Link" value={proj.link} onChange={(e: any) => { const p = [...data.projects]; p[idx] = { ...p[idx], link: e.target.value }; handleChange('projects', p); }} />
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Type</label>
                                                            <select value={proj.type}
                                                                onChange={(e) => { const p = [...data.projects]; p[idx] = { ...p[idx], type: e.target.value }; handleChange('projects', p); }}
                                                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:border-violet-500 outline-none transition-all">
                                                                <option value="Web Application">Web Application</option>
                                                                <option value="Mobile Application">Mobile Application</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Color Theme</label>
                                                            <select value={proj.color}
                                                                onChange={(e) => { const p = [...data.projects]; p[idx] = { ...p[idx], color: e.target.value }; handleChange('projects', p); }}
                                                                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:border-violet-500 outline-none transition-all">
                                                                {['blue', 'pink', 'red', 'purple', 'orange', 'emerald', 'yellow'].map(c => <option key={c} value={c}>{c}</option>)}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <TextArea label="Description" value={proj.description} onChange={(e: any) => { const p = [...data.projects]; p[idx] = { ...p[idx], description: e.target.value }; handleChange('projects', p); }} rows={2} />
                                                    <InputField label="Testing Types (comma-separated)" value={proj.testing.join(', ')} onChange={(e: any) => { const p = [...data.projects]; p[idx] = { ...p[idx], testing: e.target.value.split(',').map((s: string) => s.trim()) }; handleChange('projects', p); }} />
                                                    <InputField label="Tools (comma-separated)" value={proj.tools.join(', ')} onChange={(e: any) => { const p = [...data.projects]; p[idx] = { ...p[idx], tools: e.target.value.split(',').map((s: string) => s.trim()) }; handleChange('projects', p); }} />
                                                    <InputField label="Bugs Found / Report" value={proj.bugs} onChange={(e: any) => { const p = [...data.projects]; p[idx] = { ...p[idx], bugs: e.target.value }; handleChange('projects', p); }} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        )}

                        {/* ═══ EXPERIENCE TAB ═══ */}
                        {activeTab === 'experience' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <p className="text-sm text-slate-400 font-medium">Total {data.experience.length} items</p>
                                    <button onClick={() => {
                                        const newId = Math.max(...data.experience.map(e => e.id), 0) + 1;
                                        handleChange('experience', [...data.experience, { id: newId, role: 'New Role', company: 'Company', date: 'Date', description: 'Description', type: 'work' }]);
                                    }} className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 shadow-sm transition-all">
                                        <FaPlus /> Add Experience
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {data.experience.map((exp, idx) => (
                                        <motion.div key={exp.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                                            className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 md:p-8 relative group hover:border-violet-300 transition-colors">
                                            <button onClick={() => handleChange('experience', data.experience.filter(e => e.id !== exp.id))}
                                                className="absolute top-5 right-5 p-2 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all"><FaTrash size={14} /></button>

                                            <div className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <InputField label="Role / Position" value={exp.role} onChange={(e: any) => { const ex = [...data.experience]; ex[idx] = { ...ex[idx], role: e.target.value }; handleChange('experience', ex); }} />
                                                    <InputField label="Company / University" value={exp.company} onChange={(e: any) => { const ex = [...data.experience]; ex[idx] = { ...ex[idx], company: e.target.value }; handleChange('experience', ex); }} />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <InputField label="Date Duration" value={exp.date} onChange={(e: any) => { const ex = [...data.experience]; ex[idx] = { ...ex[idx], date: e.target.value }; handleChange('experience', ex); }} />
                                                    <div>
                                                        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Type</label>
                                                        <select value={exp.type} onChange={(e) => { const ex = [...data.experience]; ex[idx] = { ...ex[idx], type: e.target.value }; handleChange('experience', ex); }}
                                                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:border-violet-500 outline-none transition-all">
                                                            <option value="work">Work Experience</option>
                                                            <option value="education">Education</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <TextArea label="Description" value={exp.description} onChange={(e: any) => { const ex = [...data.experience]; ex[idx] = { ...ex[idx], description: e.target.value }; handleChange('experience', ex); }} rows={3} />
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        )}

                        {/* ═══ NAVBAR TAB ═══ */}
                        {activeTab === 'navbar' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                <Card title="Logo Configuration" icon={<FaImage className="text-violet-500" />}>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">Logo Type</label>
                                            <div className="flex gap-4">
                                                <button onClick={() => handleChange('navbar.logoType', 'text')}
                                                    className={`flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all ${(data?.navbar?.logoType || 'text') === 'text' ? 'bg-violet-50 border-violet-500 text-violet-700' : 'bg-white border-slate-200 text-slate-500'}`}>
                                                    Text Logo
                                                </button>
                                                <button onClick={() => handleChange('navbar.logoType', 'image')}
                                                    className={`flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all ${(data?.navbar?.logoType || 'text') === 'image' ? 'bg-violet-50 border-violet-500 text-violet-700' : 'bg-white border-slate-200 text-slate-500'}`}>
                                                    Image Logo
                                                </button>
                                            </div>
                                        </div>

                                        {(data?.navbar?.logoType || 'text') === 'text' ? (
                                            <InputField label="Logo Text" value={data?.navbar?.logoText || ''} onChange={(e: any) => handleChange('navbar.logoText', e.target.value)} placeholder="e.g. Tehreem Arif" />
                                        ) : (
                                            <div className="space-y-4">
                                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Logo Image</label>
                                                <div className="flex items-center gap-5 p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                                                    <div className="w-20 h-20 relative bg-white rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center">
                                                        {data?.navbar?.logoImage ? <Image src={data.navbar.logoImage} alt="Logo" fill className="object-contain" /> : <FaImage className="text-slate-300 text-2xl" />}
                                                    </div>
                                                    <label className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-xl text-sm font-bold cursor-pointer hover:bg-slate-50 transition-all">
                                                        {uploading === 'navbar.logoImage' ? <FaSpinner className="animate-spin" /> : 'Upload Logo'}
                                                        <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'navbar.logoImage')} accept="image/*" />
                                                    </label>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        )}

                        {/* ═══ CONTACT TAB ═══ */}
                        {activeTab === 'contact' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                <Card title="Contact Information" icon={<FaAddressBook className="text-violet-500" />}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <InputField label="Email" value={data.contact.email} onChange={(e: any) => handleChange('contact.email', e.target.value)} />
                                        <InputField label="Phone" value={data.contact.phone} onChange={(e: any) => handleChange('contact.phone', e.target.value)} />
                                        <InputField label="WhatsApp Number" value={data.contact.whatsapp} onChange={(e: any) => handleChange('contact.whatsapp', e.target.value)} />
                                        <InputField label="Location" value={data.contact.location} onChange={(e: any) => handleChange('contact.location', e.target.value)} />
                                        <InputField label="LinkedIn URL" value={data.contact.linkedin} onChange={(e: any) => handleChange('contact.linkedin', e.target.value)} />
                                        <InputField label="GitHub URL" value={data.contact.github} onChange={(e: any) => handleChange('contact.github', e.target.value)} />
                                    </div>
                                </Card>
                            </motion.div>
                        )}

                        {/* ═══ FOOTER TAB ═══ */}
                        {activeTab === 'footer' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                <Card title="Footer Branding" icon={<FaGlobe className="text-violet-500" />}>
                                    <div className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <InputField label="Brand First Name" value={data.footer?.brandName || ''} onChange={(e: any) => handleChange('footer.brandName', e.target.value)} />
                                            <InputField label="Brand Last Name" value={data.footer?.brandLastName || ''} onChange={(e: any) => handleChange('footer.brandLastName', e.target.value)} />
                                        </div>
                                        <TextArea label="Tagline" value={data.footer?.tagline || ''} onChange={(e: any) => handleChange('footer.tagline', e.target.value)} rows={3} />
                                        <InputField label="Copyright Name" value={data.footer?.copyright || ''} onChange={(e: any) => handleChange('footer.copyright', e.target.value)} />
                                        <InputField label="Design Credit Text" value={data.footer?.designCredit || ''} onChange={(e: any) => handleChange('footer.designCredit', e.target.value)} />
                                    </div>
                                </Card>
                            </motion.div>
                        )}

                        {/* ═══ SETTINGS TAB ═══ */}
                        {activeTab === 'settings' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                <Card title="Change Password" icon={<FaKey className="text-violet-500" />}>
                                    <div className="space-y-5">
                                        <p className="text-xs text-slate-400">Current password is stored securely. Change it below.</p>
                                        <InputField label="New Password" value={data.settings?.password || 'tahreem2025'} onChange={(e: any) => handleChange('settings.password', e.target.value)} type="text" />
                                        <p className="text-[11px] text-amber-600 bg-amber-50 px-4 py-3 rounded-xl border border-amber-200 font-medium flex items-center gap-2">
                                            <FaExclamationTriangle className="flex-shrink-0" /> Don't forget your password! You'll need it to login next time.
                                        </p>
                                    </div>
                                </Card>

                                <Card title="Theme Colors" icon={<FaPalette className="text-violet-500" />}>
                                    <p className="text-xs text-slate-400 mb-5">Customize the color scheme of your portfolio site.</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Primary Color</label>
                                            <div className="flex items-center gap-3">
                                                <input type="color" value={data.settings?.primaryColor || '#7c3aed'} onChange={(e) => handleChange('settings.primaryColor', e.target.value)}
                                                    className="w-12 h-12 rounded-xl border-2 border-slate-200 cursor-pointer" />
                                                <input type="text" value={data.settings?.primaryColor || '#7c3aed'} onChange={(e) => handleChange('settings.primaryColor', e.target.value)}
                                                    className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-mono focus:border-violet-500 outline-none" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Accent Color</label>
                                            <div className="flex items-center gap-3">
                                                <input type="color" value={data.settings?.accentColor || '#d946ef'} onChange={(e) => handleChange('settings.accentColor', e.target.value)}
                                                    className="w-12 h-12 rounded-xl border-2 border-slate-200 cursor-pointer" />
                                                <input type="text" value={data.settings?.accentColor || '#d946ef'} onChange={(e) => handleChange('settings.accentColor', e.target.value)}
                                                    className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-mono focus:border-violet-500 outline-none" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Font Color</label>
                                            <div className="flex items-center gap-3">
                                                <input type="color" value={data.settings?.fontColor || '#1e293b'} onChange={(e) => handleChange('settings.fontColor', e.target.value)}
                                                    className="w-12 h-12 rounded-xl border-2 border-slate-200 cursor-pointer" />
                                                <input type="text" value={data.settings?.fontColor || '#1e293b'} onChange={(e) => handleChange('settings.fontColor', e.target.value)}
                                                    className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-mono focus:border-violet-500 outline-none" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Color Preview */}
                                    <div className="mt-6 p-5 rounded-2xl border border-slate-200 bg-slate-50">
                                        <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">Preview</p>
                                        <div className="flex items-center gap-4">
                                            <div className="h-14 flex-1 rounded-xl" style={{ background: `linear-gradient(135deg, ${data.settings?.primaryColor || '#7c3aed'}, ${data.settings?.accentColor || '#d946ef'})` }} />
                                            <span className="text-lg font-black" style={{ color: data.settings?.fontColor || '#1e293b' }}>Sample Text</span>
                                        </div>
                                    </div>
                                </Card>

                                <Card title="Hero Animation Style" icon={<FaMagic className="text-violet-500" />}>
                                    <p className="text-xs text-slate-400 mb-4">Choose the animation style for the hero section's icon ring.</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {[
                                            { value: 'rotate', label: '🔄 Normal Rotation', desc: 'Smooth 360° clockwise' },
                                            { value: 'fast', label: '⚡ Fast Rotation', desc: 'Double speed spinning' },
                                            { value: 'slow', label: '🐌 Slow & Elegant', desc: 'Gentle, slow rotation' },
                                            { value: 'reverse', label: '↩️ Reverse', desc: 'Counter-clockwise spin' },
                                            { value: 'none', label: '⏹️ Static', desc: 'No animation at all' },
                                        ].map(opt => (
                                            <button key={opt.value} onClick={() => { handleChange('hero.heroAnimation', opt.value); handleChange('settings.heroAnimation', opt.value); }}
                                                className={`p-4 rounded-xl border-2 text-left transition-all ${(data.settings?.heroAnimation || 'rotate') === opt.value
                                                    ? 'bg-violet-50 border-violet-500' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                                                <p className="font-bold text-sm text-slate-800">{opt.label}</p>
                                                <p className="text-xs text-slate-400 mt-1">{opt.desc}</p>
                                            </button>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        )}

                    </div>
                </div>

                <div className="px-8 py-6 text-center border-t border-slate-100">
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Portfolio CMS V3.0 • Full Customization • Cloudinary Powered</p>
                </div>
            </main>
        </div>
    );
};

// ─── MAIN ────────────────────────────────────────────────────
const AdminPanel = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        setAuthenticated(sessionStorage.getItem('admin_auth') === 'true');
        setChecking(false);
    }, []);

    if (checking) return <div className="min-h-screen bg-slate-50 flex items-center justify-center"><FaSpinner className="animate-spin text-3xl text-violet-500" /></div>;
    if (!authenticated) return <LoginScreen onLogin={() => setAuthenticated(true)} />;
    return <AdminDashboard />;
};

export default AdminPanel;
