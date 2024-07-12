import React, { useRef } from 'react'
import "./Videoplayer.css"
import video from "../../images/1. What is HTML.mp4"

const Videoplayer = ({playState, setPlayState}) => {

  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current){
      setPlayState(false);
    }
  }
  return (
    <div className={`Video-player ${playState?'':'hide'}`} 
    ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>

    </div>
  )
}

export default Videoplayer