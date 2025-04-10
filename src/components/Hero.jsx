import { Icon } from "@iconify/react"
import CheckBox from "./Icons/CheckBox"


const Hero = () => {
  return (
    
    <section className="px-20 grid grid-cols-1 md:grid-cols-2">
        <div className="h-130 flex flex-col justify-evenly">
            <div className="flex items-center font-bold gap-3">
                <img src="./src/assets/img/Group-2.png" />
                <h1 className="text-4xl">
                    نام آوران اندیشه آرتا
                </h1>
            </div>
            <div>
                <ul className="flex flex-col gap-3 text-gray-500">
                    <li className="flex items-center gap-5">
                        <CheckBox />
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    </li>
                    <li className="flex items-center gap-5">
                        <CheckBox />
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    </li>
                    <li className="flex items-center gap-5">
                        <CheckBox />
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    </li>
                    <li className="flex items-center gap-5">
                        <CheckBox />
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    </li>
                </ul>
            </div>
            <div className="flex gap-5">
                <button className="w-31 h-10 bg-red text-white rounded-xl flex items-center justify-center gap-3">
                    درباره ما
                    <Icon icon="iconamoon:arrow-left-2" width="24" height="24" />
                </button>
                <button className="w-31 h-10 flex items-center justify-center gap-3">
                    محصولات ما
                    <Icon className="text-red" icon="iconamoon:arrow-left-2" width="24" height="24" />
                </button>
            </div>
        </div>
        <div className="relative">
            <span className="w-120 h-133 bg-red-50 rounded-4xl absolute left-2"></span>
            <span className="absolute left-40 top-19">
                <img src="./src/assets/img/circle.png" alt="" />
            </span>
            <span className="absolute left-17 top-50">
                <img src="./src/assets/img/Group-1.png" alt="" />
            </span>
            <img src="./src/assets/img/image.png" className="absolute left-33 top-13" />
        </div>
    </section>
  )
}

export default Hero
