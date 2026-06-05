import type { GiftFilters, GiftIdea } from '../types';

export function filterGifts(gifts: GiftIdea[], filters: GiftFilters): GiftIdea[] {
  return gifts.filter((gift) => {
    if (filters.type !== 'any' && gift.type !== filters.type) return false;
    if (filters.gender !== 'any' && !gift.genders.includes(filters.gender) && !gift.genders.includes('any')) {
      return false;
    }
    if (filters.age !== 'any' && !gift.ageGroups.includes(filters.age) && !gift.ageGroups.includes('any')) {
      return false;
    }
    if (filters.priceRange !== 'any' && gift.priceRange !== filters.priceRange) return false;
    if (filters.event !== 'any' && !gift.events.includes(filters.event)) return false;
    if (filters.topics.length > 0 && !filters.topics.some((topic) => gift.topics.includes(topic))) {
      return false;
    }
    if (filters.hobbies.length > 0 && !filters.hobbies.some((hobby) => gift.hobbies.includes(hobby))) {
      return false;
    }
    return true;
  });
}

export const defaultFilters: GiftFilters = {
  type: 'any',
  gender: 'any',
  age: 'any',
  hobbies: [],
  topics: [],
  priceRange: 'any',
  event: 'any',
};
