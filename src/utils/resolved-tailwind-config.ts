import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.ts';

// Fully resolve the Tailwind config
const fullConfig = resolveConfig(tailwindConfig);

// First, cast to 'unknown' to tell TS we know what we're doing,
// then cast to the type we expect. This is the safe way.
const colors = fullConfig.theme.colors as unknown as Record<string, string>;

const primaryColor = colors.primary;
const accentColor = colors.accent;

if (!primaryColor || !accentColor) {
  throw new Error('Could not find primary or accent color in tailwind.config.ts');
}

// Export a clean object with the colors we need in our JS/TS files
export const themeColors = {
  primary: primaryColor,
  accent: accentColor,
};
