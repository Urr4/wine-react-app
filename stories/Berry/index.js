import React from 'react'
import {MuiThemeProviderDecorator} from "../decorators";
import {BerryChip} from "../../src/Components/Berry/BerryChip";
import berry from './fixtures/berry.json'

export default storiesOf =>
  storiesOf('Components/Berry', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('BerryChip', () => (
      <BerryChip berry={berry}></BerryChip>
    ))
