import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryProducts from './components/CategoryProducts';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/category/:category" element={<CategoryProducts/>} />
          <Route path="/products/:id" element={<ProductDetail/>} />
        </Routes>
   
    </div>
  );
}

export default App;
