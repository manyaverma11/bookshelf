import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [toggle, setToggle]= useState(false)
  const [width, setWidth]= useState('')

  const showMenu = () => {
    setToggle(!toggle)
    if(toggle === true) {
      setWidth('16%');
    }else {
      setWidth('0%')
    }
  }
  
const Products = (props) => {
  const { img, title, author, price } = props.products

  return (
    <article className="products">
      <img src={img} alt={title} />
      <div className='desc'>
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h4>{price} </h4>
      <button className="cartButton" onClick={() => setCount(count + 1)}>Add to Cart</button>
      </div>
    </article>
  )
}

const products = [
  {
    img: './images/image-1.jpg',
    title: 'Interesting Facts For Curious Minds',
    author: 'By Jordan Moore',
    price: '$12.99'
  },
  {
    img: './images/image-1.jpg',
    title: 'Interesting Facts For Curious Minds',
    author: 'By Jordan Moore',
    price: '$12.99'
  },
  {
    img: './images/image-1.jpg',
    author: 'By Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    price: '$12.99'
  },
  {
    img: './images/image-1.jpg',
    author: 'By Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    price: '$12.99'
  },
  {
    img: './images/image-1.jpg',
    author: 'By Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    price: '$12.99'
  }
  
]

  return(
    <section>
      <div className="navBar">
        <div className="logo">Bookshelf.in</div>
        <div className="search">
        <div className="searchBar">
          <input type="text" name="searchingArea" id="searchInput" placeholder="Search any book" />
        </div>
        <button className="searchBarIcon">
          <img id="searchBarIconPhoto" src="\images\searchGlass.png"></img>
        </button>
        </div>
        <div className="profile">
          <div className="profileName">Profile Name</div>
          <button className="myCart" onClick={showMenu}>My Cart ({count})</button>
        </div>
      </div>
      <main>
        <div className="leftSideBar">
          <button className='filters'>Filters</button>
          <button className='brand'>Brand</button>
          <button className='items'>Items</button>
        </div>
        <div className="field">
            {products.map((products) => {
                const { img, title, price } = products
                return (
                <Products products={products} />
                )
           })}
        </div>
        <div className="rightSideBar" style={{width}}>
          <div className='cartTop'>
            <div className='cartHeading'>Cart</div>
            <img src="\images\cart_symbol.png" className='cartSymbol'></img>
            <div  className='cartCount'>({count})</div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default App
