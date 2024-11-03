export interface LinkDetails {
  ID: number;
  Resource: string;
  Description: string;
  Link: string;
}

export interface DateRange {
  start: string;
  end: string;
}

export interface LinkScrape {
    ID?: number;
    Link: string;
    Words?: string[];
    PageTitle?: string;
    Description: string;
    Resource: string;
    Error: boolean;
    Ranges?: DateRange[];
    ErrorMessage?: string;
}