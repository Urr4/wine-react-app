import React from 'react'
import {MuiThemeProviderDecorator} from "../decorators";
import {BerrySelectable} from "../../src/Components/Berry/BerrySelectable";

export default storiesOf =>
  storiesOf('Components/Berry', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('BerrySelectable', () => (
      <BerrySelectable></BerrySelectable>
    ))
