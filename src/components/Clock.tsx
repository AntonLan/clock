import {FC} from 'react';
import ClockFace from "./ClockFace";
import {useTime} from "../hooks/useTime";
import Arrow from "./Arrow";

const Clock: FC = () => {
    const {time } = useTime()

    return (
        <>
            <div className="clock">
                <Arrow className={'hour_arrow'} second={time.getHours()}/>
                <Arrow className={'min_arrow'} second={time.getMinutes()}/>
                <Arrow className={'sec_arrow'} second={time.getSeconds()}/>
               <ClockFace/>
            </div>
        </>
    );
};

export default Clock;