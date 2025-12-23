import { Header, Footer } from '@/components/layout';
import {
  Hero,
  SignatureDishes,
  Menu,
  About,
  VideoExperience,
  Contact,
} from '@/components/sections';

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
    </>
  );
}
