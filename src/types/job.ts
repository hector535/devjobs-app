export interface ICountry {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: IRequirements;
  role: IRequirements;
}

export interface IRequirements {
  content: string;
  items: string[];
}
