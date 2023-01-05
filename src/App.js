import Navigation from './components/Navigation';
import Home from './sections/Home';
import About from './sections/About';
import Products from './sections/Products';
import Contact from './sections/Contact Us';
import Footer from './sections/Footer';
import Team from "./sections/Team";
import './index.css';

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
        <div>
            <Navigation id='navbar'/>
            <div className='mt-5' style={{paddingBottom: '120px'}}>
                <Home id='home'/>
                <div
                    style={{
                        backgroundColor: '#fff5e8',
                    }}
                >
                    <About id='about'/>
                </div>
                <Products id='products'/>
                <div
                    style={{
                        backgroundColor: '#fff5e8',
                    }}
                >
                    <Team id={'team'}/>
                </div>
                <Contact id='contactus'/>
            </div>
            <Footer/>
            <button onClick={topFunction} id='toTop' title='Go to top'>
                <i className='fa-solid fa-arrow-up fa-lg'></i>
            </button>
            <a href={'https://api.whatsapp.com/send?phone=6289607192900'} target={"_blank"} id='wabutton'>
                <i className='fa-brands fa-lg fa-whatsapp'></i>
            </a>
        </div>
    );
}

export default App;
