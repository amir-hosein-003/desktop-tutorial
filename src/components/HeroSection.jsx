import CheckBox from "./Icons/CheckBox"
import { Icon } from "@iconify/react"

const HeroSection = () => {
  return (
    <section className="h-screen px-10 flex justify-around">
        <div className="flex flex-col justify-around">
            <div className="flex items-center gap-2">
                <img src="./src/assets/img/Group-2.png" />
                <h1 className="text-3xl font-bold">نام آوران اندیشه آرتا</h1>
            </div>
            <ul>
                <li className="flex items-center gap-2">
                    <CheckBox />
                    لورم ایپسوم متن ساختگی با تولید نامفهوم
                </li>
                <li className="flex items-center gap-2">
                    <CheckBox />
                    لورم ایپسوم متن ساختگی با تولید نامفهوم
                </li>
                <li className="flex items-center gap-2">
                    <CheckBox />
                    لورم ایپسوم متن ساختگی با تولید نامفهوم
                </li>
                <li className="flex items-center gap-2">
                    <CheckBox />
                    لورم ایپسوم متن ساختگی با تولید نامفهوم
                </li>
            </ul>
            <div className="flex gap-3">
                <button className="w-30 h-10 rounded-2xl bg-red flex items-center justify-center gap-1">درباره ما
                    <Icon icon="iconamoon:arrow-left-2" width="24" height="24" />
                </button>
                <button className="w-30 h-10 flex items-center justify-center gap-1">محصولات ما
                    <Icon className="text-red" icon="iconamoon:arrow-left-2" width="24" height="24" />
                </button>
            </div>
        </div>
        <div>
            <div className="relative">
                <img src="./src/assets/img/Rectangle.png" width="400px" />
                <span className="absolute left-5 top-20">
                    <img src="./src/assets/img/image.png" width="900px" />
                </span>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
