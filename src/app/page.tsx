import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingBar } from "@/components/site/floating-bar";
import { Hero } from "@/components/site/hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero enabled={false} />
      </main>
      <Footer />
      <FloatingBar />
    </>
  );
}