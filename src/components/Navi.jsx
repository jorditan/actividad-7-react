import 'typeface-montserrat'
import '../CSS/nav.css';

const menuOptions = ['Inicio', 'Nosotros', 'Servicios', 'Contacto'];


function Navi() {
     return (
          <>
               <nav>
                    <ul>
                         {
                              menuOptions.map((option) => {
                                   return (
                                        <li key={option}><a href="#">{option}</a></li>
                                   )
                              })
                         }
                    </ul>
               </nav>
          </>
     );
}

export default Navi;