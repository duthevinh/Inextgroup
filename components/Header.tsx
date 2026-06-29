"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/company";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5,9,18,0.85)"
          : "rgba(5,9,18,0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,149,245,0.15)"
          : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg overflow-hidden transition-all duration-200 group-hover:scale-105 shrink-0"
            style={{ boxShadow: "0 0 16px rgba(0,149,245,0.3)" }}>
            <Image src="/images/logo2.png" alt="INEXT GROUP logo" width={36} height={36} className="w-full h-full object-cover" unoptimized />
          </div>
          <div>
            <div className="font-bold text-sm leading-tight text-white">INEXT GROUP</div>
            <div className="text-xs leading-tight" style={{ color: "#FFB300", fontSize: "10px" }}>
              Kết nối mọi giá trị quanh bạn
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  color: active ? "#0095F5" : "rgba(232,238,255,0.7)",
                  background: active ? "rgba(0,149,245,0.1)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "#E8EEFF";
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "rgba(232,238,255,0.7)";
                }}
              >
                {link.label}
                {active && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#0095F5", boxShadow: "0 0 6px #0095F5" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/lien-he"
            className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:opacity-90 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)",
              boxShadow: "0 0 20px rgba(0,149,245,0.3)",
            }}
          >
            Đăng ký đối tác
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
          style={{ color: "#E8EEFF", background: "rgba(255,255,255,0.05)" }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-4 pt-2 space-y-1"
          style={{ background: "rgba(5,9,18,0.95)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150"
                style={{
                  color: active ? "#0095F5" : "rgba(232,238,255,0.8)",
                  background: active ? "rgba(0,149,245,0.1)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/lien-he"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-4 py-3 rounded-lg text-sm font-bold text-white mt-2"
            style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)" }}
          >
            Đăng ký đối tác
          </Link>
        </div>
      )}
    </header>
  );
}
