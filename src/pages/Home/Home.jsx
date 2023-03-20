import React from 'react';

import "./home.css"
import Header from '../Header/Header';
import mainImage from "../../assets/graduation.jpg"

function Home() {

  return (
    <section className='container'>
      <Header />
      <main>
        <aside className="image-section">
          <img
            src={mainImage}
            alt="imagem de pessoas graduando"
            className="main-image">
          </img>
        </aside>

        <section className="text-section">
          <h1>Departamento de Ciência da Computação - Universidade Federal de Ouro Preto</h1>
          <p className="about-text">
            No mês de dezembro de 2022, foram
            concedidos certificados aos graduados do curso
            de <strong>Desenvolvimento Frontend</strong> da Academia de
            Inovações Digitais.

            Parabéns aos formandos do curso de <em> desenvolvimento web</em> pela conclusão da
            formação e pela apresentação de certificados!
          </p>

          <p className="about-text">
            Não podemos ficar por aqui, temos de continuar
            a avançar e a explorar novas tecnologias.
            Desejamos a todos os graduados do curso sucesso para
            alcançar todos os seus objetivos!
          </p>

          <p className="about-text">
            <strong> Venha fazer parte dessa equipe!</strong>
          </p>
        </section>
      </main>
    </section>
  );
}

export default Home;