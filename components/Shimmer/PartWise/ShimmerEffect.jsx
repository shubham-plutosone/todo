import styles from "./shimmerEffect.module.scss";

const Shimmer = () => {
  return (
    <>
      <div className={styles.shimmer}>
        <div className={styles.shimmerBody}></div>
      </div>
    </>
  );
};

const Banner = () => {
  return (
    <>
      <Shimmer />
    </>
  );
};

const HomeLeftBanner = () => {
  return (
    <>
      <div className={styles.banner}>
        {/* For Desk */}
        <div className={styles.bannerBox}>
          <div className={`${styles.banner_1} ${styles.common}`}><Banner /></div>
        </div>
        {/* For Phone */}
        <div className={styles.bannerPhone}>
          <div className={`${styles.banner_1} ${styles.common}`}><Banner /></div>
        </div>
      </div>
    </>
  );
};

const HomeRightBanner = () => {
  return (
    <>
      <div className={styles.banner}>
        {/* For Desk */}
        <div className={styles.bannerBox}>
          <div className={`${styles.banner_2} ${styles.common}`}><Banner /></div>
        </div>
        {/* For Phone */}
        <div className={styles.bannerPhone}>
          <div className={`${styles.banner_2} ${styles.common}`}><Banner /></div>
        </div>
      </div>
    </>
  );
};

const HeadingEffect = () => {
  return (
    <>
      <div className={styles.heading}>
        <Shimmer />
      </div>
    </>
  );
};

const ParagraphEffect = () => {
  return (
    <>
      <div className={styles.paragraph}>
        <Shimmer />
      </div>
    </>
  );
};

const SmallCards = () => {
  return (
    <>
      <div className={`${styles.card} ${styles.commanForCards}`}>
        <Shimmer />
      </div>
    </>
  );
};

module.exports = {
  Shimmer,
  Banner,
  HomeLeftBanner,
  HomeRightBanner,
  SmallCards,
  HeadingEffect,
  ParagraphEffect,
};
