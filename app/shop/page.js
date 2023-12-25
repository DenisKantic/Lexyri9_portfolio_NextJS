import ShopSite from "../components/ShopSite"
import Navigation from "../components/Navigation"

export default function Shop(){
    return (
        <div className="bg-[#000D2E] min-h-[100vh]">
            <Navigation />
            <ShopSite />
        </div>
    )
}