import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <Hero />
                <About />
                <Skills />
                <Portfolio />
                <Contact />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
