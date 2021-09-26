import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedinIn}from '@fortawesome/free-brands-svg-icons'
import styles from '../../../styles/contacts.module.css'
const Contacts: React.FC<DataPhotoProps> = ({photos}) => {
  const [width, setWidth] =useState(0)

  return (
        <div className={styles.container}>
          <div className={styles.social}>
            <div className={styles.top}>
              <div className={styles.imageContainer}>
                <svg id="logo-corebiz-global" xmlns="http://www.w3.org/2000/svg" width="115" height="25.88" viewBox="0 0 216.126 48.66">
                  <path id="Path_3" d="M722.379,480.413H714.8V446.6h7.579Z" transform="translate(-554.844 -431.883)" fill="#000"/>
                  <path id="Path_6" d="M186.749,453.328A8.394,8.394,0,0,0,180.491,456a10.059,10.059,0,0,0-2.557,7.285,10.168,10.168,0,0,0,2.585,7.373,8.5,8.5,0,0,0,6.346,2.7,7.787,7.787,0,0,0,5.377-1.822,8.961,8.961,0,0,0,2.676-4.117l6.7,2.439a15.205,15.205,0,0,1-5.111,7.373,14.75,14.75,0,0,1-9.635,3.087,15.8,15.8,0,0,1-11.809-4.876,18,18,0,0,1-.06-24.324,15.71,15.71,0,0,1,11.692-4.819,15,15,0,0,1,9.784,3.088,14.094,14.094,0,0,1,4.905,7.433l-6.844,2.5a8.59,8.59,0,0,0-2.526-4.23,7.489,7.489,0,0,0-5.263-1.766Z" transform="translate(-170.302 -431.678)" fill="#000"/>
                  <path id="Path_7" d="M294.7,470.57a9.115,9.115,0,0,0,12.927.029,10.152,10.152,0,0,0,2.643-7.462,9.911,9.911,0,0,0-2.643-7.344,9.222,9.222,0,0,0-12.927,0,9.912,9.912,0,0,0-2.643,7.344A10.173,10.173,0,0,0,294.7,470.57Zm6.463-24.266a16.329,16.329,0,1,1-12.074,4.759,16.329,16.329,0,0,1,12.074-4.759Z" transform="translate(-250.819 -431.675)" fill="#000"/>
                  <path id="Path_1" d="M421.544,446.507v7.727a17.9,17.9,0,0,0-2.5-.206c-5.763,0-8.608,2.82-8.608,9.077v16.98H402.8v-33.7h7.433v5.405a8.439,8.439,0,0,1,3.612-4.024,10.9,10.9,0,0,1,5.671-1.47A9.307,9.307,0,0,1,421.544,446.507Z" transform="translate(-334.5 -431.664)" fill="#000"/>
                  <path id="Path_8" d="M481.7,459.689h17.008a7.033,7.033,0,0,0-2.32-5.025,8.783,8.783,0,0,0-6.229-2.027,8.363,8.363,0,0,0-5.969,2.116,7.328,7.328,0,0,0-2.49,4.936Zm17.92,8.285L506.586,470A14.387,14.387,0,0,1,501,477.228a17.128,17.128,0,0,1-10.086,2.849,18.114,18.114,0,0,1-12.544-4.642,15.88,15.88,0,0,1-5.171-12.426,15.7,15.7,0,0,1,5.022-12.015,18.379,18.379,0,0,1,24.289-.235,16.247,16.247,0,0,1,4.5,12.046,7.314,7.314,0,0,1-.206,2.408H481.486a8.027,8.027,0,0,0,2.882,5.934,9.789,9.789,0,0,0,6.587,2.351,8.2,8.2,0,0,0,8.67-5.518Z" transform="translate(-384.233 -431.67)" fill="#000"/>
                  <path id="Path_2" d="M601.556,445.031H593.8V396.5h7.822v19.536a9.327,9.327,0,0,1,4.053-3.409,14.472,14.472,0,0,1,6.464-1.381,14.259,14.259,0,0,1,11.368,4.7,19.635,19.635,0,0,1-.206,24.235,14.615,14.615,0,0,1-11.428,4.759,11.229,11.229,0,0,1-10.31-5.053Zm15.481-9.606a12.192,12.192,0,0,0,.029-14.748,9.219,9.219,0,0,0-12.984,0,10.144,10.144,0,0,0-2.526,7.344,10.545,10.545,0,0,0,2.536,7.383,9.012,9.012,0,0,0,12.956.029Z" transform="translate(-469.391 -396.5)" fill="#000"/>
                  <path id="Path_4" d="M781.384,480.384H747.952v-6.638L769.075,453.3H747.6v-6.7h33.725v6.435l-21.387,20.623h21.446v6.727Z" transform="translate(-578.007 -431.883)" fill="#000"/>
                  <path id="Path_5" d="M869.613,533.147A5.366,5.366,0,0,1,868,529.209a5.433,5.433,0,0,1,1.616-3.967,5.239,5.239,0,0,1,3.936-1.647,5.617,5.617,0,0,1,5.611,5.611,5.236,5.236,0,0,1-1.646,3.938,5.48,5.48,0,0,1-3.966,1.616A5.366,5.366,0,0,1,869.613,533.147Z" transform="translate(-663.035 -486.261)" fill="silver"/>
                </svg>
                <p>
                direitos reservados, corebiz 2021
                </p>
              </div>
            </div>
            <div className={styles.icons}>
              <ul>
                <li>
                  <a href="https://github.com/emoises" title="github" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} color="#000" size='2x' /> 
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/automattizze/" title="instagram" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faInstagram} size='2x' /> 
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/eduardomoises/" title="linkedin" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} size='2x' /> 
                    {}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.links}>
              <ul>
                {
                  photos ? (
                    photos.map( (photo, idx) => {
                      return (
                        <li key={idx}>
                          <a href={photo.link} target="_blank" rel="noopener noreferrer">{photo.label}</a>
                        </li>
                      )
                    })
                  ):(
                    <p>Carregando...</p>
                  )
                }
              </ul>

            </div>
          </div>
        </div>
    );
}

export default Contacts;