import { Navigation, Wrapper } from "./components/layout";
import { Hero } from "./pages";

const App = () => {
  return (
    <Wrapper>
      <Navigation />
      <Hero />
    </Wrapper>
  );
};

export default App;
