import React from 'react'
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import EducationalExp from './Components/EducationalExp';
import FirstSection from './Components/FirstSection';
import Navbar from './Components/Navbar'
import PracticalExp from './Components/PracticalExp';
import Skills from './Components/Skills';



function App() {

  return (
    <div>
        <Navbar />
        <FirstSection />
        <AboutMe />
        <Skills />
        <EducationalExp />
        <PracticalExp />
        <ContactMe />
    </div>
  );
}

export default App;
