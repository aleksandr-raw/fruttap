// Обновите файл `src/pages/FruitClickerPage/FruitClicker/FruitClicker.tsx`
import {FC, useRef, useState} from 'react';
import strawberry from '@/assets/images/strawberry.png';
import './FruitClicker.css';
import {StrawberryBgImg} from '@/assets/images/StrawberryBgImg';
import {TapSplashOrangeImg} from '@/assets/images/TapSplashOrangeImg';
import {TapSplashIndigoImg} from '@/assets/images/TapSplashIndigoImg';

type FruitClickerProps = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    energy: number,
    setEnergy: React.Dispatch<React.SetStateAction<number>>
};

type Splash = {
    id: number,
    x: number,
    y: number,
    img: JSX.Element
};

export const FruitClicker: FC<FruitClickerProps> = ({count, setCount, energy, setEnergy}) => {
    const [splashes, setSplashes] = useState<Splash[]>([]);
    const strawberryRef = useRef<HTMLImageElement>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (energy < e.touches.length) {
            return;
        }
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const newSplashes = Array.from(e.touches).map(touch => {
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            const id = Date.now() + touch.identifier;
            const splashImg = Math.random() > 0.5 ? <TapSplashOrangeImg/> : <TapSplashIndigoImg/>;
            return {id, x, y, img: splashImg};
        });
        const touchCount = e.touches.length;
        setCount(count + touchCount);
        setEnergy(energy - touchCount);
        setSplashes([...splashes, ...newSplashes]);
        setTimeout(() => {
            setSplashes(splashes => splashes.filter(splash => !newSplashes.some(newSplash => newSplash.id === splash.id)));
        }, 1000);

        // Добавляем класс для анимации
        if (strawberryRef.current) {
            strawberryRef.current.classList.add('clicked');
            setTimeout(() => {
                if (strawberryRef.current) {
                    strawberryRef.current.classList.remove('clicked');
                }
            }, 200);
        }
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
            <img ref={strawberryRef} className={'clicker-strawberry'} src={strawberry} alt="strawberry"/>
            <StrawberryBgImg className={'clicker-strawberry_bg'}/>
            {splashes.map(splash => (
                <div key={splash.id} className={'clicker-splash'} style={{top: splash.y - 50, left: splash.x - 80}}>
                    <p className={'clicker-tap-count'}>+1</p>
                    {splash.img}
                </div>
            ))}
        </div>
    );
};
