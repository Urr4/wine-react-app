import React, {Component} from 'react'
import {SellerSelectable} from "../Components/Seller/SellerSelectable";
import {List, ListItem} from "material-ui";

class SellerView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sellers: props.sellers
    }
  }


  render() {
    return (
      <List>
        {this.state.sellers.map(seller => (
          <ListItem
            key={"SellerView/"+seller.id}
            disableTouchRipple={true}
          >
            <SellerSelectable seller={seller}/>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default SellerView
