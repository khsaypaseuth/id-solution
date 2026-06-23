export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-primary text-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #1E88E5 0, transparent 40%), radial-gradient(circle at 80% 0, #FF9800 0, transparent 35%)',
        }}
        aria-hidden
      />
      <div className="container-px relative py-16 md:py-20">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
