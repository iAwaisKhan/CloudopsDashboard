# CloudOps Dashboard

> A live SaaS demo showcasing real AWS integrations — built to demonstrate cloud engineering skills.

[![Deploy Status](https://img.shields.io/github/actions/workflow/status/yourusername/cloudops-dashboard/deploy.yml?label=CI%2FCD&style=flat-square)](https://github.com/yourusername/cloudops-dashboard/actions)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-cloudops.pages.dev-orange?style=flat-square)](https://cloudops-dashboard.pages.dev)

## Live URL

**[https://cloudops-dashboard.pages.dev](https://cloudops-dashboard.pages.dev)**

---

## What it demonstrates

| Module | AWS Services | Skill signalled |
|--------|-------------|-----------------|
| S3 File Vault | S3, IAM | Presigned URLs, CORS, least-privilege IAM |
| Lambda Runner | Lambda, API Gateway, CloudWatch | Serverless execution, cold start awareness |
| EC2 Monitor | EC2, CloudWatch | Infrastructure ops, metric polling |

---

## Architecture

```
Browser (React + Vite)
    │
    ▼
Cloudflare Pages CDN          ← frontend hosting (free, global)
    │
    ▼
AWS API Gateway (HTTP API)    ← single entry point, CORS locked to CF domain
    │
    ├── Lambda: S3 handler    → S3 (presigned PUT/GET, list, delete)
    ├── Lambda: runner        → Lambda invoke + CloudWatch logs
    └── Lambda: EC2 handler   → EC2 describe/start/stop + CloudWatch metrics
```

> Architecture diagram: `docs/architecture.png` ← add draw.io export here

---

## Tech stack

**Frontend**
- React 18 + TypeScript + Vite
- Tailwind CSS (dark/light mode)
- Zustand — state management
- Recharts — metrics charts
- Framer Motion — animations

**Backend (AWS)**
- Lambda (Node.js 20) — all API logic
- API Gateway HTTP API — REST endpoints
- S3 — file storage
- EC2 + CloudWatch — compute monitoring
- IAM — scoped execution roles

**DevOps**
- GitHub Actions — CI/CD pipeline
- Cloudflare Pages — hosting + global CDN

---

## Local development

```bash
# 1. Clone
git clone https://github.com/yourusername/cloudops-dashboard
cd cloudops-dashboard

# 2. Install
npm install

# 3. Configure env (API added in Week 3)
cp .env.local.example .env.local
# Edit VITE_API_BASE_URL with your API Gateway URL

# 4. Run
npm run dev
# → http://localhost:5173
```

---

## CI/CD pipeline

Every push to `main`:
1. GitHub Actions runs `tsc` type-check
2. Runs `npm run build` (Vite bundle)
3. Deploys `dist/` to Cloudflare Pages via Wrangler

Every pull request gets a **preview URL** automatically.

### Required GitHub Secrets

| Secret | Where to get it |
|--------|----------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare Dashboard → My Profile → API Tokens |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard → right sidebar |
| `VITE_API_BASE_URL` | AWS API Gateway → Stages (added Week 3) |

---

## Security design

- AWS credentials **never** reach the browser
- S3 uploads use **presigned URLs** (15-min expiry)
- Lambda execution role uses **least-privilege IAM** policy
- API Gateway CORS locked to Cloudflare Pages domain
- No secrets in source code — all via GitHub Secrets + env vars

---

## Roadmap

- [x] Foundation + CI/CD pipeline (Week 1–2)
- [ ] S3 File Vault — Lambda + presigned URLs (Week 3–4)
- [ ] Lambda Runner — Monaco editor + log streaming (Week 5)
- [ ] EC2 Monitor — CloudWatch metrics + start/stop (Week 6)
- [ ] CloudWatch alarms + monitoring dashboard (Week 7)
- [ ] Architecture diagram + Loom demo video (Week 8)

---

Built by [Your Name](https://linkedin.com/in/yourhandle) · Fresher targeting Cloud/DevOps Engineer roles
