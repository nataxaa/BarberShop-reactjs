import { useState } from 'react';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { FirstPage } from './components/FirtsPage';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Services } from './components/Servicess';
import {ShopCartModal} from './components/NewShopModal'
import './style/global.ts';
import CartProvider from './Context/cart';


export function App() {

  const [newModal, setNewModal] = useState(false)

  
 function handleOpenNewModal(){
  setNewModal(true)
}
function handleCloseNewModal(){
setNewModal(false)
}

console.log(newModal)

  return (
    <div className="App">
      <CartProvider>

      <Header onOpenModal={handleOpenNewModal}/>
      <FirstPage/>
      <AboutUs/>
      <Services/>
      <Products/>
      <Contact/>
      <ShopCartModal
      isOpen={newModal}
      onRequestClose={handleCloseNewModal}
      />
      </CartProvider>
    </div>
  );
}


