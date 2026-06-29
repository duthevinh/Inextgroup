import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Target, Eye, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company, cooperationForms } from "@/data/company";
import { teamMembers } from "@/data/products";

export const metadata: Metadata = {
  title: "Về chúng tôi – INEXT GROUP",
  description:
    "INEXT GROUP – công ty công nghệ tại Cà Mau, phát triển hệ sinh thái số Quét Quanh Đây.",
};

const valueIcons = ["🏘️", "🌱", "🤝", "⚡"];
const valueDescs = [
  "Hiểu sâu thị trường địa phương, phục vụ đúng nhu cầu cộng đồng.",
  "Tăng trưởng cùng đối tác, đặt lợi ích địa phương lên hàng đầu.",
  "Minh bạch, thẳng thắn trong mọi quan hệ hợp tác.",
  "Mọi giải pháp đều hướng đến kết quả thực tế, đo lường được.",
];
const valueColors = ["#0095F5", "#FFB300", "#00D4C8", "#A764F5"];

export default function VeChungToiPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#050912" }}>

        {/* HERO */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.08) 0%, rgba(0,212,200,0.04) 100%)" }} />
          <div className="absolute top-20 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(0,149,245,0.06)", filter: "blur(80px)" }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.2)", color: "#FFB300" }}>
              Câu chuyện của chúng tôi
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Về{" "}
              <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {company.name}
              </span>
            </h1>
            <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(232,238,255,0.65)" }}>
              {company.mission}
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.2)", color: "#0095F5" }}>
                  Chúng tôi là ai
                </div>
                <h2 className="text-3xl font-black text-white mb-6">Câu chuyện thành lập</h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "rgba(232,238,255,0.65)" }}>
                  <p>{company.about}</p>
                  <p>INEXT GROUP ra đời từ trăn trở của người con Cà Mau: tại sao những địa điểm ăn uống, dịch vụ, mua sắm tuyệt vời của quê hương lại chưa được nhiều người biết đến?</p>
                  <p>Năm {company.founded}, chúng tôi quyết định thay đổi điều đó. Từ một đội ngũ kỹ thuật địa phương, INEXT GROUP tự tay xây dựng từng sản phẩm và triển khai trực tiếp tại thị trường.</p>
                  <p>Chúng tôi không phải công ty tư vấn ở xa — chúng tôi <strong className="text-white">ở đây</strong>, hiểu người dùng miền Tây, không thuê ngoài và không phụ thuộc nhà thầu.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Năm thành lập", value: company.founded, color: "#0095F5" },
                  { label: "Trụ sở", value: "Cà Mau", color: "#FFB300" },
                  { label: "Dịch vụ cốt lõi", value: "6+", color: "#00D4C8" },
                  { label: "Đội ngũ", value: "Nội bộ 100%", color: "#A764F5" },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="text-2xl font-black mb-1" style={{ color: item.color, textShadow: `0 0 15px ${item.color}50` }}>
                      {item.value}
                    </div>
                    <div className="text-xs" style={{ color: "rgba(232,238,255,0.5)" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "rgba(0,149,245,0.02)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-white">
                Sứ mệnh &amp;{" "}
                <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Tầm nhìn
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(0,149,245,0.06)", border: "1px solid rgba(0,149,245,0.15)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(0,149,245,0.12)", border: "1px solid rgba(0,149,245,0.2)" }}>
                  <Target size={28} style={{ color: "#0095F5" }} />
                </div>
                <h3 className="text-xl font-black text-white mb-3">Sứ mệnh</h3>
                <p className="leading-relaxed" style={{ color: "rgba(232,238,255,0.65)" }}>{company.mission}</p>
              </div>
              <div className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,179,0,0.06)", border: "1px solid rgba(255,179,0,0.15)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(255,179,0,0.12)", border: "1px solid rgba(255,179,0,0.2)" }}>
                  <Eye size={28} style={{ color: "#FFB300" }} />
                </div>
                <h3 className="text-xl font-black text-white mb-3">Tầm nhìn</h3>
                <p className="leading-relaxed" style={{ color: "rgba(232,238,255,0.65)" }}>{company.vision}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">Giá trị cốt lõi</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {company.values.map((v, i) => (
                <div key={v} className="text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-4xl mb-3">{valueIcons[i]}</div>
                  <h3 className="font-black text-base mb-2" style={{ color: valueColors[i] }}>{v}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(232,238,255,0.5)" }}>{valueDescs[i]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVENT PHOTO */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl" style={{ background: "rgba(0,149,245,0.05)", filter: "blur(30px)" }} />
                <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Image src="/images/event-booth.jpg" alt="INEXT GROUP tại sự kiện" width={700} height={500} className="w-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,9,18,0.7) 0%, transparent 50%)" }} />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: "rgba(0,149,245,0.15)", border: "1px solid rgba(0,149,245,0.3)", color: "#0095F5" }}>
                      INEXT GROUP · Sự kiện địa phương
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ background: "rgba(0,212,200,0.1)", border: "1px solid rgba(0,212,200,0.2)", color: "#00D4C8" }}>
                  Hoạt động thực tế
                </div>
                <h2 className="text-3xl font-black text-white mb-5">
                  Đội ngũ địa phương,<br />
                  <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    kết quả thực tế
                  </span>
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(232,238,255,0.65)" }}>
                  Đội ngũ INEXT GROUP là những người am hiểu thị trường địa phương, với kinh nghiệm thực tế trong nhiều lĩnh vực như công nghệ, bản đồ số, chuyển đổi số, truyền thông, BĐS...
                </p>
                <div className="space-y-3">
                  {["Nhân sự nội bộ toàn thời gian", "Không thuê ngoài, không phụ thuộc nhà thầu", "Tiếp nhận & xử lý vấn đề nhanh chóng", "Đồng hành lâu dài cùng khách hàng"].map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm" style={{ color: "rgba(232,238,255,0.75)" }}>
                      <Check size={15} style={{ color: "#00D4C8" }} /> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "rgba(0,149,245,0.02)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-3">Đội ngũ INEXT GROUP</h2>
              <p className="max-w-2xl mx-auto" style={{ color: "rgba(232,238,255,0.5)" }}>
                Am hiểu thị trường địa phương · Nhân sự nội bộ toàn thời gian
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {teamMembers.map((member, i) => (
                <div key={i} className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-black"
                    style={{
                      background: i === 0 ? "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)" : "rgba(255,255,255,0.08)",
                      boxShadow: i === 0 ? "0 0 24px rgba(0,149,245,0.3)" : "none",
                    }}>
                    {member.name.split(" ").pop()?.charAt(0)}
                  </div>
                  <h3 className="font-black text-white mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: "#FFB300" }}>{member.role}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(232,238,255,0.5)" }}>{member.bio}</p>
                </div>
              ))}
              <div className="rounded-2xl p-6 text-center"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(0,149,245,0.2)" }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(0,149,245,0.08)", border: "1px dashed rgba(0,149,245,0.2)" }}>
                  <span className="text-3xl" style={{ color: "#0095F5" }}>+</span>
                </div>
                <h3 className="font-semibold mb-1" style={{ color: "rgba(232,238,255,0.4)" }}>Vị trí đang tuyển</h3>
                <p className="text-xs mb-3" style={{ color: "rgba(232,238,255,0.35)" }}>Bạn có thể là thành viên tiếp theo</p>
                <Link href="/lien-he" className="text-sm font-bold" style={{ color: "#0095F5" }}>Ứng tuyển ngay →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* COOPERATION */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.2)", color: "#FFB300" }}>
                Hợp tác cùng chúng tôi
              </div>
              <h2 className="text-3xl font-black text-white">INEXT GROUP sẵn sàng hợp tác</h2>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="text-center mb-8" style={{ color: "rgba(232,238,255,0.6)" }}>
                Chúng tôi tìm kiếm các đối tác cùng chí hướng — doanh nghiệp, tổ chức và cá nhân muốn đồng hành trong hành trình số hóa đời sống địa phương tại Cà Mau và các tỉnh miền Tây.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {cooperationForms.map((form, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: "rgba(0,149,245,0.06)", border: "1px solid rgba(0,149,245,0.12)" }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-black"
                      style={{ background: "rgba(0,149,245,0.3)", border: "1px solid rgba(0,149,245,0.4)" }}>
                      {i + 1}
                    </div>
                    <p className="text-sm font-medium" style={{ color: "rgba(232,238,255,0.8)" }}>{form}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link href="/lien-he" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 20px rgba(0,149,245,0.25)" }}>
                  Liên hệ trao đổi hợp tác <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="py-16 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.2)" }}>
              <MapPin size={28} style={{ color: "#0095F5" }} />
            </div>
            <h3 className="font-black text-xl text-white mb-2">{company.fullName}</h3>
            <p className="text-lg mb-6" style={{ color: "rgba(232,238,255,0.6)" }}>{company.address}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${company.phone.replace(/\./g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 cursor-pointer"
                style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)" }}>
                Gọi: {company.phone}
              </a>
              <Link href="/lien-he"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(232,238,255,0.75)" }}>
                Gửi tin nhắn <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
