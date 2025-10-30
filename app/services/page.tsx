"use client";

import { motion } from "framer-motion";
import { FlaskConical, Chrome, Layers, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <FlaskConical className="w-7 h-7 text-accent" />,
      title: "Electroless Nickel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis nulla adipisci vero expedita iusto pariatur?",
    },
    {
      icon: <Chrome className="w-7 h-7 text-accent" />,
      title: "Hard Chrome",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis nulla adipisci vero expedita iusto pariatur?",
    },
    {
      icon: <Layers className="w-7 h-7 text-accent" />,
      title: "Passivation & Finishing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis nulla adipisci vero expedita iusto pariatur?",
    },
    {
      icon: <Wrench className="w-7 h-7 text-accent" />,
      title: "Custom & R&D Support",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis nulla adipisci vero expedita iusto pariatur?",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 mt-10 overflow-hidden">
      {/* --- Background Glow --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* --- Header --- */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-primary"
        >
          Our <span className="text-accent">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero a maiores pariatur ullam enim in est deleniti magnam odit?
        </motion.p>

        {/* --- Service Cards --- */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-2xl p-8 text-left transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Decorative Image --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 relative group max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-700" />
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.oS74tIn9wRXFRbE4kdMugwHaEO?pid=Api&P=0&h=180="
            alt="Electroplating process"
            className="relative z-10 rounded-2xl shadow-2xl w-full h-80 md:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>
      </div>
    </section>
  );
}
