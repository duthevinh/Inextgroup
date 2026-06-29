import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Plane, Globe, GraduationCap, Users, FileText, ArrowRight, Check, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Việc Làm Nước Ngoài & Du Học – INEXT GROUP",
  description: "Kết nối người lao động, học sinh, sinh viên với các chương trình du học, thực tập và làm việc tại nước ngoài. Tư vấn miễn phí, hỗ trợ hồ sơ trọn gói.",
};

const destinations = [
  { country: "Nhật Bản", flag: "🇯🇵", programs: ["Thực tập sinh kỹ năng", "Du học tiếng Nhật", "Visa kỹ năng đặc định"], color: "#FF6B6B" },
  { country: "Hàn Quốc", flag: "🇰🇷", programs: ["Lao động EPS", "Du học tiếng Hàn", "Visa điểm số"], color: "#4ECDC4" },
  { country: "Đài Loan", flag: "🇹🇼", programs: ["Lao động xuất khẩu", "Thực tập kỹ thuật", "Khán hộ công / Chế tạo"], color: "#45B7D1" },
  { country: "Các nước khác", flag: "🌏", programs: ["Úc, Canada, Đức", "Các chương trình học bổng", "Tư vấn theo nhu cầu"], color: "#96CEB4" },
];

const services = [
  { icon: GraduationCap, title: "Tư vấn du học", desc: "Tư vấn lựa chọn chương trình học phù hợp với trình độ, ngân sách và mục tiêu nghề nghiệp của từng học viên.", color: "#0095F5" },
  { icon: Globe, title: "Xuất khẩu lao động", desc: "Kết nối người lao động Cà Mau với các đơn vị xuất khẩu lao động uy tín, đi làm việc hợp pháp tại nước ngoài.", color: "#FFB300" },
  { icon: FileText, title: "Hỗ trợ hồ sơ & thủ tục", desc: "Hướng dẫn chuẩn bị hồ sơ đầy đủ, hỗ trợ dịch thuật, công chứng và các thủ tục liên quan đến xuất cảnh.", color: "#00D4C8" },
  { icon: Users, title: "Kết nối đối tác uy tín", desc: "Làm việc với các đơn vị tư vấn và đối tác có giấy phép, uy tín — đảm bảo quyền lợi cho người lao động.", color: "#A764F5" },
  { icon: Plane, title: "Định hướng nghề nghiệp", desc: "Tư vấn định hướng chọn quốc gia, ngành nghề và chương trình phù hợp với điều kiện tài chính và năng lực.", color: "#0095F5" },
  { icon: Star, title: "Theo dõi sau xuất cảnh", desc: "Hỗ trợ kết nối và theo dõi sau khi xuất cảnh — đảm bảo người lao động/học sinh an tâm ở nước ngoài.", color: "#FFB300" },
];

const process = [
  { step: 1, title: "Tư vấn miễn phí", desc: "Gặp tư vấn viên để đánh giá hồ sơ, định hướng chương trình và quốc gia phù hợp với bạn.", color: "#0095F5" },
  { step: 2, title: "Chọn chương trình", desc: "Lựa chọn chương trình du học hoặc xuất khẩu lao động phù hợp — được tư vấn chi tiết về chi phí và điều kiện.", color: "#FFB300" },
  { step: 3, title: "Chuẩn bị hồ sơ", desc: "Hỗ trợ chuẩn bị toàn bộ hồ sơ, học tiếng, khám sức khỏe và các thủ tục cần thiết.", color: "#00D4C8" },
  { step: 4, title: "Xuất cảnh & Theo dõi", desc: "Hoàn tất thủ tục xuất cảnh và được hỗ trợ theo dõi trong suốt quá trình làm việc/học tập ở nước ngoài.", color: "#A764F5" },
];

const faqs = [
  { q: "Chi phí tư vấn là bao nhiêu?", a: "Tư vấn ban đầu hoàn toàn miễn phí. Chi phí chi tiết sẽ được thông báo rõ ràng tùy theo chương trình và quốc gia bạn chọn." },
  { q: "Tôi cần đáp ứng điều kiện gì?", a: "Tùy chương trình và quốc gia: thông thường cần đủ sức khỏe, độ tuổi phù hợp, và trong một số trường hợp cần có trình độ ngoại ngữ cơ bản. Tư vấn viên sẽ đánh giá cụ thể." },
  { q: "Thời gian chuẩn bị hồ sơ mất bao lâu?", a: "Trung bình 3–6 tháng tùy chương trình. Một số chương trình ngắn hạn có thể nhanh hơn. Cần bắt đầu sớm để kịp các kỳ tuyển chọn." },
  { q: "INEXT GROUP có phải đơn vị xuất khẩu lao động không?", a: "INEXT GROUP là đơn vị kết nối và tư vấn — hợp tác với các công ty xuất khẩu lao động có giấy phép hợp lệ để đảm bảo quyền lợi người lao động." },
];

export default function DuHocPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#050912" }}>

        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.08) 0%, rgba(167,100,245,0.06) 100%)" }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "rgba(167,100,245,0.05)", filter: "blur(100px)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
              style={{ background: "rgba(167,100,245,0.1)", border: "1px solid rgba(167,100,245,0.25)", color: "#A764F5" }}>
              <Plane size={12} /> Du học & Xuất khẩu lao động
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Việc Làm Nước Ngoài<br />
              <span style={{ background: "linear-gradient(135deg, #A764F5 0%, #0095F5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                & Du Học
              </span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: "rgba(232,238,255,0.7)" }}>
              Kết nối người lao động, học sinh, sinh viên tại Cà Mau với các chương trình du học, thực tập và làm việc tại nước ngoài qua các đơn vị tư vấn và đối tác uy tín.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Link href="/lien-he"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #A764F5 0%, #7B4FD4 100%)", boxShadow: "0 0 24px rgba(167,100,245,0.35)" }}>
                Đăng ký tư vấn miễn phí <ArrowRight size={18} />
              </Link>
              <a href="tel:0916455552"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(232,238,255,0.8)" }}>
                Gọi: 0916.455.552
              </a>
            </div>
            <p className="text-sm" style={{ color: "rgba(232,238,255,0.45)" }}>✓ Tư vấn ban đầu miễn phí · ✓ Đối tác có giấy phép · ✓ Hỗ trợ hồ sơ trọn gói</p>
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-2">Điểm đến phổ biến</h2>
              <p style={{ color: "rgba(232,238,255,0.5)" }}>Chương trình đang có ứng viên</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {destinations.map((dest) => (
                <div key={dest.country} className="p-6 rounded-2xl transition-all hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-4xl mb-3">{dest.flag}</div>
                  <h3 className="font-black text-lg text-white mb-3">{dest.country}</h3>
                  <ul className="space-y-1.5">
                    {dest.programs.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs" style={{ color: "rgba(232,238,255,0.6)" }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: dest.color }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REAL PHOTOS */}
        <section className="py-14 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: "#A764F5" }}>Học viên thực tế</p>
              <h2 className="text-2xl font-black text-white">Hình ảnh từ thực địa</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Airport group photo */}
              <div className="rounded-2xl overflow-hidden relative" style={{ border: "1px solid rgba(167,100,245,0.2)", boxShadow: "0 0 30px rgba(167,100,245,0.08)" }}>
                <Image src="/images/p12_img3.jpeg" alt="Đoàn học viên xuất cảnh du học Hàn Quốc" width={700} height={450} className="w-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,9,18,0.65) 0%, transparent 50%)" }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold text-white">Đoàn học viên xuất cảnh du học Hàn Quốc</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(232,238,255,0.6)" }}>Tư vấn bởi đối tác của INEXT GROUP</p>
                </div>
              </div>
              {/* School visit */}
              <div className="rounded-2xl overflow-hidden relative" style={{ border: "1px solid rgba(167,100,245,0.2)", boxShadow: "0 0 30px rgba(167,100,245,0.08)" }}>
                <Image src="/images/p12_img5.jpeg" alt="Tư vấn du học tại trường THPT Giá Rai, Cà Mau" width={700} height={450} className="w-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,9,18,0.65) 0%, transparent 50%)" }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold text-white">Tư vấn du học tại trường THPT Giá Rai</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(232,238,255,0.6)" }}>Cà Mau — Chương trình tư vấn học đường</p>
                </div>
              </div>
            </div>
            {/* Additional photos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { src: "/images/p12_img4.jpeg", alt: "Tư vấn du học nhóm" },
                { src: "/images/p12_img6.jpeg", alt: "Học viên trước khi xuất cảnh" },
                { src: "/images/p12_img7.jpeg", alt: "Hoạt động tư vấn du học" },
                { src: "/images/p13_img2.jpeg", alt: "INEXT GROUP tại hội chợ" },
              ].map((img) => (
                <div key={img.src} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                  <Image src={img.src} alt={img.alt} width={300} height={200} className="w-full h-32 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "rgba(167,100,245,0.02)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-2">Dịch vụ hỗ trợ</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div key={s.title} className="p-6 rounded-2xl transition-all hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                    <s.icon size={22} style={{ color: s.color }} />
                  </div>
                  <h3 className="font-black text-white mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,255,0.55)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-2">Quy trình tư vấn</h2>
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

        {/* FAQ */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-white">Câu hỏi thường gặp</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <h3 className="font-black text-white mb-2">{faq.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,255,0.6)" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(167,100,245,0.07) 0%, rgba(0,149,245,0.05) 100%)" }} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">Bắt đầu hành trình của bạn</h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(232,238,255,0.6)" }}>
              Tư vấn ban đầu hoàn toàn miễn phí — liên hệ INEXT GROUP để được hỗ trợ ngay hôm nay
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/lien-he"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #A764F5 0%, #7B4FD4 100%)", boxShadow: "0 0 30px rgba(167,100,245,0.3)" }}>
                Đăng ký tư vấn miễn phí <ArrowRight size={18} />
              </Link>
              <a href="tel:0916455552"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: "1px solid rgba(167,100,245,0.3)", color: "#A764F5" }}>
                Gọi: 0916.455.552
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
