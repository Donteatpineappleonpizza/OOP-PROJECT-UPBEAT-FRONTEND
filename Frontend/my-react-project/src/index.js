import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Firstpage from './pages/firstpage/Firstpage';
import Howpage from './pages/howpage/Howpage';
import Character from './pages/select1/Character';
import PlayPage from './pages/playpage/Playpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Firstpage/>,
  },{
    path: "/how",
    element: <Howpage/>,
  },{
    path: "/character",
    element: <Character/>,
  },{
    path: "/play",
    element: <PlayPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
