import React from 'react';
import Booth from '../../components/Booth';

const Booths = () => {
    const boothData = [
        {
            img: 'https://image.ibb.co/hFwHKH/Screen_Shot_2018_04_29_at_7_01_02_PM.png',
            description: 'hi mom'
        },
        {
            img: 'https://image.ibb.co/hFwHKH/Screen_Shot_2018_04_29_at_7_01_02_PM.png',
            description: 'hi mom'
        }
    ];
    const booths = boothData.map((booth) => {
        return (
            <Booth 
                key={booth.img}
                img={booth.img}
                description={booth.description}
            />
        );
    });
    return (
        <div className="booths-container">
            <div className="booths-text">
                From May through August, I set up conversation booths in different public spaces around 
                Pittsburgh. I talked to 77 individuals – each of whom had a different personal history 
                and relationship to food. The conversations were set up like a game. I asked people to play 
                Would You Rather with me about seven different taste-offs: hummus v. guacamole; Oscar Mayer 
                bologna v. mortadella; Hershey’s milk chocolate v. dark chocolate; Cheetos v. Pirate’s Booty; 
                kale v. collard greens; Twinkies and cream puffs; and mushroom and sauerkraut pierogi vs.  Chay Sũi Caõ 
                (Chinese dumplings with mushroom and sauerkraut).
            </div>
            {booths}
        </div>
    );
}

export default Booths;