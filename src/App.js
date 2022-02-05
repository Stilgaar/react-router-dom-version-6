import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'


// en V5, toutes les routes étaient entre les switch. A la base il était la pour pas que toutes les routes soient au même niveau. Enfin qu'il sache, justement, que ce serait bien de swich entre les routes
// qu'on a mis à l'interieur. Tu me suis ? Mais attention c'est pas des balises en moins, le <Switch> tu le remplaces par un <Routes>
// en V6 on a plus besoin du exact, c'est toujours exact maintenant, à se demander pourquoi on s'est fait chier avant au final. 
// dans la route, on laisse tomber l'écriture fastidieuse et un peu longue et on écris toujours comme ça <Route path="/versou" element={<ElementJSX />} />
// pour des raisons aussi, ça, c'est possible : <Route path='/test' element={(<div><h2>Test</h2></div>)} />
// on laisse tomber une écriture de la redirection automatique. Bon je ne savais pas que ça existait de base, mais c'est toujours cool de l'apprendre en plus : 
// <Route path="/redirect" element={<Navigate to='/about' />} /> ne pas oublier d'importer <Navigate /> dans l'import du react router dom

// on peut bien sur encore faire de l'affichage conditionnel, je l'avais pas du tout fait comme ça dans uppertown (encore un truc à checker ?) mais en l'occurence ça s'écris maintenant donc comme ça :
// <Route path='/checkout'element={cartIsEpty ? <Navigate to="/products" /> : <p>Checkout</p>}/>

// dans la V6 on utilise plus le useHistory mais le useNavigate
// du coup on va l'écrire comme ça par exemple : 
// import { useNavigate } from 'react-router-dom'
// const navigate = useNavigate()
// puis on va l'écire plutot comme ça : 
// navigate('/link')

function App() {


  const [cartIsEpty] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about/*">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />  {/* nested route avec l'asterix, match chaque chemin après /about/, pour voir la suite allez dans about.js */}
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/redirect" element={<Navigate to='/about' />} />

          <Route path='/checkout' element={cartIsEpty ? <Navigate to="/products" /> : <p>Checkout</p>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App