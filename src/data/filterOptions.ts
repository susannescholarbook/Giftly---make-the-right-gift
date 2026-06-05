import type { AgeGroup, Event, Gender, PriceRange, Topic } from '../types';
import { HOBBY_OPTIONS } from './gifts';

export const GENDER_OPTIONS: { value: Gender; label: string }[] = [
  { value: 'any', label: 'Anyone' },
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'non-binary', label: 'Non-binary' },
];

export const AGE_OPTIONS: { value: AgeGroup; label: string }[] = [
  { value: 'any', label: 'Any age' },
  { value: 'child', label: 'Child (0–12)' },
  { value: 'teen', label: 'Teen (13–19)' },
  { value: 'young-adult', label: 'Young adult (20–29)' },
  { value: 'adult', label: 'Adult (30–59)' },
  { value: 'senior', label: 'Senior (60+)' },
];

export const TOPIC_OPTIONS: { value: Topic; label: string }[] = [
  { value: 'gardening', label: 'Gardening' },
  { value: 'sport', label: 'Sport' },
  { value: 'beauty', label: 'Beauty' },
  { value: 'clothes', label: 'Clothes' },
  { value: 'painting', label: 'Painting' },
  { value: 'jewelry', label: 'Jewelry' },
  { value: 'cooking', label: 'Cooking' },
  { value: 'reading', label: 'Reading' },
  { value: 'music', label: 'Music' },
  { value: 'tech', label: 'Tech' },
  { value: 'travel', label: 'Travel' },
  { value: 'home', label: 'Home' },
];

export const PRICE_OPTIONS: { value: PriceRange; label: string }[] = [
  { value: 'any', label: 'Any budget' },
  { value: 'under-25', label: 'Under €25' },
  { value: '25-50', label: '€25 – €50' },
  { value: '50-100', label: '€50 – €100' },
  { value: '100-250', label: '€100 – €250' },
  { value: 'over-250', label: 'Over €250' },
];

export const EVENT_OPTIONS: { value: Event; label: string }[] = [
  { value: 'any', label: 'Any occasion' },
  { value: 'birthday', label: 'Birthday' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'christmas', label: 'Christmas' },
  { value: 'graduation', label: 'Graduation' },
  { value: 'baby-shower', label: 'Baby shower' },
  { value: 'housewarming', label: 'Housewarming' },
  { value: 'thank-you', label: 'Thank you' },
  { value: 'valentines', label: "Valentine's Day" },
];

export const HOBBY_FILTER_OPTIONS = HOBBY_OPTIONS.map((hobby) => ({
  value: hobby,
  label: hobby.charAt(0).toUpperCase() + hobby.slice(1),
}));
