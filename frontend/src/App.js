import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Index from './pages/Index';
import Profile from './pages/Profile';
import PageNotFound from './PageNotFound';
import Footer from './components/Footer';
import Pagination from './pages/Pagination';
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path="/" component={Home} exact/>         
        <Route path="/signUp" component={SignUp}/>  
        <Route path="/login" component={Login}/>  
        <Route path="/indexpage" component={Index}/>  
        <Route path="/profile" component={Profile}/>  
        <Route path="/*" component={PageNotFound}/>  
        </Switch>
        {/* <Footer/> */}
        {/* <Pagination/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
