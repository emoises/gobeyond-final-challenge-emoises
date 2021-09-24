import React, { useState } from "react";
import styles from "../../../styles/slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
interface SliderProps {
  photos: PhotoProps[];
}
const Slider: React.FC<SliderProps> = ({ photos }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{photos ? photos[index].title : ""}</div>
      <div className={styles.button}>
        <a
          href={photos ? photos[index].link : "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>veja mais</p>
          <div>
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </div>
        </a>
      </div>
      <div className={styles.thumbnails}>
        {photos ? (
          photos.map((photo, idx) => {
            return (
              <img
                key={idx}
                src={photo.thumbnailUrl}
                className={index === idx ? styles.thumbsChecked : styles.thumbs}
                onClick={() => setIndex(idx)}
                alt="Images"
              />
            );
          })
        ) : (
          <p>Carregando...</p>
        )}
      </div>
      <div className={styles.imageContainer}>
            {
                photos ?
                <img src={photos[index].url} alt={photos[index].title}/> :
                ""
            }
      </div>
    </div>
  );
};

export default Slider;
