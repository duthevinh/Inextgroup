"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Send, Briefcase, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company, cooperationForms } from "@/data/company";
import { jobOpenings } from "@/data/products";

type FormData = { name: string; phone: string; email: string; topic: string; message: string };
type FormErrors = Partial<FormData>;

const topics = ["Đăng ký đối tác", "Mua thẻ VIP", "Thiết kế website", "Việc làm", "Hợp tác nhượng quyền", "Tuyển dụng", "Khác"];

function validate(data: FormData): FormErrors {
  const e: FormErrors = {};
  if (!data.name.trim()) e.name = "Vui lòng nhập họ tên";
  if (!data.phone.trim()) e.phone = "Vui lòng nhập số điện thoại";
  else if (!/^[0-9]{9,11}$/.test(data.phone.replace(/\s/g, ""))) e.phone = "Số điện thoại không hợp lệ";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Email không hợp lệ";
  if (!data.topic) e.topic = "Vui lòng chọn chủ đề";
  if (!data.message.trim()) e.message = "Vui lòng nhập nội dung";
  return e;
}

const inputStyle = (err?: string): React.CSSProperties => ({
  width: "100%",
  padding: "12px 16px",
  borderRadius: "12px",
  border: `1px solid ${err ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"}`,
  background: "rgba(255,255,255,0.04)",
  color: "#E8EEFF",
  fontSize: "14px",
  outline: "none",
  minHeight: "44px",
});

export default function LienHePage() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", topic: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main style={{ background: "#050912" }}>

        {/* HERO */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.07) 0%, rgba(0,212,200,0.04) 100%)" }} />
          <div className="absolute top-20 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(0,149,245,0.05)", filter: "blur(80px)" }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.2)", color: "#0095F5" }}>
              Liên hệ
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Kết nối cùng{" "}
              <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                INEXT GROUP
              </span>
            </h1>
            <p className="text-xl" style={{ color: "rgba(232,238,255,0.6)" }}>Chúng tôi sẵn sàng tư vấn và hỗ trợ bạn</p>
          </div>
        </section>

        {/* CONTACT + FORM */}
        <section className="py-16 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Info */}
              <div className="lg:col-span-2 space-y-5">
                <h2 className="text-2xl font-black text-white mb-5">Thông tin liên hệ</h2>
                {[
                  { icon: Phone, label: "Điện thoại", value: company.phone, href: `tel:${company.phone.replace(/\./g, "")}`, color: "#0095F5" },
                  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}`, color: "#FFB300" },
                  { icon: Globe, label: "Website", value: company.website, href: `https://${company.website}`, color: "#00D4C8" },
                  { icon: MapPin, label: "Địa chỉ", value: company.address, href: undefined, color: "#A764F5" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: "rgba(232,238,255,0.35)" }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={item.label === "Website" ? "_blank" : undefined} rel="noopener noreferrer"
                          className="font-semibold text-sm transition-colors hover:text-white" style={{ color: item.color }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: "rgba(232,238,255,0.8)" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="rounded-2xl p-5" style={{ background: "rgba(0,149,245,0.06)", border: "1px solid rgba(0,149,245,0.12)" }}>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0095F5" }}>Giờ làm việc</p>
                  <p className="text-sm" style={{ color: "rgba(232,238,255,0.6)" }}>Thứ 2 – Thứ 7: 8:00 – 17:30</p>
                  <p className="text-sm" style={{ color: "rgba(232,238,255,0.6)" }}>Chủ nhật: 8:00 – 12:00</p>
                </div>

                <div className="rounded-2xl p-5" style={{ background: "rgba(255,179,0,0.06)", border: "1px solid rgba(255,179,0,0.15)" }}>
                  <p className="font-bold text-sm mb-3" style={{ color: "#FFB300" }}>Các hình thức hợp tác</p>
                  <ul className="space-y-2">
                    {cooperationForms.map((f, i) => (
                      <li key={i} className="text-xs flex items-start gap-1.5" style={{ color: "rgba(232,238,255,0.65)" }}>
                        <ChevronRight size={12} className="shrink-0 mt-0.5" style={{ color: "#FFB300" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center"
                    style={{ background: "rgba(0,149,245,0.06)", border: "1px solid rgba(0,149,245,0.15)" }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl"
                      style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", boxShadow: "0 0 30px rgba(0,149,245,0.4)" }}>✓</div>
                    <h3 className="text-xl font-black text-white mb-2">Gửi thành công!</h3>
                    <p className="mb-6" style={{ color: "rgba(232,238,255,0.6)" }}>Chúng tôi đã nhận được tin nhắn và sẽ phản hồi trong vòng 24 giờ.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", topic: "", message: "" }); }}
                      className="px-6 py-3 rounded-xl font-bold text-white cursor-pointer transition-all hover:opacity-90"
                      style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)" }}>
                      Gửi tin nhắn khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: "rgba(232,238,255,0.7)" }}>
                          Họ tên <span style={{ color: "#FFB300" }}>*</span>
                        </label>
                        <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                          placeholder="Nguyễn Văn A" style={inputStyle(errors.name)} />
                        {errors.name && <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={{ color: "rgba(232,238,255,0.7)" }}>
                          Số điện thoại <span style={{ color: "#FFB300" }}>*</span>
                        </label>
                        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="0916 455 552" style={inputStyle(errors.phone)} />
                        {errors.phone && <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: "rgba(232,238,255,0.7)" }}>
                        Email <span className="font-normal text-xs" style={{ color: "rgba(232,238,255,0.35)" }}>(không bắt buộc)</span>
                      </label>
                      <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="example@email.com" style={inputStyle(errors.email)} />
                      {errors.email && <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="topic" className="block text-sm font-medium mb-1.5" style={{ color: "rgba(232,238,255,0.7)" }}>
                        Chủ đề <span style={{ color: "#FFB300" }}>*</span>
                      </label>
                      <select id="topic" name="topic" value={form.topic} onChange={handleChange}
                        style={{ ...inputStyle(errors.topic), appearance: "none" as const }}>
                        <option value="" style={{ background: "#0A1628" }}>-- Chọn chủ đề --</option>
                        {topics.map((t) => <option key={t} value={t} style={{ background: "#0A1628" }}>{t}</option>)}
                      </select>
                      {errors.topic && <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.topic}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "rgba(232,238,255,0.7)" }}>
                        Nội dung <span style={{ color: "#FFB300" }}>*</span>
                      </label>
                      <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange}
                        placeholder="Mô tả yêu cầu hoặc câu hỏi của bạn..."
                        style={{ ...inputStyle(errors.message), resize: "none" as const }} />
                      {errors.message && <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.message}</p>}
                    </div>

                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 cursor-pointer"
                      style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 20px rgba(0,149,245,0.25)", minHeight: "52px" }}>
                      <Send size={18} /> Gửi tin nhắn
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* JOBS */}
        <section className="py-16 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="absolute inset-0" style={{ background: "rgba(0,149,245,0.02)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{ background: "rgba(0,149,245,0.1)", border: "1px solid rgba(0,149,245,0.2)", color: "#0095F5" }}>
                Tuyển dụng
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Gia nhập đội ngũ{" "}
                <span style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  INEXT GROUP
                </span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(232,238,255,0.55)" }}>
                Chúng tôi tìm kiếm những người đam mê tạo ra thay đổi thực sự cho cộng đồng địa phương
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {jobOpenings.map((job, i) => {
                const c = ["#0095F5", "#FFB300", "#00D4C8"][i % 3];
                return (
                  <div key={i} className="rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${c}15`, border: `1px solid ${c}25` }}>
                      <Briefcase size={20} style={{ color: c }} />
                    </div>
                    <h3 className="font-black text-lg mb-2 text-white">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ background: `${c}12`, color: c, border: `1px solid ${c}20` }}>{job.type}</span>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.05)", color: "rgba(232,238,255,0.6)" }}>{job.location}</span>
                    </div>
                    <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "rgba(232,238,255,0.55)" }}>{job.description}</p>
                    <div className="pt-4 mb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <p className="text-xs font-medium mb-2" style={{ color: "rgba(232,238,255,0.4)" }}>Yêu cầu:</p>
                      <ul className="space-y-1">
                        {job.requirements.map((r, j) => (
                          <li key={j} className="text-xs flex items-start gap-1.5" style={{ color: "rgba(232,238,255,0.55)" }}>
                            <ChevronRight size={11} className="shrink-0 mt-0.5" style={{ color: c }} />{r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => {
                        const sel = document.getElementById("topic") as HTMLSelectElement | null;
                        if (sel) { sel.value = "Tuyển dụng"; sel.dispatchEvent(new Event("change", { bubbles: true })); }
                        document.getElementById("name")?.scrollIntoView({ behavior: "smooth", block: "center" });
                        document.getElementById("name")?.focus();
                      }}
                      className="w-full py-3 rounded-xl text-sm font-bold text-white cursor-pointer transition-all hover:opacity-90"
                      style={{ background: `linear-gradient(135deg, ${c} 0%, ${c}CC 100%)` }}>
                      Ứng tuyển ngay
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-sm mt-8" style={{ color: "rgba(232,238,255,0.45)" }}>
              Không thấy vị trí phù hợp?{" "}
              <a href={`mailto:${company.email}`} className="font-bold underline" style={{ color: "#0095F5" }}>
                Gửi CV cho chúng tôi
              </a>{" "}
              — chúng tôi luôn chào đón tài năng.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
