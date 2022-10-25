export const tmp = null

/*
import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'


declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    button: {
      // -> to use main, light, dark use: PaletteOptions['primary'];
      // or use CSSProperties['color'] --> import {CSSProperties} from 'react'
      disabled: string
      specialNavLight: string
      specialNavDark: string
    }
  }

  interface PaletteOptions {
    button: {
      disabled: string
      specialNavLight: string
      specialNavDark: string
    }
  }
}

// todo: integrate all these colors
const colorPalette = {
  white: '#fff',
  whiteHeader: '##f7f7f7',
  date: '#d6facf',
  time: '#8cd0a2',
  buttonToggleBorder: '#679fff',
  headNavColorHover: '#2f3647',
  headNavBg: '#fafafa',
  headNavBorderBottom: '#e7e7e7'
}

export const theme = responsiveFontSizes(createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {}
      }
    },
    palette: {
      button: {
        disabled: '#4d638d',
        specialNavLight: '#8898AA',
        specialNavDark: '#32325d'
      },
      text: {
        primary: '#4f515b'
      },
      background: {default: '#fff'},
      primary: {
        light: '#679fff',
        main: '#3f83ff',
        dark: '#2673ff',
        contrastText: colorPalette.white
      },
      secondary: {
        main: '#19857b',
        contrastText: colorPalette.white
      },
      error: {
        main: '#d94848'
      }
    },
    typography: {
      fontFamily: [
        'myriad-pro',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    },
    spacing: factor => `${0.25 * factor}rem`
  }),
  {factor: 1}
)


/!*
export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
      }
    }
  },

  *!/

/!*
export const theme = {
  colors: {
    buttons: {
      primary: colorPalette.blue
    },
    links: {},
    text: {},
    border: {}
  },
  spacings: {
    $paddingXS: '.3rem',
    $paddingS: '.7rem',
    $paddingBase: '1rem',
    $paddingM: '1.25rem',
    $paddingL: '1.5rem',
    $paddingXL: '2rem',
    $paddingXXL: '3rem',

    $borderRadius: '.3rem'
  },
  animations: {
    speed: '.25s',
    func: 'ease'
  },
  fonts: {
    fontXL: '3rem',
    fontL: '2rem',
    fontM: '1.2rem',
    fontBase: '1rem',
    fontS: '.7rem',

    fontFamily: '-apple-system, \'BlinkMacSystemFont\', \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\',
     \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif',
    fontFamilyScript: '\'Marck Script\'',
    fontFamilyMonospace: '\'SFMono-Regular\', \'Menlo\', \'Monaco\', \'Consolas\', \'Liberation Mono\',
     \'Courier New\', \'monospace\''
  },
  zIndex: {}
}
*!/
*/
