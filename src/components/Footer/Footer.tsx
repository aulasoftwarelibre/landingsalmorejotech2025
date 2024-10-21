import styles from "./Footer.module.css";
import image from "../../sprites/footer.svg"

export default function Footer() {
  return (
    <>
      <img src={image} className={`${styles.FooterContainer} img-fluid mb-4 `} />
    </>
  );
}
