import React from 'react'
import {MuiThemeProviderDecorator} from "../decorators"
import {SellerSelectable} from "../../src/Components/Seller/SellerSelectable"
import {SellerForm} from "../../src/Components/Seller/SellerForm";
import seller from './fixtures/seller.json'

export default storiesOf =>
  storiesOf('Components/Seller', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('SellerSelectable', () => (
      <SellerSelectable seller={seller}></SellerSelectable>
    ))

    .add('SellerForm', () => (
      <SellerForm seller={seller}></SellerForm>
    ))

    .add('SellerSelectable with embedded SellerForm', () => (
      <SellerSelectable seller={seller}>
        <SellerForm seller={seller}/>
      </SellerSelectable>
    ))

