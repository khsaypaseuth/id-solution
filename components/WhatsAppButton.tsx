import { whatsappLink } from '@/lib/site';
import { IconWhatsApp } from '@/components/Icons';

type WhatsAppIconLinkProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  /** green = official WhatsApp (floating FAB only); solid = single-color icon */
  variant?: 'green' | 'solid';
  /** Background context when variant is solid */
  tone?: 'light' | 'dark';
};

const sizeMap = {
  sm: { box: 'h-10 w-10', icon: 18 },
  md: { box: 'h-11 w-11', icon: 22 },
  lg: { box: 'h-14 w-14', icon: 30 },
};

const solidToneClass = {
  dark: 'bg-white/15 text-white hover:bg-white hover:text-brand-primary focus:ring-white',
  light: 'bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
};

/** Inline WhatsApp contact — solid single-color icon (default) or official green. */
export function WhatsAppIconLink({
  className = '',
  size = 'md',
  label = 'Chat on WhatsApp',
  variant = 'solid',
  tone = 'dark',
}: WhatsAppIconLinkProps) {
  const s = sizeMap[size];
  const colorClass =
    variant === 'green'
      ? 'bg-[#25D366] text-white shadow-sm hover:scale-105 focus:ring-[#25D366]'
      : solidToneClass[tone];

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`inline-flex ${s.box} shrink-0 items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${colorClass} ${className}`}
    >
      <IconWhatsApp width={s.icon} height={s.icon} aria-hidden />
    </a>
  );
}

/** Fixed floating WhatsApp button (site-wide) — keeps official green. */
export default function WhatsAppButton() {
  return (
    <WhatsAppIconLink
      variant="green"
      size="lg"
      className="float-gentle fixed bottom-5 right-5 z-50 !shadow-lg"
    />
  );
}
