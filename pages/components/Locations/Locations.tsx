import React from "react";

import { countries } from "../../../helpers/adresses";
import styles from "../../../styles/locations.module.css";
const Locations: React.FC = () => {
  return (
    <div className={styles.container}>
      {
        countries ? (
          countries.map((item, idx) => {
            return (
              <div className={styles.adressContainer} key={idx}>
                <h2>.{item.country}</h2>
                {item.adress.map((local, idx) => {
                  return <p key={idx}>{local}</p>;
                })}
              </div>
            );
          })
        ):(
          <p>Carregando...</p>
        )
      }
    </div>
  );
};

export default Locations;
