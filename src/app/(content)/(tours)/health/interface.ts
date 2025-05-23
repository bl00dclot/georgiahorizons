export interface WellnessData {
    id: number;
    section: string;
    intro: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    options: WellnessOption[];
  }
  
  export interface WellnessOption {
    id: number;
    subtext: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    locations: WellnessLocation[];
  }
  
  export interface WellnessLocation {
    id: number;
    location: string;
    name: string;
    imageSrc: string;
    imageAlt: string;
  }