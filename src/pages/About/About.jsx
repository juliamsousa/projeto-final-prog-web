import React from 'react';
import './about.css';

import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';

import mainImage from "../../assets/graduation.jpg"
import textImage from "../../assets/monografia.jpg"
import doctorImage from "../../assets/doutorado.jpg"
import galery1 from "../../assets/galeria1.jpg"
import galery2 from "../../assets/galeria2.jpg"
import galery3 from "../../assets/galeria3.jpg"
import galery4 from "../../assets/galeria4.jpg"
import galery5 from "../../assets/galeria5.jpg"
import galery6 from "../../assets/galeria6.jpg"
import galery7 from "../../assets/galeria7.jpg"
import galery8 from "../../assets/galeria8.jpg"
import galery9 from "../../assets/galeria9.jpg"

export default function About() {

  return (
    <>
      <Header />
      <Carousel />

      <h1>Últimas Notícias</h1>

      <section className='noticias-container'>
        <div className='cards-container'>
          <section className='news-card'>
            <img
              src={mainImage}
              alt="imagem de pessoas graduando"
              className="card-image">
            </img>

            <h3>Apresentação de certificados aos egressos do curso</h3>

            <p>Hoje, em 3 de dezembro de 2020, os certificados foram concedidos na Academia de Inovações Digitais</p>
          </section>

          <section className='news-card'>
            <img
              src={doctorImage}
              alt="imagem de pessoas graduando"
              className="card-image">
            </img>

            <h3>Processo Seletivo - Vagas com bolsa para doutorado</h3>

            <p>Processo Seletivo 2023/1 - Vagas com bolsa para doutorado.</p>
          </section>

          <section className='news-card'>
            <img
              src={textImage}
              alt="imagem de pessoas graduando"
              className="card-image">
            </img>

            <h3>Agenda defesas monografias DECOM 2022-2</h3>

            <p>As bancas de defesas das disciplinas BCC392 - Monografia I e BCC393 - Monografia II</p>
          </section>
        </div>
      </section>

      <section className='noticias-container'>
        <div className='cards-container'>
          <section className='news-card'>
            <img
              src={mainImage}
              alt="imagem de pessoas graduando"
              className="card-image">
            </img>

            <h3>Apresentação de certificados aos egressos do curso</h3>

            <p>Hoje, em 3 de dezembro de 2020, os certificados foram concedidos na Academia de Inovações Digitais</p>
          </section>

          <section className='news-card'>
            <img
              src={doctorImage}
              alt="imagem de pessoas graduando"
              className="card-image">
            </img>

            <h3>Processo Seletivo - Vagas com bolsa para doutorado</h3>

            <p>Processo Seletivo 2023/1 - Vagas com bolsa para doutorado.</p>
          </section>

          <section className='news-card'>
            <img
              src={textImage}
              alt="imagem de pessoas graduando"
              className="card-image">
            </img>

            <h3>Agenda defesas monografias DECOM 2022-2</h3>

            <p>As bancas de defesas das disciplinas BCC392 - Monografia I e BCC393 - Monografia II</p>
          </section>
        </div>
      </section>

      <h1>Galeria</h1>

      <section className="galeria-container">
        <img
          src={galery1}
          alt="imagem de pessoas graduando"
          className="galery-image">
        </img>

        <img
          src={galery2}
          alt="imagem de pessoas graduando"
          className="galery-image">
        </img>

        <img
          src={galery3}
          alt="imagem de pessoas graduando"
          className="galery-image">
        </img>

        <img
          src={galery4}
          alt="imagem de pessoas graduando"
          className="galery-image">
        </img>

        <img
          src={galery5}
          alt="imagem de pessoas graduando"
          className="galery-image">
        </img>

        <img
          src={galery6}
          alt="imagem de pessoas graduando"
          className="galery-image">
        </img>

        <img
          src={galery7}
          alt="imagem de pessoas graduando"
          className="galery-image">
        </img>

        <img
          src={galery8}
          alt="imagem de pessoas graduando"
          className="galery-image">
        </img>

        <img
          src={galery9}
          alt="imagem de pessoas graduando"
          className="galery-image">
        </img>
      </section>
      <Footer />
    </>
  );
}