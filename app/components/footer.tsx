'use client'

import React, { Component } from "react";
import styles from "../page.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={styles.bottom_navbar}>
        <div className="bg-gray-100 container mx-auto px-6 pt-10 pb-6">
            © Oracle Corp. All rights reserved.
        </div>
      </div>
    );
  }
}

export default Footer;