import React from 'react'
import './App.css'
import './configHost.js'
import Museum from './pages/Museum/Museum'

/* import { router } from './pages/index'
import { RouterProvider } from 'react-router-dom'
import {store} from './store/store'
import { Provider } from 'react-redux'; */



//import Home from './pages/Home/Home.jsx'  // ----- viazualizacion momentanea
import Principal from './pages/Principal/Principal' //----- viazualizacion momentanea



function App() {

	return (

		<>
			{/* <Provider store={store}>
				<RouterProvider router={router} />
			</Provider> */}
			 {/* <Home/>  */}
			 <Principal/> 
			{/* <Museum/> */}
	
		</>


	)
}

export default App