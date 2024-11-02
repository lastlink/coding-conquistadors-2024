export interface LinkDetails {
  ID: number;
  Resource: string;
  Description: string;
  Link: string;
}

export interface LinkScrape {
    Link: string;
    Words?: string[];
    Error: boolean;
    ErrorMessage?: string;
}