const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');


const NuevoProductoPage = require('./pages/nuevo-producto');
const VerProductoPage = require('./pages/ver-producto');
const EditarProductoPage = require('./pages/editar-producto');
const VerVentaPage = require('./pages/ver-venta');
const NuevoVentadetallePage = require('./pages/nuevo-ventadetalle');
const HomePage = require('./pages/home');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	
	{ path: '/nuevo-producto', element: <NuevoProductoPage /> },
	{ path: '/ver-producto/:id', element: <VerProductoPage /> },
	{ path: '/editar-producto/:id', element: <EditarProductoPage /> },
	{ path: '/ver-venta/:id', element: <VerVentaPage /> },
	{ path: '/ver-venta/:id/nuevo-ventadetalle', element: <NuevoVentadetallePage /> }
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
