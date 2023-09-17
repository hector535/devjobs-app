export type FilterBarFields = {
  title: string;
  location: string;
  isFullTime: boolean;
};

export interface IJob {
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

export type Logo =
  | "blogr"
  | "coffeeroasters"
  | "creative"
  | "crowdfund"
  | "maker"
  | "mastercraft"
  | "officelite"
  | "pod"
  | "pomodoro"
  | "scoot"
  | "typemaster"
  | "vector";
