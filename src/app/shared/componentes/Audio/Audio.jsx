import React, { useRef } from "react";
import './Audio.css'





function Audio(){
    const audioRef = useRef('/assets/hambiente.mp3')

    const playAudio = () => {
        if(audioRef.current) {
            audioRef.current.play()
        }
    };

    const pauseAudio = () => {
        if(audioRef.current) {
            audioRef.current.pause()
        }
    };


    const stopAudio = () => {
        if(audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0; // Reseta o tempo do áudio
        }
    };

    return(
        <div className="container-audio">
            <audio ref={audioRef}>
                <source src="/assets/hambiente.mp3" />
            </audio>

            <button onClick={playAudio}>Play</button>
            <button onClick={pauseAudio}>Pause</button>
            <button onClick={stopAudio}>Stop</button>
        </div>
    )
}

export default Audio