export const lightTheme = {
  primary: {
    main: '#252962',    // New Primary Color
    light: '#818CF8',   // Adjust if needed
    dark: '#3730A3',    // Adjust if needed
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#F36724',    // New Secondary Color
    light: '#34D399',   // Adjust if needed
    dark: '#059669',    // Adjust if needed
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#F9FAFB',
    paper: '#FFFFFF',
    alternate: '#F3F4F6',
  },
  text: {
    primary: '#111827',
    secondary: '#4B5563',
    disabled: '#9CA3AF',
  },
  divider: '#E5E7EB',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  success: '#10B981',
};

export const darkTheme = {
  primary: {
    main: '#252962',    // New Primary Color
    light: '#A5B4FC',   // Adjust if needed
    dark: '#4F46E5',    // Adjust if needed
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#F36724',    // New Secondary Color
    light: '#6EE7B7',   // Adjust if needed
    dark: '#10B981',    // Adjust if needed
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#111827',
    paper: '#1F2937',
    alternate: '#374151',
  },
  text: {
    primary: '#F9FAFB',
    secondary: '#E5E7EB',
    disabled: '#9CA3AF',
  },
  divider: '#374151',
  error: '#F87171',
  warning: '#FBBF24',
  info: '#60A5FA',
  success: '#34D399',
};

export type Theme = typeof lightTheme;
