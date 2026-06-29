import { Quote } from "lucide-react";
import { testimonials } from "@/data/products";

const avatarColors = ["#0095F5", "#FFB300", "#00D4C8"];

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(0,212,200,0.04)", filter: "blur(80px)", transform: "translate(30%, -50%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
            style={{ background: "rgba(0,212,200,0.1)", border: "1px solid rgba(0,212,200,0.2)", color: "#00D4C8" }}
          >
            Khách hàng nói gì
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white">
            Đối tác & người dùng{" "}
            <span className="gradient-text">tin tưởng</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <Quote
                size={24}
                className="mb-4"
                style={{ color: avatarColors[i % avatarColors.length], opacity: 0.7 }}
              />
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "rgba(232,238,255,0.65)" }}>
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{
                    background: avatarColors[i % avatarColors.length],
                    boxShadow: `0 0 12px ${avatarColors[i % avatarColors.length]}40`,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{t.name}</div>
                  <div className="text-xs" style={{ color: "rgba(232,238,255,0.4)" }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
