import config from '../../config/config.json'

const orderRoot = 'orders'

export const OrderResource = {
  getAllOrders: () => {
    return fetch(`${config.backend_url}/${orderRoot}`, {
      method: 'GET',
    }).then(response => response.json())
  },

  getOrderById: id => {
    return fetch(`${config.backend_url}/${orderRoot}/${id}`, {
      method: 'GET',
    }).then(response => response.json())
  },

  updateOrder: order => {
    return fetch(`${config.backend_url}/${orderRoot}/`, {
      method: 'PUT',
      body: order,
    }).then(response => response.json())
  },

  saveOrder: order => {
    return fetch(`${config.backend_url}/${orderRoot}/`, {
      method: 'POST',
      body: order,
    })
  },

  deactivateOrder: id => {
    return fetch(`${config.backend_url}/${orderRoot}/${id}`, {
      method: 'DELETE',
    })
  },
}
