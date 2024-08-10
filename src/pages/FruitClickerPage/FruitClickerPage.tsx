import {useEffect, useRef, useState} from 'react';
import './FruitClickerPage.css';
import {Scoreboard} from '@/pages/FruitClickerPage/ScoreBlock/Scoreboard';
import {FruitClicker} from '@/pages/FruitClickerPage/FruitClicker/FruitClicker';
import {EnergyBlock} from '@/pages/FruitClickerPage/EnergyBlock/EnergyBlock';
import {SplashImg} from '@/assets/images/splashImg';
import {Eclipse5Img} from '@/assets/images/Eclipse5Img';
import {Eclipse4Img} from '@/assets/images/Ellipse4Img';
import {Eclipse1Img} from '@/assets/images/Ellipse1Img';
import {getUserData, sendUserDataOnExit, WS_BASE_URL} from "@/api/api.ts";
import {MAX_ENERGY} from "@/constants.ts";

const userId = 19

export const FruitClickerPage = () => {
    const [energy, setEnergy] = useState<number>(0);
    const [coins, setCoins] = useState<number>(0);
    const coinsSocketRef = useRef<WebSocket | null>(null);
    const energySocketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        coinsSocketRef.current = new WebSocket(`${WS_BASE_URL}/coins_gain/${userId}/`);
        energySocketRef.current = new WebSocket(`${WS_BASE_URL}/energy_gain/${userId}/`);

        coinsSocketRef.current.onerror = (error) => console.error('Coins WebSocket error:', error);
        energySocketRef.current.onerror = (error) => console.error('Energy WebSocket error:', error);

        return () => {
            coinsSocketRef.current?.close();
            energySocketRef.current?.close();
        };
    }, [userId]);

    useEffect(() => {
        const interval = setInterval(() => {
            let newCoins
            let newEnergy
            setCoins(prevCoins => {
                newCoins = prevCoins + 1;
                return newCoins;
            });
            if (coinsSocketRef.current?.readyState === WebSocket.OPEN) {
                coinsSocketRef.current.send(JSON.stringify({coins}));
            }
            setEnergy(prevEnergy => {
                newEnergy = Math.min(prevEnergy + 1, MAX_ENERGY);
                return newEnergy;
            });
            if (energySocketRef.current?.readyState === WebSocket.OPEN) {
                energySocketRef.current.send(JSON.stringify({energy}));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [coins, energy]);

    useEffect(() => {
        getUserData(userId).then(data => {
            setEnergy(data.energy);
            setCoins(data.coins);
        });
        return () => {
            sendUserDataOnExit(userId, energy, coins);
        }
    }, []);

    return (
        <div className={'fruit-app'}>
            <Scoreboard counter={coins}/>
            <FruitClicker count={coins} setCount={setCoins} energy={energy} setEnergy={setEnergy}/>
            <EnergyBlock energy={energy} maxEnergy={MAX_ENERGY}/>
            <SplashImg className={'fruit-bg-splash'}/>
            <Eclipse1Img className={'fruit-bg-eclipse1'}/>
            <Eclipse4Img className={'fruit-bg-eclipse4'}/>
            <Eclipse5Img className={'fruit-bg-eclipse5'}/>
        </div>
    );
};
