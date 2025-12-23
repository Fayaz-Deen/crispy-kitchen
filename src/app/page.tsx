import { Header, Footer } from '@/components/layout';
import {
  Hero,
  SignatureDishes,
  Menu,
  About,
  VideoExperience,
  Contact,
} from '@/components/sections';
import FloatingOrderButton from '@/components/ui/FloatingOrderButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SignatureDishes />
        <Menu />
        <About />
        <VideoExperience />
        <Contact />
      </main>
      <Footer />
      <FloatingOrderButton />
    </>
  );
}
