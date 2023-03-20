import React from 'react';

import "./decom.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import coverImage from "../../assets/decom-cover.jpg"

function Decom() {

  return (
    <section className='container'>
      <Header />
      <main>
        <img
          src={coverImage}
          alt="imagem de pessoas graduando"
          className="main-image">
        </img>

        <section className="text-section">
          <h1>Boas-vindas ao Departamento de Ciência da Computação!</h1>
          <p className="decom-text">
            O Departamento de Computação (DECOM) da UFOP vem a cada ano aprimorando suas atividades
            de ensino e pesquisa em Computação, desde a sua criação em 1995. Esta base de
            informações apresenta diversos dados sobre nosso departamento, tais como o seu quadro
            de professores e técnicos, relação de alunos, cursos oferecidos, infra-estrutura
            disponível, projetos de pesquisa, consultorias e projetos de de extensão.

          </p>

          <p className="decom-text">
            O curso de Bacharelado em Ciência da Computação da UFOP, criado em 1993, visa formar
            o profissional capaz de atuar, com competência, no projeto, desenvolvimento e
            administração de sistemas de computação, bem como em pesquisas nas diversas áreas da
            computação.
          </p>

          <p className="decom-text">
            A grade curricular do curso compreende um conjunto de disciplinas obrigatórias que
            enfocam o estudo de algoritmos e sua implementação, os fundamentos matemáticos para a
            computação, e as diversas metodologias e técnicas ligadas à especificação, modelagem,
            implementação, teste e avaliação de sistemas de software.
          </p>

          <p className="decom-text">
            O Colegiado de Ciência da Computação, COCIC, é responsável pela coordenação didática das atividades constituintes do projeto pedagógico da graduação em Ciência da Computação.
          </p>
          
          <p className="decom-text">
            No site do COCIC, são apresentadas informações úteis aos alunos, tais como, membros
            do COCIC, descrição das competências do colegiado, matriz curricular do cuso de
            Bacharelado em Ciência da Computação, áreas de atuação para os alunos formados nesse
            curso, dados sobre requerimentos que são apreciados pelo colegiado e especificados
            pleos alunos, dicas para estudo e integração ao ambiente universitário, ENADE
            (Exame Nacional de Desempenho de Estudantes), entre outras.
          </p>
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default Decom;