interface Props {
  title: string;
  subtitle?: string;
}
export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
}
