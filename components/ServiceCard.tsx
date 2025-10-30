import Image from "next/image";
import MotionFadeIn from "./MotionFadeIn";

interface Props {
  title: string;
  desc: string;
  img: string;
}

export default function ServiceCard({ title, desc, img }: Props) {
  return (
    <MotionFadeIn>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
        <Image src={img} alt={title} width={400} height={250} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <p className="text-gray-600 mt-2">{desc}</p>
        </div>
      </div>
    </MotionFadeIn>
  );
}
