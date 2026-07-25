export interface IResumeFile {
  url: string;
  format: "pdf";
  size?: string;
}

export interface IResumeVersion {
  label: string;
  locale: string;
  url: string;
  size?: string;
}

export interface IResume {
  file: IResumeFile;
  lastUpdated: string;
  available: boolean;
  versions?: IResumeVersion[];
  highlights?: string[];
}
