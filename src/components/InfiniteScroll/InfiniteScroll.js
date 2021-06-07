import React, { useState, useRef, useEffect } from 'react';
import useFetch from '../../hooks/useFetch/useFetch'
import { Container } from '../Container/Container';

const API_URL = 'http://jsonplaceholder.typicode.com/photos'

export const InfiniteScroll = () => {
  // initialize list of posts
  const [postList, setPostList] = useState({
    list: [1, 2, 3, 4],
  });

    // tracking on which page we currently are
    const [pageNumber, setPageNumber] = useState(1);

  const { data, hasMore, loading, error  } = useFetch(API_URL, pageNumber)


  // add loader refrence
  const loader = useRef(null);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
        pageNumber((page) => page + 1);
    }
  };

  console.log(data.map(d => d.map(e => e.title)));

  return (
    <Container>
      <div>
        {data.map((info, index) => info.map((_) => {
          return (
            <div
              key={index}
              className='text h-10 text-center pt-1 pl-2 bg-gray-100 mt-2'
            >
              <h2> {_.title} </h2>
              <img src={_.thumbnailUrl} alt={_.title} />
            </div>
          );
        }))}
        <div>
          <h2>Load More</h2>
        </div>
      </div>
      </Container>
  );
};
