import React, { Component } from 'react';
import { Carousel} from 'antd-mobile';
import "./Swiper.css"
class SwiperContainerUI extends Component {
    state = {
        data: [
            'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01pTvMz32JJhxXjgTUS_!!2053469401.jpg', 
            'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01KX0ygY2JJhxb0IOvE_!!2053469401.jpg',
            'https://img.alicdn.com/imgextra/i4/2053469401/O1CN017HD9eE2JJhxZXGG9r_!!2053469401.jpg',
            'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01YqyUmV2JJhxVYITs7_!!2053469401.jpg',
            'https://img.alicdn.com/imgextra/i1/2053469401/O1CN01OYwZuN2JJhxSlGw6U_!!2053469401.jpg'

        ],
        imgHeight:147,
    }
  render() {
    return (
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(value => (
              <img
                key={value}
                src={value}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                alt=""
              />
          ))}
        </Carousel>
    );
  
    }

}
export default SwiperContainerUI