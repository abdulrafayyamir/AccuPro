import Services from './components/Services'
import ServicePage from './components/ServicePage';
import Testimonials from './components/Testimonials';
import BookDisovery from './components/BookDiscovery'
import FAQ from './components/Faq';

function HomePage() {
    return (
      <div>      

            <ServicePage />
            <Testimonials />
            <Services />
            <BookDisovery />
            <FAQ />

      </div>
    );
  }
  
  export default HomePage;
  