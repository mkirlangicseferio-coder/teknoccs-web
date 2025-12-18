"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, Phone, Mail, X, ChevronRight, Monitor, Send, CheckCircle2,
  Headphones, Building2, Smartphone, ShieldCheck, Linkedin, Instagram
} from 'lucide-react';

// ADMIN PANELİ MANTIĞI: Burayı güncellediğinde site değişir.
const URUN_LISTESI = [
  { id: 1, ad: "GRP 2601P", marka: "Grandstream", fiyat: "85$", detay: "PoE destekli, 2 hatlı kurumsal IP telefon.", kat: "IP Telefon" },
  { id: 2, ad: "X3U Pro", marka: "Fanvil", fiyat: "115$", detay: "Renkli ekran, 6 SIP hattı, HD Ses kalitesi.", kat: "IP Telefon" },
  { id: 3, ad: "Neat Board 65", marka: "Neat", fiyat: "2950$", detay: "4K Video Konferans ve Beyaz Tahta sistemi.", kat: "Konferans" },
  { id: 4, ad: "V65 Smart", marka: "Fanvil", fiyat: "395$", detay: "Android tabanlı, dokunmatik ekranlı akıllı telefon.", kat: "Üst Segment" }
];

export default function TeknoCCS_Final() {
 const [seciliUrun, setSeciliUrun] = useState<any>(null);
  const [gonderildi, setGonderildi] = useState(false);

  return (
    <div className="bg-[#fcfdfe] text-[#1e293b] antialiased min-h-screen font-sans">
      
      {/* NAVIGASYON */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-[100] px-6 md:px-20 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-200">
            <Server className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">TEKNO<span className="text-blue-600">CCS</span></span>
        </div>
        <div className="hidden lg:flex gap-10 font-bold text-[11px] uppercase tracking-[0.2em] text-slate-400">
          <a href="#urunler" className="hover:text-blue-600 transition">Donanımlar</a>
          <a href="#iletisim" className="hover:text-blue-600 transition">Kurumsal İletişim</a>
        </div>
        <button className="bg-slate-900 text-white px-8 py-2.5 rounded-xl text-xs font-black hover:bg-blue-600 transition shadow-xl uppercase tracking-widest">B2B GİRİŞ</button>
      </nav>

      {/* HERO SECTION */}
      <header className="pt-48 pb-24 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-50"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-blue-200">
            Professional Cloud & Hardware
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-slate-900">
            Geleceği <br/> <span className="text-blue-600 italic">Konuşturun.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-14 font-medium italic">
            Dünya standartlarında IP haberleşme çözümleri. Procom donanım gücü ve CCS bulut teknolojisi bir arada.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black hover:bg-blue-700 transition shadow-2xl shadow-blue-200 uppercase tracking-widest flex items-center gap-3">
              TEKLİF ALIN <ChevronRight size={20}/>
            </button>
          </div>
        </motion.div>
      </header>

      {/* ÜRÜNLER (DİNAMİK) */}
      <section id="urunler" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex items-baseline gap-4 mb-20">
          <h2 className="text-4xl font-black tracking-tighter uppercase italic">Ürün Portföyü</h2>
          <div className="h-px flex-1 bg-slate-100"></div>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {URUN_LISTESI.map((urun) => (
            <motion.div 
              key={urun.id} whileHover={{ y: -12 }} onClick={() => setSeciliUrun(urun as any)}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="h-44 bg-slate-50 rounded-[2.5rem] mb-8 flex items-center justify-center text-slate-200 group-hover:text-blue-600 transition-colors">
                <Monitor size={70} strokeWidth={1} />
              </div>
              <p className="text-[10px] font-black text-blue-600 uppercase mb-2 tracking-widest italic">{urun.marka}</p>
              <h4 className="text-2xl font-black tracking-tighter mb-4">{urun.ad}</h4>
              <div className="flex items-center justify-between text-[11px] font-black uppercase text-slate-400 group-hover:text-slate-900">
                <span>İncele</span> <ChevronRight size={16}/>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* İLETİŞİM FORMU */}
      <section id="iletisim" className="py-32 px-6 md:px-20 bg-slate-50">
        <div className="max-w-6xl mx-auto bg-white rounded-[4rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white">
          <div className="md:w-1/2 bg-slate-900 p-20 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-black mb-8 italic">Bize Yazın</h3>
              <p className="text-slate-400 mb-12 font-medium">Projeleriniz için uzman ekibimizden teknik destek ve fiyat teklifi alın.</p>
              <div className="space-y-6 text-sm font-bold">
                <div className="flex items-center gap-4 text-blue-500"><Phone size={20}/> +90 212 444 XX XX</div>
                <div className="flex items-center gap-4 text-blue-500"><Mail size={20}/> info@teknoccs.com</div>
              </div>
            </div>
            <div className="flex gap-6 mt-12 opacity-30">
              <Linkedin size={24}/> <Instagram size={24}/>
            </div>
          </div>
          <div className="md:w-1/2 p-20">
            {!gonderildi ? (
              <form onSubmit={(e) => { e.preventDefault(); setGonderildi(true); }} className="space-y-8">
                <input required placeholder="Adınız / Şirketiniz" className="w-full border-b-2 border-slate-100 py-4 outline-none focus:border-blue-600 transition font-bold" />
                <input required type="email" placeholder="E-posta Adresiniz" className="w-full border-b-2 border-slate-100 py-4 outline-none focus:border-blue-600 transition font-bold" />
                <textarea placeholder="Mesajınız" rows={3} className="w-full border-b-2 border-slate-100 py-4 outline-none focus:border-blue-600 transition font-bold resize-none" />
                <button className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black hover:bg-blue-700 transition shadow-xl shadow-blue-100 flex items-center justify-center gap-3">
                  MESAJI GÖNDER <Send size={20}/>
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8"><CheckCircle2 size={40}/></div>
                <h4 className="text-3xl font-black mb-2">Gönderildi!</h4>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">En kısa sürede size döneceğiz.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DETAY MODAL */}
      <AnimatePresence>
        {seciliUrun && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl z-[200] flex items-center justify-center p-6" onClick={() => setSeciliUrun(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white max-w-3xl w-full rounded-[4rem] p-16 relative" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSeciliUrun(null)} className="absolute top-10 right-10 text-slate-300 hover:text-slate-900 transition"><X size={40}/></button>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="bg-slate-50 aspect-square rounded-[3rem] flex items-center justify-center text-blue-600 shadow-inner">
                  <Monitor size={120} strokeWidth={1} />
                </div>
                <div>
                  <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 italic">{seciliUrun?.marka} • {seciliUrun.kat}</p>
                  <h3 className="text-5xl font-black mb-8 leading-tight tracking-tighter">{seciliUrun.ad}</h3>
                  <p className="text-slate-500 text-lg font-medium mb-10 leading-relaxed italic">{seciliUrun.detay}</p>
                  <div className="text-4xl font-black mb-10">{seciliUrun.fiyat} <span className="text-sm font-bold text-slate-400 italic">+ KDV</span></div>
                  <button className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black hover:bg-blue-600 transition shadow-2xl">TEKLİF LİSTESİNE EKLE</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-20 text-center border-t border-slate-50">
        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 italic">© 2025 TEKNO CCS • PROFESSIONAL COMMUNICATIONS SOLUTIONS</p>
      </footer>
    </div>
  );
}
