import React from 'react';

import styles from '../../../styles/menu.module.css'

const Menu: React.FC<DataPhotoProps> = ({photos, isVertical,name}) => {
  
  return (
    <div 
    className={styles.menu}
    style={{
      flexDirection: (isVertical ? "column" : "row")
    }}
    >
      <ul className={styles.ul}>
        {
          photos ? (
            photos?.map( (items, idx ) => {
              return (
                <li className={styles.li} key={idx}>
                  <a 
                    className={styles.link} 
                    href={items.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {items.label} 
                  </a>
                </li>
              )
            })
          ):(
            <p> </p>
          )
        }
      </ul>
    </div>
  
  );
}

export default Menu;