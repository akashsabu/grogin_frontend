import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/screens/home/Home';
import Product from './components/screens/home/Product';
import Login from './components/screens/authentication/Login';
import { useSelector } from 'react-redux';





function App() {

  const log_status = useSelector((state) => state.user.value.is_logged_in);
  console.log(log_status);


  return (
    <div className="App">
 
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={log_status ? <Home/> : <Login/> } />
          <Route path='/product/:id' element={log_status ? <Home/> : <Product/>}/>
        </Routes>

    </div>
  );
}

export default App;
