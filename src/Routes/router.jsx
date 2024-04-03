 
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Home/Home/Home/Home';
import FreeTest from '../pages/FreeTest/FreeTest';

 const router  = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/free-test',
                element:<FreeTest></FreeTest>
            }
        ]
    }
]) 

export default router