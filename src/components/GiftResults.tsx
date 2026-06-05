import type { GiftIdea } from '../types';
import GiftCard from './GiftCard';

interface GiftResultsProps {
  results: GiftIdea[];
  totalCount: number;
}

export default function GiftResults({ results, totalCount }: GiftResultsProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
          Inspiration
        </p>
        <h2 className="font-display text-3xl text-charcoal md:text-4xl">
          {results.length === totalCount
            ? `${results.length} gift ideas`
            : `${results.length} of ${totalCount} ideas`}
        </h2>
      </div>

      {results.length === 0 ? (
        <div className="glass-panel rounded-3xl px-8 py-16 text-center">
          <p className="font-display mb-2 text-2xl text-charcoal">No matches yet</p>
          <p className="text-charcoal/60">
            Try loosening a filter — remove a topic, broaden the budget, or switch between buy and
            make.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((gift, index) => (
            <GiftCard key={gift.id} gift={gift} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
