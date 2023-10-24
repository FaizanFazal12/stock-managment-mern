import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import UpdateProductForm from './components/UpdateProduct';
import Login from './components/Login';
import Signup from './components/Signup';
import Protected from './components/Protected';
import Product from './components/Product';
import { useEffect, useState  } from 'react';
import { autoLogin } from './api/internal';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store/userSlice';

function App() {
  const dispatch = useDispatch();
 const [isLoading, setIsLoading] = useState(true); 
  const isAuth = useSelector(state => state.user.auth);

  useEffect(() => {
    async function AutoLogin() {
      const response = await autoLogin()
      if (response.status === 200) {
        const user = {
          _id: response.data.user._id,
          email: response.data.user.email,
          username: response.data.user.username,
          auth: response.data.success,
        };
        dispatch(setUser(user));
      }
      setIsLoading(false);
   
    }
    AutoLogin();
  }, []);

  if (isLoading) {
  return null
  }
  return (
    <Router>
      <Navbar isAuth={isAuth}/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          exact
          element={
            <Protected isAuth={isAuth}>
              <div>
                <Product />
              </div>
            </Protected>
          }
        />
        <Route
    path="/update/:id"
    exact
    element={
      <Protected isAuth={isAuth}>
        <UpdateProductForm />
      </Protected>
    }
  />
      </Routes>
    </Router>
  );
}

export default App;
