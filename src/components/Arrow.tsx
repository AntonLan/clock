import {FC} from 'react';

interface ArrowProps {
    className: string
    hour?: number
    minute?: number
    second?: number
}

const Arrow: FC<ArrowProps> = ({className, hour, minute, second}) => {


    const getTime = () => {
        if (hour) {
            return hour * 30
        }
        if (minute) {
            return minute * 6
        }
        if (second) {
            return second * 6
        }
    }

    return (
        <div
            style={{transform: `rotateZ(${getTime()}deg)`}}
            className={className}>
        </div>
    );
};

export default Arrow;