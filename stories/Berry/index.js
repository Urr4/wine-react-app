import React from 'react'
import {MuiThemeProviderDecorator} from "../decorators";
import {BerrySelectable} from "../../src/Components/Berry/BerrySelectable";
import berry from './fixtures/berry.json'

export default storiesOf =>
  storiesOf('Components/Berry', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('BerrySelectable', () => (
      <BerrySelectable berry={berry}></BerrySelectable>
    ))
