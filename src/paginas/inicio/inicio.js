import React from 'react';
import './inicio.css';

function Inicio() {
    return (
        <div id='inicio-container'>
            <h1 id='inicio-titulo'>Inicio do Counter-Strike</h1>
            <p id='inicio-texto'>
            Counter-Strike começou em 1999 como um mod criado por Minh “Gooseman” Le e Jess Cliffe usando a 
            engine de Half-Life, jogo da Valve lançado em 1998. A abertura da engine permitia que fãs criassem 
            novos conteúdos, e foi assim que surgiu a ideia de um shooter realista focado em confronto entre 
            terroristas e contra-terroristas.
            <br />
            O mod rapidamente se tornou extremamente popular, chamando a atenção da Valve, que contratou seus 
            criadores e transformou Counter-Strike em um jogo oficial em 2000. A partir daí, o título se tornou 
            um marco dos jogos de tiro e cresceu até virar uma das maiores franquias e um dos pilares dos esports no mundo.
            </p>
            
        </div>
    );
}

export default Inicio;