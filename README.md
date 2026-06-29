# INEXT GROUP – Website Chính Thức

Website giới thiệu công ty và landing page bán hàng cho sản phẩm **Quét Quanh Đây** – nền tảng bản đồ số địa phương.

## Yêu cầu hệ thống

- Node.js 18+
- npm hoặc yarn

## Chạy dự án

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Chạy production server
npm start
```

Mở trình duyệt tại [http://localhost:3000](http://localhost:3000)

## Cấu trúc thư mục

```
inext-group/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (font, metadata chung)
│   ├── globals.css             # Tailwind v4 + custom tokens
│   ├── page.tsx                # Trang chủ (/)
│   ├── san-pham/
│   │   └── page.tsx            # Trang sản phẩm (/san-pham)
│   ├── ve-chung-toi/
│   │   └── page.tsx            # Trang về chúng tôi (/ve-chung-toi)
│   └── lien-he/
│       └── page.tsx            # Trang liên hệ & tuyển dụng (/lien-he)
│
├── components/                 # Reusable components
│   ├── Header.tsx              # Sticky header + hamburger menu
│   ├── Footer.tsx              # Footer 4 cột
│   ├── CounterSection.tsx      # Animated stats counter (scroll trigger)
│   ├── PricingCards.tsx        # 3 tầng đối tác
│   └── TestimonialsSection.tsx # Testimonial cards
│
├── data/                       # Content/data layer (dễ chỉnh)
│   ├── company.ts              # Thông tin công ty, liên lạc, nav links
│   └── products.ts             # Product info, pricing tiers, testimonials, jobs
│
└── public/                     # Static assets
```

## Tech Stack

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|---------|
| Next.js | 16+ | App Router, SSR/SSG |
| Tailwind CSS | v4 | Styling (syntax `@import "tailwindcss"`) |
| Lucide React | Latest | Icons |
| TypeScript | 5+ | Type safety |
| Be Vietnam Pro | Google Fonts | Font tiếng Việt |

## Màu sắc thương hiệu

| Tên | Hex | Dùng cho |
|-----|-----|---------|
| Navy (Primary) | `#1E3A5F` | Headers, backgrounds chính |
| Orange (Accent) | `#F97316` | CTA buttons, highlights |
| Green (Success) | `#16A34A` | Check marks, success states |

## Chỉnh nội dung

- **Thông tin công ty** → `data/company.ts`
- **Sản phẩm, giá, testimonials, tuyển dụng** → `data/products.ts`
- **Copy từng trang** → `app/<page>/page.tsx`

## Form liên hệ

Form hiện tại có frontend validation. Để tích hợp backend:

1. Mở `app/lien-he/page.tsx`
2. Tìm comment `// TODO: Integrate with API / email service`
3. Thay thế bằng API call (ví dụ: EmailJS, Resend, hoặc Next.js API route)

## Deploy lên Vercel

```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Hoặc kết nối GitHub repo với [vercel.com](https://vercel.com) để tự động deploy.
