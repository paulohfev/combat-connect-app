import typography from './typography'

declare module '@mui/material/styles' {
  interface Theme {
    appBar: {
      height: string
    }
  }

  interface TypographyVariants {
    logo: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    logo: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    logo: true
  }
}

const theme = {
  typography: {
    h1: {
      fontSize: typography.h1.fontSize,
      fontWeight: typography.h1.fontWeight,
      lineHeight: typography.h1.lineHeight,
    },
    h2: {
      fontSize: typography.h2.fontSize,
      fontWeight: typography.h2.fontWeight,
      lineHeight: typography.h2.lineHeight,
    },
    h3: {
      fontSize: typography.h3.fontSize,
      fontWeight: typography.h3.fontWeight,
      lineHeight: typography.h3.lineHeight,
    },
    h4: {
      fontSize: typography.h4.fontSize,
      fontWeight: typography.h4.fontWeight,
      lineHeight: typography.h4.lineHeight,
    },
    subtitle1: {
      fontSize: typography.subtitle1.fontSize,
      fontWeight: typography.subtitle1.fontWeight,
      lineHeight: typography.subtitle1.lineHeight,
    },
    subtitle2: {
      fontSize: typography.subtitle2.fontSize,
      fontWeight: typography.subtitle2.fontWeight,
      lineHeight: typography.subtitle2.lineHeight,
    },
    body1: {
      fontSize: typography.body1.fontSize,
      fontWeight: typography.body1.fontWeight,
      lineHeight: typography.body1.lineHeight,
    },
    body2: {
      fontSize: typography.body2.fontSize,
      fontWeight: typography.body2.fontWeight,
      lineHeight: typography.body2.lineHeight,
    },
    button: {
      fontSize: typography.button.fontSize,
      fontWeight: typography.button.fontWeight,
      lineHeight: typography.button.lineHeight,
      textTransform: typography.button.textTransform,
    },
    caption: {
      fontSize: typography.caption.fontSize,
      fontWeight: typography.caption.fontWeight,
      lineHeight: typography.caption.lineHeight,
    },
    overline: {
      fontSize: typography.overline.fontSize,
      fontWeight: typography.overline.fontWeight,
      lineHeight: typography.overline.lineHeight,
      textTransform: typography.overline.textTransform,
    },
    logo: {
      fontSize: typography.logo.fontSize,
      fontWeight: typography.logo.fontWeight,
      lineHeight: typography.logo.lineHeight,
    },
  },
  appBar: {
    height: '50px',
  },
}

export default theme
