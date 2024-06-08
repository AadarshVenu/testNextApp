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
    mobileUtilities
} from "../Utilities/Constants";
import ModalImageContainer from "./ModalImageContainer";
import Carousel from "./Carousel";
import UtiltiesRender from "./UtiltiesRender";

export default function MyModal({ show, handleModal }) {

    const renderAmenities = () =>
        amenities.map((item, index) => (
            <div
                key={index}
                className="d-flex justify-content-start align-items-center w-50 mt-3"
            >
                <div>
                    <img src={amenitiesIcon?.src} alt="amenities icon" />
                </div>
                <div className={styles.modalAmenitiesText}>{item}</div>
            </div>
        ));

    const renderUtitlitiesForMobile = () => (
        <div className="d-flex flex-wrap">
            {
                mobileUtilities.map((item, index) => (
                    <div key={index} className="col-6">
                        <div className="d-flex align-items-center mt-2">
                            <img
                                src={item.image?.src}
                                alt="image"
                                className={styles.modalUtilties1Image}
                            />
                            <div>
                                <div className={styles.modalUtiltiesMobileDescription}>
                                    {item.title}
                                </div>
                                <div className={styles.modalUtiltiesMobileDescription}>
                                    {item.description}
                                </div>
                            </div>

                        </div>

                    </div>
                ))
            }
        </div>
    );

    return (
        <Modal
            centered
            show={show}
            onHide={() => handleModal(false)}
            fullscreen={true}
            // size="xl"
            
        >
            <Modal.Body className="p-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0 d-none d-lg-block">
                            <ModalImageContainer />
                        </div>

                        <div className="col-12 col-lg-6 p-4">
                            <div
                                className={styles.closeButton}
                                onClick={() => handleModal(false)}
                            >
                                ×
                            </div>
                            <div className={styles.modalTitle}>Tangled Up In Green</div>
                            <div className="mt-3"></div>
                            <div className="col-12 d-block d-lg-none mb-3 mt-3 p-0">
                                <Carousel />
                            </div>
                            <div className={styles.modalTitle}>Tangled Up In Green</div>

                            <div className={styles.modalDescription}>
                                Tangled Up In Green, a vision of Total Environment, is a luxury
                                plotted development nestled amidst the lush landscapes of
                                Devanahalli. This peaceful hideaway in North Bangalore sits on
                                115 acres and has exclusive residential plots with a modern
                                design and green living blend. The plots range from 1800 sq. ft.
                                to 7200 sq. ft. You could be fascinated by the botanical wonders
                                found at the Tree Museum or…
                            </div>
                            <div className="mt-2">
                                <div className="row">
                                    <div className="col-12 col-lg-7">
                                        <div className="d-none d-lg-block">
                                            <UtiltiesRender utilities={modalUtilties1} isSecondGroup={false} />

                                            <div className="border-top my-2" ></div>
                                            <UtiltiesRender utilities={modalUtilties2} isSecondGroup={true} />

                                        </div>
                                        <div className="col-12 d-block d-lg-none mb-3 mt-3">
                                            {renderUtitlitiesForMobile()}
                                        </div>

                                        <div className="border-top my-2" ></div>
                                        <div className="my-2">
                                            <div style={{ fontSize: "20px", color: "#272727" }}>
                                                30+ Amenities
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                {renderAmenities()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5">
                                        <img
                                            src={mapImage?.src}
                                            alt="map"
                                            className={`${styles.mapImage} w-100`}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="d-none d-lg-block">
                                <div className="mt-5 d-flex justify-content-between">
                                    <div className={styles.primaryButtonForModal}>Chat Now</div>
                                    <div className={styles.primaryButtonForModal}>Call Now</div>
                                    <div className={styles.secondaryButtonForModal}>
                                        Schedule Site Visit
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`col-12 d-block d-lg-none mb-3 mt-3 ${styles.stickyButtons}`}
                            >
                                <div className="d-flex justify-content-between">
                                    <div className={styles.primaryButtonForModalMobile}>
                                        Know More
                                    </div>
                                    <div className={styles.secondaryButtonForModalMobile}>
                                        Schedule Site Visit
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
