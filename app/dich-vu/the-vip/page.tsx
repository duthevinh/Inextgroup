import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CreditCard, Zap, Shield, Store, ArrowRight, Check, Star, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thẻ VIP NFC Quét Quanh Đây – 365.000đ/năm",
  description: "Thẻ VIP ưu đãi tại đối tác: 365.000đ/năm. Danh thiếp điện tử NFC dùng mãi mãi. Đối tác chấp nhận thẻ được bán thẻ với hoa hồng 100.000đ/thẻ.",
};

const features = [
  {
    icon: Shield,
    title: "Ưu đãi VIP tại đối tác",
    badge: "365.000đ / năm",
    badgeColor: "#FFB300",
    desc: "Trả phí 365.000đ mỗi năm để kích hoạt quyền lợi VIP. Khi dùng Quét Quanh Đây, bật bộ lọc 'Địa điểm chấp nhận thẻ VIP' để tìm và nhận ưu đãi độc quyền tại hàng trăm đối tác.",
    note: "Gia hạn hàng năm để duy trì quyền lợi",
    color: "#FFB300",
  },
  {
    icon: Zap,
    title: "Danh thiếp điện tử NFC",
    badge: "Dùng mãi mãi",
    badgeColor: "#0095F5",
    desc: "Chỉ cần đưa thẻ lại gần điện thoại hỗ trợ NFC — không cần cài app, không cần quét QR. Người nhận thấy ngay thông tin, liên kết liên hệ của bạn.",
    note: "Không phụ thuộc vào việc gia hạn hàng năm",
    color: "#0095F5",
  },
];

const howItWorks = [
  { step: 1, title: "Mua thẻ VIP", desc: "Liên hệ INEXT GROUP hoặc đối tác chấp nhận thẻ gần nhất để mua thẻ với giá 365.000đ.", color: "#FFB300" },
  { step: 2, title: "Kích hoạt danh thiếp NFC", desc: "Thông tin danh thiếp của bạn được gắn vào chip NFC ngay khi nhận thẻ — dùng mãi không cần gia hạn.", color: "#0095F5" },
  { step: 3, title: "Hưởng ưu đãi tại đối tác", desc: "Dùng app Quét Quanh Đây, bật bộ lọc VIP để tìm địa điểm ưu đãi, xuất trình thẻ để được giảm giá.", color: "#00D4C8" },
  { step: 4, title: "Gia hạn hàng năm (tùy chọn)", desc: "Sau 1 năm, gia hạn 365.000đ để tiếp tục dùng ưu đãi VIP. Danh thiếp NFC vẫn hoạt động dù không gia hạn.", color: "#A764F5" },
];

const useCases = [
  { title: "Người tiêu dùng", desc: "Mua sắm, ăn uống hàng ngày với ưu đãi VIP tại hàng trăm đối tác. 365.000đ/năm hoàn vốn nhanh chỉ sau vài lần sử dụng.", icon: "🛍️" },
  { title: "Chủ hộ kinh doanh", desc: "Dùng thẻ làm danh thiếp điện tử chuyên nghiệp — 1 chạm NFC chia sẻ thông tin, gây ấn tượng với đối tác và khách hàng.", icon: "🏪" },
  { title: "Nhân viên kinh doanh", desc: "Gặp gỡ, giao lưu sự kiện — giới thiệu bản thân bằng 1 chạm NFC thay vì card giấy in sẵn.", icon: "💼" },
];

const partnerBenefits = [
  "Được hiển thị trên bộ lọc 'Địa điểm chấp nhận thẻ VIP' trong app",
  "Bán thẻ VIP cho khách hàng và nhận hoa hồng 100.000đ/thẻ",
  "Thu hút thêm tệp khách hàng là chủ thẻ VIP",
  "Tăng tương tác và lượt ghé thăm từ cộng đồng Quét Quanh Đây",
  "Được INEXT GROUP hỗ trợ truyền thông, giới thiệu đến người dùng",
];

const faqItems = [
  {
    q: "Tính năng nào dùng mãi, tính năng nào phải gia hạn?",
    a: "Danh thiếp điện tử NFC dùng mãi mãi — không phụ thuộc vào gia hạn. Tính năng ưu đãi VIP tại đối tác yêu cầu gia hạn 365.000đ/năm để duy trì. Nếu hết hạn, NFC vẫn hoạt động nhưng ưu đãi tại đối tác sẽ tạm dừng."
  },
  {
    q: "Ai được phép bán thẻ VIP?",
    a: "Chỉ các đối tác chấp nhận thẻ VIP (đã ký kết với INEXT GROUP) mới được phép bán thẻ và nhận hoa hồng 100.000đ/thẻ. Người dùng thường mua thẻ để sử dụng, không có quyền bán lại."
  },
  {
    q: "Tôi cần cài app gì để dùng NFC không?",
    a: "Không cần cài app. Chỉ cần đưa thẻ lại gần điện thoại hỗ trợ NFC là người nhận thấy ngay thông tin của bạn — hoạt động ngay trên trình duyệt điện thoại."
  },
  {
    q: "Muốn trở thành đối tác chấp nhận thẻ thì làm thế nào?",
    a: "Liên hệ INEXT GROUP để đăng ký. Sau khi xét duyệt, cơ sở của bạn sẽ xuất hiện trên bộ lọc VIP trong app và được phép bán thẻ VIP hưởng hoa hồng 100.000đ/thẻ."
  },
  {
    q: "Hiện có bao nhiêu địa điểm chấp nhận thẻ VIP?",
    a: "Hệ thống đang mở rộng liên tục. Liên hệ INEXT GROUP để nhận danh sách đối tác mới nhất tại khu vực của bạn."
  },
];

export default function TheVipPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#050912" }}>

        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,179,0,0.08) 0%, rgba(0,149,245,0.06) 100%)" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "rgba(255,179,0,0.06)", filter: "blur(100px)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
                  style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.25)", color: "#FFB300" }}>
                  <CreditCard size={12} /> Thẻ thành viên thông minh
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  Thẻ VIP<br />
                  <span style={{ background: "linear-gradient(135deg, #FFB300 0%, #FF8C00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Quét Quanh Đây
                  </span>
                </h1>

                {/* Pricing breakdown */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-4 rounded-xl" style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.25)" }}>
                    <div className="text-2xl font-black" style={{ color: "#FFB300" }}>365.000đ</div>
                    <div className="text-xs font-bold mt-0.5" style={{ color: "#FFB300", opacity: 0.8 }}>/năm</div>
                    <div className="text-xs mt-1.5" style={{ color: "rgba(232,238,255,0.55)" }}>Ưu đãi VIP tại đối tác</div>
                  </div>
                  <div className="p-4 rounded-xl" style={{ background: "rgba(0,149,245,0.08)", border: "1px solid rgba(0,149,245,0.2)" }}>
                    <div className="text-2xl font-black" style={{ color: "#0095F5" }}>∞</div>
                    <div className="text-xs font-bold mt-0.5" style={{ color: "#0095F5", opacity: 0.8 }}>Mãi mãi</div>
                    <div className="text-xs mt-1.5" style={{ color: "rgba(232,238,255,0.55)" }}>Danh thiếp NFC</div>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(232,238,255,0.7)" }}>
                  Thẻ VIP gồm <strong className="text-white">2 tính năng độc lập</strong>: danh thiếp NFC dùng mãi mãi và quyền ưu đãi VIP tại đối tác gia hạn 365.000đ/năm.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/lien-he"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold transition-all hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #FFB300 0%, #FF8C00 100%)", color: "#050912", boxShadow: "0 0 24px rgba(255,179,0,0.35)" }}>
                    Mua thẻ VIP ngay <ArrowRight size={17} />
                  </Link>
                  <Link href="#doi-tac"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(232,238,255,0.8)" }}>
                    Trở thành đối tác bán thẻ
                  </Link>
                </div>
              </div>

              {/* Card visuals */}
              <div className="flex flex-col gap-5 items-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -inset-6 rounded-full" style={{ background: "rgba(255,179,0,0.08)", filter: "blur(40px)" }} />
                  <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,179,0,0.3)", boxShadow: "0 0 40px rgba(255,179,0,0.15)" }}>
                    <Image src="/images/p08_img2.png" alt="Thẻ VIP NFC Quét Quanh Đây" width={480} height={300} className="w-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,9,18,0.5) 0%, transparent 60%)" }} />
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: "rgba(255,179,0,0.2)", border: "1px solid rgba(255,179,0,0.4)", color: "#FFB300" }}>
                        Thẻ VIP NFC · Quét Quanh Đây
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative w-full max-w-sm">
                  <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,179,0,0.15)", boxShadow: "0 0 20px rgba(255,179,0,0.08)" }}>
                    <Image src="/images/p08_img3.jpeg" alt="Mẫu danh thiếp điện tử NFC INEXT GROUP" width={480} height={300} className="w-full object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(5,9,18,0.8)", border: "1px solid rgba(0,149,245,0.4)", color: "#0095F5" }}>
                        Danh thiếp NFC · Dùng mãi mãi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2 FEATURES BREAKDOWN */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-2">2 tính năng — 2 cơ chế khác nhau</h2>
              <p style={{ color: "rgba(232,238,255,0.5)" }}>Hiểu rõ để chọn đúng và tận dụng tối đa</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="p-7 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${f.color}20` }}>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: `${f.color}15`, border: `1px solid ${f.color}25` }}>
                      <f.icon size={26} style={{ color: f.color }} />
                    </div>
                    <span className="px-3 py-1.5 rounded-full text-xs font-black shrink-0"
                      style={{ background: `${f.badgeColor}15`, border: `1px solid ${f.badgeColor}30`, color: f.badgeColor }}>
                      {f.badge}
                    </span>
                  </div>
                  <h3 className="font-black text-lg text-white mb-3">{f.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(232,238,255,0.6)" }}>{f.desc}</p>
                  <div className="flex items-center gap-2 text-xs" style={{ color: f.color }}>
                    <RefreshCw size={12} />
                    {f.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "rgba(255,179,0,0.02)" }} />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-2">Cách hoạt động</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-black mx-auto mb-4"
                    style={{ background: s.color, boxShadow: `0 0 24px ${s.color}50` }}>
                    {s.step}
                  </div>
                  <h3 className="font-black text-white mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,255,0.55)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-2">Phù hợp cho ai?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {useCases.map((uc) => (
                <div key={uc.title} className="p-6 rounded-2xl text-center transition-all hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-4xl mb-4">{uc.icon}</div>
                  <h3 className="font-black text-white mb-3">{uc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,255,0.55)" }}>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOR PARTNERS — bán thẻ hoa hồng */}
        <section id="doi-tac" className="py-20 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
                  style={{ background: "rgba(0,212,200,0.1)", border: "1px solid rgba(0,212,200,0.2)", color: "#00D4C8" }}>
                  <Store size={12} /> Dành cho đối tác chấp nhận thẻ
                </div>
                <h2 className="text-3xl font-black text-white mb-3">
                  Đối tác bán thẻ VIP<br />
                  <span style={{ color: "#00D4C8" }}>nhận hoa hồng 100.000đ/thẻ</span>
                </h2>
                <div className="p-4 rounded-xl mb-6" style={{ background: "rgba(255,179,0,0.08)", border: "1px solid rgba(255,179,0,0.15)" }}>
                  <p className="text-sm font-bold mb-1" style={{ color: "#FFB300" }}>⚠️ Lưu ý quan trọng</p>
                  <p className="text-sm" style={{ color: "rgba(232,238,255,0.65)" }}>
                    Chỉ <strong className="text-white">đối tác đã ký kết với INEXT GROUP</strong> mới được phép bán thẻ VIP và nhận hoa hồng. Người dùng thường chỉ mua để sử dụng, không có quyền bán lại.
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {partnerBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(232,238,255,0.75)" }}>
                      <Check size={16} className="shrink-0 mt-0.5" style={{ color: "#00D4C8" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/lien-he"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #00D4C8 0%, #00A89E 100%)", color: "#050912", boxShadow: "0 0 24px rgba(0,212,200,0.3)" }}>
                  Đăng ký làm đối tác chấp nhận thẻ <ArrowRight size={17} />
                </Link>
              </div>

              {/* Commission calc */}
              <div className="rounded-2xl p-8"
                style={{ background: "linear-gradient(135deg, rgba(0,212,200,0.07) 0%, rgba(0,149,245,0.05) 100%)", border: "1px solid rgba(0,212,200,0.15)" }}>
                <h3 className="font-black text-white text-center mb-6">Thu nhập từ hoa hồng bán thẻ</h3>
                <div className="text-center mb-6">
                  <div className="text-5xl font-black" style={{ color: "#00D4C8", textShadow: "0 0 25px rgba(0,212,200,0.4)" }}>100.000đ</div>
                  <div className="text-sm mt-1" style={{ color: "rgba(232,238,255,0.5)" }}>hoa hồng mỗi thẻ bán thành công</div>
                </div>
                <div className="space-y-3">
                  {[["5 thẻ/tháng", "500.000đ/tháng"], ["10 thẻ/tháng", "1.000.000đ/tháng"], ["20 thẻ/tháng", "2.000.000đ/tháng"]].map(([qty, earn]) => (
                    <div key={qty} className="flex items-center justify-between p-3 rounded-xl"
                      style={{ background: "rgba(0,212,200,0.06)", border: "1px solid rgba(0,212,200,0.12)" }}>
                      <span className="text-sm" style={{ color: "rgba(232,238,255,0.6)" }}>{qty}</span>
                      <span className="font-black text-sm" style={{ color: "#00D4C8" }}>{earn}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center mt-4" style={{ color: "rgba(232,238,255,0.35)" }}>
                  * Chỉ áp dụng cho đối tác đã ký kết với INEXT GROUP
                </p>
              </div>
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
              {faqItems.map((faq) => (
                <div key={faq.q} className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <h3 className="font-black text-white mb-2">{faq.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(232,238,255,0.6)" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">Sở hữu thẻ VIP ngay hôm nay</h2>
            <p className="mb-8" style={{ color: "rgba(232,238,255,0.6)" }}>Liên hệ INEXT GROUP hoặc đối tác gần nhất để đặt mua</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/lien-he"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #FFB300 0%, #FF8C00 100%)", color: "#050912", boxShadow: "0 0 30px rgba(255,179,0,0.3)" }}>
                Mua thẻ VIP 365.000đ/năm <ArrowRight size={18} />
              </Link>
              <a href="tel:0916455552"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
                style={{ border: "1px solid rgba(255,179,0,0.3)", color: "#FFB300" }}>
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
