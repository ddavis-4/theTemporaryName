//! Gobal types

export interface Card {
	id: number;
	title: string;
	image: string;
	color?: string;
}

export interface FortuneAPIRequest {
  fortuneType: number;
  title: string;
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