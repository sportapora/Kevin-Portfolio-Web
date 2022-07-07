import Navigation from './components/Navigation';
import Home from './sections/Home';
import About from './sections/About';
import Products from './sections/Products';
import Contact from './sections/Contact Us';
import Footer from './sections/Footer';

function App() {
  window.onscroll = function () {
    const navigation = document.getElementById('navbar');
    const heading = document.getElementById('main-heading');
    const mybutton = document.getElementById('toTop');
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const products = document.getElementById('products');

    if (window.pageYOffset >= heading.offsetTop) {
      navigation.style.opacity = '0';
    } else {
      navigation.style.opacity = '100%';
    }

    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }

    if (window.pageYOffset >= heading.offsetTop) {
      home.style.opacity = '100%';
    } else {
      home.style.opacity = '0';
    }

    if (window.pageYOffset >= about.offsetTop) {
      about.style.opacity = '100%';
    } else {
      about.style.opacity = '0';
    }

    if (window.pageYOffset >= products.offsetTop) {
      products.style.opacity = '100%';
    } else {
      products.style.opacity = '0';
    }
  };

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div style={{ fontFamily: 'Source Serif Pro' }}>
      <Navigation id='navbar' />
      <div className='mt-5' style={{ paddingBottom: '120px' }}>
        <Home id='home' />
        <div
          style={{
            backgroundColor: '#292524',
            color: '#f0f0f0',
          }}
        >
          <About id='about' />
        </div>
        <Products id='products' />
        <Contact id='contactus' />
      </div>
      <Footer />
      <button onClick={topFunction} id='toTop' title='Go to top'>
        <i className='fa-solid fa-arrow-up fa-lg'></i>
      </button>
    </div>
  );
}

export default App;
