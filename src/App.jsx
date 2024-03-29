import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [toggle, setToggle]= useState(false)
  const [width, setWidth]= useState('')

  const showMenu = () => {
    setToggle(!toggle)
    if(toggle === false) {
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
      <h3>By {author}</h3>
      <h4>${price} </h4>
      <button className="cartButton" onClick={() => setCount(count + 1)}>Add to Cart</button>
      </div>
    </article>
  )
}

const products = [
  {
    id: 1,
    img: './images/image-1.jpg',
    title: 'Interesting Facts For Curious Minds',
    author: 'Jordan Moore',
    price: '12.99'
  },
  {
    id: 2,
    img: './images/image-2.jpg',
    title: 'The Woman in the Woods (Costa Family Book 8)',
    author: 'Jessica Gadziala',
    price: '18.77'
  },
  {
    id: 3,
    img: './images/image-3.jpg',
    author: 'Rebecca Yarros',
    title: 'Fourth Wing (The Empyrean, 1)',
    price: '13.39'
  },
  {
    id: 4,
    img: './images/image-4.jpg',
    author: 'Jesse Watters',
    title: 'Get It Together: Troubling Tales from the Liberal Fringe',
    price: '18.98'
  },
  {
    id: 5,
    img: './images/image-5.jpg',
    author: 'William Powell',
    title: 'The Anarchist Cookbook',
    price: '20.04'
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
      <div className='loadMore'>
        <button className='loadMoreButton'>Load more</button>
      </div>
      <div className='footer'>
        <div className='contact'>contact</div>
        <p className='copyright'>Coded by Manya Verma | Copyrights ©2024.</p>
      </div>
    </section>
  )
}

export default App
