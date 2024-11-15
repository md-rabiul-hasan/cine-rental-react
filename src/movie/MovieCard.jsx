import React, { useContext, useState } from 'react';
import Rating from '../Rating';
import { getImgUrl } from '../util/cine-utility';
import { MovieContext } from './../context';
import MovieDetails from './MovieDetails';

export default function MovieCard({movie}) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { cartData, setCartData } = useContext(MovieContext);

    function handleSelectMovies(movie){
        setSelectedMovie(movie);
        setShowModal(true);
    }

    function handleModalClose(){
        setShowModal(false);
        setSelectedMovie(null);
    }

    function handleAddMovie(event, movie) {
        event.stopPropagation();
        
        // Check if the movie already exists in cartData by its unique identifier (e.g., id)
        const movieExists = cartData.some(item => item.id === movie.id);
    
        if (!movieExists) {
            setCartData([...cartData, movie]);
        }
        
        setShowModal(false);
    }
  return (
    <>
        { showModal && (<MovieDetails movie={selectedMovie} handleModalClose={handleModalClose} handleAddMovie={handleAddMovie} />)}
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <a onClick={() => handleSelectMovies(movie)}>
                <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt={movie.title} />
                <figcaption className="pt-4">
                    <h3 className="text-xl mb-1">{movie.title}</h3>
                    <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                    <Rating rating={movie.rating} />
                    <button onClick={(e) => handleAddMovie(e, movie)} className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#">
                        <img src="./assets/tag.svg" alt="" />
                        <span>${movie.price} | Add to Cart</span>
                    </button>
                </figcaption>
                </a>
        </figure>
    </>
  )
}
