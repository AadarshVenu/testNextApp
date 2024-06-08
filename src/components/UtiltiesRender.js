"use client";
import React from "react";
import { Modal } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import mapImage from "../assets/mapImage.png";
import amenitiesIcon from "../assets/amenitiesIcon.png";
import {
    modalUtilties1,
    modalUtilties2,
    amenities,
} from "../Utilities/Constants";

function UtiltiesRender(props) {

    const { utilities, isSecondGroup } = props

    const getContainerClass = (index) =>
        index === 2 ? styles.modalUtilties1Container2 : styles.modalUtilties1Container;

    const getTitleClass = () =>
        isSecondGroup ? styles.modalUtilties2Title : styles.modalUtilties1Title;



    return (
        <div className="d-flex justify-content-between">
            {utilities.map((item, index) => (
                <div key={index} className={getContainerClass(index)}>
                    <div className={styles.modalUtilties1}>
                        <div className="d-flex align-items-center">
                            {item.image && (
                                <img
                                    src={item.image?.src}
                                    alt="image"
                                    className={styles.modalUtilties1Image}
                                />
                            )}
                            <div
                                style={{ marginLeft: item.image ? "5px" : "0" }}
                                className={getTitleClass()}
                            >
                                {item.title}
                            </div>
                        </div>
                        <div className={styles.modalUtilties1Description}>
                            {item.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UtiltiesRender