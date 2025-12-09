import React from 'react';
import { Link } from 'react-router-dom';
import './cs2.css';

function CS2() {
    return (
        <>
        <header id='cs2-header'>
            <h1>Counter-Strike 2</h1>
            <nav id='cs2-nav'>
                <Link to="/">
                    <button className='cs2-button'>Início</button>
                </Link>
                <Link to="/cs16">
                    <button className='cs2-button'>CS 1.6</button>
                </Link>
                <Link to="/csgo">
                    <button className='cs2-button'>CS-GO</button>
                </Link>
            </nav>
        </header>

        <div id='cs2-container'>
            <h2 id='cs2-titulo'>O salto tecnológico do Source 2</h2>
            <p id='cs2-texto'>
                CS2 atualiza o clássico com a engine Source 2, visuais renovados, granadas dinâmicas e servidores tickless.
                A movimentação e a clareza visual foram refinadas para deixar o jogo mais responsivo sem perder o DNA tático.
                <br />
                A transição mantém o ecossistema competitivo, trazendo novas ferramentas para a comunidade e para os esports.
            </p>
        </div>
        </>
    );
}

export default CS2;