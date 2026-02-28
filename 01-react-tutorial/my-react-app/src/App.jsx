import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from './Products';
import BikeProducts from './BikeProducts';
import CarProducts from './CarProducts';


function App() {

  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to='/'>Home</Link> |{" "}
        <Link to='/about'>About</Link> |{" "}
        <Link to='/contact'>Contact</Link> |{" "}
        <Link to='./products'>Products</Link>
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