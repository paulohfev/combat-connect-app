import { Theme } from '@mui/material'

const styles = {
  appBar: (theme: Theme) => ({
    height: theme.appBar.height,
  }),
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
  },
  link: {
    alignItems: 'center',
    color: 'inherit',
    display: 'flex',
    textDecoration: 'none',
  },
  logoText: {
    marginLeft: '5px',
  },
}

export default styles
