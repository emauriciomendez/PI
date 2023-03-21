import './App.css';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home.jsx';
import Detail from './views/Detail/Detail.jsx';
import Form from './views/Form/Form.jsx';
import {  Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

//, Routes , useLocation, useNavigate
 // npm audit fix --force
function App() {
  const location=useLocation();

  return (
    <div className="App">
     <div className='title'><h1 >Henry Countries </h1></div> 
      { location.pathname!=='/'&&<NavBar/>}
      <div className="Cuerpo">
        <Route exact path='/' component={Landing}/>         
        <Route  path="/home" render={ ()=><Home/>} />
        <Route  path='/detail' component={Detail}/>
        <Route path="/form" ><Form/></Route>
      </div>
     <footer className='footer'>Create for Mauricio Méndez</footer>
    </div>
  );
}

export default App;
