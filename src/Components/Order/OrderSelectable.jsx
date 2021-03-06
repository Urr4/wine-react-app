import React, { Component } from 'react'
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardText,
  Checkbox,
  Divider,
  List,
  ListItem,
} from 'material-ui'
import { getHexColor } from '../../Utils/wineUtil'

class OrderSelectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order: props.order,
    }
  }

  render() {
    return (
      <Card>
        <CardHeader
          title={'Bestellung bei ' + this.state.order.seller.name}
          subtitle={this.state.order.fullPrice + '€, davon ' + this.state.order.porto + '€ Porto'}
          actAsExpander
          showExpandableButton
        />
        <Divider />
        <CardText expandable>
          <List>
            {this.state.order.orderedWines.map(orderedWine => {
              return (
                <ListItem
                  key={'OrderSelectable/' + orderedWine.id}
                  primaryText={orderedWine.wine.name}
                  disabled
                  leftAvatar={
                    <Avatar backgroundColor={getHexColor(orderedWine.wine.color)}>
                      {orderedWine.amountOfWine}
                    </Avatar>
                  }
                  rightAvatar={
                    <Avatar backgroundColor={'#00000'} color={'#fffff'}>
                      {orderedWine.amountOfWine * orderedWine.wine.price + '€'}
                    </Avatar>
                  }
                />
              )
            })}
          </List>
        </CardText>
        <Divider />
        <CardActions expandable>
          <List>
            <ListItem leftCheckbox={<Checkbox />} primaryText={'Empfangen'} />
            <ListItem leftCheckbox={<Checkbox />} primaryText={'Bezahlt'} />
          </List>
        </CardActions>
      </Card>
    )
  }
}

export { OrderSelectable }
