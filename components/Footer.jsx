import styles from "../styles/Footer.module.css";
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/Images/bg.png"
          fill
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>GET HEAVENLY BAKED SLICED PIZZAS 🍕</h2>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>FIND OUR RESTAURANTS</h2>
          <p className={styles.text}>
            1654 R. Don Road #304 <br />
            New York, 85022 <br />
            718-806-3801
          </p>
          <p className={styles.text}>
            8515 Oak Valley Road Brooklyn <br />
            New York, 11229 <br />
            347-955-2133
          </p>
          <p className={styles.text}>
            9825 Greystone Dr. Brooklyn <br />
            New York, 11208 <br />
            347-955-2133
          </p>
          <p className={styles.text}>
            442 Birchwood Ave. Jackson Heights <br />
            New York, 11372 <br />
            631-853-6791
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>WORKING HOURS</h2>
          <p className={styles.text}>
            MONDAY - FRIDAY <br />
            9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY <br />
            12:00 - 24:00
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
