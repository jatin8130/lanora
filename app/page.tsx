import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import MotionFadeIn from "../components/MotionFadeIn";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="container mx-auto px-6 py-16">
        <SectionHeading
          title="Our Expertise"
          subtitle="Delivering consistent, high-quality surface finishes to the world's top manufacturers."
        />
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <ServiceCard
            title="Zinc & Nickel Plating"
            desc="Durable, corrosion-resistant coatings suitable for automotive and heavy industries."
            img="https://tse2.mm.bing.net/th/id/OIP.S6KfPqc_YmVjybv7ANe2NgHaEC?pid=Api&P=0&h=180"
          />
          <ServiceCard
            title="Copper & Chrome Finishes"
            desc="Brilliant aesthetics with enhanced conductivity and surface protection."
            img="https://tse2.mm.bing.net/th/id/OIP.p1SNiDdLlEMFMJHHMZVLIgHaFK?pid=Api&P=0&h=180"
          />
          <ServiceCard
            title="Electroless Nickel"
            desc="Uniform deposits with superior hardness for critical engineering parts."
            img="https://tse2.mm.bing.net/th/id/OIP.eP5L_IBO3UQZqsAvchkX_gHaE8?pid=Api&P=0&h=180"
          />
        </div>
      </section>
      <MotionFadeIn>
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold">Trusted by Industry Leaders</h2>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              <img src="https://tse4.mm.bing.net/th/id/OIP._0GDukaqijKfNMM4ob9hKAHaC5?pid=Api&P=0&h=180" alt="Ford" width={100} height={40} />
              <img src="https://tse3.mm.bing.net/th/id/OIP.dP7tcLu-HfIQwmfBw-_3uAHaHa?pid=Api&P=0&h=180" alt="Tata" width={100} height={40} />
              <img src="https://tse1.mm.bing.net/th/id/OIP.RyIISseWN91vLht5EkMgDAHaEK?pid=Api&P=0&h=180" alt="Bosch" width={100} height={40} />
            </div>
          </div>
        </section>
      </MotionFadeIn>
    </main>
  );
}