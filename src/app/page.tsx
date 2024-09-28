import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Faqs from '@/components/Faqs';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Marketplaces from '@/components/Marketplaces';
import Stats from '@/components/Stats';
import Team from '@/components/Team';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Blogs />
      <Team />
      <Contact />
      <Faqs />
      <Marketplaces />
      <Footer />
    </main>
  );
}
