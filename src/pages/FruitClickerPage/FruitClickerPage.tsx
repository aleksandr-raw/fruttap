import {FC, useState} from 'react';

import './FruitClickerPage.css';
import {Scoreboard} from "@/pages/FruitClickerPage/ScoreBlock/Scoreboard.tsx";
import {SplashImg} from "@/assets/images/splashImg.tsx";
import {FruitClicker} from "@/pages/FruitClickerPage/FruitClicker/FruitClicker.tsx";
import {EnergyBlock} from "@/pages/FruitClickerPage/EnergyBlock/EnergyBlock.tsx";
import {Eclipse5Img} from "@/assets/images/Eclipse5Img.tsx";
import {Eclipse4Img} from "@/assets/images/Ellipse4Img.tsx";
import {Eclipse1Img} from "@/assets/images/Ellipse1Img.tsx";

export const FruitClickerPage: FC = () => {

    const [count, setCount] = useState(0);


    return (
        <div className={'fruit-app'}>
            <Scoreboard counter={count}/>
            <FruitClicker count={count} setCount={setCount}/>
            <EnergyBlock/>
            <SplashImg className={'fruit-bg-splash'}/>
            <Eclipse1Img className={'fruit-bg-eclipse1'}/>
            <Eclipse4Img className={'fruit-bg-eclipse4'}/>
            <Eclipse5Img className={'fruit-bg-eclipse5'}/>
        </div>
    )
};
