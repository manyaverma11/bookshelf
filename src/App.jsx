import { useState } from 'react'
import { FaBeer } from "react-icons/fa";
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
      <h4>By {author}</h4>
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
    title: 'Fourth Wing (The Empyrean, 1)',
    author: 'Rebecca Yarros',
    price: '13.39'
  },
  {
    id: 4,
    img: './images/image-4.jpg',
    title: 'Get It Together: Troubling Tales from the Liberal Fringe',
    author: 'Jesse Watters',
    price: '18.98'
  },
  {
    id: 5,
    img: './images/image-5.jpg',
    title: 'The Anarchist Cookbook',
    author: 'William Powell',
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
          <ion-icon name="search-outline" id="searchBarIconPhoto"></ion-icon>
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
          <button className='genre'>Genre</button>
          <button className='publications'>Publications</button>
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
            <ion-icon name="cart-outline" className='cartSymbol'></ion-icon>
            <div  className='cartCount'>({count})</div>
          </div>
        </div>
      </main>
      <div className='loadMore'>
        <button className='loadMoreButton'>Load more</button>
      </div>
      <div className='footer'>
        <div className='contact'>
          <div className='contactHeading'>Contact</div>
          <div className='socialIcons'>
            <a href="https://github.com/manyaverma11">
            <ion-icon name="logo-github" size="large" className='git' style={{margin: '0 0 0 0'}}></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/manyaverma11/"><ion-icon name="logo-linkedin" size="large" className='linkedin'></ion-icon>
            </a>
            <a href="mailto:manyaverma0154@gmail.com">
            <ion-icon name="mail-outline" size="large" className='mail'></ion-icon>
            </a>
          </div>
        </div>
        <p className='copyright'>
          <a href='https://manyaverma11.github.io/Portfolio/'>Coded by Manya Verma | Copyrights ©2024.</a>
        </p>
      </div>
    </section>
  )
}

export default App
