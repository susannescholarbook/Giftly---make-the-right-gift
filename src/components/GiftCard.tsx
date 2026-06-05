import type { GiftIdea } from '../types';

interface GiftCardProps {
  gift: GiftIdea;
  index: number;
}

const priceLabels: Record<GiftIdea['priceRange'], string> = {
  any: 'Any budget',
  'under-25': 'Under €25',
  '25-50': '€25 – €50',
  '50-100': '€50 – €100',
  '100-250': '€100 – €250',
  'over-250': 'Over €250',
};

export default function GiftCard({ gift, index }: GiftCardProps) {
  return (
    <article
      className="gift-card group rounded-3xl bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="text-4xl" role="img" aria-hidden="true">
          {gift.emoji}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
            gift.type === 'buy' ? 'bg-mint/40 text-charcoal' : 'bg-blush/50 text-charcoal'
          }`}
        >
          {gift.type}
        </span>
      </div>

      <h3 className="font-display mb-2 text-2xl text-charcoal">{gift.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-charcoal/70">{gift.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {gift.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="rounded-full bg-butter/40 px-2.5 py-0.5 text-xs capitalize text-charcoal/70"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-charcoal/10 pt-4 text-xs text-charcoal/50">
        <span>{priceLabels[gift.priceRange]}</span>
        {gift.tip && <span className="italic text-charcoal/40">Tip included</span>}
      </div>

      {gift.tip && (
        <p className="mt-3 rounded-2xl bg-mist px-4 py-3 text-xs leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal/80">Tip: </span>
          {gift.tip}
        </p>
      )}
    </article>
  );
}
