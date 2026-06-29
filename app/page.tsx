import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, CreditCard, Home, Globe, Briefcase, Plane,
  ArrowRight, ChevronDown, Check, Zap, Users, TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CounterSection from "@/components/CounterSection";
import PricingCards from "@/components/PricingCards";
import TestimonialsSection from "@/components/TestimonialsSection";
import { company } from "@/data/company";
import { ecosystem } from "@/data/products";

export const metadata: Metadata = {
  title: "INEXT GROUP – Kết nối mọi giá trị quanh bạn",
  description:
    "INEXT GROUP – Hệ sinh thái số địa phương tại Cà Mau: bản đồ số, thẻ VIP NFC, bất động sản, thiết kế website, việc làm, du học.",
};

const ecosystemIcons: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
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

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ background: "#050912" }}>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-camau.png"
              alt="Mũi Cà Mau"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(5,9,18,0.75) 0%, rgba(5,9,18,0.5) 40%, rgba(5,9,18,0.85) 80%, rgba(5,9,18,1) 100%)",
              }}
            />
          </div>

          <div
            className="absolute top-20 left-10 w-80 h-80 rounded-full pointer-events-none animate-blob"
            style={{ background: "rgba(0,149,245,0.08)", filter: "blur(80px)" }}
          />
          <div
            className="absolute bottom-32 right-16 w-64 h-64 rounded-full pointer-events-none animate-blob"
            style={{ background: "rgba(255,179,0,0.07)", filter: "blur(80px)", animationDelay: "3s" }}
          />

          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  style={{ background: "rgba(0,149,245,0.12)", border: "1px solid rgba(0,149,245,0.25)", color: "#0095F5" }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00D4C8", boxShadow: "0 0 8px #00D4C8" }} />
                  Đang hoạt động tại Cà Mau · Mở rộng toàn quốc
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                  Kết nối{" "}
                  <span className="gradient-text">mọi giá trị</span>
                  <br />
                  <span style={{ color: "#FFB300" }} className="text-glow-amber">quanh bạn</span>
                </h1>

                <p className="text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(232,238,255,0.75)" }}>
                  {company.about}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link
                    href="/san-pham"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-white transition-all duration-200 hover:opacity-90 hover:scale-105 cursor-pointer"
                    style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 30px rgba(0,149,245,0.4)" }}
                  >
                    <Zap size={18} /> Khám phá hệ sinh thái
                  </Link>
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-white/10 cursor-pointer"
                    style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(232,238,255,0.85)" }}
                  >
                    Liên hệ ngay <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: MapPin, val: "3.000+", label: "Địa điểm", color: "#0095F5" },
                    { icon: Users, val: "6", label: "Dịch vụ", color: "#FFB300" },
                    { icon: TrendingUp, val: "3 tầng", label: "Đối tác", color: "#00D4C8" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <s.icon size={16} style={{ color: s.color }} />
                      <span className="font-bold text-white text-sm">{s.val}</span>
                      <span className="text-xs" style={{ color: "rgba(232,238,255,0.5)" }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glass info card */}
              <div className="lg:col-span-5 hidden lg:block">
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white"
                      style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", boxShadow: "0 0 20px rgba(0,149,245,0.3)" }}
                    >
                      IN
                    </div>
                    <div>
                      <div className="font-bold text-white">{company.name}</div>
                      <div className="text-xs" style={{ color: "#FFB300" }}>{company.tagline}</div>
                    </div>
                    <div
                      className="ml-auto text-xs px-2 py-1 rounded-full font-medium"
                      style={{ background: "rgba(0,212,200,0.12)", color: "#00D4C8", border: "1px solid rgba(0,212,200,0.2)" }}
                    >
                      ● Live
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: "Đại diện pháp luật", value: `${company.ceo} — Founder & CEO` },
                      { label: "MST", value: company.taxCode },
                      { label: "Website", value: company.website },
                      { label: "Trụ sở", value: company.address },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-3 text-sm">
                        <Check size={14} className="shrink-0 mt-0.5" style={{ color: "#0095F5" }} />
                        <div>
                          <span style={{ color: "rgba(232,238,255,0.45)" }}>{item.label}: </span>
                          <span style={{ color: "rgba(232,238,255,0.85)" }}>{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    {company.values.map((v) => (
                      <span
                        key={v}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.2)", color: "#0095F5" }}
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40 animate-bounce">
            <ChevronDown size={24} className="text-white" />
          </div>
        </section>

        {/* STATS */}
        <CounterSection />

        {/* ECOSYSTEM */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "rgba(0,149,245,0.04)", filter: "blur(100px)" }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.2)", color: "#FFB300" }}
              >
                Hệ sinh thái số
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
                6 Dịch vụ <span className="gradient-text">cốt lõi</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(232,238,255,0.55)" }}>
                Tất cả kết nối trong một nền tảng thống nhất — không phải ứng dụng đơn lẻ
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ecosystem.map((service, idx) => {
                const Icon = ecosystemIcons[service.icon] || MapPin;
                const col = serviceColors[idx % serviceColors.length];
                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group rounded-2xl p-6 flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: col.bg, border: `1px solid ${col.border}` }}
                      >
                        <Icon size={22} style={{ color: col.icon }} />
                      </div>
                      {service.badge && (
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ background: "rgba(255,179,0,0.12)", color: "#FFB300", border: "1px solid rgba(255,179,0,0.2)" }}
                        >
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-base mb-2 text-white">{service.title}</h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(232,238,255,0.5)" }}>
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:gap-2" style={{ color: col.icon }}>
                      Xem chi tiết <ArrowRight size={14} />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 cursor-pointer"
                style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 30px rgba(0,149,245,0.25)" }}
              >
                Xem toàn bộ hệ sinh thái <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* MAP SHOWCASE */}
        <section className="py-20 lg:py-28 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.2)", color: "#0095F5" }}
                >
                  Nền tảng chủ lực
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-5">
                  Quét Quanh Đây —<br />
                  <span className="gradient-text">Bản đồ số địa phương</span>
                </h2>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(232,238,255,0.6)" }}>
                  Nền tảng bản đồ số kết hợp hệ sinh thái dịch vụ, đang hoạt động thực tế tại Cà Mau với hàng nghìn địa điểm được số hóa trên Android, iOS và Website.
                </p>
                <div className="space-y-3 mb-8">
                  {["Tìm kiếm theo bán kính & danh mục", "Số hóa toàn bộ tỉnh Cà Mau", "Cập nhật thời gian thực", "Tích hợp thẻ VIP NFC ưu đãi"].map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm" style={{ color: "rgba(232,238,255,0.75)" }}>
                      <Check size={16} style={{ color: "#00D4C8" }} />
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  href="/san-pham"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 20px rgba(0,149,245,0.3)" }}
                >
                  Khám phá chi tiết <ArrowRight size={16} />
                </Link>
              </div>

              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl"
                  style={{ background: "rgba(0,149,245,0.06)", filter: "blur(30px)" }}
                />
                <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,149,245,0.2)" }}>
                  <Image
                    src="/images/map-platform.png"
                    alt="Nền tảng Quét Quanh Đây"
                    width={700}
                    height={400}
                    className="w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(5,9,18,0.6) 0%, transparent 50%)" }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: "rgba(0,212,200,0.15)", border: "1px solid rgba(0,212,200,0.3)", color: "#00D4C8" }}
                    >
                      ● quetquanhday.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <PricingCards />

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* HOẠT ĐỘNG THỰC TẾ */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider font-bold mb-2" style={{ color: "#0095F5" }}>Hình ảnh thực tế</p>
              <h2 className="text-3xl font-black text-white">INEXT GROUP trên thực địa</h2>
              <p className="mt-2" style={{ color: "rgba(232,238,255,0.5)" }}>Hoạt động, sự kiện và đội ngũ INEXT GROUP tại Cà Mau</p>
            </div>
            {/* Main large photo */}
            <div className="rounded-2xl overflow-hidden relative mb-5" style={{ border: "1px solid rgba(0,149,245,0.2)", boxShadow: "0 0 40px rgba(0,149,245,0.1)" }}>
              <Image src="/images/pptx_image61.jpeg" alt="INEXT GROUP tại hội chợ triển lãm Cà Mau" width={1400} height={600} className="w-full object-cover" style={{ maxHeight: "400px" }} unoptimized />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,9,18,0.7) 0%, transparent 60%)" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-lg font-black text-white mb-1">INEXT GROUP tại hội chợ triển lãm tỉnh Cà Mau</p>
                <p className="text-sm" style={{ color: "rgba(232,238,255,0.7)" }}>Quét Quanh Đây — Cà Mau Trong Tầm Tay Bạn</p>
              </div>
            </div>
            {/* Grid of event photos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "/images/pptx_image57.jpeg", label: "Gian hàng hội chợ" },
                { src: "/images/pptx_image53.jpeg", label: "Quan chức tham quan" },
                { src: "/images/pptx_image15.jpeg", label: "Cà Phê INEXT – Trụ sở" },
                { src: "/images/pptx_image19.jpeg", label: "Văn phòng TD Global" },
              ].map((img) => (
                <div key={img.src} className="rounded-xl overflow-hidden relative group" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                  <Image src={img.src} alt={img.label} width={350} height={220} className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,9,18,0.75) 0%, transparent 60%)" }} />
                  <p className="absolute bottom-2 left-2 right-2 text-xs font-bold text-white">{img.label}</p>
                </div>
              ))}
            </div>
            {/* Second row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {[
                { src: "/images/pptx_image58.jpeg", label: "Giao lưu tại hội chợ" },
                { src: "/images/pptx_image56.jpeg", label: "Team tại triển lãm Bạc Liêu" },
                { src: "/images/pptx_image4.png", label: "Mũi Cà Mau — Điểm kết nối" },
              ].map((img) => (
                <div key={img.src} className="rounded-xl overflow-hidden relative group" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                  <Image src={img.src} alt={img.label} width={450} height={280} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,9,18,0.7) 0%, transparent 60%)" }} />
                  <p className="absolute bottom-2 left-2 right-2 text-xs font-bold text-white">{img.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.06) 0%, rgba(0,212,200,0.04) 100%)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "rgba(0,149,245,0.06)", filter: "blur(80px)" }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-5">
              Sẵn sàng đồng hành cùng{" "}
              <span className="gradient-text">INEXT GROUP</span>?
            </h2>
            <p className="text-xl mb-10" style={{ color: "rgba(232,238,255,0.6)" }}>
              Tham gia hệ sinh thái số địa phương — kết nối, phát triển và tạo ra giá trị thực sự cho cộng đồng Cà Mau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-200 hover:opacity-90 hover:scale-105 cursor-pointer"
                style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 40px rgba(0,149,245,0.4)" }}
              >
                Đăng ký đối tác miễn phí <ArrowRight size={18} />
              </Link>
              <Link
                href="/ve-chung-toi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-white/5 cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(232,238,255,0.8)" }}
              >
                Tìm hiểu về chúng tôi
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
