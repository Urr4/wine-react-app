import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const MuiThemeProviderDecorator = (story) => {
    return (
      <MuiThemeProvider>
        {story()}
      </MuiThemeProvider>
    )
  }
;

export {MuiThemeProviderDecorator}
