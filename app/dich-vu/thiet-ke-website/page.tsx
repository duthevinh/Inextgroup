import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Globe, Zap, Shield, Search, Smartphone, HeadphonesIcon, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thiết Kế Website Doanh Nghiệp – INEXT GROUP",
  description: "Dịch vụ thiết kế website doanh nghiệp, bán hàng, landing page tại Cà Mau. Chuẩn SEO, Responsive, tốc độ cao. Bảo hành 12 tháng, hỗ trợ trực tiếp.",
};

const packages = [
  {
    name: "Landing Page",
    price: "Liên hệ báo giá",
    priceNote: "Báo giá theo yêu cầu",
    color: "#00D4C8",
    desc: "Trang giới thiệu sản phẩm/dịch vụ tập trung vào chuyển đổi",
    features: ["1 trang thiết kế độc đáo", "Form liên hệ / Đặt hàng", "Chuẩn SEO cơ bản", "Responsive mobile", "Bàn giao trong 3–5 ngày"],
    badge: "",
  },
  {
    name: "Website Doanh Nghiệp",
    price: "6.000.000đ",
    priceNote: "Năm đầu · Tái ký 2.000.000đ/năm",
    color: "#0095F5",
    desc: "Website chuyên nghiệp đầy đủ trang cho doanh nghiệp vừa và nhỏ",
    features: ["5–10 trang thiết kế riêng", "Trang giới thiệu, dịch vụ, liên hệ", "Blog / Tin tức", "Chuẩn SEO đầy đủ", "Tốc độ tải trang cao", "Hỗ trợ kỹ thuật 12 tháng"],
    badge: "Phổ biến nhất",
  },
  {
    name: "Website Bán Hàng",
    price: "Liên hệ báo giá",
    priceNote: "Báo giá theo quy mô shop",
    color: "#FFB300",
    desc: "Hệ thống thương mại điện tử cho cửa hàng, siêu thị nhỏ",
    features: ["Quản lý sản phẩm không giới hạn", "Giỏ hàng & Thanh toán online", "Quản lý đơn hàng", "Kết nối VNPAY, MoMo, ZaloPay", "Báo cáo doanh thu", "Bảo hành 12 tháng"],
    badge: "",
  },
];

const techFeatures = [
  { icon: Search, title: "Chuẩn SEO", desc: "Tối ưu cho Google từ cấu trúc URL, meta tags đến tốc độ tải trang — giúp khách hàng tìm thấy bạn.", color: "#0095F5" },
  { icon: Smartphone, title: "Responsive toàn thiết bị", desc: "Hiển thị hoàn hảo trên điện thoại, tablet và máy tính — không mất khách hàng di động.", color: "#FFB300" },
  { icon: Zap, title: "Tốc độ cao", desc: "Tối ưu hình ảnh, cache và hosting để website tải nhanh, trải nghiệm mượt mà.", color: "#00D4C8" },
  { icon: Shield, title: "Bảo hành 12 tháng", desc: "Cam kết hỗ trợ lỗi kỹ thuật trong 12 tháng sau bàn giao — không phát sinh chi phí ẩn.", color: "#A764F5" },
  { icon: HeadphonesIcon, title: "Hỗ trợ trực tiếp tại Cà Mau", desc: "Đội ngũ INEXT GROUP ở ngay Cà Mau — gặp trực tiếp, hỗ trợ nhanh, không chờ đợi.", color: "#0095F5" },
  { icon: Globe, title: "Tích hợp Quét Quanh Đây", desc: "Website doanh nghiệp được liên kết với bản đồ số, tăng thêm kênh tiếp cận khách hàng địa phương.", color: "#FFB300" },
];

const process = [
  { step: 1, title: "Tư vấn & Khảo sát nhu cầu", desc: "Gặp trực tiếp hoặc trao đổi online để hiểu rõ yêu cầu, ngành nghề và mục tiêu website của bạn.", color: "#0095F5" },
  { step: 2, title: "Thiết kế giao diện mẫu", desc: "Đội ngũ thiết kế phác thảo giao diện theo phong cách phù hợp thương hiệu — chỉnh sửa đến khi hài lòng.", color: "#FFB300" },
  { step: 3, title: "Lập trình & Tích hợp", desc: "Triển khai code, tích hợp các tính năng, kết nối domain và hosting theo yêu cầu.", color: "#00D4C8" },
  { step: 4, title: "Kiểm tra & Bàn giao", desc: "Kiểm thử kỹ trên nhiều thiết bị, hướng dẫn sử dụng và bàn giao toàn bộ quyền quản trị.", color: "#A764F5" },
];

const whyUs = [
  "Đội ngũ nội bộ tại Cà Mau — gặp trực tiếp bất cứ lúc nào",
  "Kinh nghiệm thực tế trong nhiều lĩnh vực địa phương",
  "Thiết kế riêng từng dự án — không dùng template chung",
  "Bảo hành 12 tháng, không tính phí lỗi kỹ thuật",
  "Tích hợp hệ sinh thái Quét Quanh Đây miễn phí",
  "Hỗ trợ SEO và content ban đầu",
];

export default function ThietKeWebsitePage() {
  return (
    <>
      <Header />
      <main style={{ background: "#050912" }}>

        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.08) 0%, rgba(0,212,200,0.05) 100%)" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "rgba(0,212,200,0.05)", filter: "blur(100px)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
              style={{ background: "rgba(0,212,200,0.1)", border: "1px solid rgba(0,212,200,0.25)", color: "#00D4C8" }}>
              <Globe size={12} /> Dịch vụ thiết kế số
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Thiết Kế Website<br />
              <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Doanh Nghiệp
              </span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: "rgba(232,238,255,0.7)" }}>
              Xây dựng hình ảnh chuyên nghiệp trên môi trường số. Chuẩn SEO · Responsive · Tốc độ cao · Bảo hành 12 tháng · Hỗ trợ trực tiếp tại Cà Mau.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/lien-he"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 24px rgba(0,149,245,0.35)" }}>
                Nhận báo giá miễn phí <ArrowRight size={18} />
              </Link>
              <a href="tel:0916455552"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(232,238,255,0.8)" }}>
                Gọi: 0916.455.552
              </a>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-2">Gói dịch vụ</h2>
              <p style={{ color: "rgba(232,238,255,0.5)" }}>Phù hợp mọi quy mô — từ cá nhân đến doanh nghiệp</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className="relative rounded-2xl p-7 flex flex-col transition-all hover:-translate-y-1"
                  style={{
                    background: pkg.badge ? `linear-gradient(135deg, ${pkg.color}12 0%, ${pkg.color}08 100%)` : "rgba(255,255,255,0.03)",
                    border: pkg.badge ? `1px solid ${pkg.color}35` : "1px solid rgba(255,255,255,0.07)",
                    boxShadow: pkg.badge ? `0 0 40px ${pkg.color}15` : "none",
                  }}>
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${pkg.color} 0%, ${pkg.color}CC 100%)` }}>
                      {pkg.badge}
                    </div>
                  )}
                  <div className="mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: pkg.color }}>
                      {pkg.name}
                    </div>
                    <div className="text-2xl font-black text-white mb-0.5">{pkg.price}</div>
                    <div className="text-xs mb-2" style={{ color: pkg.color, opacity: 0.8 }}>{pkg.priceNote}</div>
                    <p className="text-sm" style={{ color: "rgba(232,238,255,0.5)" }}>{pkg.desc}</p>
                  </div>
                  <div className="w-full h-px mb-5" style={{ background: `${pkg.color}20` }} />
                  <ul className="space-y-3 flex-1 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(232,238,255,0.7)" }}>
                        <Check size={15} className="shrink-0 mt-0.5" style={{ color: pkg.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/lien-he"
                    className="block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                    style={pkg.badge
                      ? { background: `linear-gradient(135deg, ${pkg.color} 0%, ${pkg.color}CC 100%)`, color: "#fff" }
                      : { background: "rgba(255,255,255,0.06)", color: "rgba(232,238,255,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    Nhận báo giá
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SHEET IMAGE */}
        <section className="py-12 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <p className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: "#00D4C8" }}>Bảng giá chi tiết</p>
              <h2 className="text-xl font-black text-white">Minh bạch — Không phát sinh ẩn</h2>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,212,200,0.2)", boxShadow: "0 0 40px rgba(0,149,245,0.1)" }}>
              <Image src="/images/p10_img3.jpeg" alt="Bảng báo giá thiết kế website INEXT GROUP" width={900} height={1200} className="w-full object-cover" />
            </div>
            <p className="text-center text-xs mt-3" style={{ color: "rgba(232,238,255,0.35)" }}>Liên hệ để được tư vấn và nhận báo giá phù hợp với nhu cầu của bạn</p>
          </div>
        </section>

        {/* TECH FEATURES */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "rgba(0,149,245,0.02)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-2">Cam kết chất lượng</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {techFeatures.map((f) => (
                <div key={f.title} className="p-6 rounded-2xl transition-all hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${f.color}15`, border: `1px solid ${f.color}25` }}>
                    <f.icon size={22} style={{ color: f.color }} />
                  </div>
                  <h3 className="font-black text-white mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,255,0.55)" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-2">Quy trình làm việc</h2>
              <p style={{ color: "rgba(232,238,255,0.5)" }}>Minh bạch từ đầu đến cuối</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p) => (
                <div key={p.step} className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-black mx-auto mb-4"
                    style={{ background: p.color, boxShadow: `0 0 24px ${p.color}50` }}>
                    {p.step}
                  </div>
                  <h3 className="font-black text-white mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,255,0.55)" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-8 lg:p-12"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h2 className="text-2xl font-black text-white mb-8 text-center">Tại sao chọn INEXT GROUP?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(232,238,255,0.75)" }}>
                    <Check size={16} className="shrink-0 mt-0.5" style={{ color: "#00D4C8" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">Bắt đầu xây dựng website của bạn</h2>
            <p className="mb-8" style={{ color: "rgba(232,238,255,0.6)" }}>Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/lien-he"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 30px rgba(0,149,245,0.3)" }}>
                Nhận tư vấn & báo giá <ArrowRight size={18} />
              </Link>
              <a href="tel:0916455552"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: "1px solid rgba(0,149,245,0.3)", color: "#0095F5" }}>
                Gọi ngay: 0916.455.552
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
