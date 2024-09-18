'use client'

import React, { Component } from "react";
import styles from "../page.module.css";
import { Beau_Rivage } from "next/font/google";
 
// If loading a variable font, you don't need to specify the font weight
const beau_rivage = Beau_Rivage({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})


class Top_navbar extends Component {
  render() {
    return (
      <div className={styles.top_navbar}>
        <div className={beau_rivage.className}>
          <h1>Monitor</h1>
        </div>
      </div>
    );
  }
}

export default Top_navbar;