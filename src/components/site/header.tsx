"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "خانه", href: "/" },
  { label: "خدمات", href: "/services" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-surface/95 backdrop-blur-md shadow-[var(--shadow-soft)] border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 text-white font-bold shadow-sm">
              ق
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm md:text-base font-bold text-ink-800">
                دکتر قره‌داغی
              </span>
              <span className="text-[10px] md:text-xs text-muted">
                دندانپزشکی تخصصی
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 hover:text-brand-700 hover:bg-brand-50 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+982100000000"
              className="hidden md:flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-brand-50 transition"
            >
              <Phone className="h-4 w-4 text-brand-700" />
              <span dir="ltr">۰۲۱-۰۰۰۰۰۰۰۰</span>
            </a>

            <Link
              href="/booking"
              className="hidden md:inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-800 transition shadow-sm"
            >
              <CalendarCheck className="h-4 w-4" />
              رزرو نوبت
            </Link>

            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-border"
              aria-label="باز کردن منو"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {isMobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-surface shadow-2xl flex flex-col">
            <div className="flex items-center justify-between border-b border-border p-4">
              <span className="font-bold text-ink-800">منو</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-brand-50"
                aria-label="بستن"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium hover:bg-brand-50 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-border p-4 space-y-2">
              <a
                href="tel:+982100000000"
                className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 font-medium"
              >
                <Phone className="h-4 w-4 text-brand-700" />
                <span dir="ltr">۰۲۱-۰۰۰۰۰۰۰۰</span>
              </a>
              <Link
                href="/booking"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-4 py-3 font-medium text-white"
              >
                <CalendarCheck className="h-4 w-4" />
                رزرو نوبت
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}