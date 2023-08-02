import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends.jsx';
import Home from './components/Home/Home.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/friends',
        element: <Friends />,
        loader: () => {
          return fetch('https://jsonplaceholder.typicode.com/users');
        },
      },
      {
        path: '/friendDetails/:friendId',
        element: <FriendDetails />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path:'/hello',
    element: <div>Hello page</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
