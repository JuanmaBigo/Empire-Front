import React from 'react'

import MainLayout from '../layouts/MainLayout/MainLayout'
// import Index from "./Index/Index";

//import { Navigate } from 'react-router-dom';

import { createBrowserRouter } from "react-router-dom"
import Home from './Home/Home';

//let token = localStorage.getItem('token')

export const router = createBrowserRouter([
    
    // {
    //     path:'/',
    //     element: <IndexLayout/>,
    //     children:[
    //         {path:'/',element:<Index/>},
    //         {path:'/hero',element:<Hero/>},
    //         {path:'/auth',element:<AuthForm/>}
    //     ]
    // },
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            // {path:'register',element : <AuthForm />},
            // {path:'signin',element : <AuthForm />},
            {path:'home',element : <Home />}
        ]
    } 
    
])