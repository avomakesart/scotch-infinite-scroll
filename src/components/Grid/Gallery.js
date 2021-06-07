import React, { useEffect, useState, useRef, useCallback } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';

export const Gallery = () => {
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  // API Root
  const apiRoot = 'https://api.unsplash.com';

  // Number of random images to fetch
  const count = 0;

  // API Key from unsplash.com
  const accessKey = 'bGVmDfBr7dO8soFVDZ759r-K7R5GEIJhjIZfhHWV7vo';

  // Full API endpoint with template literals
  const apiEndpoint = `${apiRoot}/photos/?client_id=${accessKey}`;

  const { data, hasMore, error, loading } = useFetch(apiEndpoint, pageNumber);

  const observer = useRef();
  const lastImageElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );


  return (
    <div className='hero is-fullheight is-bold is-info'>
      <div className='hero-body'>
        <div className='container'>
          <div className='header content'>
            <h2 className='subtitle is-6'>Code Challenge #16</h2>
            <h1 className='title is-1'>
              Infinite Scroll Unsplash Code Challenge
            </h1>
          </div>

          {/* <!--         Loading placeholder for images --> */}

          <div className='images'>
           {data.map((image, index) => image.map((img) => {
            if (data.length === index + 1) {
              return (
       <div key={index} ref={lastImageElementRef}>
                  <img
                    src={img.urls.regular}
                    alt={img.alt_description}
                    className='single-photo'
                  />
                </div>
              );
            } else {
              return (
                <div  key={index}>
                  <img
                    src={img.urls.regular}
                    alt={img.alt_description}
                    className='single-photo'
                  />
                </div>
              );
            }
          }))}
          </div>  
          {loading && (
            <img
              src='https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif'
              alt='loading'
            />
          )}
          {error && <p>Ups something went wrong</p>}
        </div>
      </div>
    </div>
  );
};
