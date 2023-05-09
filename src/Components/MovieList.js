import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function MovieList(props) {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    
  };

  return (
    <div className="container mt-5" id="moviesList">
      <div className="row">
        
        <Carousel
          additionalTransfrom={1}
          arrows
          centerMode
          className=""
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={true}
          itemClass="movie"
          minimumTouchDrag={80}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={
            responsive
          }
          rewind={true}
          rewindWithAnimation={true}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {props.movies
            .filter((m, i) => i > 10)
            .map((movie) => (
              <>
                <img
                  src={`${props.IMAGE_PATH + movie.poster_path}`}
                  alt={movie.title}
                  onClick={() => props.functionSelectMovie(movie)}
                />
                <h4 className="text-center mt-4">{movie.title}</h4>
             </>
            ))}
        </Carousel>
        <Carousel
          additionalTransfrom={1}
          arrows
          centerMode
          className=""
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={true}
          itemClass="movie"
          minimumTouchDrag={80}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={
            responsive
          }
          rewind={true}
          rewindWithAnimation={true}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {props.movies
            .filter((m, i) => i < 10)
            .map((movie) => (
              <>
                <img
                  src={`${props.IMAGE_PATH + movie.poster_path}`}
                  alt={movie.title}
                  onClick={() => props.functionSelectMovie(movie)}
                />
                <h4 className="text-center mt-4">{movie.title}</h4>
             </>
            ))}
        </Carousel>
        
      </div>
    </div>
  );
}
export default MovieList;
