import React from "react";
import styles from "./CircularSwapButton.module.scss";
import Link from "next/link";

const CircularSwapButton = () => {
  return (
    <Link href="/" className={styles.link}>
      Button
    </Link>
  );
};

export default CircularSwapButton;
