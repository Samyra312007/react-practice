import React, {useEffect, useRef} from 'react'
import './autofocus.css'

const Autofocus = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })
  return (
    <>
      <input className='inputfocus' ref={inputRef} type="text" placeholder='Type here...' />
    </>
  )
}

export default Autofocus
