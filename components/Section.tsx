export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-4">
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="text-gray-700 mt-1">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
