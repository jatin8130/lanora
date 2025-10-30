import { Award, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* --- Left: Text Content --- */}
        <div>
          <h1 className="text-4xl font-extrabold text-primary leading-tight">
            About <span className="text-accent">Lanora Electroplaters</span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            For over <span className="font-semibold text-primary">25 years</span>, Lanora Electroplaters has delivered
            high-precision electroplating services to the automotive and manufacturing industries.  
            <br />
            <br />
            Our mission is simple: to provide <span className="text-accent font-semibold">consistent coatings</span>, 
            <span className="text-accent font-semibold"> superior quality assurance</span>, and 
            <span className="text-accent font-semibold"> dependable lead times</span> — trusted by OEMs across the globe.
          </p>

          <div className="mt-8 bg-white shadow-md rounded-xl p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" /> Certifications & QA
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We adhere to strict quality standards with documented procedures, layer thickness verification,
              and full traceability. Certifications of conformance are provided upon request.
            </p>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                ISO 9001:2015 Certified
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Automated thickness testing & QA logging
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Compliance with automotive OEM specifications
              </li>
            </ul>
          </div>
        </div>

        {/* --- Right: Image --- */}
        <div className="relative group">
          <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
          <img
            src="https://media.istockphoto.com/id/1442276268/photo/fragment-of-a-galvanic-line-production-process-of-galvanic-copper-nickel-and-chrome-plating.jpg?b=1&s=612x612&w=0&k=20&c=25jg_J_Bel0iPGCYik-2KcbpSlbSv1DnK81qD5WmGLU="
            alt="Lanora electroplating facility"
            className="relative z-10 rounded-2xl shadow-2xl object-cover w-full h-72 md:h-96 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores fuga quasi velit laboriosam reprehenderit aut? Velit at possimus tempora nulla harum voluptatibus cumque rerum deserunt, labore necessitatibus laborum? Deleniti voluptates distinctio molestiae error blanditiis sequi vero totam nobis, omnis ratione quasi optio dolores id nesciunt assumenda temporibus? Ab, quae!</p>
      </div>
    </section>
  );
}
