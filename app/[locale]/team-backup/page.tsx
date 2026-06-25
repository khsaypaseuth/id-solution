import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import PageHero from '@/components/PageHero';
import { TEAM } from '@/lib/site';

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);

  return (
    <>
      <PageHero title={dict.team.title} subtitle={dict.team.subtitle} />
      <section className="container-px section">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => {
            const role = dict.team.roles[member.id as keyof typeof dict.team.roles];
            return (
              <div key={member.id} className="card overflow-hidden !p-0">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={member.photo}
                    alt={role.position}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-brand-primary">{role.name}</h3>
                  <p className="text-sm font-medium text-brand-secondary">{role.position}</p>
                  <p className="mt-2 text-sm text-ink/70">{role.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
