import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from './Products';
import BikeProducts from './BikeProducts';
import CarProducts from './CarProducts';


function App() {

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? '#007bff' : '#333',
      textDecoration: isActive ? 'none' : 'underline',
      fontWeight: isActive ? 'bold' : 'normal',
      padding: '5px 10px'
    };
  };

  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <NavLink style={navLinkStyles} to='/'>Home</NavLink> |{" "}
        <NavLink style={navLinkStyles} to='/about'>About</NavLink> |{" "}
        <NavLink style={navLinkStyles} to='/contact'>Contact</NavLink> |{" "}
        <NavLink style={navLinkStyles} to='./products'>Products</NavLink>
      </nav>
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />}>
          <Route path='car' element={<CarProducts />} />
          <Route path='bike' element={<BikeProducts />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;