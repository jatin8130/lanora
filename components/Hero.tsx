import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-white via-neutral-50 to-gray-100">
      {/* Decorative background pattern (optional subtle detail) */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 mt-14 grid md:grid-cols-2 gap-12 items-center">
        {/* --- Left Content --- */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">
            Precision Electroplating for{" "}
            <span className="text-accent">Automotive & Industrial</span> Parts
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            Delivering high-performance coatings, consistent quality, and certified
            processes trusted by OEMs and global manufacturers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-accent text-white font-medium rounded-lg shadow-md hover:bg-primary hover:shadow-lg transition-all duration-300"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* --- Right Image --- */}
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://media.istockphoto.com/id/1442276268/photo/fragment-of-a-galvanic-line-production-process-of-galvanic-copper-nickel-and-chrome-plating.jpg?b=1&s=612x612&w=0&k=20&c=25jg_J_Bel0iPGCYik-2KcbpSlbSv1DnK81qD5WmGLU="
            alt="Electroplating process line"
            className="w-full h-72 md:h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle overlay gradient for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>

  )
}
