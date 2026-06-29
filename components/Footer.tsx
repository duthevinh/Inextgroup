import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import { company, navLinks } from "@/data/company";
import { ecosystem } from "@/data/products";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#030710", borderTop: "1px solid rgba(0,149,245,0.12)" }}
    >
      {/* Ambient glow top */}
      <div
        className="absolute top-0 left-1/4 w-96 h-32 rounded-full pointer-events-none"
        style={{ background: "rgba(0,149,245,0.05)", filter: "blur(60px)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0" style={{ boxShadow: "0 0 16px rgba(0,149,245,0.3)" }}>
                <Image src="/images/logo2.png" alt="INEXT GROUP logo" width={40} height={40} className="w-full h-full object-cover" unoptimized />
              </div>
              <div>
                <div className="font-bold text-white text-sm">{company.name}</div>
                <div className="text-xs" style={{ color: "#FFB300" }}>{company.tagline}</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(232,238,255,0.5)" }}>
              {company.mission}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${company.phone.replace(/\./g, "")}`}
                className="flex items-center gap-2 text-sm transition-colors duration-150 hover:text-white"
                style={{ color: "rgba(232,238,255,0.6)" }}
              >
                <Phone size={14} style={{ color: "#0095F5" }} />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm transition-colors duration-150 hover:text-white"
                style={{ color: "rgba(232,238,255,0.6)" }}
              >
                <Mail size={14} style={{ color: "#0095F5" }} />
                {company.email}
              </a>
              <a
                href={`https://${company.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors duration-150 hover:text-white"
                style={{ color: "rgba(232,238,255,0.6)" }}
              >
                <Globe size={14} style={{ color: "#00D4C8" }} />
                {company.website}
              </a>
              <div className="flex items-start gap-2 text-sm" style={{ color: "rgba(232,238,255,0.6)" }}>
                <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "#FFB300" }} />
                <span>{company.address}</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#0095F5" }}>
              Điều hướng
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm flex items-center gap-1.5 transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(232,238,255,0.55)" }}
                  >
                    <ArrowRight size={12} style={{ color: "#0095F5" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#FFB300" }}>
              Hệ sinh thái
            </h4>
            <ul className="space-y-2">
              {ecosystem.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    className="text-sm flex items-center gap-1.5 transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(232,238,255,0.55)" }}
                  >
                    <ArrowRight size={12} style={{ color: "#FFB300" }} />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#00D4C8" }}>
              Hợp tác
            </h4>
            <p className="text-sm mb-4" style={{ color: "rgba(232,238,255,0.55)" }}>
              Sẵn sàng đồng hành cùng INEXT GROUP trong hành trình số hóa địa phương?
            </p>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)",
                boxShadow: "0 0 20px rgba(0,149,245,0.25)",
              }}
            >
              Liên hệ ngay <ArrowRight size={14} />
            </Link>

            <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs mb-1" style={{ color: "rgba(232,238,255,0.35)" }}>MST</p>
              <p className="text-sm font-mono font-medium" style={{ color: "rgba(232,238,255,0.6)" }}>
                {company.taxCode}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(232,238,255,0.35)" }}>
            © 2025 {company.fullName}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(232,238,255,0.25)" }}>
            Powered by INEXT GROUP · Cà Mau, Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
}
