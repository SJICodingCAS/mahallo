import React from 'react';
import './Performances.css'

function Performance({goToAlt, goToLevel2}){
    return (
        <div className="performances">
            <div className='performance-header'>
            <button className = 'back-button' onClick={goToAlt}>Back</button>
                <h1>Performances</h1>
                <h2 id = 'Foyer'>Foyer</h2>
                <div className="scroller">
                    <div className="image-and-text">
                        <img src = {require('../images/performers/DisBand.jpeg')} alt = 'DisBand'></img>
                        <h3>DisBand</h3>
                        <h4>10:00 - 10:30</h4>
                        <p>Treasure - Bruno Mars<br></br>What makes you beautiful - 1D<br></br>Are you bored yet? - The Wallows<br></br>Somebody to you - The Vamps<br></br>Come inside of my heart - IV of Spades</p>
                    </div>

                    <div class="image-and-text">
                        <img src = {require('../images/performers/fooligans.png')} alt = 'Fooligans'></img>
                        <h3>Fooligans</h3>
                        <h4>10:30 - 11:00</h4>
                        <p>Every Summertime - Nikki<br></br>Classic - MKTO<br></br>Sucker - Jonas Brothers<br></br>This Love - Maroon 5</p>
                    </div>

                    <div class="image-and-text">
                        <img src = {require('../images/performers/The Annexed.JPG')} alt = 'Annexed'></img>
                        <h3>The Annexed</h3>
                        <h4>11:30 - 12:00</h4>
                        <p>Get Lucky - Daft Punk<br></br>Sweather Weather - The Neighbourhood<br></br>Still Into You - Paramore<br></br>Mr Brightside - The Killers<br></br>Don't Look Back In Anger - Oasis</p>
                    </div>

                    <div class="image-and-text">
                        <img src = {require('../images/performers/C.M.I picture.png')} alt = 'CMI'></img>
                        <h3>C.M.I</h3>
                        <h4>12:00 - 12:30</h4>
                        <p>Everybody Talks - Neon Trees<br></br>She Looks so Perfect - 5SOS<br></br>From the Start - Laufey<br></br>Steal my girl - 1D</p>
                    </div>

                    <div class="image-and-text">
                        <img src = {require('../images/performers/Whiteout.jpeg')} alt = 'Whiteout'></img>
                        <h3>Whiteout</h3>
                        <h4>13:00 - 13:40</h4>
                        <p>Sweet Child o Mine - Guns n Roses<br></br>Song 2 - blur<br></br>All the Small Things - blink 182<br></br>Layla - Derek and the Dominos<br></br>Welcome to the Jungle - Guns n Roses<br></br>Learn to fly - Foo Fighters<br></br>Starman - David Bowie</p>
                    </div>

                    <div class="image-and-text">
                        <img src = {require('../images/performers/The Blueforms.jpeg')} alt = 'Blueforms'></img>
                        <h3>The Blueforms</h3>
                        <h4>13:40 - 14:20</h4>
                        <p>Paradise - Coldplay<br></br>Line without a hook - Ricky Montgomery<br></br>Runaway Baby - Bruno Mars<br></br>Good Luck Babe - Chappel roan<br></br>In My Mind - Lyn Lapid<br></br>Party in the USA - Miley Cyrus<br></br>24K Magic - Bruno Mars<br></br>shut up and dance - Walk The Moon</p>
                    </div>

                    <div class="image-and-text">
                        <img src = {require('../images/performers/sir_ahmadiah_quartet_.png')} alt = 'Ahmadiah'></img>
                        <h3>Sir AHMADIAH's Quartet</h3>
                        <h4>14:50 - 15:30</h4>
                        <p>Like a stone - Audioslave<br></br>Jeremy - Pearl Jam<br></br>Santeria - Sublime<br></br>Soul to squeeze - RHCP<br></br>Interstate love song - stone temple pilots<br></br>Everlong - Foo fighters</p>
                    </div>

                    <div class="image-and-text">
                        <img src = {require('../images/performers/The Stiffs.jpeg')} alt = 'Stiffs'></img>
                        <h3>The Stiffs</h3>
                        <h4>15:30 - 16:00</h4>
                        <p>Locked out of heaven<br></br>Billie Jean - MJ<br></br>Its my Life<br></br>Adventure of a lifetime<br></br>Cake by the ocean</p>
                    </div>
                </div>
                <h2 id = 'FounderHall'>Founder's Hall</h2>
                <div className = "scroller">
                    <div class="image-and-text">
                        <img src = {require('../images/performers/Vocal_ensemble.jpg')} alt = 'Vocal'></img>
                        <h3>Vocal Ensemble</h3>
                        <h4>11:00 - 11:30</h4>
                        <p>Come Alive - Greatest Showman<br></br>Viva La Vida - Coldplay<br></br>Atlantis - Seafret<br></br>From Now On - Greatest Showman<br></br>Pompeii - Bastille</p>
                    </div>

                    <div class="image-and-text">
                        <img src = {require('../images/performers/dance.jpg')} alt = 'Dance'></img>
                        <h3>Dance</h3>
                        <h4>12:00 - 12:30</h4>
                        <p>Sheesh - Babymonster<br></br>Not My Fault - Renee Rap, Sexy (Dance Break) - Avantika (Mean Girls Musical), Icon (Twice) Remix<br></br>Wannabe - Itzy, Loco - Itzy Remix<br></br>Nobody Knows - Kiss of Life<br></br>Treasure - Bruno Mars</p>
                    </div>

                    <div class="image-and-text">
                        <img src = {require('../images/performers/songbirds.jpg')} alt = 'Songbirds'></img>
                        <h3>The Songbirds</h3>
                        <h4>14:20 - 14:50</h4>
                        <p>When you Believe (合唱)<br></br>Never enough (合唱)<br></br>Vaga luna (沐雨-意大利)<br></br>For good (合唱-英文)<br></br>郑老师自己的中文歌</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;
