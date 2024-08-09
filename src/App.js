import './App.css';
import Header from '../src/components/header.js';
import HeroSection from './components/Hero/heroSection.js';
import MiddleSection from './components/MiddleSection/middleSection.js';
import TeamSection from './components/team/team.js';
import TryAppSection from './components/TryAppSection/tryAppSection.js';
import Footer from './components/Footer/footer.js';


function App() {
  return (
    <div className="App">
    <Header />
    <HeroSection />
    <MiddleSection />
    <TeamSection />
    <TryAppSection />
    <Footer />
    </div>
  );
}

export default App;
