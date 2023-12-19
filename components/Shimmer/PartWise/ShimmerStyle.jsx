import ShimmerEffects from "@/components/Shimmer/ForCampaigns/CampaignShimmerEffects";
import HomeShimmerEffect from "@/components/Shimmer/ForHomePage/HomeShimmerEffect";

import {Shimmer, Banner, HomeLeftBanner, HomeRightBanner, SmallCards, HeadingEffect, ParagraphEffect } from "@/components/Shimmer/PartWise/ShimmerEffect";
import styles from "@/components/Shimmer/PartWise/shimmerEffect.module.scss";

export default function ShimmerStyle() {
  return (
    <>
      <div className="text-center">
        <h1 className="my-10">Part Wise</h1>

        {/* Home Page... */}
        <div className="">

          {/* Banner...  */}
          <div className={styles.banner}>
            {/* For Desk */}
            <div className={styles.bannerBox}>
              <div className={`${styles.banner_1} ${styles.common}`}><Banner /></div>
              <div className={`${styles.banner_2} ${styles.common}`}><Banner /></div>
            </div>
            {/* For Phone */}
            <div className={styles.bannerPhone}>
              <div className={styles.heading}>
                <ParagraphEffect/>
              </div>
              <div className={`${styles.banner_1} ${styles.common}`}><Banner /></div>
              <div className={`${styles.banner_2} ${styles.common}`}><Banner /></div>
            </div>
          </div>
          
          <div className={styles.deskHeadingParagraph}>
            <div className="mt-5">
              <HeadingEffect/>
            </div>
            <div className="mt-2">
              <ParagraphEffect/>
            </div>
          </div>

          {/* Cards... */}
          <div className={`mt-3 ${styles.smallCards}`}>
            <div className={`${styles.smallCardBoxDesk}`}>
              <SmallCards />
              <SmallCards />
              <SmallCards />
              <SmallCards />
              <SmallCards />
              <SmallCards />
              <SmallCards />
              <SmallCards />
            </div>
            <div className={`${styles.phoneSmallCards}`}>
              <div className={styles.box}>
                <ParagraphEffect/>
                <div className={`${styles.container_1} ${styles.common}`}>
                  <div className={styles.circleParent}>
                    <div className={styles.circleBox}><Shimmer /></div>
                    <div className={styles.circleParagraph}>
                      <ParagraphEffect/>
                    </div>
                  </div>
                  <div className={styles.circleParent}>
                    <div className={styles.circleBox}><Shimmer /></div>
                    <div className={styles.circleParagraph}>
                      <ParagraphEffect/>
                    </div>
                  </div>
                  <div className={styles.circleParent}>
                    <div className={styles.circleBox}><Shimmer /></div>
                    <div className={styles.circleParagraph}>
                      <ParagraphEffect/>
                    </div>
                  </div>
                  <div className={styles.circleParent}>
                    <div className={styles.circleBox}><Shimmer /></div>
                    <div className={styles.circleParagraph}>
                      <ParagraphEffect/>
                    </div>
                  </div>
                </div>
                <div className={`${styles.container_2} ${styles.common}`}>
                  <div className={styles.circleParent}>
                    <div className={styles.circleBox}><Shimmer /></div>
                    <div className={styles.circleParagraph}>
                      <ParagraphEffect/>
                    </div>
                  </div>
                  <div className={styles.circleParent}>
                    <div className={styles.circleBox}><Shimmer /></div>
                    <div className={styles.circleParagraph}>
                      <ParagraphEffect/>
                    </div>
                  </div>
                  <div className={styles.circleParent}>
                    <div className={styles.circleBox}><Shimmer /></div>
                    <div className={styles.circleParagraph}>
                      <ParagraphEffect/>
                    </div>
                  </div>
                  <div className={styles.circleParent}>
                    <div className={styles.circleBox}><Shimmer /></div>
                    <div className={styles.circleParagraph}>
                      <ParagraphEffect/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* for bottom banner... */}
          <div className={styles.bottomBannerParent}>
            {/* for desktop */}
            <div className={styles.bottomBannerForDesk}>
              <div className={`${styles.bottomBanner_1} ${styles.bottomBanner}`}><Shimmer/></div>
              <div className={`${styles.bottomBanner_2_Parent}`}>
                <div className={`${styles.bottomBanner_2_child_1} ${styles.bottomBanner}`}><Shimmer/></div>
                <div className={styles.bottomBanner_2_child_2}>
                  <div className={`${styles.bottomBanner_2_child_3} ${styles.bottomBanner}`}><Shimmer/></div>
                  <div className={`${styles.bottomBanner_2_child_4} ${styles.bottomBanner}`}><Shimmer/></div>
                </div>
              </div>
            </div>
            {/* for phone */}
            <div className={styles.bottomBannerForPhone}>
              <div className={`${styles.bottomBannerPhoneChild}`}><Shimmer/></div>
              <div className={`${styles.bottomBannerPhoneChild}`}><Shimmer/></div>
            </div>
            {/* for Head/Para */}
            <div className={styles.HeadPara}>
              <div className={styles.head}>
                <HeadingEffect/>
              </div>
              <div className={styles.para}>
                <ParagraphEffect/>
              </div>
            </div>
          </div>
        </div>

        {/* Left Right Banner... */}
        <div className="my-10">
          <h1>Left/Right Banners</h1>
          <div className="my-10">
            <HomeLeftBanner/>
          </div>
          <div className="my-10">
            <HomeRightBanner />
          </div>
        </div>





      </div>
    </>
  );
}
