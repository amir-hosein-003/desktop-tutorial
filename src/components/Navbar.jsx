<<<<<<< HEAD
import ProductBtnIcone from "../icons/ProductBtnIcone"
import PhoneCall from "../icons/PhoneCall"

const Navbar = () => {
  return (
    <nav className="h-40 flex items-center justify-between px-20">
      <div>
        <ul className="w-100 flex items-center justify-between text-gray-500">
            <li><a href="#" className="text-black border-b-3 border-primary py-1 ">صفحه اصلی</a></li>
=======
import IconSvg from "./Icons/IconSvg"
import PhoneCall from "./Icons/PhoneCall"

const Navbar = () => {
  return (
    <nav className="h-40 flex items-center justify-around">
      <div>
        <ul className="w-100 flex items-center justify-between text-gray-500">
            <li><a href="#" className="text-black border-b-3 border-red py-1 ">صفحه اصلی</a></li>
>>>>>>> c6f7e7e45afff5a8faa0b54cf55474f3b9d9e069
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">تماس با ما</a></li>
            <li><a href="#">پروژه ها</a></li>
            <li><a href="#">بلاگ</a></li>
        </ul>
      </div>
      <div>
        <img src="./src/assets/img/logo.png" alt="logo" />
      </div>
<<<<<<< HEAD
        <div className="w-100 flex items-center justify-end gap-4">
=======
        <div className="flex items-center gap-4">
>>>>>>> c6f7e7e45afff5a8faa0b54cf55474f3b9d9e069
            <div className="flex items-center gap-2 font-yekan">
                021-555555
                <PhoneCall />
            </div>
            <span className="w-1 h-10 rounded bg-gray-200"></span>
            <div>
<<<<<<< HEAD
                <button className="btn btn-primary">
                    <ProductBtnIcone />
=======
                <button className="w-37 h-12 bg-red flex items-center justify-center gap-2 text-white rounded-xl">
                    <IconSvg />
>>>>>>> c6f7e7e45afff5a8faa0b54cf55474f3b9d9e069
                    محصولات
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
