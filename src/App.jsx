import { Footer } from "./components/layoult/Footer";
import { Header } from "./components/layoult/Header";
import { Contact } from "./sections/Contacts";
import { Experiences } from "./sections/Experiences";
import { Formations } from "./sections/Formations";
import { Home } from "./sections/Home";
import { Projects } from "./sections/Projects";
import { Tools } from "./sections/Tools";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Tools />
        <Experiences />
        <Projects />
        <Formations />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
