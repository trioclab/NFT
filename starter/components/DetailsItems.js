import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import featured_01 from '../img/featured-01.jpg'; 
import featured_02 from '../img/featured-02.jpg'; 
import featured_03 from '../img/featured-03.jpg'; 
import featured_04 from '../img/featured-04.jpg'; 

const featuredItems = [
  { image: featured_01, title: 'Triple Mutant Ape Bored', author: 'Liberty Artist' },
  { image: featured_02, title: 'Bored Ape Kennel Club', author: 'Liberty Artist' },
  { image: featured_03, title: 'Genesis Club by KMT', author: 'Liberty Artist' },
  { image: featured_04, title: 'Crypto Aurora Guy', author: 'Liberty Artist' },
];

export default function DetailsItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto py-12 bg-gray-800 overflow-hidden">
      <Slider {...settings} className="whitespace-nowrap transform transition-transform duration-1000 ease-in-out">
        {featuredItems.map((item, index) => (
          <div key={index} className="p-4 inline-block">
            <div className="bg-white shadow-lg rounded-lg px-6 py-4">
              <Image src={item.image} alt={item.title} width={400} height={400} className="rounded-md" />
              <div className="mt-4">
                <h4 className="text-lg font-bold">{item.title}</h4>
                <span className="text-gray-500">{item.author}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
