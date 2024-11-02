export interface LinkDetails {
  ID: number;
  Resource: string;
  Description: string;
  Link: string;
}

export interface LinkScrape {
    Link: string;
    Words?: string[];
    PageTitle?: string;
    Description: string;
    Resource: string;
    Error: boolean;
    ErrorMessage?: string;
}