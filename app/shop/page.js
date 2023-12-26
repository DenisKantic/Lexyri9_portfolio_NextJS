'use client'
import ShopSite from "../components/ShopSite"
import Navigation from "../components/Navigation"

export default function Shop(){
    return (
        <div className="bg-[#181e29] min-h-[100vh]">
            <Navigation></Navigation>
            <ShopSite />
        </div>
    )
}