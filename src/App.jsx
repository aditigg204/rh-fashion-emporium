import { motion } from "framer-motion";
import logo from "../public/logo.png";

import suit1 from "../public/products/suit1.png";
import suit2 from "../public/products/suit2.png";
import suit3 from "../public/products/suit3.png";
import suit4 from "../public/products/suit4.png";
import heroImg from "../public/hero.png";

const products = [
  { name: "Fancy Party Wear", img: suit1 },
  { name: "Premium Designer Suit", img: suit2 },
  { name: "Daily Wear Collection", img: suit3 },
  { name: "Festival Special Suit", img: suit4 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 text-gray-800">

 <nav className="fixed top-0 w-full bg-[#f6e8ed] border-b border-pink-200 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* LEFT SIDE BRAND */}
    <div className="flex items-center gap-4">

  <img
    src={logo}
    alt="R.H. Logo"
    className="h-14 w-auto object-contain"
  />

  <div className="leading-tight">
    <h1 className="text-xl font-['Playfair_Display'] text-gray-900 tracking-wide">
      R.H.
    </h1>

    <p className="text-sm font-['Poppins'] text-yellow-700 tracking-wide">
      Fashion Emporium
    </p>
  </div>

</div>

    {/* RIGHT SIDE MENU */}
    <div className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
      <a href="#collection" className="hover:text-yellow-700 transition">Collection</a>
      <a href="#about" className="hover:text-yellow-700 transition">About</a>
      <a href="#contact" className="hover:text-yellow-700 transition">Contact</a>
    </div>

  </div>
</nav>

      <section className="bg-[#f6e8ed] pt-32 pb-20">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

    {/* LEFT SIDE TEXT */}
    <div>
      <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-gray-900 leading-tight">
        Premium Ladies Suits
      </h1>

      <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-yellow-700 mt-4">
        For Every Occasion
      </h2>

      <p className="mt-6 text-gray-600 font-['Poppins'] text-lg">
        Fancy • Party Wear • Daily Wear • Festival Collection
      </p>

      <p className="mt-4 text-yellow-700 font-medium">
        ✨ Special Ramadan Festive Offers Available Now ✨
      </p>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="flex justify-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-yellow-200 rounded-full blur-2xl opacity-30"></div>

        <img
          src={heroImg}
          alt="Ladies Suit"
          className="relative rounded-full w-[400px] h-[400px] object-cover shadow-2xl border-8 border-white"
        />
      </div>
    </div>

  </div>
</section>

   <section id="collection" className="py-20 bg-white text-center">
  <h3 className="text-3xl font-semibold text-gray-800 mb-12">
    Categories
  </h3>

  <div className="flex flex-wrap justify-center gap-10">

    {products.map((item, index) => (
      <div key={index} className="text-center group cursor-pointer">

        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition duration-300">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="mt-4 text-gray-700 font-medium">
          {item.name}
        </p>

      </div>
    ))}

  </div>
</section>

      <section id="about" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto text-center px-6">

    <h3 className="text-3xl font-semibold text-yellow-600 mb-6">
      About R.H. Fashion Emporium
    </h3>

    <p className="text-gray-600 leading-relaxed mb-6">
      At R.H. Fashion Emporium, we offer a wide range of premium ladies suits 
      including fancy party wear, daily wear, festive collections, and special 
      occasion outfits. Our focus is on delivering high-quality fabrics, elegant 
      designs, and affordable pricing so every woman can look stylish without compromise.
    </p>

    <p className="text-gray-600 leading-relaxed">
      This Ramadan season, we are offering exclusive festive discounts on selected 
      collections. Visit our store to explore new arrivals and special offers curated 
      just for you.
    </p>

  </div>
</section>
      <section id="contact" className="py-20 bg-[#fdeff3]">
  <div className="max-w-4xl mx-auto text-center px-6">

    <h3 className="text-3xl font-semibold text-gray-900 mb-8">
      Connect With Us
    </h3>

    <p className="text-gray-600 mb-4">
      📍 D-71 Main Market Seelampur Delhi 110053
    </p>

    <p className="text-gray-600 mb-4">
      📞 + 91 9210766371
    </p>

    <p className="text-gray-600 mb-4">
      rh.fashionemporium@gmail.com
    </p>

    <p className="text-gray-600 mb-8">
     Instagram: @RH_FASHION_EMPORIUM
    </p>

    <div className="flex justify-center gap-6">
      <a
        href="https://wa.me/919210766371"
        className="px-6 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition"
      >
        WhatsApp Us
      </a>

      <a
        href="tel:+919210766371"
        className="px-6 py-3 border border-yellow-600 text-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition"
      >
        Call Now
      </a>
    </div>

  </div>
</section>

      <footer className="py-6 text-center text-sm text-gray-500 bg-neutral-100">
        © 2026 Ladies Collection | R.H. Fashion Emporium
      </footer>

    </div>
  );
}