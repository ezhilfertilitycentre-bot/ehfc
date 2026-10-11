# PRODUCTION DEPLOYMENT & HOSTING GUIDE

**Project:** Ezhil Hospital & Fertility Centre  
**Technology Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router v7  
**Build Target:** Single Page Application (SPA) Static Production Bundle  

---

## 1. PRODUCTION BUILD COMMANDS

To generate the optimized production bundle, run:

```bash
npm run build
```

This compiles TypeScript definitions (`tsc -b`) and bundles static HTML, CSS, JavaScript, and assets into the `dist/` folder.

---

## 2. SPA ROUTE REWRITE CONFIGURATION

Since this website utilizes client-side routing (`react-router-dom`), all non-file server requests must be rewritten to `/index.html` to prevent 404 errors when users refresh or directly access internal pages (e.g. `/services` or `/about`).

### A. Netlify Deployment
Create `public/_redirects` before build:
```text
/*    /index.html   200
```

### B. Vercel Deployment
Create `vercel.json` in root:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### C. Hostinger / cPanel (Apache Web Server)
Create `.htaccess` inside `dist/` or `public_html/`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 3. DOMAIN & DNS CONFIGURATION

1. **A Records:** Point domain `@` to hosting provider IP address.
2. **CNAME Record:** Point `www` to production host target.
3. **SSL Certificate:** Enable free Let's Encrypt / Auto-SSL certificate for HTTPS security.

---

## 4. POST-DEPLOYMENT VERIFICATION CHECKLIST

- [ ] Verify all 9 URLs load directly on refresh (`/`, `/about`, `/services`, `/causes-of-infertility`, `/fertility-evaluation`, `/endometriosis-infertility`, `/cosmetic-gynaecology`, `/sexual-medicine`, `/contact`).
- [ ] Test 404 page by entering invalid URL `/random-test-page`.
- [ ] Verify click-to-call links trigger telephone dialer (`tel:8056984522` and `tel:9442497622`).
- [ ] Verify WhatsApp button opens pre-filled enquiry message (`wa.me/918056984522`).
- [ ] Test mobile navigation menu drawer on 360px and 390px viewports.
- [ ] Confirm absence of any legacy AAKASH branding or standalone Doctors page.
