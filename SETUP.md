# ProSoft Hub - Quick Setup Guide

## 🎯 Project Overview

ProSoft Hub egy professzionális sportszóra fogadási eszközök platform, amely AI-alapú funkciókat és VIP tippeket nyújt.

### Főbb Funkciók

- 🔐 **Biztonságos Authentikáció** - Supabase Auth
- 💳 **Stripe Fizetési Rendszer** - VIP előfizetések
- 🤖 **AI Prompt Generátor** - Professzionális promptok
- 📊 **Arbitrage Kalkulátor** - Profit optimalizálás
- 👑 **VIP Tippek** - Exkluzív elemzések
- 🛠️ **Admin Panel** - Teljes rendszer irányítás
- 📱 **Reszponzív Design** - Minden eszközön működik

## 🚀 Gyors Indítás

### 1. Repository Klónozása

```bash
git clone https://github.com/dailyatti/prosccerbet03.git
cd prosccerbet03
```

### 2. Függőségek Telepítése

```bash
npm install
```

### 3. Környezeti Változók Beállítása

Hozz létre egy `.env.local` fájlt:

```env
VITE_SUPABASE_URL=https://yrjkfpmcvdwbrgkgqgcwi.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyamtmcG1jdmR3YnJna3FnY3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyOTU2NTgsImV4cCI6MjA2ODg3MTY1OH0.1q1z1_0kD_ijRTM8YKH6_FgSs2lgWw5mUj6q8FNwWCk
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_STRIPE_PUBLISHABLE_KEY_TEST=your_stripe_test_publishable_key
VITE_APP_NAME=ProSoft Hub
VITE_APP_VERSION=1.0.0
```

### 4. Fejlesztői Szerver Indítása

```bash
npm run dev
```

A projekt elérhető lesz: `http://localhost:5173`

## 🔧 Konfiguráció

### Supabase Beállítás

1. **Projekt URL**: `https://yrjkfpmcvdwbrgkgqgcwi.supabase.co`
2. **Anon Key**: A fenti kulcs már be van állítva
3. **Migrations**: Futtasd le a `supabase/migrations/` mappában lévő SQL fájlokat

### Stripe Beállítás

1. Hozz létre egy Stripe fiókot
2. Készítsd el a termékeket a Stripe dashboard-ban
3. Frissítsd a `src/stripe-config.ts` fájlban a price ID-kat

## 📁 Projekt Struktúra

```
src/
├── components/          # React komponensek
│   ├── Admin/          # Admin panel
│   ├── Auth/           # Bejelentkezés/Regisztráció
│   ├── Dashboard/      # Főoldal
│   ├── Tools/          # Eszközök (AI, Arbitrage)
│   └── UI/             # Általános UI komponensek
├── contexts/           # React Context-ek
├── lib/               # Segédfüggvények
├── types/             # TypeScript típusok
└── main.tsx           # Alkalmazás belépési pont
```

## 🛡️ Biztonság

- ✅ Supabase RLS (Row Level Security)
- ✅ Environment változók védelme
- ✅ Input validáció
- ✅ CORS konfiguráció
- ✅ XSS védelem

## 🚀 Deployment

### Netlify (Ajánlott)

1. Csatlakozd a GitHub repository-t a Netlify-hez
2. Állítsd be a build parancsot: `npm run build`
3. Állítsd be a publish könyvtárat: `dist`
4. Add hozzá a környezeti változókat

### Vercel

```bash
npm i -g vercel
vercel
```

## 🔍 Hibaelhárítás

### Gyakori Problémák

1. **"Supabase not configured"**
   - Ellenőrizd a `.env.local` fájlt
   - Indítsd újra a dev szervert

2. **Build hibák**
   - Ellenőrizd a Node.js verziót (18+ szükséges)
   - Futtasd: `npm run type-check`

3. **Import hibák**
   - Futtasd: `npm install`
   - Ellenőrizd a TypeScript konfigurációt

## 📞 Támogatás

- 📖 [Teljes Dokumentáció](README.md)
- 🚀 [Deployment Útmutató](DEPLOYMENT.md)
- 🔧 [Supabase Dokumentáció](https://supabase.com/docs)
- 💳 [Stripe Dokumentáció](https://stripe.com/docs)

## 🎉 Köszönjük!

A ProSoft Hub platform most már készen áll a használatra! 

**Következő lépések:**
1. Állítsd be a Stripe kulcsokat
2. Futtasd le a Supabase migrációkat
3. Deploy-old a Netlify-re
4. Élvezd a professzionális eszközöket! 🚀 