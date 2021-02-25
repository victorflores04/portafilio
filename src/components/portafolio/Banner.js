import React from 'react'

export const Banner = () => {
    return (
        <div className="banner">
        <div className="container">
          <div className="row">
            <div className="side-image left">
            <a href="#"><img src="https://i.imgur.com/J6EeUd1.jpg" title="working" /></a>
            <div className="main-text">Working...</div>
            </div>
            <div className="main-image">
            <a href="https://victorflores04.github.io/diario/"><img src="https://i.imgur.com/3a6M4pB.png" title="diario app" /></a>
            <div className="main-text">Diaro App</div>
            </div>
            <div className="side-image right">
            <a href="https://victorflores04.github.io/gif-app/"><img src="https://i.imgur.com/cKiWnCm.png" title="gif app" /></a>
            <div className="main-text">Gif App</div>
            </div>
          </div>
          <div className="scroll">
            <span>Developing</span>
          </div>
        </div>
      </div>
    )
}
