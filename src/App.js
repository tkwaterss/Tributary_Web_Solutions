import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Stack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
