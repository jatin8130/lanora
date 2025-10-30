"use client";

import { Building2, Microscope, Wrench, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Facilities() {
  const features = [
    {
      icon: <Wrench className="w-6 h-6 text-accent" />,
      title: "Advanced Plating Lines",
      desc: "Multiple automated lines with precise process control for nickel, chrome, and zinc coatings.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-accent" />,
      title: "Smart Automation",
      desc: "Fully programmable racks and inline rinsing systems ensure uniform coatings and process repeatability.",
    },
    {
      icon: <Microscope className="w-6 h-6 text-accent" />,
      title: "QA & Metallurgical Lab",
      desc: "On-site laboratory for coating thickness analysis, adhesion testing, and metallurgical evaluations.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent" />,
      title: "Certified Standards",
      desc: "ISO 9001:2015 certified facility with traceable QA documentation and continuous process monitoring.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 mt-8 overflow-hidden">
      {/* --- Decorative Background Elements --- */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* --- Section Header --- */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-primary"
        >
          Our <span className="text-accent">Facilities</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi earum quo repellat illum id fuga. Odio incidunt ab consequatur, mollitia iste aliquam nihil blanditiis labore asperiores, tempore placeat. Pariatur!
        </motion.p>

        {/* --- Feature Grid --- */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-8 border border-gray-100 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex justify-center items-center w-12 h-12 bg-accent/10 rounded-xl mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Facility Image --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 relative group max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-700" />
          <img
            src="https://blog.indianaprecisiongrinding.com/hs-fs/hubfs/20201007_IPG_Electroplating1200x600.jpg?width=1533&name=20201007_IPG_Electroplating1200x600.jpg"
            alt="Lanora Electroplating Facility"
            className="relative z-10 rounded-2xl shadow-2xl w-full h-80 md:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>
      </div>
    </section>
  );
}
