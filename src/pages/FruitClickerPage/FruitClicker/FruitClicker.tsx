import {FC, useState} from 'react';
import strawberry from '@/assets/images/strawberry.png';
import './FruitClicker.css';
import {StrawberryBgImg} from "@/assets/images/StrawberryBgImg.tsx";
import {TapSplashOrangeImg} from "@/assets/images/TapSplashOrangeImg.tsx";
import {TapSplashIndigoImg} from "@/assets/images/TapSplashIndigoImg.tsx";

type FruitClickerProps = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
};

export const FruitClicker: FC<FruitClickerProps> = ({count, setCount}) => {
    const [splashes, setSplashes] = useState<{ id: number, x: number, y: number, img: JSX.Element }[]>([]);

    const handleTouchStart = (e: React.TouchEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const newSplashes = Array.from(e.touches).map(touch => {
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            const id = Date.now() + touch.identifier;
            const splashImg = Math.random() > 0.5 ? <TapSplashOrangeImg/> : <TapSplashIndigoImg/>;
            return {id, x, y, img: splashImg};
        });
        setCount(count + e.touches.length);
        setSplashes([...splashes, ...newSplashes]);
        setTimeout(() => {
            setSplashes(splashes => splashes.filter(splash => !newSplashes.some(newSplash => newSplash.id === splash.id)));
        }, 1000);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        e.preventDefault();
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        e.preventDefault();
    };

    return (
        <div className={'clicker'} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}>
            <img className={'clicker-strawberry'} src={strawberry} alt="strawberry"/>
            <StrawberryBgImg className={'clicker-strawberry_bg'}/>
            {splashes.map(splash => (
                <div key={splash.id} className={'clicker-splash'} style={{top: splash.y - 50, left: splash.x - 80}}>
                    <p className={'clicker-tap-count'}>+1</p>
                    {splash.img}
                </div>
            ))}
        </div>
    )
};
