
import './App.css';
import { About } from './components/about/About';
import Footer from './components/Footer/Footer';
import Info from './components/info/Info';
import Interests from './components/Interests/Interests';

function App() {
  return (
    <div className="App">
      <Info></Info>
      <About></About>
      <Interests></Interests>
      <Footer></Footer>
    </div>
  );
}

export default App;
