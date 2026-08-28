import './App.css';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Features } from '@/sections/Features';
import { HowItWorks } from '@/sections/HowItWorks';
import { FAQ } from '@/sections/FAQ';
import { DownloadSection } from '@/sections/Download';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
