import type {FC} from 'react';
import './EnergyBlock.css';

interface EnergyBlockProps {
    energy: number;
    maxEnergy: number;
}

export const EnergyBlock: FC<EnergyBlockProps> = ({energy, maxEnergy}) => {
    const energyPercentage = (energy / maxEnergy) * 100;

    return (
        <div className={'energy'}>
            <div className={'energy-title__container'}>
                <p className={'energy-title'}>Your energy: </p> <span
                className={'energy-percentage'}>{energyPercentage.toFixed(0)}%</span>
            </div>
            <div className={'energy-level__container'}>
                <p className={'energy-level__value '}>{energy}</p>
                <div className={'energy-level__bar'} style={{width: `${energyPercentage}%`}}/>
            </div>
        </div>
    );
};
