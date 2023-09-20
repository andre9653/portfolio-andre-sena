import {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
  css,
} from 'styled-components';

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
  infinity: '2560px',
} as const;

const mq = {
  infinity: (
    style:
      | FlattenInterpolation<ThemeProps<DefaultTheme>>
      | FlattenSimpleInterpolation
      | string,
  ) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.infinity}) {
      ${style}
    }
  `,
  desktop: (
    style:
      | FlattenInterpolation<ThemeProps<DefaultTheme>>
      | FlattenSimpleInterpolation
      | string,
  ) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      ${style}
    }
  `,
  laptop: (
    style:
      | FlattenInterpolation<ThemeProps<DefaultTheme>>
      | FlattenSimpleInterpolation
      | string,
  ) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      ${style}
    }
  `,
  tablet: (
    style:
      | FlattenInterpolation<ThemeProps<DefaultTheme>>
      | FlattenSimpleInterpolation
      | string,
  ) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      ${style}
    }
  `,
  mobile: (
    style:
      | FlattenInterpolation<ThemeProps<DefaultTheme>>
      | FlattenSimpleInterpolation
      | string,
  ) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      ${style}
    }
  `,
};

const theme = {
  colors: {
    bg: '#fff',
    bgDark: '#191919',
    textDescription: '#666666',
    textDescriptionDark: '#CCCCCC',
    title: '#000000',
    titleDark: '#CCCCCC',
    subTitle: '#666666',
    subTitleDark: '#A7A7A7',
    gradient:
      'var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%))',
  },
  headerHeight: '5rem',
  headerHeightDesktop: '7rem',
  darkMode: {
    colors: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },
  breakpoints,
  mq,
  spacing: {
    mobile: '1.2rem',
    sm: '1.6rem', // Fonte padrão
    md: '2.4rem', // Subtítulo
    lg: '3.2rem', // Subtítulo
    xl: '4.8rem', // Título
    mobilePadding: '2rem',
  },
} as const;

export type ThemeType = typeof theme;
export default theme;
