import { storiesOf } from '@storybook/react'

import userStories from './User'
import wineStories from './Wine'
import sellerStories from './Seller'
import orderStories from './Order'
import berryStories from './Berry'
import basicStories from './Basic'

basicStories(storiesOf)
berryStories(storiesOf)
orderStories(storiesOf)
sellerStories(storiesOf)
userStories(storiesOf)
wineStories(storiesOf)
