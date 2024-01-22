import Carousels from '@/common/carousel/Carousels';
import { Responsive_carouselimg } from '@/components/home/Carousel/style';
import React from 'react'
import { ImgUrl } from '../data';
import { ImgStyle } from '../style';

const Img_carousel = () => {
  return (
    <Carousels
            responsive={Responsive_carouselimg}
            dotted={true}
            arrow={false}
          >
            {ImgUrl.map((item) => {
              
              return (
                <img key={item.id} src={item.url} style={ImgStyle} />
              );
            })}
          </Carousels>
  )
}

export default Img_carousel