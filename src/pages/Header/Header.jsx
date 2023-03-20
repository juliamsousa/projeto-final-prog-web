import React from 'react';

import "./header.css"
import logo from "../../assets/decom-logo.png"

export default function Header() {

  return (
    <section className='container'>
      <header>
        <nav className="navegacao">
          <img
            src={logo}
            alt="imagem de pessoas graduando"
            className="main-logo">
          </img>

          <ul>
            <li className="referencia">
              <a href="#about" className="referencia">Início</a>
            </li>

            <li className="referencia">
              <a href="#div-slider" className="referencia">DECOM</a>
            </li>

            <li className="referencia">
              <a href="#company" className="referencia">Notícias</a>
            </li>

            <li className="referencia">
              <a href="#gallery" className="referencia">Pessoal</a>
            </li>

            <li className="referencia">
              <a href="#submit" className="referencia">Ensino</a>
            </li>

            <li className="referencia">
              <a href="#submit" className="referencia">Pesquisa</a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}