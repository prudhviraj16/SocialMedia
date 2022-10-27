import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from './components/navBar/Navbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Leftbar from "./components/leftBar/Leftbar";
import Rightbar from "./components/rightBar/Rightbar";
import { useSelector } from 'react-redux';
import {useState,useEffect} from 'react'
import "./style.scss";


function App() {
  const currentUser = true

  const mode = useSelector((state)=>state.mode)

 
  const Layout = () => {



    return (
      <div> 
        <Navbar />
        <div style={{ display: "flex" }}>
            <Leftbar />
            <div style={{flex : 6}}>
              <Outlet />
            </div>
            <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;