# Upstream Dev Portal

**PANDAWA · KCSI · Nojorono Group**

Portal internal IT Application Development Upstream, dibangun dengan React.js dan desain Glassmorphic Command Center.

---

## Tech Stack

- React 18
- CSS Modules
- IBM Plex Mono + Outfit (Google Fonts)
- Create React App (build tool)
- Netlify (hosting)

---

## Struktur Folder

```
upstream-portal/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AppCard.jsx          ← Card komponen per app
│   │   ├── AppCard.module.css
│   │   ├── HomePage.jsx         ← Halaman Overview
│   │   ├── Pages.jsx            ← WebApps, ERP, Activities pages
│   │   ├── Pages.module.css
│   │   ├── ParticleCanvas.jsx   ← Animasi background
│   │   ├── Sidebar.jsx          ← Navigasi sidebar
│   │   ├── Sidebar.module.css
│   │   ├── Topbar.jsx           ← Header + search
│   │   └── Topbar.module.css
│   ├── App.jsx                  ← Root component + routing
│   ├── App.css
│   ├── data.js                  ← Semua data apps & ERP (edit di sini)
│   ├── index.css                ← Global styles + CSS variables
│   └── index.js                 ← Entry point
├── netlify.toml                 ← Konfigurasi Netlify
├── .gitignore
└── package.json
```

---

## Cara Edit Data

Untuk menambah / mengubah app, edit file `src/data.js`:

```js
export const WEB_APPS = [
  {
    id: "nama-unik",       // ID unik, tidak boleh sama
    name: "NAMA APP",      // Nama yang tampil di card
    desc: "Deskripsi",     // Deskripsi singkat
    url: "https://...",    // URL tujuan
    host: "domain.com",    // Domain singkat (tampil di footer card)
    icon: "📊",            // Emoji icon
    color: "cyan",         // cyan | amber | green | violet | red
    badge: "prod",         // prod | dev | uat | tool | support
    cat: "prod",           // prod | dev | tool | support (untuk filter)
  },
];
```

---

## LANGKAH IMPLEMENTASI DI NETLIFY

### Prerequisites

Pastikan sudah install:
- Node.js v18 atau lebih baru → https://nodejs.org
- Git → https://git-scm.com
- Akun GitHub → https://github.com
- Akun Netlify (gratis) → https://netlify.com

---

### STEP 1 — Setup Project Lokal

```bash
# 1. Masuk ke folder project
cd upstream-portal

# 2. Install dependencies
npm install

# 3. Jalankan di local untuk test
npm start
# → Buka browser: http://localhost:3000
```

Jika tampil dengan benar di browser, lanjut ke Step 2.

---

### STEP 2 — Upload ke GitHub

```bash
# 1. Inisialisasi git repository
git init

# 2. Tambahkan semua file
git add .

# 3. Commit pertama
git commit -m "Initial commit: Upstream Dev Portal"

# 4. Buat repo baru di GitHub:
#    → Buka https://github.com/new
#    → Nama repo: upstream-dev-portal
#    → Visibility: Private (disarankan untuk internal portal)
#    → Klik "Create repository"

# 5. Hubungkan ke GitHub (ganti USERNAME dengan username GitHub kamu)
git remote add origin https://github.com/USERNAME/upstream-dev-portal.git

# 6. Push ke GitHub
git branch -M main
git push -u origin main
```

---

### STEP 3 — Deploy ke Netlify

#### Opsi A: Via Netlify Dashboard (Direkomendasikan)

1. Buka **https://app.netlify.com**
2. Login / Register (gratis)
3. Klik tombol **"Add new site"** → pilih **"Import an existing project"**
4. Pilih **"Deploy with GitHub"**
5. Authorize Netlify untuk akses GitHub
6. Cari dan pilih repo **`upstream-dev-portal`**
7. Isi konfigurasi build:

   | Setting | Value |
   |---|---|
   | Branch to deploy | `main` |
   | Base directory | *(kosongkan)* |
   | Build command | `npm run build` |
   | Publish directory | `build` |

8. Klik **"Deploy site"**
9. Tunggu ±2–3 menit sampai status **"Published"**
10. Netlify akan memberikan URL otomatis seperti:
    `https://random-name-123456.netlify.app`

#### Opsi B: Via Netlify CLI

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login ke akun Netlify
netlify login

# 3. Build project
npm run build

# 4. Deploy (preview dulu)
netlify deploy --dir=build

# 5. Deploy ke production
netlify deploy --dir=build --prod
```

---

### STEP 4 — Custom Domain (Opsional)

Jika ingin pakai domain sendiri (misal: `portal.kdk-id.com`):

1. Di Netlify dashboard → pilih site kamu
2. Klik tab **"Domain management"**
3. Klik **"Add custom domain"**
4. Masukkan domain yang diinginkan
5. Di DNS provider domain kamu, tambahkan record:

   ```
   Type : CNAME
   Name : portal (atau subdomain yang diinginkan)
   Value: random-name-123456.netlify.app
   ```

6. Tunggu propagasi DNS (biasanya 5–30 menit)
7. Netlify otomatis provisioning SSL certificate (HTTPS)

---

### STEP 5 — Auto Deploy (CI/CD)

Setelah setup selesai, setiap kali push ke GitHub akan **auto deploy** ke Netlify:

```bash
# Edit data (misal tambah app baru di src/data.js)
# Kemudian:

git add .
git commit -m "feat: tambah app XYZ"
git push origin main

# → Netlify otomatis detect push dan deploy ulang (~2 menit)
```

---

## Environment Variables (Jika Diperlukan)

Jika ke depannya ada API key atau config yang perlu disembunyikan:

1. Buat file `.env` di root project:
   ```
   REACT_APP_API_URL=https://api.example.com
   REACT_APP_VERSION=1.0.0
   ```

2. Di Netlify dashboard → **Site settings** → **Environment variables** → tambahkan variable yang sama

3. Di kode React, akses via:
   ```js
   process.env.REACT_APP_API_URL
   ```

---

## Troubleshooting

| Masalah | Solusi |
|---|---|
| `npm install` error | Pastikan Node.js ≥ 18: `node --version` |
| Build gagal di Netlify | Cek log build di Netlify dashboard |
| Halaman kosong setelah deploy | Pastikan `netlify.toml` ada di root folder |
| Routing tidak jalan | `netlify.toml` sudah include redirect rule `/* → /index.html` |
| Font tidak load | Cek koneksi internet; font dari Google Fonts |

---

## Update & Maintenance

```bash
# Cek dependency outdated
npm outdated

# Update React & dependencies
npm update

# Re-build dan test lokal
npm run build
npx serve -s build   # serve build result lokal
```

---

**Copyright © 2026 PANDAWA · KCSI · Nojorono Group**
Created by Iwan Herdian. All rights reserved.
