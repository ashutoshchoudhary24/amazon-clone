import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
function App() {
  const [{}, dispatch] = useStateValue();
  // for keeping track of who signed in
   useEffect (() => {
//will only run once when the app component loads
//listener, whenever the authenctication changes it gives us the user
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser);
    if (authUser){
      // user just logged in/ the user was logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    } else{
      //the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
    }
   )}, [])
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>Hello Ashutosh, let's build the Amazon Store clone 🎈 </h1> */}
        {/* Header */}
        {/* Home */}
        <Header/>
        <Routes>
        <Route path='/login' element={<Login />}>
              
          </Route>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
