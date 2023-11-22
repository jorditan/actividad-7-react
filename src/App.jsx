import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

const productData = {
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-whitetitanium-select?wid=940&hei=1112&fmt=png-alpha&.v=1692893981684',
    name: 'iPhone 15 Pro Max',
    precio: '$2.889.000',
    descripcion: 'Apple iPhone 15 Pro Max (1TB) - Titanio White',
    especificaciones: 'Forjado en titanio y equipado con el revolucionario chip A17 Pro, un Botón de Acción personalizable y el sistema de cámaras más potente en un iPhone',
    sku: '1F34KM3',
    stock: '6 unidades'
}

function App() {
  return (
    <>
      <Header/>
      <Main {...productData}/>
    </>
  )
}

export default App
