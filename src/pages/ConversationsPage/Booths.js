import React from 'react';
import Booth from '../../components/Booth';
import './style.css';

const Booths = () => {
    const boothData = [
        {
            img: 'https://image.ibb.co/kcDkWT/randyland.jpg',
            description: 'Randyland. May 8, 2016.'
        },
        {
            img: 'https://image.ibb.co/cZNOJ8/randyland2.jpg',
            description: 'Randyland. May 8, 2016.'
        },
        {
            img: 'https://image.ibb.co/cmmiJ8/millvale.jpg',
            description: 'Millvale Library. May 7, 2016.'
        },
        {
            img: 'https://image.ibb.co/kVbprT/market_square.jpg',
            description: 'Market Sauqre. May 5, 2016.'
        },
        {
            img: 'https://image.ibb.co/n63r5o/mara_interview.jpg',
            description: 'Zekes Coffee. May 20, 2016.'
        },
        {
            img: 'https://image.ibb.co/irend8/lili.jpg',
            description: 'Lili Cafe. May , 2016.'
        },
        {
            img: 'https://image.ibb.co/keXerT/wigle.jpg',
            description: 'Wigle Whiskey. June 4, 2016.'
        },
        {
            img: 'https://image.ibb.co/hYpLy8/icp.jpg',
            description: 'Islamic Community Center. June 3, 2016.'
        },
        {
            img: 'https://image.ibb.co/mbTr5o/jcc.jpg',
            description: 'Jewish Community Center. June 3, 2016.'
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