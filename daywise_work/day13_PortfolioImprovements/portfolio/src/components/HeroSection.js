import React from 'react';
import '../App.css';
import './HeroSection.css';
import ScriptTag from 'react-script-tag';

function HeroSection() {
  return (
    <div className='hero-container'>
      <section className="container">
        <div className="content">
         <div className="topframe">
             
         <img className="mainimage2" src="/images/HatchfulExport-All/logo_transparent.png"></img>
         <div className="herotext">
            <h1>My Projects</h1>
            <p>Please scroll down</p>
            <p>Use login id and password as "amesh".</p>
            </div>
            </div>
        </div>
    </section>
    <section className="container">
        <div className="content">
            <div className="frame">
            <h1>Project 1</h1>
            <h2>
                <a href="https://ameshalexk.github.io/minesweeper/?reload" target="_blank" rel="noopener noreferrer">
                    Minesweeper
                </a>
            </h2>
            <video id="chartjs" src='/videos/minesweeper.mp4' autoPlay loop muted playsInline width="800" height="350" />
            </div>
        </div>
    </section>
    <section className="container">
        <div className="content">
            <div className="frame">
            <h1>Project 2</h1>
            <h2>
                <a href="https://tapparel.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                T-Apparel - A T-shirt website
                </a>
                </h2>
            <video id="chartjs" src='/videos/tapparel.mp4' autoPlay loop muted playsInline width="800" height="350"/>
            </div>
        </div>
    </section>
    <section className="container">
        <div className="content">   
            <div className="frame">
            <h1>Project 3</h1>
            <h2>
                <a href="https://coinstanceapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                Coinstance - A Cryptocurrency trading platform
                </a>
                </h2>
            <video id="chartjs" src='/videos/coinstance.mp4' autoPlay loop muted playsInline width="800" height="350"/>
            </div>
        </div>
    </section>
    <section className="container">
        <div className="content">
            <div className="frame">
            <h1>Project 4</h1>
            <h2>
                <a href="https://covidmapper.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                CovidMapper - A map that shows realtime covid stats.
                </a>
                </h2>
            <video id="chartjs" src='/videos/covidmapper.mp4' autoPlay loop muted playsInline width="800" height="350"/>
            </div>
        </div>
    </section>
    {/* <section className="container">
        <div className="content">
        <div className="frame">
        <h1>Some other projects</h1>
        <video id="chartjs" src='/videos/chartjs.mp4' autoPlay loop muted />
        <video id="chartjs" src='/videos/chartjs.mp4' autoPlay loop muted />
        </div>
        </div>
    </section> */}

    <div id="set-height">

    <video id="v0" tabIndex="0" autobuffer="autobuffer" preload="preload">
        <source type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' src="videos/fingers.mp4"></source>
    </video>
    <ScriptTag type="text/javascript" defer={true} src="videos/sticky2.js" />
    {/* <ScriptTag type="text/javascript" src="videos/sticky.js" /> */}

        
    </div>
    
    </div>
  );
}
  
export default HeroSection;
