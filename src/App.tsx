import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <Hero />
      <Features />
      <MainContent />
    </div>
  );
}

export default App;