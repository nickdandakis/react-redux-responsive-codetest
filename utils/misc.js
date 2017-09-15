export const isClient = typeof window !== 'undefined';
export const isProduction = process.env.NODE_ENV === 'production';

// Gets the display name of a JSX component for dev tools
export function getComponentDisplayName (Component) {
  return Component.displayName || Component.name || 'Unknown';
}
