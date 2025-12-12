import type { Card } from '../types/types';

// Import unique images
import fillerCat1 from './fillerCatPics/fillerCat1.jpeg';
import fillerCat2 from './fillerCatPics/fillerCat2.jpeg';
import fillerCat3 from './fillerCatPics/fillerCat3.jpeg';
import fillerCat4 from './fillerCatPics/fillerCat4.jpeg';
import fillerCat5 from './fillerCatPics/fillerCat5.jpeg';
import fillerCat6 from './fillerCatPics/fillerCat6.jpeg';

// Light mode cards - Positive, uplifting themes
export const lightModeCards: Card[] = [
  {
    id: 1,
    title: "Love & Romance",
    prompt: "Reveal wisdom about matters of the heart, new connections, or deepening bonds. Speak of love's transformative power in 2-3 mystical sentences.",
    image: fillerCat1,
    colors: {
      primary: '244, 63, 94',
      secondary: '251, 113, 133',
    },
  },
  {
    id: 2,
    title: "Success & Prosperity",
    prompt: "Share insights about upcoming opportunities, career growth, or material abundance. Speak of prosperity flowing toward the seeker in 2-3 mystical sentences.",
    image: fillerCat2,
    colors: {
      primary: '245, 158, 11',
      secondary: '217, 119, 6',
    },
  },
  {
    id: 3,
    title: "Health & Vitality",
    prompt: "Provide guidance about physical wellbeing, healing energy, or renewed strength. Speak of vitality and balance returning in 2-3 mystical sentences.",
    image: fillerCat3,
    colors: {
      primary: '34, 197, 94',
      secondary: '74, 222, 128',
    },
  },
  {
    id: 4,
    title: "Wisdom & Clarity",
    prompt: "Offer enlightenment about a difficult decision, hidden truth, or path forward. Speak of clarity emerging from confusion in 2-3 mystical sentences.",
    image: fillerCat4,
    colors: {
      primary: '168, 85, 247',
      secondary: '192, 132, 252',
    },
  },
  {
    id: 5,
    title: "Joy & Fulfillment",
    prompt: "Reveal insights about inner peace, contentment, or upcoming happiness. Speak of joy blooming in unexpected places in 2-3 mystical sentences.",
    image: fillerCat5,
    colors: {
      primary: '14, 165, 233',
      secondary: '56, 189, 248',
    },
  },
  {
    id: 6,
    title: "Adventure & Change",
    prompt: "Share visions of new beginnings, exciting journeys, or bold transformations. Speak of courage to embrace the unknown in 2-3 mystical sentences.",
    image: fillerCat6,
    colors: {
      primary: '249, 115, 22',
      secondary: '251, 146, 60',
    },
  },
];

// Dark mode cards - Mysterious, cautionary themes
export const darkModeCards: Card[] = [
	{
    id: 1,
    title: "Shadows & Secrets",
    prompt: "Reveal hidden truths lurking beneath the surface, secrets about to emerge, or concealed motives. Speak cryptically of what lies in darkness in 2-3 ominous sentences.",
    image: fillerCat1,
    colors: {
      primary: '139, 92, 246',
      secondary: '167, 139, 250',
    },
  },
  {
    id: 2,
    title: "Fate & Destiny",
    prompt: "Speak of unavoidable destiny, karmic debts coming due, or threads of fate tightening. Reveal what cannot be escaped in 2-3 foreboding sentences.",
    image: fillerCat2,
    colors: {
      primary: '56, 189, 248',
      secondary: '125, 211, 252',
    },
  },
  {
    id: 3,
    title: "Loss & Endings",
    prompt: "Provide guidance about necessary endings, letting go, or transformative loss. Speak of death giving way to rebirth in 2-3 somber sentences.",
    image: fillerCat3,
    colors: {
      primary: '161, 161, 170',
      secondary: '212, 212, 216',
    },
  },
  {
    id: 4,
    title: "Trials & Struggle",
    prompt: "Warn of challenges ahead, tests of character, or difficult lessons to learn. Speak of strength forged through adversity in 2-3 grave sentences.",
    image: fillerCat4,
    colors: {
      primary: '220, 38, 38',
      secondary: '252, 165, 165',
    },
  },
  {
    id: 5,
    title: "Deception & Betrayal",
    prompt: "Reveal warnings about false friends, hidden agendas, or trust misplaced. Speak of betrayal lurking close to home in 2-3 cautionary sentences.",
    image: fillerCat5,
    colors: {
      primary: '20, 184, 166',
      secondary: '94, 234, 212',
    },
  },
  {
    id: 6,
    title: "The Void & Unknown",
    prompt: "Speak of the unknowable, mysteries beyond comprehension, or stepping into absolute uncertainty. Reveal the terror and beauty of the infinite in 2-3 cryptic sentences.",
    image: fillerCat6,
    colors: {
      primary: '124, 58, 237',
      secondary: '192, 132, 252',
    },
];

export const princessCards: Card[] = [
	{
		id: 1,
		title: "Princess Card 1",
		prompt: " generate 2 sentences " ,
		image: "placeholder",
	},
];