import {useEffect, useState} from "react";

export const useTime = () => {
    const [time, setTime] = useState<Date>(new Date())

    useEffect(() => {
        createTime()
    }, [])

    const createTime = () => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }


    return {time}
}