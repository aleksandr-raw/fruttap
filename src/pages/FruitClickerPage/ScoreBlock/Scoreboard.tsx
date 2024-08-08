import type {FC} from 'react';

import './Scoreboard.css';
import {SplashScoreImg} from "@/assets/images/splash-scoreImg.tsx";
import coin from "@/assets/images/coin.png";

type ScoreboardProps = {
    counter: number
}

export const Scoreboard: FC<ScoreboardProps> = ({counter}) => {
    return (
        <div className={'scoreboard'}>
            <img className={'scoreboard-coin'} src={coin}/>
            <p className={"scoreboard-score"}>{counter}</p>
            <SplashScoreImg className={'scoreboard-bg'}/>
        </div>
    )
};
