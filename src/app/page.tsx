import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingBar } from "@/components/site/floating-bar";
import { Hero } from "@/components/site/hero";
import { DoctorIntro } from "@/components/site/doctor-intro";
import { FeaturedServices } from "@/components/site/featured-services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero enabled={false} />
        <DoctorIntro />
        <FeaturedServices />
      </main>
      <Footer />
      <FloatingBar />
    </>
  );
}