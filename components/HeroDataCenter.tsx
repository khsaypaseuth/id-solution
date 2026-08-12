'use client';

/**
 * Hero background: photorealistic data-center rack aisle with blinking green status LEDs.
 * Uses a custom rack/cabling image with slow Ken Burns motion + LED pulse overlay.
 */

const LEDS = Array.from({ length: 56 }, (_, i) => ({
  // Foreground rack cluster — placed on left in source image; mirrored to the right via hero-flip
  x: 6 + (i % 7) * 4.2 + Math.sin(i * 1.4) * 0.8,
  y: 22 + Math.floor(i / 7) * 7.5 + Math.cos(i * 2.1) * 0.6,
  delay: (i * 113) % 3200,
  duration: 700 + (i * 89) % 1400,
}));

export default function HeroDataCenter() {
  return (
    <div className="hero-flip absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="hero-rack-photo absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-datacenter.jpg)' }}
      />

      {/* Extra green link/activity LEDs — pulse on top of rack status lights */}
      <div className="hero-led-layer pointer-events-none absolute inset-0">
        {LEDS.map((led, i) => (
          <span
            key={i}
            className="hero-led"
            style={{
              left: `${led.x}%`,
              top: `${led.y}%`,
              animationDelay: `${led.delay}ms`,
              animationDuration: `${led.duration}ms`,
            }}
          />
        ))}
      </div>
      <div className="hero-banner-shimmer pointer-events-none absolute inset-0" aria-hidden />
      <div className="noise-overlay absolute inset-0 pointer-events-none" aria-hidden />
    </div>
  );
}
