import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Experiencia from "./components/Experiencia";
import Projects from "./components/Projects";
import Habilidades from "./components/Habilidades";
import Certificaciones from "./components/Certificaciones";
import SobreMi from "./components/SobreMi";
import Contacto1 from "./components/Contacto";

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <Header />
      <main className="">
        <Home />
        <Experiencia />
        <Projects />
        <Habilidades />
        <Certificaciones />
        <SobreMi />
        <Contacto1 />
      </main>
      <Footer />
    </div>
  );
};

export default App;
