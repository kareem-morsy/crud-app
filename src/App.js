import { Routes , Route, Outlet} from 'react-router-dom';
import './App.css';
import AddNew from './components/AddNew';
import CategoriesPage from './components/CategoriesPage';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import ProductsPage from './components/ProductsPage';
import SideBar from './components/SideBar';


function App() {
  return (
    <>
    <Navbar/>
    <div className='row'>
      <div className='col-md-2'>
        <div className='sidebar'>
          <SideBar/>
        </div>
      </div>

      <div className='col-md-10'>
      
        <Routes>
        <Route path='/' element={<ProductsPage/>}/>
          <Route path='' element={<Outlet/>}>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/add' element={<AddNew/>}/>
          </Route>
          <Route path='/categories' element={<CategoriesPage/>} />
          <Route path='/products/:productId' element={<ProductDetails/>}/>
        </Routes>
        
      </div>
    </div>
      
    </>
  );
}

export default App;





