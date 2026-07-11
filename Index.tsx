import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Revisacar | Mecânica Automotiva - Especialistas em Honda</title>
        <meta
          name="description"
          content="Revisacar - Mecânica automotiva de confiança em São Paulo. Especialistas em Honda, revisão completa, mecânica geral, elétrica e ar-condicionado. Agende agora!"
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
