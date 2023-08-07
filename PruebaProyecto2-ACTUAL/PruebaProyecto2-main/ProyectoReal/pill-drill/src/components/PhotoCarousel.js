import React from 'react'
import Slider from 'react-slick';

const PhotoCarousel = () => {
   const photos = [
   {
    src : 'Image/mayores1.jpg'
  },
   {
     src :'Image/mayores2.jpg'
   } ,
   {
   src : 'Image/mayores4.jpg'
   }
   ];

  return (
    <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={3000}>
    {photos.map((photoUrl, index) => (
      <div key={index}>
        <img src={photoUrl} alt={`Foto ${index + 1}`} />
      </div>
    ))}
  </Slider>
  )
}

export default PhotoCarousel
