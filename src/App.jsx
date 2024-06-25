import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Aboutme } from './components/AboutMe';
import { CodeForcesRating } from './components/CodeForces';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url('./assets/images/banner-bg.png')` }}>
      <NavBar />
      <Banner />
      <Aboutme />
      <CodeForcesRating/>
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
