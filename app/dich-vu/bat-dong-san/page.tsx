import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home, MapPin, Phone, ArrowRight, Check, Shield, Eye, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bản Đồ Số Bất Động Sản – Quét Quanh Đây",
  description: "Nền tảng đăng tin và tra cứu nhà đất trực quan trên bản đồ số. Đăng bán, cho thuê, ký gửi BĐS. Kết nối người mua – người bán minh bạch tại Cà Mau.",
};

const features = [
  { icon: MapPin, title: "Hiển thị vị trí thực tế trên bản đồ", desc: "Mỗi bất động sản được ghim chính xác trên bản đồ số — người mua thấy ngay vị trí, hướng nhà, khoảng cách tiện ích xung quanh.", color: "#0095F5" },
  { icon: Phone, title: "Thông tin chính chủ, SĐT xác thực", desc: "Hệ thống hiển thị số điện thoại chính chủ, hạn chế qua cò. Người mua liên hệ trực tiếp, tiết kiệm thời gian và chi phí.", color: "#FFB300" },
  { icon: Eye, title: "Đăng tin đa kênh tự động", desc: "Một lần đăng — tin tự động phát tán qua nhiều kênh trong hệ sinh thái Quét Quanh Đây, tăng tối đa khả năng tiếp cận.", color: "#00D4C8" },
  { icon: Shield, title: "Ký gửi nhà đất an toàn", desc: "INEXT GROUP hỗ trợ ký gửi bất động sản, đảm bảo thông tin minh bạch và kết nối với người mua phù hợp.", color: "#A764F5" },
  { icon: Clock, title: "Tìm kiếm theo khu vực & tiêu chí", desc: "Lọc theo quận/phường, loại BĐS, diện tích, giá — kết quả hiển thị trực tiếp trên bản đồ, trực quan và dễ so sánh.", color: "#0095F5" },
  { icon: Home, title: "Kết nối người mua – người bán", desc: "Nền tảng tạo môi trường giao dịch minh bạch, kết nối trực tiếp không qua trung gian, giảm chi phí cho cả hai phía.", color: "#FFB300" },
];

const postTypes = [
  { type: "Bán nhà đất", icon: "🏠", desc: "Đăng tin bán nhà, đất nền, biệt thự — hiển thị bản đồ kèm thông tin chi tiết." },
  { type: "Cho thuê", icon: "🔑", desc: "Phòng trọ, nhà nguyên căn, mặt bằng kinh doanh — kết nối ngay người thuê phù hợp." },
  { type: "Ký gửi", icon: "🤝", desc: "Giao INEXT GROUP quản lý và tìm kiếm người mua/thuê — chuyên nghiệp và hiệu quả." },
  { type: "Tìm mua/thuê", icon: "🔍", desc: "Đặt yêu cầu tìm BĐS theo tiêu chí — hệ thống thông báo khi có tin phù hợp." },
];

export default function BatDongSanPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#050912" }}>

        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.08) 0%, rgba(167,100,245,0.05) 100%)" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "rgba(0,149,245,0.06)", filter: "blur(100px)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.25)", color: "#0095F5" }}>
                    <Home size={12} /> Bất động sản
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.25)", color: "#FFB300" }}>
                    Close Beta
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Bản Đồ Số<br />
                  <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #A764F5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Bất Động Sản
                  </span>
                </h1>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(232,238,255,0.7)" }}>
                  Nền tảng đăng tin và tra cứu nhà đất trực quan trên bản đồ số. Người dùng có thể đăng bán, cho thuê, ký gửi bất động sản, tìm kiếm theo khu vực và kết nối trực tiếp với người mua hoặc người bán — môi trường giao dịch minh bạch và hiệu quả.
                </p>
                <div className="p-4 rounded-xl mb-6" style={{ background: "rgba(255,179,0,0.08)", border: "1px solid rgba(255,179,0,0.2)" }}>
                  <p className="text-sm font-bold mb-1" style={{ color: "#FFB300" }}>⏳ Hiện đang trong giai đoạn Close Beta</p>
                  <p className="text-sm" style={{ color: "rgba(232,238,255,0.6)" }}>Đăng ký sớm để trải nghiệm miễn phí và nhận ưu tiên khi ra mắt chính thức.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/lien-he"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 24px rgba(0,149,245,0.35)" }}>
                    Đăng ký Beta <ArrowRight size={17} />
                  </Link>
                  <Link href="/lien-he"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(232,238,255,0.8)" }}>
                    Đăng tin BĐS miễn phí
                  </Link>
                </div>
              </div>

              {/* BDS screenshots */}
              <div className="relative space-y-4">
                <div className="absolute -inset-6 rounded-3xl" style={{ background: "rgba(0,149,245,0.04)", filter: "blur(40px)" }} />
                {/* Main BDS map */}
                <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,149,245,0.2)", boxShadow: "0 0 30px rgba(0,149,245,0.1)" }}>
                  <Image src="/images/p09_img1.jpeg" alt="Bản đồ số bất động sản Cà Mau" width={700} height={280} className="w-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,9,18,0.5) 0%, transparent 50%)" }} />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(0,149,245,0.15)", border: "1px solid rgba(0,149,245,0.3)", color: "#0095F5" }}>
                      BĐS trên bản đồ số Cà Mau
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(255,179,0,0.15)", border: "1px solid rgba(255,179,0,0.3)", color: "#FFB300" }}>
                      Close Beta
                    </span>
                  </div>
                </div>
                {/* Two smaller screenshots */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                    <Image src="/images/p09_img2.jpeg" alt="Tin đăng bất động sản" width={340} height={180} className="w-full object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                    <Image src="/images/p09_img3.jpeg" alt="Chi tiết bất động sản" width={340} height={180} className="w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POST TYPES */}
        <section className="py-16 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black text-white mb-2">Loại tin đăng</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {postTypes.map((pt) => (
                <div key={pt.type} className="p-6 rounded-2xl text-center transition-all hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-4xl mb-3">{pt.icon}</div>
                  <h3 className="font-black text-white mb-2">{pt.type}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(232,238,255,0.55)" }}>{pt.desc}</p>
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
              <h2 className="text-3xl font-black text-white mb-2">Tính năng nổi bật</h2>
              <p style={{ color: "rgba(232,238,255,0.5)" }}>Giao dịch BĐS minh bạch, trực tiếp, không qua cò</p>
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

        {/* CTA BETA */}
        <section className="py-20 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.07) 0%, rgba(167,100,245,0.05) 100%)" }} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">Tham gia Close Beta ngay</h2>
            <p className="mb-3 text-lg" style={{ color: "rgba(232,238,255,0.65)" }}>
              Đăng ký sớm để đăng tin <strong className="text-white">miễn phí hoàn toàn</strong> trong giai đoạn Beta và giữ ưu đãi khi ra mắt chính thức.
            </p>
            <p className="text-sm mb-8" style={{ color: "rgba(232,238,255,0.45)" }}>
              Dành cho chủ bất động sản, môi giới và nhà đầu tư tại Cà Mau và các tỉnh lân cận.
            </p>
            <Link href="/lien-he"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 30px rgba(0,149,245,0.3)" }}>
              Đăng ký tham gia Beta <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
