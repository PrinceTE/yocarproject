import logo from './logo.svg';
import './App.css';
import AdminHome from './MainContainer/AdminHome/AdminHome';
import Navbar from './MainContainer/Navbar/Navbar';
import Login from './MainContainer/Login/Login';
import Footer from './MainContainer/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
   <AdminHome/> 
   <Login/>
   <Footer/>
   
    </div>
  );
}

export default App;
