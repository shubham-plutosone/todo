'use client'

import ShimmerEffects from "@/components/ForCampaigns/CampaignShimmerEffects";
import HomeShimmerEffect from "@/components/ForHomePage/HomeShimmerEffect";

export default function Home() {

  return (
    <>
      <div className="text-center">
        <h1 className="font-extrabold text-2xl underline">For Home Page</h1>
        <HomeShimmerEffect />
        
        <h1 className="font-extrabold text-2xl underline">For Campaigns</h1>
        <ShimmerEffects/>
      </div>
    </>
  )
}
