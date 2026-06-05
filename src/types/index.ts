export type GiftType = 'buy' | 'make';

export type Gender = 'any' | 'female' | 'male' | 'non-binary';

export type AgeGroup = 'any' | 'child' | 'teen' | 'young-adult' | 'adult' | 'senior';

export type Topic =
  | 'gardening'
  | 'sport'
  | 'beauty'
  | 'clothes'
  | 'painting'
  | 'jewelry'
  | 'cooking'
  | 'reading'
  | 'music'
  | 'tech'
  | 'travel'
  | 'home';

export type PriceRange = 'any' | 'under-25' | '25-50' | '50-100' | '100-250' | 'over-250';

export type Event =
  | 'any'
  | 'birthday'
  | 'wedding'
  | 'anniversary'
  | 'christmas'
  | 'graduation'
  | 'baby-shower'
  | 'housewarming'
  | 'thank-you'
  | 'valentines';

export interface GiftIdea {
  id: string;
  title: string;
  description: string;
  type: GiftType;
  genders: Gender[];
  ageGroups: AgeGroup[];
  hobbies: string[];
  topics: Topic[];
  priceRange: PriceRange;
  events: Event[];
  emoji: string;
  tip?: string;
}

export interface GiftFilters {
  type: GiftType | 'any';
  gender: Gender;
  age: AgeGroup;
  hobbies: string[];
  topics: Topic[];
  priceRange: PriceRange;
  event: Event;
}
