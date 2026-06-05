import type { ReactNode } from 'react';
import type { GiftFilters, GiftType } from '../types';
import {
  AGE_OPTIONS,
  EVENT_OPTIONS,
  GENDER_OPTIONS,
  HOBBY_FILTER_OPTIONS,
  PRICE_OPTIONS,
  TOPIC_OPTIONS,
} from '../data/filterOptions';

interface FilterPanelProps {
  filters: GiftFilters;
  onChange: (filters: GiftFilters) => void;
  onReset: () => void;
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
        active
          ? 'bg-charcoal text-white shadow-md'
          : 'bg-white/70 text-charcoal hover:bg-white hover:shadow-sm'
      }`}
    >
      {children}
    </button>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-display text-lg text-charcoal/80">{title}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export default function FilterPanel({ filters, onChange, onReset }: FilterPanelProps) {
  const setType = (type: GiftType | 'any') => onChange({ ...filters, type });

  const toggleHobby = (hobby: string) => {
    const hobbies = filters.hobbies.includes(hobby)
      ? filters.hobbies.filter((h) => h !== hobby)
      : [...filters.hobbies, hobby];
    onChange({ ...filters, hobbies });
  };

  const toggleTopic = (topic: (typeof filters.topics)[number]) => {
    const topics = filters.topics.includes(topic)
      ? filters.topics.filter((t) => t !== topic)
      : [...filters.topics, topic];
    onChange({ ...filters, topics });
  };

  const activeCount = [
    filters.type !== 'any',
    filters.gender !== 'any',
    filters.age !== 'any',
    filters.priceRange !== 'any',
    filters.event !== 'any',
    filters.hobbies.length > 0,
    filters.topics.length > 0,
  ].filter(Boolean).length;

  return (
    <aside className="glass-panel rounded-3xl p-6 md:p-8">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
            Refine
          </p>
          <h2 className="font-display text-3xl text-charcoal">Find the right gift</h2>
        </div>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onReset}
            className="shrink-0 text-sm text-charcoal/60 underline-offset-4 transition hover:text-charcoal hover:underline"
          >
            Clear ({activeCount})
          </button>
        )}
      </div>

      <div className="space-y-8">
        <Section title="Gift type">
          <Chip active={filters.type === 'any'} onClick={() => setType('any')}>
            All
          </Chip>
          <Chip active={filters.type === 'buy'} onClick={() => setType('buy')}>
            Buy
          </Chip>
          <Chip active={filters.type === 'make'} onClick={() => setType('make')}>
            Make
          </Chip>
        </Section>

        <Section title="Gender">
          {GENDER_OPTIONS.map((opt) => (
            <Chip
              key={opt.value}
              active={filters.gender === opt.value}
              onClick={() => onChange({ ...filters, gender: opt.value })}
            >
              {opt.label}
            </Chip>
          ))}
        </Section>

        <Section title="Age">
          {AGE_OPTIONS.map((opt) => (
            <Chip
              key={opt.value}
              active={filters.age === opt.value}
              onClick={() => onChange({ ...filters, age: opt.value })}
            >
              {opt.label}
            </Chip>
          ))}
        </Section>

        <Section title="Hobbies">
          {HOBBY_FILTER_OPTIONS.map((opt) => (
            <Chip
              key={opt.value}
              active={filters.hobbies.includes(opt.value)}
              onClick={() => toggleHobby(opt.value)}
            >
              {opt.label}
            </Chip>
          ))}
        </Section>

        <Section title="Topics">
          {TOPIC_OPTIONS.map((opt) => (
            <Chip
              key={opt.value}
              active={filters.topics.includes(opt.value)}
              onClick={() => toggleTopic(opt.value)}
            >
              {opt.label}
            </Chip>
          ))}
        </Section>

        <Section title="Price range">
          {PRICE_OPTIONS.map((opt) => (
            <Chip
              key={opt.value}
              active={filters.priceRange === opt.value}
              onClick={() => onChange({ ...filters, priceRange: opt.value })}
            >
              {opt.label}
            </Chip>
          ))}
        </Section>

        <Section title="Event">
          {EVENT_OPTIONS.map((opt) => (
            <Chip
              key={opt.value}
              active={filters.event === opt.value}
              onClick={() => onChange({ ...filters, event: opt.value })}
            >
              {opt.label}
            </Chip>
          ))}
        </Section>
      </div>
    </aside>
  );
}
