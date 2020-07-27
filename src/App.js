import React from 'react';
import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div style={{background: '#141414'}}>
      <Menu />
      <BannerMain 
        videoTitle={'O que é o Fascismo'}
        url={'https://www.youtube.com/watch?v=mTa9cotr0HA'}
        videoDescription={'Buscaremos sintetizar de forma introdutória e rasteira o conceito de Fascismo'}
      />
      <Carousel 
        category={dadosIniciais.categorias[0]}
      />
      <Carousel 
        category={dadosIniciais.categorias[1]}
      />
      <Carousel 
        category={dadosIniciais.categorias[2]}
      />
      <Carousel 
        category={dadosIniciais.categorias[3]}
      />
      <Carousel 
        category={dadosIniciais.categorias[4]}
      />
      <Carousel 
        category={dadosIniciais.categorias[5]}
      />
      <Footer />
    </div>
  );
}

export default App;
