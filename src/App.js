import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Resgistration from './components/Resgistration';
import Login from './components/Login';
import Details from './components/Details';
import Home from './components/Home';
import {Routes,Route} from "react-router-dom"
import Footer  from './components/Footer';

function App() {
  return (
  <>
  <div className='page-container'><Header />
  <div className='conten-wrap'>
    <Routes>
      <Route path='/' element={<Resgistration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Home />} />
    </Routes>
    </div>
    <Footer />
    </div>
  </>
  );
}

export default App;