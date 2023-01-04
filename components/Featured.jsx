import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/Images/featured.png",
    "/Images/featured2.png",
    "/Images/featured3.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0, objectFit: "contain" }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/Images/arrowl.png" alt="" fill />
      </div>
      <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
        {images.map((Images, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={Images} alt="" fill style={{ objectFit: "contain" }} />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0, objectFit: "contain" }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/Images/arrowr.png" alt="" fill />
      </div>
    </div>
  );
};

export default Featured;
