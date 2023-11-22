import { useState} from "react";


function Compra() {
     const [mensaje, setMensaje] = useState('');

     const mostrarResultado = () => {
          setMensaje('Gracias por su compra')

          setTimeout(() => {
               setMensaje('')
          }, 3000);
     }


     return (
          <>
               <button id="botonCompra" onClick={mostrarResultado}>Comprar</button>
               <p id="resultado">{mensaje}</p>
          </>
     );
}

export default Compra;