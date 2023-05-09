import YouTube from 'react-youtube';
import React from 'react';



function MovieTrailer(props) {
  return (
  <div>
        <main>
          {props.movie ? (
            <div
              id='visualizer'
              className="viewtrailer"
              style={{
                backgroundImage: `url("${props.IMAGE_PATH}${props.movie.backdrop_path}")`,
              }}
            >
              {props.playing ? (
                <>

                  <YouTube
                    videoId={props.trailer.key}
                    className="reproductor-container"
                    
                    opts={{
                      width: "80%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 1,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button id='cerrar' onClick={() => props.functionSetPlaying(false)} className="boton">
                    Close
                  </button>
                </>
              ) : (
                <div className="container-trailer">
                  
                  <div id='trailer'>
                  
                    {props.trailer ? (
                      <button
                      className="boton"
                        onClick={() => props.functionSetPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1 className="text-white">{props.movie.title}</h1>
                    <p className="text-white">{props.movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>
  )
    
  }
  export default MovieTrailer;