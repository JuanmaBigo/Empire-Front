import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import Museum from './Museum/Museum';
import MuseumTour from './TourMuseum/TourMuseum';
import Service from './Service/Service';
import Vehicles from './Vehicles/Vehicles';
import Contact from './Contact/Contact'
import SelectModel from './SelectModel/SelectModel';
import ContactUs from './ContactUs/ContactUs';
import Details from './Details/Details';
import Carrito from './Carrito/Carrito';
import Custome from './Custome/Custome'
import CompletedPurchase from './CompletedPurchase/CompletedPurchase'
import OrdersUsers from './OrdersUsers/OrdersUsers';



import AIEngine from './AIEngine/AIEngine';
import { createBrowserRouter } from "react-router-dom"
import AddStock from './AddStock/AddStock';



//let token = localStorage.getItem('token')

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { path: '', element: <Welcome /> },
        ]
    },
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {path:'home', element: <Home/>},
            {path:'register', element: <Register />},
            {path:'signin', element: <Login />},
            {path:'art&culture', element: <Museum/>},
            {path:'art&culture/museum-tour', element: <MuseumTour/>},
            {path:'services', element: <Service/>},
            {path:'services/contact', element: <Contact/>},
            {path:'services/contact-us', element: <ContactUs />},
            {path:'vehicles', element: <Vehicles/>},
            {path:'details/:id',element:<Details/>},
            {path:'cart', element: <Carrito />},
            {path:'select-model', element: <SelectModel/>},
            {path:'details/:id/customize', element: <Custome/>},
            {path:'AIEngine', element: <AIEngine />},
            {path: 'completed-purchase', element: <CompletedPurchase/>},
            {path: 'add-stock', element: <AddStock/>},
            {path: 'orders', element: <OrdersUsers/>},
        ]
    } 
    
])