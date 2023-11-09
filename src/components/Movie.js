import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [hasImage, setHasImage] = useState(false); // To track if the movie has an image
  const { user } = UserAuth();
  const movieID = doc(db, 'users', `${user?.email}`);

  // Function to save the show
  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Login to save Movies and TvShows.');
    }
  };

  // Check if the movie has an image
  useEffect(() => {
    setHasImage(!!item.backdrop_path);
  }, [item.backdrop_path]);

  // Conditional rendering for movies without images
  if (!hasImage) {
    return null; // Render nothing if there's no image
  }

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img
        className='w-full h-auto block'
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <AiOutlineMinus className='absolute top-4 left-4 text-gray-300 text-2xl' />
          ) : (
            <AiOutlinePlus className='absolute top-4 left-4 text-gray-300 text-2xl' />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
