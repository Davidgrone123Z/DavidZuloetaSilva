const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoVentadetallePage = () => {

    let { id } = useParams();

    const [productos, setProductos] = useState([])
    const [idProducto, setidProducto] = useState('')
   

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/ventadetalles',
            entity: {
                venta: 'http://localhost:8080/api/ventas/'+id,
                producto: 'http://localhost:8080/api/productos/'+idProducto,
                },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/productos'
        }).done(response=>{
            setProductos(response.entity._embedded.productos)
        })
        
    },[])

    return (
        <>
            <h1>Nuevo Ventadetalle</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='producto'>Producto </label>
                <select name="producto" id="producto" onChange={(e)=>{setidProducto(e.target.value)}}>
                    {productos.map(producto => {	
                        const value = producto._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{producto.nombre}]</option>
                        )
                    })}
                </select><br />

                <input type="submit" value="Nuevo Ventadetalle" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoVentadetallePage;