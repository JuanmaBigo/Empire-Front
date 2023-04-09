import React from 'react'
import './App.css'
import './configHost.js'
import Museum from './pages/Museum/Museum'
import Service from './pages/Service/Service'

/* import { router } from './pages/index'
import { RouterProvider } from 'react-router-dom'
import {store} from './store/store'
import { Provider } from 'react-redux'; */



//import Home from './pages/Home/Home.jsx'   ----- viazualizacion momentanea
//import Principal from './pages/Principal/Principal' ----- viazualizacion momentanea
// import Register from './pages/Register/Register'
// import Login from './pages/Login/Login'
import Contact from './pages/Contact/Contact'

import MuseumTour from './pages/TourMuseum/TourMuseum' 
import Vehicles from './pages/Vehicles/Vehicles'



function App() {

	return (

		<>
			{/* <Provider store={store}>
				<RouterProvider router={router} />
			</Provider> */}
			{/* <Home/> */}
			{/* <Principal/> */}
			{/* <Register/> */}
			{/* <Login /> */}
			<Contact />
			{/* <Museum /> */}
			{/* <MuseumTour/> */} 
			{/* <Service/> */}
			{/* <Vehicles/> */}

		</>
		

	)
}

export default App