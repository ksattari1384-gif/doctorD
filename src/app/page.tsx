export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-800">
          <span className="h-2 w-2 rounded-full bg-brand-500" />
          نسخه‌ی توسعه
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-ink-800">
          مطب دندانپزشکی دکتر قره‌داغی
        </h1>

        <p className="text-lg text-muted leading-relaxed">
          پروژه با موفقیت راه‌اندازی شد. این صفحه‌ی آزمایشی است و در فاز بعد
          با طراحی کامل جایگزین می‌شود.
        </p>

        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <button className="rounded-lg bg-brand-700 px-6 py-3 text-white font-medium hover:bg-brand-800 transition">
            رزرو نوبت
          </button>
          <button className="rounded-lg border border-border bg-surface px-6 py-3 font-medium hover:bg-brand-50 transition">
            مشاهده خدمات
          </button>
        </div>
      </div>
    </main>
  );
}