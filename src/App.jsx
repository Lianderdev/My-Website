import { Footer } from "./components/layoult/Footer";
import { Header } from "./components/layoult/Header";
import { Contact } from "./sections/Contacts";
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
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
