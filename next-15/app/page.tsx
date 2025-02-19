"use client";

import styles from "./page.module.css";
import { Authenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import React from "react";

export type ButtonPropTypes = typeof Button.propTypes;
// @ts-expect-error verify correct extension of `React.ForwardRefExoticComponent`
export type ButtonDefaultProps = typeof Button.defaultProps;

export default function Home() {
  const ref = React.useRef(null);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Heading backgroundColor={"red"} ref={ref}>
          Next 15
        </Heading>
        <Authenticator />
      </main>
    </div>
  );
}
