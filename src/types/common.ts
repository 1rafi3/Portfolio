export interface INavLink {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
  active: IActivePattern;
  children?: INavLink[];
}

export interface IActivePattern {
  exact: boolean;
  pattern?: string;
}

export interface ISocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
  active?: boolean;
}

export interface IImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface IDateRange {
  start: string;
  end: string | "present";
}

export interface IOpenGraph {
  title: string;
  description: string;
  image?: IImage;
  type: "website" | "article" | "profile";
  locale?: string;
}

export interface ITwitterCard {
  card: "summary" | "summary_large_image";
  site?: string;
  creator?: string;
}

export interface IRobotsConfig {
  index: boolean;
  follow: boolean;
  sitemap: boolean;
}

export interface IFooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface IFooterBadge {
  text: string;
  icon?: string;
  href?: string;
}

export interface IFooter {
  copyright: string;
  showSocialLinks: boolean;
  showNavigation: boolean;
  additionalLinks?: IFooterLink[];
  badge?: IFooterBadge;
}
