import '../CSS/product.css'
import Compra from '../components/Funciones'

function Info(props) {
     return (
          <>
               <div className='info'>
                    <div className="contenedorImagen">
                         <img src={props.img} alt={props.name} />
                    </div>
                    

                    <div className="datos">
                         <h1 className="titulo">{props.name}</h1>
                         <h1 className="precio">{props.precio}</h1>

                         <div className="contenedorDescripcion">
                              <p>{props.descripcion}</p>
                         </div>

                         <div className="contenedorEspecificaciones">
                              <p>{props.especificaciones}</p>
                         </div>
                    </div>

                    <div className='contenedorExtras'>
                         <span>SKU: {props.sku}</span>
                         <span>Disponibilidad: {props.stock}</span>
                    </div>
                    
                    <Compra />
               </div>

          </>
     );
}

export default Info;