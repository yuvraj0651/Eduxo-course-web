import './App.css';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import "./components/styles/Base.css";
import "./components/styles/Responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Register from './components/Register/Register';

function App() {

  const [loginOpen, setLoginOpen] = useState(false);

  const toggleLoginForm = () => {
    setLoginOpen(!loginOpen);
  }

  return (
    <div className="App">
      <Header onLoginToggle={toggleLoginForm} />
      <main>
        <div className='main-section'>
          <Routes>
            <Route path='/' element={<Home loginOpen={loginOpen} toggleLoginForm={toggleLoginForm} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
}

export default App;
