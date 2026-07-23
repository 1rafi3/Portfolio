"use client";

interface IThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: IThemeProviderProps) {
  return <>{children}</>;
}
