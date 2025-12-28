import dynamic from 'next/dynamic';
import { Header, Footer } from '@/components/layout';
import { Hero, SignatureDishes, Menu } from '@/components/sections';

// Lazy load below-fold components for better performance
const About = dynamic(() => import('@/components/sections/About'));
const VideoExperience = dynamic(() => import('@/components/sections/VideoExperience'));
const Contact = dynamic(() => import('@/components/sections/Contact'));
const FloatingOrderButton = dynamic(() => import('@/components/ui/FloatingOrderButton'));

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
