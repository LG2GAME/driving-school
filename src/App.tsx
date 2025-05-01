import { Navigation } from "./components/layout";
import { Hero, Benefits, Courses, Team } from "./pages";

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Benefits />
      <Courses />
      <Team />
    </>
  );
};

export default App;
