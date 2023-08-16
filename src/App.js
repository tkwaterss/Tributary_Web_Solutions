import './App.css';
import Header from './components/Header';
import About from './components/About';
import MoonGear from './components/MoonGear';
import Scoville from './components/Scoville';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Scoville />
        <MoonGear />
      </main>
      <Footer />
    </div>
  );
}

export default App;
