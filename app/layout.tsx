import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  title: {
    default: "INEXT GROUP – Kết nối mọi giá trị quanh bạn",
    template: "%s | INEXT GROUP",
  },
  description:
    "INEXT GROUP – Hệ sinh thái số địa phương tại Cà Mau: bản đồ số Quét Quanh Đây, thẻ VIP NFC, bất động sản, thiết kế website, việc làm, du học. MST: 2001384056.",
  keywords: ["INEXT GROUP", "Quét Quanh Đây", "bản đồ số", "địa phương", "Cà Mau", "thẻ VIP NFC", "thiết kế website", "việc làm"],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "INEXT GROUP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
