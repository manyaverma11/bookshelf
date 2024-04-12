import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [toggle, setToggle]= useState(false);
  const [width, setWidth]= useState('');

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=science%20fiction&maxResults=10');
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };

  const showMenu = () => {
    setToggle(!toggle)
    if(toggle === false) {
      setWidth('16%');
    } else {
      setWidth('0%')
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const Products = ({ book }) => {
    const { volumeInfo } = book;
    const { title, authors, imageLinks } = volumeInfo;

    return (
      <article className="products">
        <img src={imageLinks?.thumbnail} alt={title} />
        <div className="desc">
          <p>{title}</p>
          <h3>By {authors ? authors.join(', ') : 'Unknown Author'}</h3>
          <h4>Price: ${Math.floor(Math.random() * 22)}</h4>
          <button className="cartButton" onClick={() => setCount(count + 1)}>
            Add to Cart
          </button>
        </div>
      </article>
    );
  };

  return (
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
          <button className="myCart" onClick={showMenu}>
            My Cart ({count})
          </button>
        </div>
      </div>
      <main>
        <div className="leftSideBar">
          <button className='filters'>Filters</button>
          <button className='genre'>Genre</button>
          <button className='publications'>Publications</button>
        </div>
        <div className="field">
          {books.map((book, index) => (
            <Products key={index} book={book} />
          ))}
        </div>
        <div className="rightSideBar" style={{width}}>
          <div className='cartTop'>
            <div className="cartSymbol"><ion-icon name="cart-outline" size="large" color='#3a3a3a'></ion-icon></div>
            <div className='cartHeading'>Cart</div>
            <div  className='cartCount'>({count})</div>
          </div>
        </div>
      </main>
      <div className='loadMore'>
        <button className='loadMoreButton'>Load more</button>
      </div>
      <div className="footer">
        <div className="contact">
          <div className="contactHeading">Contact</div>
          <div className="socialIcons">
            <a href="https://github.com/manyaverma11">
              <ion-icon name="logo-github" size="large" className="git" style={{ color: '#fff', margin: '0 16px 0 0' }}></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/manyaverma11/">
              <ion-icon name="logo-linkedin" size="large" className="linkedin" style={{ color: '#fff', margin: '0 16px 0 0' }}></ion-icon>
            </a>
            <a href="mailto:manyaverma0154@gmail.com">
              <ion-icon name="mail-outline" size="large" className="mail" style={{ color: '#fff' }}></ion-icon>
            </a>
          </div>
        </div>
        <p className="copyright">
          <a href="https://manyaverma11.github.io/Portfolio/">Coded by Manya Verma | Copyrights ©2024.</a>
        </p>
      </div>
    </section>
  );
}

export default App;
