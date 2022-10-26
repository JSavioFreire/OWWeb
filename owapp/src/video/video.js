import './video.css'
import React  from 'react';


export default function Video(){
    return(
        <div>
            <iframe className="video" src="https://www.youtube.com/embed/PWe0pC2akpo?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&playsinline=0&playlist=PWe0pC2akpo"></iframe>
        </div>
    )
}