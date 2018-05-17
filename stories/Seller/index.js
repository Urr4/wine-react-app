import React from 'react'
import {MuiThemeProviderDecorator} from "../decorators";
import {SellerSelectable} from "../../src/Components/Seller/SellerSelectable";
import seller from './fixtures/seller.json'
import sellers from './fixtures/sellers.json'
import SellerView from "../../src/Views/SellerView";

export default storiesOf =>
  storiesOf('Components/Seller', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('SellerSelectable', () => (
      <SellerSelectable seller={seller}></SellerSelectable>
    ))

    .add("SellerView", () => (
      <SellerView sellers={sellers}/>
    ))
