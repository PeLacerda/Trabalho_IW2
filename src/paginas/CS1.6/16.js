import React from 'react';
import { Link } from 'react-router-dom';
import './16.css';

function CS16() {
    return (
        <>
        <header id='cs16-header'>
            <h1>Counter-Strike 1.6</h1>
            <nav id='cs16-nav'>
                <Link to="/">
                    <button className='cs16-button'>Início</button>
                </Link>
                <Link to="/csgo">
                    <button className='cs16-button'>CS-GO</button>
                </Link>
                <Link to="/cs2">
                    <button className='cs16-button'>CS-2</button>
                </Link>
            </nav>
        </header>

        <div id='cs16-container'>
            <h2 id='cs16-titulo'>A era dourada das LAN houses</h2>
            <p id='cs16-texto'>
                Lançado oficialmente em 2000, o Counter-Strike 1.6 consolidou a fórmula do FPS competitivo com mapas icônicos como Dust2 e Nuke.
                O cenário cresceu em campeonatos locais e internacionais, alimentado pelas LAN houses que popularizaram o jogo no Brasil.
                <br />
                Equilíbrio entre economia, estratégia e execução rápida fez do 1.6 uma referência de design até hoje.
            </p>
        </div>
        </>
    );
}

export default CS16;
