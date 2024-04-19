import Calendly from './components/calendly';

function HomePage() {

    const calendlyUrl = "https://calendly.com/accuprobookkeepingllc/30min?month=2024-04"; 
    return (
      <div>      

            <Calendly url={calendlyUrl} /> 

      </div>
    );
  }
  
  export default HomePage;
  