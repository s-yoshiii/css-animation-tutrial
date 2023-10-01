import Link from "next/link";
import React from "react";
import styles from "./SwippingButton.module.scss";

const SwippingButton = () => {
  return (
    <Link href="/" className={styles.link}>
      SwippingButton
    </Link>
  );
};

export default SwippingButton;
