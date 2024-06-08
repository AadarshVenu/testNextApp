"use client";

import React, { useState } from 'react';
import styles from "../styles/Home.module.css";
import { modalImages } from "../Utilities/Constants";

export default function ModalImageContainer() {



    const [images, setImages] = useState(modalImages);

    const handleImageClick = (item, index) => {
        const id = item.id;

        const newImages = images.map((image) => {
            if (image.id === id) {
                return {
                    ...image,
                    setAsMainImage: true
                }
            } else {
                return {
                    ...image,
                    setAsMainImage: false
                }
            }
        });
        setImages(newImages);

    }
    const mainImage = images.find((item) => item.setAsMainImage === true);




    return (
        <div
            style={{
                height: "100%",
            }}
        >
            <div
                style={{
                    height: "70%",
                    width: "100%",
                }}
            >
                <img
                    src={mainImage.src.src}
                    alt="MainImage"
                    className={styles.modalImageMain}
                />
            </div>
            <div
                style={{
                    height: "30%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "10px"
                }}

            >
                {images?.filter((item) => !item.setAsMainImage)?.map((item, index) => (
                    <div
                        key={index}
                        className={styles.modalImage}
                        onClick={
                            () => handleImageClick(item, index)
                        }
                    >
                        <img
                            src={item.src.src}
                            alt={`ModalImage_${index}`}
                            className={styles.modalImage}
                        />
                    </div>
                ))}
            </div>

        </div>

    );
}

