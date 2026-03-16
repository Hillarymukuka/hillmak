export type Theme = 'tech' | 'creative';

export interface ThemeConfig {
  background: string;
  primaryButton: string;
  primaryButtonHover?: string;
  secondaryButton?: string;
  text: string;
  accent: string;
}

export const themeConfigs: Record<Theme, ThemeConfig> = {
  tech: {
    background: 'bg-tech-bg',
    primaryButton: 'bg-tech-accent hover:bg-tech-accent-dark',
    text: 'text-tech-white',
    accent: 'text-tech-accent',
  },
  creative: {
    background: 'bg-creative-bg',
    primaryButton: 'bg-creative-primary hover:bg-creative-primary-dark',
    secondaryButton: 'bg-creative-accent hover:bg-creative-accent/90',
    text: 'text-creative-white',
    accent: 'text-creative-primary',
  },
};
