"use client";
import React, { useState } from "react";
import MyModal from "../components/MyModal";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    const handleModal = (value) => {
        setShowModal(value);
    };

    return (
        <div className={styles.pageStyle}>
            <div
                className={styles.primaryButton}
                onClick={() => handleModal(true)}
            >
                Launch Now
            </div>
            <div
                className={styles.webViewModal}
            >
                <MyModal show={showModal} handleModal={handleModal} />
            </div>
          

        </div>
    );
}
