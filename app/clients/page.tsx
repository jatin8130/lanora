"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Clients() {
  const logos = [
    {
      src: "https://tse4.mm.bing.net/th/id/OIP._0GDukaqijKfNMM4ob9hKAHaC5?pid=Api&P=0&h=180",
      alt: "Ford",
    },
    {
      src: "https://tse3.mm.bing.net/th/id/OIP.dP7tcLu-HfIQwmfBw-_3uAHaHa?pid=Api&P=0&h=180",
      alt: "Tata",
    },
    {
      src: "https://tse1.mm.bing.net/th/id/OIP.RyIISseWN91vLht5EkMgDAHaEK?pid=Api&P=0&h=180",
      alt: "Bosch",
    },
    {
      src: "https://tse4.mm.bing.net/th/id/OIP.8R12LQfde1LgpaliyMglLwHaEN?pid=Api&P=0&h=180",
      alt: "Mahindra",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-28 overflow-hidden">
      {/* --- Background glow effects --- */}
      <div className="absolute top-[-5rem] left-[-5rem] w-[24rem] h-[24rem] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-5rem] right-[-5rem] w-[28rem] h-[28rem] bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* --- Section Title --- */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary"
        >
          Our <span className="text-accent">Clients</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Partnering with world-class <span className="text-primary font-medium">OEMs</span> and{" "}
          <span className="text-primary font-medium">Tier-1 manufacturers</span>, we deliver precision
          and consistency in every project — trusted for our quality, reliability, and engineering integrity.
        </motion.p>

        {/* --- Logo Grid --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center"
        >
          {logos.map(({ src, alt }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-accent/30 transition-all duration-500 p-8 flex items-center justify-center h-32"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-8 transition-all duration-700" />
              
              <Image
                src={src}
                alt={`${alt} logo`}
                width={150}
                height={80}
                className="object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* --- Footer line --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-gray-600 text-sm uppercase tracking-widest"
        >
          Trusted by industry leaders worldwide 🌍
        </motion.div>
      </div>
    </section>
  );
}
