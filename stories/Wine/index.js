import React from 'react'
import redwine from "./fixtures/redwine.json"
import whitewine from "./fixtures/whitewine.json"
import rosewine from "./fixtures/rosewine.json"
import wines from "./fixtures/wines.json"
import {MuiThemeProviderDecorator} from '../decorators'
import {WineSelectable} from "../../src/Components/Wine/WineSelectable";
import WineForm from "../../src/Components/Wine/WineForm";
import WineView from "../../src/Views/WineView";

export default storiesOf =>
  storiesOf('Components/Wine', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('WineSelectable', () => (
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
    ))

    .add('WineForm', () => (
      <WineForm
        wine={redwine}
      />
    ))

    .add('WineSelectable without embeddeding', () => (
      <WineSelectable wine={redwine}>
      </WineSelectable>
    ))

    .add('WineSelectable with embedded WineForm', () => (
      <WineSelectable wine={redwine}>
        <WineForm wine={redwine}/>
      </WineSelectable>
    ))

    .add('WineView', () => (
      <WineView wines={wines}/>
    ))
