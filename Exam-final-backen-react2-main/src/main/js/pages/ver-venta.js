const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerVentaPage = () => {

    let { id } = useParams();
    const [venta, setventa] = useState({});
    const [ventadetalles, setVentadetalles] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/ventas/' + id
        }).done(response => setventa(response.entity))
        client({
            method: 'GET',
            path: '/api/ventas/' + id + '/formacion'
        }).done(response => setVentadetalles(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Venta</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{venta.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Formación</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>

                    {ventadetalles.map(ventadetalle => {
                        return (
                            <tr key={ventadetalle.ID}>
                                <td>{ventadetalle.PRODUCTO}</td>
                                <td>{ventadetalle.PRECIO}</td>
                                
                            </tr>
                        )
                    })}
                </tbody>
                
            </table>
                    
            <hr />
            <Link to={`/ver-venta/${id}/nuevo-ventadetalle`}>Nuevo Ventadetalle</Link> |        
            <Link to="/">Volver</Link>
         </>
    )

}

module.exports = VerVentaPage;