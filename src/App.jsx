import { Header } from "./components/layoult/Header";
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
      </main>
    </>
  )
}
