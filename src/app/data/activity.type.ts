//  ! Sample types

export type Id = string | number;

export type AgeCategory = 'adult' | 'child' | 'family';

export type ActivityStatus =
  | 'draft'
  | 'published'
  | 'cancelled'
  | 'confirmed'
  | 'finished';

export type Activity = {
  ageCategory: AgeCategory;
  currency: string;
  date: string;
  description: string;
  id: Id;
  location: string;
  maxParticipants: number;
  minParticipants: number;
  price: number;
  slug: string;
  state: ActivityStatus;
  title: string;
  userId: Id;
};

export const ACTIVITY_EMPTY: Activity = {
  ageCategory: 'adult',
  currency: 'EUR',
  date: '01-01-1970',
  description: '',
  id: '',
  location: '',
  maxParticipants: 0,
  minParticipants: 0,
  price: 0,
  slug: '',
  state: 'draft',
  title: 'No title',
  userId: '',
};
