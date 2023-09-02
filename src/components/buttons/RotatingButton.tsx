import Link from "next/link";
import { FC } from "react";
import styles from "./RotatingButton.module.scss";

const RotatingButton: FC = () => {
  return (
    <Link href="/gsap" className={styles.link}>
      Hover me
    </Link>
  );
};

export default RotatingButton;
