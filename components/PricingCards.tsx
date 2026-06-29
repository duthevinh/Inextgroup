import Link from "next/link";
import { Check, Star } from "lucide-react";
import { partnerTiers } from "@/data/products";

export default function PricingCards() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 rounded-full pointer-events-none"
        style={{ background: "rgba(255,179,0,0.04)", filter: "blur(60px)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
            style={{ background: "rgba(255,179,0,0.1)", border: "1px solid rgba(255,179,0,0.2)", color: "#FFB300" }}
          >
            Tầng đối tác
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Chọn mức hợp tác{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFB300 0%, #FF8C00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              phù hợp
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(232,238,255,0.5)" }}>
            3 tầng đối tác linh hoạt — bắt đầu miễn phí, nâng cấp khi sẵn sàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnerTiers.map((tier, i) => {
            const isHighlighted = tier.highlighted;
            return (
              <div
                key={tier.name}
                className="relative rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={
                  isHighlighted
                    ? {
                        background: "linear-gradient(135deg, rgba(0,149,245,0.15) 0%, rgba(0,212,200,0.1) 100%)",
                        border: "1px solid rgba(0,149,245,0.35)",
                        boxShadow: "0 0 40px rgba(0,149,245,0.15), 0 24px 60px rgba(0,0,0,0.4)",
                      }
                    : {
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }
                }
              >
                {isHighlighted && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #0095F5 0%, #00D4C8 100%)" }}
                  >
                    <Star size={11} fill="white" /> Được chọn nhiều nhất
                  </div>
                )}

                <div className="mb-5">
                  <div
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: isHighlighted ? "#0095F5" : "rgba(232,238,255,0.4)" }}
                  >
                    Tầng {i + 1}
                  </div>
                  <h3 className="text-xl font-black text-white mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-3xl font-black"
                      style={{ color: isHighlighted ? "#FFB300" : "rgba(232,238,255,0.9)" }}
                    >
                      {tier.price}
                    </span>
                  </div>
                  {tier.priceNote && (
                    <p className="text-sm mt-2" style={{ color: "rgba(232,238,255,0.5)" }}>
                      {tier.priceNote}
                    </p>
                  )}
                </div>

                <div
                  className="w-full h-px mb-5"
                  style={{ background: isHighlighted ? "rgba(0,149,245,0.2)" : "rgba(255,255,255,0.06)" }}
                />

                <ul className="space-y-3 flex-1 mb-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(232,238,255,0.7)" }}>
                      <Check
                        size={15}
                        className="shrink-0 mt-0.5"
                        style={{ color: isHighlighted ? "#0095F5" : "#00D4C8" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/lien-he"
                  className="block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 cursor-pointer"
                  style={
                    isHighlighted
                      ? {
                          background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)",
                          color: "#fff",
                          boxShadow: "0 0 20px rgba(0,149,245,0.3)",
                        }
                      : {
                          background: "rgba(255,255,255,0.06)",
                          color: "rgba(232,238,255,0.8)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }
                  }
                >
                  {tier.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
