export type UserParams = {
  username: string;
  password: string;
  email: string;
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type BookParams = {
  title: string;
  description: string;
  author: string;
  realYears: string;
  year: string;
  country: string;
  language?: string;
  price?: number;
  pages: number;
  wikipediaLink?: string;
  imageUrl?: string;
  status?: number; // 1: available, 0: unavailable
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserResponse = {
  id: number;
  username: string;
  email: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};
export type BookResponse = {
  id: number;
  title: string;
  description: string;
  author: string;
  realYears: string;
  year: string;
  country: string;
  language?: string;
  price?: number;
  pages: number;
  wikipediaLink?: string;
  imageUrl?: string;
  status?: number; // 1: available, 0: unavailable
  createdAt?: Date;
  updatedAt?: Date;
};
