import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './home/navbar';
import Home from './home/home.js';
import CenterBgLogo from './home/centerBgLogo.jsx';
import Details from './home/details';
import ImageSlider from './home/imageSlider';
import RightNavbar from './home/rightNavbar';
import Footer from './home/footer';
import { useState } from 'react';
import About from './about/About';
import Gallery from './gallery/Gallery';
const root = ReactDOM.createRoot(document.getElementById('root'));
const images = [
  'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-3/5251/1693556345148/front-left-side-47.jpg?imwidth=890&impolicy=resize',
  'https://media.istockphoto.com/id/1213638251/photo/tesla-model-3-performance.jpg?s=612x612&w=0&k=20&c=PEnlGCEQV_axZQVMyXdF_FXZhM_xOnswyz4Igh9x6Xc=',
  'https://media.istockphoto.com/id/1138625657/photo/tesla-model-3.jpg?s=612x612&w=0&k=20&c=xsHcKaYiXa9eycMfYzHcfwRF-MPXQfb9yHS6M6AkniA=',
];
function App() {
    const [page,setPage]=useState();
    let component;
    if(page=='about'){
        component=<><Navbar />
        <About/>
        <CenterBgLogo />
        <RightNavbar page={page} setPage={setPage} />
        <Footer />
        </>;
    }else if(page=='gallery'){
      component=<><Navbar />
      <Gallery/>
      <CenterBgLogo />
      <RightNavbar page={page} setPage={setPage} />
      </>;
    }else{
        component = (
            <>
              <Navbar />
              <Home />
              <CenterBgLogo />
              <Details />
              <RightNavbar page={page} setPage={setPage} />
              <ImageSlider images={images} />
              <Footer />
            </>
          );
    }
  return (
    <div>
    {component}
    </div>
  )
}

export default App