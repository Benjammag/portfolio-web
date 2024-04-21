import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import CreativeExperience from './components/CreativeExperience';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Hero />
      <Skills />
      <CreativeExperience />
      <ContactMe />
      <Footer />
    </div>
    </>
  );
}

export default App;
