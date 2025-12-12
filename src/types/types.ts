//! Gobal types

export interface CardColors {
  primary: string;
  secondary: string;
}

export interface Card {
	id: number;
	title: string;
  prompt: string;
	image: string;
	colors: CardColors;
}

export interface FortuneAPIRequest {
  fortuneType: number;
  title: string;
  prompt: string;
}

export interface FortuneAPIResponse {
  fortune: string;
  success?: boolean;
  message?: string;
}

export interface UseFortune {
  fortuneResult: string;
  isLoading: boolean;
  error: string | null;
}