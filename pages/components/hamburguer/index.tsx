import React, { Dispatch, SetStateAction } from 'react';

import styles from '../../../styles/hamburguer.module.css';

interface HamburguerProps {
    open: boolean;
    getState: Dispatch<SetStateAction<boolean>>;
    photos?: PhotoProps[];
};

const Hamburguer: React.FC<HamburguerProps> = ({open, getState,photos}) => {
  const openTheme = {
    display: "flex",
    right: "0",
    padding: "6rem 4rem 0 4rem"

  }
  return (
      <div className={styles.menuBtn} onClick={ () => getState(!open)}>
          <div className={open ? styles.menuBtn__burguerOpen :styles.menuBtn__burguer}>
            <div className={styles.listContainer} style={open ? openTheme : {}} >
              {
                photos?.map( (photo, idx) => {
                  return (
                    <a 
                    key={idx} 
                    href={photo.link} 
                    aria-label={photo.label}
                    target="_blank" 
                    rel="noreferrer">
                      {photo.label}
                      <p style={{color: "#fff"}}>{open}</p>
                    </a>
                  )
                })
              }
            </div>
          </div>
      </div>
  );
};

export default Hamburguer;