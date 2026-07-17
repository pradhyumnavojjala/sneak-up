import { Feature } from "@/data/features";

interface Props {
  feature: Feature;
}

export default function FeatureCard({ feature }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Glow */}

      <div
        className={`
          absolute
          -top-10
          -right-10
          h-32
          w-32
          rounded-full
          bg-gradient-to-br
          ${feature.color}
          opacity-10
          blur-3xl
          transition
          group-hover:opacity-30
        `}
      />

      <div
        className={`
          flex
          h-18
          w-18
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          ${feature.color}
          text-4xl
          transition
          duration-300
          group-hover:scale-110
        `}
      >
        {feature.icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-sneakup-dark">
        {feature.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-500">
        {feature.description}
      </p>

    </div>
  );
}