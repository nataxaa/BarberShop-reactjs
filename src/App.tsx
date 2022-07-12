import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { FirstPage } from './components/FirtsPage';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Services } from './components/Servicess';
import './style/global.ts';


export function App() {
  return (
    <div className="App">
      <Header/>
      <FirstPage/>
      <AboutUs/>
      <Services/>
      <Products/>
      <Contact/>
    </div>
  );
}


