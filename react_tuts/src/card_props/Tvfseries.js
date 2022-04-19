import React from 'react';
import Card from './Card';
import kota from "./Images/kota.jpg";
import Pitchers from "./Images/Pitchers.jpg";

const link1="https://tvfplay.com/show/tvfs-kota-factory/588";
const link2="https://tvfplay.com/show/tvf-pitchers/1";
const link3="https://tvfplay.com/show/cubicles/667";
const link4="https://www.youtube.com/watch?v=0Kl1ucZuSZ8";
const link5="https://tvfplay.com/show/tvfs-gullak/627";
const Tvfseries = () => {
    return (
        <>
        <h1><center>TOP 5 BEST WEB ⏯️</center></h1> 
        <Card 
            images={kota}
            title="Kota Factory"
            source="Youtube"
            seasons="1"
            link={link1}
        />
        <Card 
            images={Pitchers}
            title="Pitchers"
            source="Youtube"
            seasons="1"
            link={link2}
        />
        <Card 
            images={kota}
            title="cubicles"
            source="Youtube"
            seasons="1"
            link={link3}
        />
        <Card 
            images={kota}
            title="Aspirants"
            source="Youtube"
            seasons="1"
            link={link4}
        />
        <Card 
            images={kota}
            title="Gullak"
            source="Sony Live"
            seasons="2"
            link={link5}
        />
        </>
    )
}

export default Tvfseries;