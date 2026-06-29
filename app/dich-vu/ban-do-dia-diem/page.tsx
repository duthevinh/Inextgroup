import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Search, Zap, Users, Tag, Calendar, ArrowRight, Check, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bản Đồ Số Địa Điểm & Dịch Vụ – Quét Quanh Đây",
  description: "Nền tảng bản đồ số và danh bạ số địa phương, số hóa toàn bộ địa điểm, cửa hàng, dịch vụ tại Cà Mau. Tìm kiếm theo bán kính, cập nhật thời gian thực.",
};

const categories = [
  { icon: "🍜", label: "Ăn uống" },
  { icon: "🛍️", label: "Mua sắm" },
  { icon: "💆", label: "Làm đẹp & Spa" },
  { icon: "🏥", label: "Y tế" },
  { icon: "🏨", label: "Lưu trú" },
  { icon: "🎓", label: "Giáo dục" },
  { icon: "🔧", label: "Dịch vụ" },
  { icon: "🚗", label: "Ô tô – Xe máy" },
];

const features = [
  { icon: Search, title: "Tìm kiếm theo bán kính & danh mục", desc: "Xác định vị trí người dùng, tự động hiển thị các địa điểm phù hợp trong phạm vi bán kính tùy chọn — từ 500m đến toàn tỉnh.", color: "#0095F5" },
  { icon: Zap, title: "Cập nhật thời gian thực", desc: "Thông tin địa điểm, giờ mở cửa, ưu đãi và sự kiện luôn được cập nhật tức thì, đảm bảo dữ liệu chính xác nhất.", color: "#FFB300" },
  { icon: Tag, title: "Ưu đãi & Khuyến mãi", desc: "Người dùng nhận được ưu đãi độc quyền từ hàng trăm đối tác tham gia — tiết kiệm chi tiêu mỗi ngày chỉ trong 1 lần tra cứu.", color: "#00D4C8" },
  { icon: Calendar, title: "Sự kiện địa phương", desc: "Không bỏ lỡ bất kỳ sự kiện nào quanh bạn — lễ hội, hội chợ, chương trình khuyến mãi đều hiển thị theo thời gian thực.", color: "#A764F5" },
  { icon: Users, title: "Cộng đồng đánh giá", desc: "Người dùng chia sẻ trải nghiệm, đánh giá và gợi ý địa điểm — giúp cộng đồng tìm được nơi tốt nhất.", color: "#0095F5" },
  { icon: MapPin, title: "Số hóa toàn tỉnh Cà Mau", desc: "Toàn bộ địa điểm trên địa bàn tỉnh Cà Mau được số hóa và đưa lên nền tảng — từ trung tâm đến vùng ven.", color: "#FFB300" },
];

const howItWorks = [
  { step: 1, title: "Tải ứng dụng", desc: "Tải Quét Quanh Đây trên Android hoặc iOS, hoặc truy cập website — miễn phí hoàn toàn.", color: "#0095F5" },
  { step: 2, title: "Cho phép vị trí", desc: "Bật định vị để nền tảng tự động hiển thị địa điểm và ưu đãi ngay xung quanh bạn.", color: "#FFB300" },
  { step: 3, title: "Tìm kiếm & khám phá", desc: "Chọn danh mục, đặt bán kính và tìm ngay địa điểm phù hợp. Lọc theo đánh giá, giờ mở cửa, ưu đãi.", color: "#00D4C8" },
  { step: 4, title: "Nhận ưu đãi", desc: "Xuất trình thẻ VIP hoặc quét mã QR tại địa điểm để nhận ưu đãi độc quyền từ đối tác.", color: "#A764F5" },
];

const forBusiness = [
  "Lên bản đồ số, người dùng dễ dàng tìm thấy cơ sở của bạn",
  "Đăng ưu đãi và sự kiện thu hút khách mới",
  "Tiếp cận hàng nghìn người dùng địa phương mỗi ngày",
  "Hiển thị thông tin chính xác: giờ mở cửa, số điện thoại, địa chỉ",
  "Nhận đánh giá từ khách hàng thực, xây dựng uy tín",
  "Tham gia chương trình đối tác, nhận hỗ trợ marketing",
];

export default function BanDoDiaDiemPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#050912" }}>

        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.1) 0%, rgba(0,212,200,0.05) 50%, transparent 100%)" }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "rgba(0,149,245,0.06)", filter: "blur(100px)" }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(0,212,200,0.04)", filter: "blur(80px)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
                  style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.25)", color: "#0095F5" }}>
                  <MapPin size={12} /> Hệ sinh thái Quét Quanh Đây
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Bản Đồ Số<br />
                  <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Địa Điểm & Dịch Vụ
                  </span>
                </h1>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(232,238,255,0.7)" }}>
                  Nền tảng bản đồ số và danh bạ số địa phương, được xây dựng nhằm số hóa thông tin đời sống, kinh doanh và dịch vụ trên địa bàn tỉnh Cà Mau. Người dân và du khách dễ dàng tra cứu địa điểm, tìm kiếm doanh nghiệp, cửa hàng và dịch vụ một cách nhanh chóng, chính xác.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <a href="https://quetquanhday.com" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 24px rgba(0,149,245,0.35)" }}>
                    Khám phá ngay <ArrowRight size={17} />
                  </a>
                  <Link href="/lien-he"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(232,238,255,0.8)" }}>
                    Đăng ký địa điểm miễn phí
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4">
                  {["Android", "iOS", "Website"].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm" style={{ color: "rgba(232,238,255,0.6)" }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: "#00D4C8" }} />
                      {p}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(232,238,255,0.6)" }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: "#FFB300" }} />
                    Miễn phí
                  </div>
                </div>
              </div>

              {/* App screenshots */}
              <div className="relative flex gap-4 items-stretch">
                <div className="absolute -inset-6 rounded-3xl" style={{ background: "rgba(0,149,245,0.06)", filter: "blur(50px)" }} />
                <div className="relative rounded-2xl overflow-hidden flex-1" style={{ border: "1px solid rgba(0,149,245,0.2)", boxShadow: "0 0 40px rgba(0,149,245,0.12)" }}>
                  <Image src="/images/map-platform.png" alt="Quét Quanh Đây bản đồ số Cà Mau" width={500} height={300} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,9,18,0.55) 0%, transparent 50%)" }} />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(0,212,200,0.15)", border: "1px solid rgba(0,212,200,0.3)", color: "#00D4C8" }}>
                      ● quetquanhday.com
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(0,149,245,0.15)", border: "1px solid rgba(0,149,245,0.3)", color: "#0095F5" }}>
                      3.000+ địa điểm
                    </span>
                  </div>
                </div>
                <div className="relative w-36 shrink-0 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,149,245,0.15)", boxShadow: "0 0 24px rgba(0,149,245,0.1)" }}>
                  <Image src="/images/p07_img4.png" alt="Giao diện app Quét Quanh Đây" width={144} height={256} className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APP SCREENSHOTS GALLERY */}
        <section className="py-14 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-wider font-bold mb-2" style={{ color: "#0095F5" }}>Giao diện thực tế</p>
              <h2 className="text-2xl font-black text-white">Ứng dụng Quét Quanh Đây</h2>
            </div>
            <div className="flex gap-4 justify-center items-end flex-wrap">
              {[
                { src: "/images/p07_img4.png", alt: "Tìm địa điểm theo bán kính" },
                { src: "/images/p07_img3.png", alt: "Danh sách địa điểm quanh đây" },
                { src: "/images/p07_img2.png", alt: "Chi tiết địa điểm và ưu đãi" },
              ].map((img) => (
                <div key={img.src} className="w-44 rounded-2xl overflow-hidden shadow-2xl"
                  style={{ border: "1px solid rgba(0,149,245,0.15)", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}>
                  <Image src={img.src} alt={img.alt} width={176} height={312} className="w-full object-cover object-top" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="py-16 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black text-white mb-2">Danh mục địa điểm</h2>
              <p style={{ color: "rgba(232,238,255,0.5)" }}>Toàn bộ đời sống địa phương trên một nền tảng</p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {categories.map((cat) => (
                <div key={cat.label} className="text-center p-4 rounded-2xl transition-all hover:-translate-y-1 cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <p className="text-xs font-medium" style={{ color: "rgba(232,238,255,0.65)" }}>{cat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "rgba(0,149,245,0.02)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.2)", color: "#0095F5" }}>
                Tính năng nổi bật
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white">
                Mọi thứ bạn cần —{" "}
                <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  trong một nền tảng
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
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

        {/* HOW IT WORKS */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-2">Cách sử dụng</h2>
              <p style={{ color: "rgba(232,238,255,0.5)" }}>4 bước đơn giản — bắt đầu ngay hôm nay</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, i) => (
                <div key={step.step} className="relative text-center">
                  {i < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-50%] h-px" style={{ background: `linear-gradient(90deg, ${step.color}40, transparent)` }} />
                  )}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-black mx-auto mb-4"
                    style={{ background: step.color, boxShadow: `0 0 24px ${step.color}50` }}>
                    {step.step}
                  </div>
                  <h3 className="font-black text-white mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,255,0.55)" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOR BUSINESS */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
                  style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.2)", color: "#FFB300" }}>
                  Dành cho doanh nghiệp
                </div>
                <h2 className="text-3xl font-black text-white mb-5">
                  Đưa cơ sở của bạn<br />
                  <span style={{ color: "#FFB300" }}>lên bản đồ số</span>
                </h2>
                <p className="leading-relaxed mb-6" style={{ color: "rgba(232,238,255,0.65)" }}>
                  Hàng nghìn người dân Cà Mau tra cứu địa điểm mỗi ngày trên Quét Quanh Đây. Đăng ký miễn phí để cơ sở của bạn xuất hiện ngay trước mắt khách hàng tiềm năng.
                </p>
                <ul className="space-y-3 mb-8">
                  {forBusiness.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(232,238,255,0.75)" }}>
                      <Check size={16} className="shrink-0 mt-0.5" style={{ color: "#00D4C8" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/lien-he"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #FFB300 0%, #FF8C00 100%)", color: "#050912", boxShadow: "0 0 24px rgba(255,179,0,0.3)" }}>
                  Đăng ký địa điểm miễn phí <ArrowRight size={17} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3.000+", label: "Địa điểm đã số hóa", color: "#0095F5" },
                  { value: "8+", label: "Danh mục chính", color: "#FFB300" },
                  { value: "Miễn phí", label: "Đăng ký cơ bản", color: "#00D4C8" },
                  { value: "24/7", label: "Hiển thị không ngừng", color: "#A764F5" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl text-center"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="text-2xl font-black mb-1" style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}50` }}>
                      {stat.value}
                    </div>
                    <div className="text-xs" style={{ color: "rgba(232,238,255,0.5)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.07) 0%, rgba(0,212,200,0.04) 100%)" }} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">Bắt đầu khám phá Cà Mau số</h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(232,238,255,0.6)" }}>Tải ứng dụng miễn phí hoặc truy cập trình duyệt — không cần đăng ký để bắt đầu</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://quetquanhday.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 30px rgba(0,149,245,0.3)" }}>
                Truy cập quetquanhday.com <ArrowRight size={18} />
              </a>
              <Link href="/dich-vu/the-vip"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: "1px solid rgba(255,179,0,0.3)", color: "#FFB300" }}>
                Tìm hiểu Thẻ VIP →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
