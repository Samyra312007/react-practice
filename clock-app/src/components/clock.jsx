import React, { useEffect, useState } from 'react'
import "./clock.css"

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <>
        <div className='clock'>
            time: {time}
        </div>
    </>
  )
}

export default Clock
