import React from 'react';

import "./header.css"
import logo from "../../assets/decom-logo.png"
import { Link } from "react-router-dom";

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
              <Link to="/inicio" className="referencia">Início</Link>
            </li>

            <li className="referencia">
              <Link to="/decom" className="referencia">DECOM</Link>
            </li>

            <li className="referencia">
              <Link to="/noticias" className="referencia">Notícias</Link> 
            </li>

            <li className="referencia">
              <Link to="/pessoal" className="referencia">Pessoal</Link> 
            </li>

            <li className="referencia">
              <Link to="/ensino" className="referencia">Ensino</Link>   
            </li>

            <li className="referencia">
              <Link to="/pesquisa" className="referencia">Pesquisa</Link>     
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}