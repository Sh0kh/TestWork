import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import Trend from './Pages/Trend';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Movies from './Pages/Movies';
import TV from './Pages/TV';
import Save from './Pages/Save';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Trend/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signUp',
        element:<SignUp/>
      },
      {
        path:'/movies',
        element:<Movies/>
      },
      {
        path:'/tv',
        element:<TV/>
      },
      {
        path:'/saved',
        element:<Save/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
