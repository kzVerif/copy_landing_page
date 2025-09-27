"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { FaYoutube, FaDiscord, FaFacebook, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Background with pixel-art style image */}
      <div className="absolute inset-0">
        <Image
          src="/my-gif.gif"
          alt="background"
          fill
          className="object-cover opacity-60"
        />
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl max-w-md text-center text-white z-10"
      >
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.png"
            alt="profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-purple-400 shadow-lg"
          />
        </div>

        {/* Name & Tag */}
        <h1 className="text-3xl font-bold text-purple-200 drop-shadow-md">
          KaityXD
        </h1>
        <p className="text-sm text-gray-300 mb-4">kaityez#0</p>

        {/* Bio */}
        <p className="text-gray-200 leading-relaxed">
          Hello, I'm <span className="text-purple-300 font-medium">KaityXD</span>,
          a chill developer that loves new creations and anime.<br />
          My favorite games are <span className="text-green-300">Undertale</span> and
          <span className="text-blue-300"> Warzone</span>.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            href="#"
            className="hover:text-red-500 transition-transform transform hover:scale-125"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="hover:text-indigo-400 transition-transform transform hover:scale-125"
          >
            <FaDiscord />
          </a>
          <a
            href="#"
            className="hover:text-blue-500 transition-transform transform hover:scale-125"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse w-72 h-72 bg-purple-500/20 rounded-full blur-3xl absolute -top-20 -left-20" />
        <div className="animate-ping w-96 h-96 bg-blue-500/20 rounded-full blur-3xl absolute bottom-0 right-0" />
      </div>
    </div>
  );
}
