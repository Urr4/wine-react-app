import React from 'react'
import redwine from "./fixtures/redwine.json"
import whitewine from "./fixtures/whitewine.json"
import rosewine from "./fixtures/rosewine.json"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {WineSelectable} from "../../src/Components/Wine/WineSelectable";
import WineForm from "../../src/Components/Wine/WineForm";

export default storiesOf =>
  storiesOf('Components/Wine', module)
    .add('WineSelectable', () => (
      <MuiThemeProvider>
        <div>
          <WineSelectable
            wine={redwine}
          />
          <WineSelectable
            wine={whitewine}
          />
          <WineSelectable
            wine={rosewine}
          />
        </div>
      </MuiThemeProvider>
    ))

    .add('WineForm', () => (
      <MuiThemeProvider>
        <WineForm
          wine={redwine}
        />
      </MuiThemeProvider>
    ))

    .add('WineSelectable without embeddeding', () => (
      <MuiThemeProvider>
        <WineSelectable wine={redwine}>
        </WineSelectable>
      </MuiThemeProvider>
    ))

    .add('WineSelectable with embedded WineForm', () => (
      <MuiThemeProvider>
        <WineSelectable wine={redwine}>
          <WineForm wine={redwine}/>
        </WineSelectable>
      </MuiThemeProvider>
    ))
