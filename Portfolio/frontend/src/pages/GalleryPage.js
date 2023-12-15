import React from 'react';
import ImageGallery from 'react-image-gallery';

    const images = [
        {
            original: "/images/scuba-diving-belize.jpg",
            thumbnail: "/images/scuba-diving-belize.jpg",
            description: `This is me scuba diving in Belize!`,
            originalHeight: '450px',
        },
        {
            original: "/images/hatcher-pass-wasilla-alaska.jpg",
            thumbnail: "/images/hatcher-pass-wasilla-alaska.jpg",
            description: `This is a photo from my trip to Hatcher Pass near Wasilla, Alaska.`,
            originalHeight: '450px',
        },
        {
            original: "/images/shaking-hand-judge.jpg",
            thumbnail: "/images/shaking-hand-judge.jpg",
            description: `This is me swearing in as a juvenile probation officer.`,
            originalHeight: '450px',
        },
        {
            original: "/images/humpback-whale-exhaling.jpg",
            thumbnail: "/images/humpback-whale-exhaling.jpg",
            description: `Whale watching near the Kenai Fjords in Alaska.`,
            originalHeight: '450px',
        },
        {
            original: "/images/weekend-is-booked-string-art.jpg",
            thumbnail: "/images/weekend-is-booked-string-art.jpg",
            description: `A string art project I did to symbolize my love for reading!`,
            originalHeight: '450px',
        },
        {
            original: "/images/xunantunich-belize.jpg",
            thumbnail: "/images/xunantunich-belize.jpg",
            description: `Visiting Xunantunich, one of the ancient Mayan archaeological sites in Belize.`,
            originalHeight: '450px',
        },
        {
            original: "/images/python-box-sorting.png",
            thumbnail: "/images/python-box-sorting.png",
            description: `This is a program I wrote designed to produce the volume of boxes given their length, width, and height. 
            If multiple box dimensions are provided, the program will list them in descending order.`,
            originalHeight: '450px',
        },
        {
            original: "/images/python-box-sorting-output.png",
            thumbnail: "/images/python-box-sorting-output.png",
            description: `This is the output of my box sorting program with various box dimensions.`,
            originalHeight: '450px',
        },
        {
            original: "/images/python-number-guessing-game-1.png",
            thumbnail: "/images/python-number-guessing-game-1.png",
            description: `This is a number guessing program I wrote in python. The player inputs numbers, while the program tells 
            the player if the number is too high or too low, until they guess the number correctly.`,
            originalHeight: '450px',
        },
        {
            original: "/images/python-output-number-game-1.png",
            thumbnail: "/images/python-output-number-game-1.png",
            description: `This is an output of my number guessing program that gives users feedback, while keeping track of the number of guesses until they enter the right number.`,
            originalHeight: '450px',
        },
];
function GalleryPage() {
    return (
      <>
          <h2 className="pic">Gallery</h2>
          <p>A few photos of past projects, adventures, hobbies, and more!</p>
            <article>
                <ImageGallery items={images} />
            </article>
        </>
  );
}

export default GalleryPage;