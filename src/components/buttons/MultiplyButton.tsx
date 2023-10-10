import React from "react";
import styles from "./MultiplyButton.module.scss";
import Link from "next/link";

const MultiplyButton = () => {
  return (
    <Link className={styles.link} href="/">
      button hover effect
    </Link>
  );
};

export default MultiplyButton;
