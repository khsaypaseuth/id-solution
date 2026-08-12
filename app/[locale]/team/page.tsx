import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { TEAM } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);
  return pageMetadata(loc, '/team', dict.meta.pages.team);
}

type RoleId = keyof ReturnType<typeof getDictionary>['team']['roles'];

const photoOf = (id: string) => TEAM.find((t) => t.id === id)?.photo ?? '';

function PersonNode({
  id,
  dict,
  size = 'md',
}: {
  id: RoleId;
  dict: ReturnType<typeof getDictionary>;
  size?: 'lg' | 'md';
}) {
  const role = dict.team.roles[id];
  const ring = size === 'lg' ? 'ring-brand-accent' : 'ring-brand-secondary';
  const dim = size === 'lg' ? 'h-36 w-36' : 'h-28 w-28';
  return (
    <div className="flex w-48 flex-col items-center text-center">
      <div className={`overflow-hidden rounded-full ${dim} ring-4 ${ring} shadow-lg ring-offset-2`}>
        <img src={photoOf(id)} alt={role.position} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <h3 className={`mt-4 font-bold text-brand-primary ${size === 'lg' ? 'text-lg' : 'text-base'}`}>
        {role.name}
      </h3>
      <p className="text-sm font-medium text-brand-secondary">{role.position}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-ink/60">{role.bio}</p>
    </div>
  );
}

export default async function TeamChartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : 'en';
  const dict = getDictionary(loc);

  const groups: { key: 'sales' | 'technical' | 'admin'; ids: RoleId[] }[] = [
    { key: 'sales', ids: ['salesExecutive1', 'salesExecutive2'] },
    { key: 'technical', ids: ['itEngineer1', 'itEngineer2', 'itEngineer3'] },
    { key: 'admin', ids: ['adminAccountant'] },
  ];

  return (
    <>
      <PageHero
        title={dict.team.title}
        subtitle={dict.team.subtitle}
        image="/images/team-hero.jpg"
        eyebrow={dict.common.brandEyebrow}
      />

      <section className="container-px section">
        <div className="flex flex-col items-center">
          <Reveal>
          <PersonNode id="managingDirector" dict={dict} size="lg" />
          </Reveal>

          <div className="hidden md:block">
            <div className="mx-auto h-12 w-px bg-gray-300" />
            <div className="mx-auto h-px w-2/3 bg-gray-300" />
          </div>

          <div className="mt-10 grid w-full gap-12 md:mt-0 md:grid-cols-3 md:gap-6">
            {groups.map((g, gi) => (
              <Reveal key={g.key} delay={gi * 100} variant="fade-up">
              <div className="flex flex-col items-center">
                {/* vertical connector up to the horizontal bar */}
                <div className="hidden h-12 w-px bg-gray-300 md:block" />
                {/* department label */}
                <span className="rounded-full bg-brand-primary/10 px-5 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-primary">
                  {dict.team.chart[g.key]}
                </span>
                {/* members */}
                <div className="mt-10 flex flex-col items-center gap-10">
                  {g.ids.map((id) => (
                    <PersonNode key={id} id={id} dict={dict} />
                  ))}
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
