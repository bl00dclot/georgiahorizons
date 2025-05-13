export interface NightlifeVenue {
    name: string;
    category: string;
    type: string;
    description: string;
  }

export type NightlifeData = Record<string, NightlifeVenue[]>;