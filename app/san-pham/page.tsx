import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, CreditCard, Home, Globe, Briefcase, Plane, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";
import { ecosystem, product } from "@/data/products";

export const metadata: Metadata = {
  title: "Hệ sinh thái – INEXT GROUP",
  description:
    "Quét Quanh Đây – hệ sinh thái số địa phương: bản đồ số, thẻ VIP NFC, bất động sản, thiết kế website, việc làm, du học tại Cà Mau.",
};

const serviceIcons: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
  MapPin, CreditCard, Home, Globe, Briefcase, Plane,
};

const serviceColors = [
  { bg: "rgba(0,149,245,0.12)", border: "rgba(0,149,245,0.25)", icon: "#0095F5" },
  { bg: "rgba(255,179,0,0.12)", border: "rgba(255,179,0,0.25)", icon: "#FFB300" },
  { bg: "rgba(0,212,200,0.12)", border: "rgba(0,212,200,0.25)", icon: "#00D4C8" },
  { bg: "rgba(167,100,245,0.12)", border: "rgba(167,100,245,0.25)", icon: "#A764F5" },
  { bg: "rgba(255,100,130,0.12)", border: "rgba(255,100,130,0.25)", icon: "#FF6482" },
  { bg: "rgba(0,212,200,0.12)", border: "rgba(0,212,200,0.25)", icon: "#00D4C8" },
];

export default function SanPhamPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#050912" }}>

        {/* HERO */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.1) 0%, rgba(0,212,200,0.05) 100%)" }} />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "rgba(0,149,245,0.07)", filter: "blur(100px)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.2)", color: "#FFB300" }}>
              Hệ sinh thái số địa phương
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Quét Quanh Đây
              </span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: "rgba(232,238,255,0.65)" }}>
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lien-he"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 cursor-pointer"
                style={{ background: "linear-gradient(135deg, #FFB300 0%, #FF8C00 100%)", color: "#050912", boxShadow: "0 0 30px rgba(255,179,0,0.3)" }}>
                Đăng ký đối tác ngay <ArrowRight size={18} />
              </Link>
              <a href="https://quetquanhday.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(232,238,255,0.8)" }}>
                Truy cập quetquanhday.com
              </a>
            </div>
          </div>
        </section>

        {/* PLATFORM SHOWCASE */}
        <section className="py-16 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Map screenshot */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl" style={{ background: "rgba(0,149,245,0.05)", filter: "blur(30px)" }} />
                <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,149,245,0.2)" }}>
                  <Image src="/images/map-platform.png" alt="Quét Quanh Đây platform" width={700} height={420} className="w-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,9,18,0.6) 0%, transparent 40%)" }} />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: "rgba(0,212,200,0.15)", border: "1px solid rgba(0,212,200,0.3)", color: "#00D4C8" }}>
                      ● Live · quetquanhday.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div>
                <h2 className="text-3xl font-black text-white mb-5">
                  Nền tảng công nghệ<br />
                  <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    phát triển riêng
                  </span>
                </h2>
                <p className="leading-relaxed mb-6" style={{ color: "rgba(232,238,255,0.65)" }}>
                  Quét Quanh Đây hoạt động trên cả trình duyệt web và ứng dụng di động (Android &amp; iOS), giúp người dùng khám phá mọi địa điểm, ưu đãi và dịch vụ ngay xung quanh.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "rgba(232,238,255,0.75)" }}>
                      <Check size={15} style={{ color: "#FFB300" }} />
                      {f.title}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  {["Android", "iOS", "Website"].map((p) => (
                    <div key={p} className="px-4 py-2 rounded-xl text-xs font-bold text-white"
                      style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.2)" }}>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "rgba(0,149,245,0.02)" }} />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Cách hoạt động</h2>
              <p className="text-lg" style={{ color: "rgba(232,238,255,0.55)" }}>Chỉ 3 bước đơn giản để bắt đầu</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.howItWorks.map((step, i) => {
                const colors = ["#0095F5", "#FFB300", "#00D4C8"];
                const c = colors[i];
                return (
                  <div key={step.step} className="text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4"
                      style={{ background: c, boxShadow: `0 0 24px ${c}50` }}>
                      {step.step}
                    </div>
                    <h3 className="font-black text-lg mb-2 text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,255,0.55)" }}>{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6 SERVICES */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.2)", color: "#FFB300" }}>
                Hệ sinh thái 6 dịch vụ
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white">
                Mỗi dịch vụ —{" "}
                <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  một giải pháp thực tế
                </span>
              </h2>
            </div>

            <div className="space-y-5">
              {ecosystem.map((service, idx) => {
                const Icon = serviceIcons[service.icon] || MapPin;
                const col = serviceColors[idx % serviceColors.length];
                const isEven = idx % 2 === 0;
                return (
                  <div key={service.id} id={service.id}
                    className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center rounded-2xl p-8 transition-all duration-300 hover:-translate-y-0.5`}
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="shrink-0">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                        style={{ background: col.bg, border: `1px solid ${col.border}`, boxShadow: `0 0 30px ${col.icon}20` }}>
                        <Icon size={36} style={{ color: col.icon }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-black text-white">{service.title}</h3>
                        {service.badge && (
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                            style={{ background: "rgba(255,179,0,0.12)", color: "#FFB300", border: "1px solid rgba(255,179,0,0.2)" }}>
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="leading-relaxed mb-4" style={{ color: "rgba(232,238,255,0.6)" }}>{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "rgba(232,238,255,0.65)" }}>
                            <Check size={15} style={{ color: col.icon }} />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VIP CARD */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "rgba(255,179,0,0.02)" }} />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.2)", color: "#FFB300" }}>
                Thẻ thành viên thông minh
              </div>
              <h2 className="text-3xl font-black text-white">
                Thẻ VIP NFC —{" "}
                <span style={{ color: "#FFB300" }}>{product.vipCard.price}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-8 transition-all hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <h3 className="font-black text-lg mb-4 text-white">Quyền lợi thẻ VIP</h3>
                <ul className="space-y-3">
                  {product.vipCard.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(232,238,255,0.7)" }}>
                      <Check size={16} className="shrink-0 mt-0.5" style={{ color: "#00D4C8" }} />{b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-8 transition-all hover:-translate-y-1"
                style={{ background: "rgba(255,179,0,0.06)", border: "1px solid rgba(255,179,0,0.15)" }}>
                <h3 className="font-black text-lg mb-4 text-white">Cơ chế hoa hồng</h3>
                <div className="text-4xl font-black mb-2" style={{ color: "#FFB300", textShadow: "0 0 20px rgba(255,179,0,0.4)" }}>
                  {product.commission}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(232,238,255,0.6)" }}>
                  Mỗi thẻ VIP bạn giới thiệu thành công, bạn nhận ngay hoa hồng. Không giới hạn số lượng thẻ — thu nhập không giới hạn.
                </p>
                <div className="p-3 rounded-xl text-sm font-medium"
                  style={{ background: "rgba(255,179,0,0.08)", color: "#FFB300", border: "1px solid rgba(255,179,0,0.15)" }}>
                  Ví dụ: Bán 10 thẻ/tháng = +1.000.000đ thu nhập thêm
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <PricingCards />

        {/* CTA */}
        <section className="py-20 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.07) 0%, rgba(0,212,200,0.04) 100%)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "rgba(0,149,245,0.06)", filter: "blur(80px)" }} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">Sẵn sàng tham gia hệ sinh thái?</h2>
            <p className="mb-8" style={{ color: "rgba(232,238,255,0.6)" }}>Liên hệ ngay để được tư vấn và đăng ký miễn phí</p>
            <Link href="/lien-he"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-200 hover:opacity-90 hover:scale-105 cursor-pointer"
              style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 40px rgba(0,149,245,0.35)" }}>
              Liên hệ tư vấn <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
