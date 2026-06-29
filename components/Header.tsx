"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MapPin, CreditCard, Home, Globe, Briefcase, Plane } from "lucide-react";
import { navLinks } from "@/data/company";

const services = [
  { href: "/dich-vu/ban-do-dia-diem", label: "Bản Đồ Số Địa Điểm", icon: MapPin, color: "#0095F5", desc: "Khám phá địa điểm quanh bạn" },
  { href: "/dich-vu/the-vip", label: "Thẻ VIP NFC", icon: CreditCard, color: "#FFB300", desc: "365.000đ · Ưu đãi & Danh thiếp" },
  { href: "/dich-vu/bat-dong-san", label: "Bất Động Sản", icon: Home, color: "#A764F5", desc: "Bản đồ số BĐS Cà Mau" },
  { href: "/dich-vu/thiet-ke-website", label: "Thiết Kế Website", icon: Globe, color: "#00D4C8", desc: "6.000.000đ · Bảo hành 12 tháng" },
  { href: "/dich-vu/viec-lam", label: "Việc Làm Quanh Đây", icon: Briefcase, color: "#0095F5", desc: "Tuyển dụng địa phương miễn phí" },
  { href: "/dich-vu/du-hoc", label: "Du Học & XKLĐ", icon: Plane, color: "#FF6482", desc: "Nhật, Hàn, Đài Loan..." },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isServiceActive = pathname.startsWith("/dich-vu") || pathname === "/san-pham";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,9,18,0.92)" : "rgba(5,9,18,0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(0,149,245,0.15)" : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 rounded-lg overflow-hidden transition-all duration-200 group-hover:scale-105"
            style={{ boxShadow: "0 0 16px rgba(0,149,245,0.3)" }}>
            <Image src="/images/logo2.png" alt="INEXT GROUP" width={36} height={36} className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-sm leading-tight text-white">INEXT GROUP</div>
            <div className="text-xs leading-tight" style={{ color: "#FFB300", fontSize: "10px" }}>Kết nối mọi giá trị quanh bạn</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Trang chủ */}
          <Link href="/"
            className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
            style={{ color: pathname === "/" ? "#0095F5" : "rgba(232,238,255,0.7)", background: pathname === "/" ? "rgba(0,149,245,0.1)" : "transparent" }}>
            Trang chủ
            {pathname === "/" && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: "#0095F5" }} />}
          </Link>

          {/* Dịch vụ dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ color: isServiceActive ? "#0095F5" : "rgba(232,238,255,0.7)", background: isServiceActive ? "rgba(0,149,245,0.1)" : "transparent" }}>
              Dịch vụ
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              {isServiceActive && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: "#0095F5" }} />}
            </button>

            {dropdownOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] rounded-2xl p-3 z-50"
                style={{ background: "rgba(8,14,30,0.97)", border: "1px solid rgba(0,149,245,0.15)", backdropFilter: "blur(20px)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setDropdownOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl transition-all duration-150 group/item"
                      style={{ background: pathname === s.href ? `${s.color}12` : "transparent" }}
                      onMouseEnter={e => (e.currentTarget.style.background = `${s.color}0e`)}
                      onMouseLeave={e => (e.currentTarget.style.background = pathname === s.href ? `${s.color}12` : "transparent")}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                        <s.icon size={16} style={{ color: s.color }} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">{s.label}</div>
                        <div className="text-xs mt-0.5" style={{ color: "rgba(232,238,255,0.45)" }}>{s.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-2 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <Link href="/san-pham" onClick={() => setDropdownOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all"
                    style={{ color: "#0095F5", background: "rgba(0,149,245,0.06)" }}>
                    Xem tổng quan hệ sinh thái →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Về chúng tôi */}
          <Link href="/ve-chung-toi"
            className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
            style={{ color: pathname === "/ve-chung-toi" ? "#0095F5" : "rgba(232,238,255,0.7)", background: pathname === "/ve-chung-toi" ? "rgba(0,149,245,0.1)" : "transparent" }}>
            Về chúng tôi
            {pathname === "/ve-chung-toi" && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: "#0095F5" }} />}
          </Link>

          {/* Liên hệ */}
          <Link href="/lien-he"
            className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
            style={{ color: pathname === "/lien-he" ? "#0095F5" : "rgba(232,238,255,0.7)", background: pathname === "/lien-he" ? "rgba(0,149,245,0.1)" : "transparent" }}>
            Liên hệ
            {pathname === "/lien-he" && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: "#0095F5" }} />}
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/lien-he"
            className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:opacity-90 cursor-pointer"
            style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)", boxShadow: "0 0 20px rgba(0,149,245,0.3)" }}>
            Đăng ký đối tác
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
          style={{ color: "#E8EEFF", background: "rgba(255,255,255,0.05)" }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Đóng menu" : "Mở menu"}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-1"
          style={{ background: "rgba(5,9,18,0.97)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <Link href="/" onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-lg text-sm font-medium"
            style={{ color: pathname === "/" ? "#0095F5" : "rgba(232,238,255,0.8)", background: pathname === "/" ? "rgba(0,149,245,0.1)" : "transparent" }}>
            Trang chủ
          </Link>

          {/* Mobile services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium"
              style={{ color: isServiceActive ? "#0095F5" : "rgba(232,238,255,0.8)", background: isServiceActive ? "rgba(0,149,245,0.1)" : "transparent" }}>
              Dịch vụ
              <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-1 ml-4 space-y-1">
                <Link href="/san-pham" onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm"
                  style={{ color: "rgba(232,238,255,0.6)", background: "rgba(0,149,245,0.06)" }}>
                  Tổng quan hệ sinh thái
                </Link>
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm"
                    style={{ color: pathname === s.href ? s.color : "rgba(232,238,255,0.7)", background: pathname === s.href ? `${s.color}10` : "transparent" }}>
                    <s.icon size={14} style={{ color: s.color }} />
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/ve-chung-toi" onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-lg text-sm font-medium"
            style={{ color: pathname === "/ve-chung-toi" ? "#0095F5" : "rgba(232,238,255,0.8)", background: pathname === "/ve-chung-toi" ? "rgba(0,149,245,0.1)" : "transparent" }}>
            Về chúng tôi
          </Link>
          <Link href="/lien-he" onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-lg text-sm font-medium"
            style={{ color: pathname === "/lien-he" ? "#0095F5" : "rgba(232,238,255,0.8)", background: pathname === "/lien-he" ? "rgba(0,149,245,0.1)" : "transparent" }}>
            Liên hệ
          </Link>
          <Link href="/lien-he" onClick={() => setOpen(false)}
            className="block w-full text-center px-4 py-3 rounded-lg text-sm font-bold text-white mt-2"
            style={{ background: "linear-gradient(135deg, #0095F5 0%, #0075C4 100%)" }}>
            Đăng ký đối tác
          </Link>
        </div>
      )}
    </header>
  );
}
