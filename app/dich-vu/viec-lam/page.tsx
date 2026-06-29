import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, MapPin, Search, Users, ArrowRight, Check, Building2, UserCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Việc Làm Quanh Đây – Tuyển dụng địa phương Cà Mau",
  description: "Nền tảng kết nối tuyển dụng địa phương. Doanh nghiệp đăng tin miễn phí. Người lao động tìm việc theo khu vực, ngành nghề, mức lương tại Cà Mau.",
};

const forEmployer = [
  { icon: Building2, title: "Đăng tin tuyển dụng miễn phí", desc: "Đăng tin không giới hạn, tiếp cận nguồn lao động địa phương dồi dào ngay trong hệ sinh thái Quét Quanh Đây.", color: "#0095F5" },
  { icon: MapPin, title: "Hiển thị trên bản đồ số", desc: "Vị trí doanh nghiệp hiển thị trực tiếp trên bản đồ — ứng viên biết chính xác nơi làm việc trước khi nộp hồ sơ.", color: "#FFB300" },
  { icon: Users, title: "Tiếp cận lao động địa phương", desc: "Tập trung vào nguồn nhân lực tại Cà Mau và các tỉnh lân cận — phù hợp nhất cho doanh nghiệp vừa và nhỏ.", color: "#00D4C8" },
  { icon: UserCheck, title: "Hỗ trợ từ đội ngũ INEXT GROUP", desc: "Được hỗ trợ đăng tin, tư vấn nội dung và tiếp cận ứng viên phù hợp với yêu cầu công việc.", color: "#A764F5" },
];

const forEmployee = [
  "Tìm việc theo khu vực — phường, quận, tỉnh",
  "Lọc theo ngành nghề: bán hàng, kỹ thuật, nhà hàng, văn phòng...",
  "Lọc theo mức lương mong muốn",
  "Xem vị trí doanh nghiệp trực tiếp trên bản đồ",
  "Liên hệ nhà tuyển dụng trực tiếp",
  "Không cần trung gian, không mất phí",
];

const jobCategories = [
  { icon: "🛒", label: "Bán hàng / Kinh doanh" },
  { icon: "🍽️", label: "Nhà hàng / Ăn uống" },
  { icon: "🔧", label: "Kỹ thuật / Thợ nghề" },
  { icon: "💻", label: "Công nghệ / IT" },
  { icon: "💇", label: "Làm đẹp / Spa" },
  { icon: "🏗️", label: "Xây dựng" },
  { icon: "📦", label: "Kho vận / Logistics" },
  { icon: "🎓", label: "Giáo dục / Gia sư" },
  { icon: "🏥", label: "Y tế / Chăm sóc" },
  { icon: "📊", label: "Văn phòng / Hành chính" },
  { icon: "🚗", label: "Lái xe / Vận chuyển" },
  { icon: "🌾", label: "Nông nghiệp / Thủy sản" },
];

const stats = [
  { value: "Miễn phí", label: "Đăng tin doanh nghiệp", color: "#0095F5" },
  { value: "0đ", label: "Chi phí tìm việc", color: "#FFB300" },
  { value: "Local", label: "Tập trung địa phương", color: "#00D4C8" },
  { value: "24/7", label: "Hồ sơ online mọi lúc", color: "#A764F5" },
];

export default function ViecLamPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#050912" }}>

        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.08) 0%, rgba(0,212,200,0.05) 100%)" }} />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "rgba(0,149,245,0.06)", filter: "blur(100px)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
              style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.25)", color: "#0095F5" }}>
              <Briefcase size={12} /> Tuyển dụng địa phương
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Việc Làm<br />
              <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Quanh Đây
              </span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: "rgba(232,238,255,0.7)" }}>
              Nền tảng kết nối tuyển dụng địa phương — doanh nghiệp đăng tin <strong className="text-white">miễn phí</strong>, người lao động tìm việc theo khu vực, ngành nghề và mức lương phù hợp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/lien-he"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 24px rgba(0,149,245,0.35)" }}>
                Đăng tin tuyển dụng miễn phí <ArrowRight size={18} />
              </Link>
              <a href="https://quetquanhday.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(232,238,255,0.8)" }}>
                Tìm việc ngay
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-12 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-2xl font-black mb-1" style={{ color: s.color, textShadow: `0 0 15px ${s.color}50` }}>{s.value}</div>
                  <div className="text-xs" style={{ color: "rgba(232,238,255,0.5)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOR EMPLOYER */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.2)", color: "#0095F5" }}>
                Dành cho doanh nghiệp
              </div>
              <h2 className="text-3xl font-black text-white mb-2">Tìm nhân sự phù hợp ngay tại địa phương</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {forEmployer.map((f) => (
                <div key={f.title} className="p-7 rounded-2xl transition-all hover:-translate-y-1"
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
            <div className="text-center mt-8">
              <Link href="/lien-he"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 24px rgba(0,149,245,0.3)" }}>
                Đăng tin tuyển dụng ngay <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* FOR EMPLOYEE */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "rgba(255,179,0,0.02)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
                  style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.2)", color: "#FFB300" }}>
                  Dành cho người tìm việc
                </div>
                <h2 className="text-3xl font-black text-white mb-5">
                  Tìm việc làm phù hợp<br />
                  <span style={{ color: "#FFB300" }}>ngay quanh bạn</span>
                </h2>
                <p className="leading-relaxed mb-6" style={{ color: "rgba(232,238,255,0.65)" }}>
                  Không cần đi xa, không cần qua trung gian — tìm việc làm phù hợp ngay tại địa phương, liên hệ trực tiếp nhà tuyển dụng qua Quét Quanh Đây.
                </p>
                <ul className="space-y-3">
                  {forEmployee.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(232,238,255,0.75)" }}>
                      <Check size={16} className="shrink-0 mt-0.5" style={{ color: "#FFB300" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                {/* Real job listing screenshots */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,149,245,0.2)", boxShadow: "0 0 30px rgba(0,149,245,0.08)" }}>
                    <Image src="/images/pptx_image43.png" alt="Tin tuyển dụng TD Global và INEXT GROUP" width={300} height={500} className="w-full object-cover object-top" unoptimized />
                  </div>
                  <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,179,0,0.2)", boxShadow: "0 0 30px rgba(255,179,0,0.08)" }}>
                    <Image src="/images/pptx_image44.png" alt="Chi tiết tin tuyển dụng Trưởng Phòng" width={300} height={500} className="w-full object-cover object-top" unoptimized />
                  </div>
                </div>
                <div className="rounded-2xl p-5" style={{ background: "rgba(255,179,0,0.06)", border: "1px solid rgba(255,179,0,0.15)" }}>
                  <p className="text-xs font-bold mb-3" style={{ color: "#FFB300" }}>Ngành nghề phổ biến</p>
                  <div className="grid grid-cols-2 gap-2">
                    {jobCategories.slice(0, 8).map((cat) => (
                      <div key={cat.label} className="flex items-center gap-2 p-2.5 rounded-lg text-xs"
                        style={{ background: "rgba(255,255,255,0.04)", color: "rgba(232,238,255,0.7)" }}>
                        <span>{cat.icon}</span>
                        <span>{cat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.07) 0%, rgba(0,212,200,0.04) 100%)" }} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">Kết nối ngay hôm nay</h2>
            <p className="mb-8" style={{ color: "rgba(232,238,255,0.6)" }}>Miễn phí cho cả doanh nghiệp và người tìm việc</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/lien-he"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 30px rgba(0,149,245,0.3)" }}>
                Đăng tin tuyển dụng <ArrowRight size={18} />
              </Link>
              <a href="https://quetquanhday.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(232,238,255,0.8)" }}>
                Tìm việc làm
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
