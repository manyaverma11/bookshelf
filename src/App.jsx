import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Products = (props) => {
  const { img, title, price } = props.products

  return (
    <article className="products">
      <img src={img} alt={title} />
      <div classNmae='desc'>
      <h2>{title}</h2>
      <h4>{price} </h4>
      </div>
      <button className="cartButton">Add to Cart</button>
    </article>
  )
}

const products = [
  {
    img: './images/image-1.jpg',
    title: 'Interesting Facts For Curious Minds',
    price: '$12.99'
  },
  {
    img: './images/image-1.jpg',
    title: 'Interesting Facts For Curious Minds',
    price: '$12.99'
  },
  {
    img: './images/image-1.jpg',
    title: 'Interesting Facts For Curious Minds',
    price: '$12.99'
  },
  {
    img: './images/image-1.jpg',
    title: 'Interesting Facts For Curious Minds',
    price: '$12.99'
  },
  {
    img: './images/image-1.jpg',
    title: 'Interesting Facts For Curious Minds',
    price: '$12.99'
  }
  
]

function App() {

  return(
    <section>
      <div className="navBar">
        <div className="logo">PRACTICE-PROJECT</div>
        <div className="search">
        <div className="searchBar">
          <input type="text" name="" id="searchInput" />
        </div>
        <button className="searchBarIcon">glass</button>
        </div>
        <div className="profile">
          <div className="profileName">ProfileNAme</div>
          <button className="profilePic">ProfilePic</button>
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
        <div className="rightSideBar">hola</div>
      </main>
    </section>
  )
}

export default App
