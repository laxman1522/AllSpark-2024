'use client';
import React, { useState } from 'react';
import Slider from '../Slider/Slider';

export default function Memories() {
  const [items, setItems] = useState([
    {
      imageUrl: 'https://jpeg.org/images/jpeg-home.jpg',
      description: 'This is our wondefull leadership team at the all spark 22',
      year: 2022,
    },
    {
      imageUrl:
        'https://img.freepik.com/free-photo/spectrum-flashes-coloured-light_23-2151792416.jpg?t=st=1727782242~exp=1727785842~hmac=56165d35d03fbc90401b461a759d5bb77be3051ad1442643eed41510a3b9ca8d&w=2000',
      description: 'This is our wondefull leadership team at the all spark 23',
      year: 2023,
    },
    {
      imageUrl: 'https://jpeg.org/images/jpeg-home.jpg',
      description: 'This is our wondefull leadership team at the all spark 22',
      year: 2022,
    },
  ]);
  return (
    <div className="relative ml-[2%] lg:ml-[3%] max-[1400px]:mt-[15vh] max-[712px]:mt[10vh] max-[1024px]:mt-[2vh] lg:mt-[0vh] w-[84%] p-2 flex justify-center max-[1024px]:m-auto  rounded border-0">
      <Slider sliderName={'Memories'} items={items}></Slider>
    </div>
  );
}
