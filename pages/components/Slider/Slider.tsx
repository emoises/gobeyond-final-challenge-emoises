import React, { useState } from 'react';
import styles from '../../../styles/slider.module.css'
interface SliderProps {
    photos: PhotoProps[];
}
const Slider: React.FC<SliderProps> = ({photos}) => {
    const [index, setIndex] = useState(0)

  return (
        <div className={styles.container}>
            {
                photos ? (
                    <>
                    
                        <div className={styles.aside}>
                            <h2>{photos[index].title}</h2>
                            <a href={photos[index].url} > <span>veja mais</span> <div>{">"}</div></a>
                            <div className={styles.thumbnails}>
                                {
                                    photos ? (
                                        photos.map( (photo, idx) => {
                                            return (
                                                <img
                                                key={idx} 
                                                src={photo.thumbnailUrl} 
                                                className={index === idx ? styles.thumbsChecked : styles.thumbs}
                                                onClick={() => setIndex(idx)}
                                                alt="Images"
                                                />
                                            )
                                        })
                                    ): (
                                        <h1>Eduardo</h1>
                                    )
                                }

                            </div>

                        </div>
                        <div className={styles.imageContainer}>
                            {
                                photos ? (
                                    <img src={photos[index].url} alt={photos[index].title}  />
                                ): (
                                    <span>Loading...</span>
                                )
                            }
                        </div>
                    </>
                ) : (
                    <span>Loading...</span>
                )
            }
        </div>
    );
}

export default Slider;