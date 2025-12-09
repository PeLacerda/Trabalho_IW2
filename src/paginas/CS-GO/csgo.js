import React from 'react';
import { Link } from 'react-router-dom';
import './csgo.css';

function CSGO() {
    return (
        <>
        <header id='csgo-header'>
            <h1>Counter-Strike: Global Offensive</h1>
            <nav id='csgo-nav'>
                <Link to="/">
                    <button className='csgo-button'>Início</button>
                </Link>
                <Link to="/cs16">
                    <button className='csgo-button'>CS 1.6</button>
                </Link>
                <Link to="/cs2">
                    <button className='csgo-button'>CS-2</button>
                </Link>
            </nav>
        </header>

        <div id='csgo-container'>
            <h2 id='csgo-titulo'>A transição para o Source</h2>
            <p id='csgo-texto'>
                Lançado em 2012, CS:GO trouxe o motor Source atualizado, skins e um sistema de matchmaking
                que impulsionou a cena competitiva mundial. Foi o título que consolidou o formato Major e
                popularizou o game para uma nova geração.
                <br />
                O metagame evoluiu com mapas redesenhados, arsenal refinado e economia mais previsível, mantendo
                o espírito do Counter-Strike clássico com um visual moderno.
            </p>
        </div>
        </>
    );
}

export default CSGO;