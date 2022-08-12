import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Store from './components/Store';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='about' element={<About/>} />  
       <Route path='cart' element={<Cart/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='products' element={<Products/>}/>
       <Route path='store' element={<Store/>}/>
      </Routes>
    </div>
  );
}

export default App;
