import { useState} from 'react';
import Sidebar from './components/Layout/Sidebar';
import Signup from './components/Forms/Signup';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Forms/Login';
import Header from './components/Layout/Header';
import Home from './components/pages/Home';
import Footer from './components/Layout/Footer';
import purposeContext from './components/store/purpose-context';
import Categories from './components/Layout/Categories';
import PropertyInfo from './components/Layout/PropertyInfo';
import About from './components/pages/About';

function App() {
  const [isMenu, setIsMenu] = useState(false);
  const [isVisible, setVisible] = useState(true);

  const openMenu = () => {
    setIsMenu(true);
    setVisible(false);
  }

  const closeMenu = () => {
    setIsMenu(false);
    setVisible(true);
  }
  return (
    <>
    <purposeContext.Provider value={{navFuction: openMenu, navCloseFunc: closeMenu, isMenu:isMenu, isVisible:isVisible}}>
    <Header/>
     {isMenu && <Sidebar/>}
    
    
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={ <Login/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/categories' element={<Categories/>}/>
     <Route path='/propertyinfo' element={<PropertyInfo/>}/>
     <Route path='/about' element={<About/>}/>

     </Routes>
 
 
    <Footer/>
    </purposeContext.Provider>
    </>
  );
}

export default App;
