import type {FC} from 'react';
import './EnergyBlock.css';

export const EnergyBlock: FC = () => {
    const energy = 89;
    return (
        <div className={'energy'}>
            <div className={'energy-title__container'}>
                <p className={'energy-title'}>Your energy: </p> <span
                className={'energy-percentage'}>{energy}%</span>
            </div>
            <div className={'energy-level__container'}>
                <p className={'energy-level__value '}>{energy}</p>
                <div className={'energy-level__bar'} style={{width: `${energy}%`}}/>
            </div>
        </div>
    )
};
