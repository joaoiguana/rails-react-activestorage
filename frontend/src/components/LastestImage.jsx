import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';

const LastestImage = () => {
  const { latestPost, setLatestPost } = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:3000/latest")
      .then((response) => response.json())
      .then((data) => {
        setLatestPost(data.image_url)
      })
      .catch((error) => console.log(error))
  }, [latestPost])

  return (
    <div>
      <img src={latestPost} alt="latest_image" className='latest-image' />
    </div>
  );

}

export default LastestImage
