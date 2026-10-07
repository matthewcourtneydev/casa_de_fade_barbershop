import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import useScrollAnimations from "./hooks/useScrollAnimations";

function App() {
  useScrollAnimations();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact/>
        {/*
          Upcoming:
          <Intro />
          <Gallery />
          <About />
          <Location />
          <Booking />
        */}
      </main>
    </>
  );
}

export default App;