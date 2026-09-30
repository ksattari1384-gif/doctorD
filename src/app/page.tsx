import { Header } from "@/components/site/header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center p-8 pt-24">
        <div className="max-w-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-800">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            نسخه‌ی توسعه
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-ink-800">
            مطب دندانپزشکی دکتر قره‌داغی
          </h1>

          <p className="text-lg text-muted leading-relaxed">
            هدر بالای صفحه اضافه شد. الان می‌تونیم بریم بخش‌های بعدی.
          </p>
        </div>
      </main>
    </>
  );
}