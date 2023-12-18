import React from "react";
import styles from "./home_shimmer_effect.module.scss";
import ShimmerEffects from "../BannerAndCards/CampaignShimmerEffects";

const HomeShimmerEffect = () => {
  return (
    <>
      <div className={styles.body}>
        {/* for banner */}
        <div className={styles.forBanner}>
          {/* 1st div */}
          <div className={`${styles.banner} ${styles.banner_1}`}>
            <div className={styles.shimmerEffect}></div>
          </div>
          {/* 2nd div */}
          <div className={`${styles.banner} ${styles.banner_2}`}>
            <div className={styles.shimmerEffect}></div>
          </div>
        </div>
        {/* Recharge and bill pay */}
        <div className={styles.forCards} style={{display:"none"}}>
          <div className={`${styles.heading} ${styles.commanForCards}`}>
            <div className={styles.shimmerEffect}></div>
          </div>
          <div className={`${styles.paragraph} ${styles.commanForCards}`}>
            <div className={styles.shimmerEffect}></div>
          </div>
          {/* for bill payment phone... */}
          <div className={styles.cardBoxDesk}>
            <div className={`${styles.card} ${styles.commanForCards}`}>
              <div className={styles.shimmerEffect}></div>
            </div>
            <div className={`${styles.card} ${styles.commanForCards}`}>
              <div className={styles.shimmerEffect}></div>
            </div>
            <div className={`${styles.card} ${styles.commanForCards}`}>
              <div className={styles.shimmerEffect}></div>
            </div>
            <div className={`${styles.card} ${styles.commanForCards}`}>
              <div className={styles.shimmerEffect}></div>
            </div>
            <div className={`${styles.card} ${styles.commanForCards}`}>
              <div className={styles.shimmerEffect}></div>
            </div>
            <div className={`${styles.card} ${styles.commanForCards}`}>
              <div className={styles.shimmerEffect}></div>
            </div>
            <div className={`${styles.card} ${styles.commanForCards}`}>
              <div className={styles.shimmerEffect}></div>
            </div>
            <div className={`${styles.card} ${styles.commanForCards}`}>
              <div className={styles.shimmerEffect}></div>
            </div>
          </div>
          {/* For Bill payments phone */}
          <div className={styles.billPay}>
            <div className={styles.billPayChild}>
            </div>
          </div>

          {/* for bottom banner... */}
          <div className={styles.bottomBannerParent}>
            {/* for desktop */}
            <div className={styles.bottomBannerForDesk}>
              <div className={`${styles.bottomBanner_1} ${styles.bottomBanner}`}><div className={styles.shimmerEffect}></div></div>
              <div className={`${styles.bottomBanner_2_Parent}`}>
                <div className={`${styles.bottomBanner_2_child_1} ${styles.bottomBanner}`}><div className={styles.shimmerEffect}></div></div>
                <div className={styles.bottomBanner_2_child_2}>
                  <div className={`${styles.bottomBanner_2_child_3} ${styles.bottomBanner}`}><div className={styles.shimmerEffect}></div></div>
                  <div className={`${styles.bottomBanner_2_child_4} ${styles.bottomBanner}`}><div className={styles.shimmerEffect}></div></div>
                </div>
              </div>
            </div>
            {/* for phone */}
            <div className={styles.bottomBannerForPhone}>
              <div className={`${styles.bottomBannerPhoneChild}`}><div className={styles.shimmerEffect}></div></div>
              <div className={`${styles.bottomBannerPhoneChild}`}><div className={styles.shimmerEffect}></div></div>
            </div>
          </div>

          {/* Bottom heading/paragraph */}
          <div className={styles.bottomHeadingParagraph}>
            <div className={`${styles.heading} ${styles.commanForCards}`}>
              <div className={styles.shimmerEffect}></div>
            </div>
            <div className={`${styles.paragraph} ${styles.commanForCards}`}>
              <div className={styles.shimmerEffect}></div>
            </div>
          </div>

          {/* For bottom cards... */}
          <div className={styles.bottomCards}>
            {/* <ShimmerEffects/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeShimmerEffect;
