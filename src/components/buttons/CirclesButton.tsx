import React from "react";
import styles from "./CirclesButton.module.scss";
import Link from "next/link";

const CirclesButton = () => {
  return (
    <Link className={styles.link} href="/">
      CireclesButton
    </Link>
  );
};

export default CirclesButton;
