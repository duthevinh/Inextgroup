"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/company";

function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

const statColors = ["#0095F5", "#FFB300", "#00D4C8", "#A764F5"];

export default function CounterSection() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Ambient bg */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(0,149,245,0.04) 0%, rgba(0,212,200,0.03) 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const { count, ref } = useCounter(stat.value);
            const color = statColors[i % statColors.length];
            return (
              <div
                key={stat.label}
                ref={ref}
                className="text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="text-4xl lg:text-5xl font-black mb-2 tabular-nums"
                  style={{
                    color,
                    textShadow: `0 0 20px ${color}60`,
                  }}
                >
                  {count.toLocaleString("vi-VN")}{stat.suffix}
                </div>
                <div className="text-sm font-medium" style={{ color: "rgba(232,238,255,0.55)" }}>
                  {stat.label}
                </div>
                <div
                  className="w-8 h-0.5 mx-auto mt-3 rounded-full"
                  style={{ background: color, boxShadow: `0 0 8px ${color}` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
