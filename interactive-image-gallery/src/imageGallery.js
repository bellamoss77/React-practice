import React, { useState } from 'react';
import './imageGallery.css';

const ImageGallery = () => {
    const [images, setImages] = useState([
        { id: 1, src: './public/PLEASANT_GROVE_MIN/PG1.png' },
        { id: 2, src: './public/PLEASANT_GROVE_MIN/PG2.png' },
        { id: 3, src: './public/PLEASANT_GROVE_MIN/PG3.png' },
        { id: 4, src: './public/PLEASANT_GROVE_MIN/PG4.png' },
        { id: 5, src: './public/PLEASANT_GROVE_MIN/PG5.png' },
    ]);

    const [currentImage, setCurrentImage] = useState(images[0]);

    const handleNext = () => {
        const currentIndex = images.indexOf(currentImage);
        if (currentIndex < images.length - 1) {
            setCurrentImage(images[currentIndex + 1]);
        }
    };

    const handlePrev = () => {
        const currentIndex = images.indexOf(currentImage);
        if (currentIndex > 0) {
            setCurrentImage(images[currentIndex - 1]);
        }
    };

    return (
        <div className='image-gallery'>
            <div className='gallery-image-container'>
                <img src={currentImage.src} alt='gallery image' />
            </div>
            <div className='gallery-controls'>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default ImageGallery;