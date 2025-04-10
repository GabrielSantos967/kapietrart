import './App.css';
import './components/bootstrap-5.3.5-dist/css/bootstrap.css'
import './components/bootstrap-5.3.5-dist/js/bootstrap.bundle.min.js'
import Header from './components/Header';
import { Content } from './components/Content';
import { Works } from './components/Works';
import Carousel from './components/Carousel.js';
import { Subtitle } from './components/Subtitle.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Works />
      <Carousel />
      <Subtitle />
    </div>
  );
}

export default App;
