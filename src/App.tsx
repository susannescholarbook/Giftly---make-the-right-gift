import { useMemo, useState } from 'react';
import Ballpit from './components/backgrounds/Ballpit';
import Grainient from './components/backgrounds/Grainient';
import ErrorBoundary from './components/ErrorBoundary';
import ContactForm from './components/ContactForm';
import FilterPanel from './components/FilterPanel';
import GiftResults from './components/GiftResults';
import { gifts } from './data/gifts';
import type { GiftFilters } from './types';
import { defaultFilters, filterGifts } from './utils/filterGifts';

export default function App() {
  const [filters, setFilters] = useState<GiftFilters>(defaultFilters);

  const results = useMemo(() => filterGifts(gifts, filters), [filters]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <ErrorBoundary fallback={null}>
        <Grainient
          color1="#D4EDB8"
          color2="#F5C6D6"
          color3="#FFF4C4"
          timeSpeed={0.18}
          warpStrength={0.8}
          grainAmount={0.08}
          contrast={1.1}
          saturation={0.95}
        />
        </ErrorBoundary>
      </div>

      <header className="relative z-10 border-b border-white/30 bg-white/20 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/50">
              Gift inspiration
            </p>
            <h1 className="font-display text-3xl text-charcoal md:text-4xl">Giftly</h1>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-charcoal/60 md:flex">
            <a href="#discover" className="transition hover:text-charcoal">
              Discover
            </a>
            <a href="#filters" className="transition hover:text-charcoal">
              Filters
            </a>
            <a href="#play" className="transition hover:text-charcoal">
              Play
            </a>
            <a href="#contact" className="transition hover:text-charcoal">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="discover" className="relative px-6 pb-16 pt-20 md:px-10 md:pt-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-charcoal/50">
                The right gift, thoughtfully chosen
              </p>
              <h2 className="font-display mb-6 text-5xl leading-[1.05] text-charcoal md:text-7xl">
                Help to make
                <br />
                <em className="not-italic text-charcoal/70">the right gift</em>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-charcoal/65">
                Whether you want to buy something special or craft it by hand, filter by the person,
                occasion, and budget to discover ideas that feel personal — not generic.
              </p>
            </div>
          </div>
        </section>

        <section id="filters" className="relative px-6 pb-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[380px_1fr]">
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              onReset={() => setFilters(defaultFilters)}
            />
            <GiftResults results={results} totalCount={gifts.length} />
          </div>
        </section>

        <section id="play" className="relative border-t border-white/30 px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                Interactive
              </p>
              <h2 className="font-display text-3xl text-charcoal md:text-4xl">
                Play with the ball pit
              </h2>
              <p className="mt-3 text-charcoal/60">
                Move your cursor through the spheres — a playful moment while you decide on the
                perfect present.
              </p>
            </div>
            <div className="ballpit-container overflow-hidden rounded-3xl border border-white/40 bg-white/10 shadow-2xl backdrop-blur-sm">
              <ErrorBoundary>
                <Ballpit
                  className="h-full w-full"
                  followCursor
                  count={120}
                  gravity={0.3}
                  colors={[0xd4edb8, 0xf5c6d6, 0xfff4c4, 0xe8ecf0]}
                  ambientIntensity={0.85}
                  lightIntensity={180}
                  minSize={0.4}
                  maxSize={0.9}
                />
              </ErrorBoundary>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <footer className="relative border-t border-white/30 bg-white/20 px-6 py-8 backdrop-blur-md md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-charcoal/50 md:flex-row">
          <span className="font-display text-lg text-charcoal">Giftly</span>
          <p>Made with care — buy or make, the thought counts most.</p>
        </div>
      </footer>
    </div>
  );
}
