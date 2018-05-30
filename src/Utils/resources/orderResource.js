import config from '../../config/config.json'

const orderRoot = 'orders'

export const OrderResource = () => {
  const getAllOrder = () => {
    return fetch(`${config.backend_url}/${orderRoot}`, {
      method: 'GET',
    }).then(response => response.json())
  }

  const getOrderById = id => {
    return fetch(`${config.backend_url}/${orderRoot}/${id}`, {
      method: 'GET',
    }).then(response => response.json())
  }

  const updateOrder = order => {
    return fetch(`${config.backend_url}/${orderRoot}/`, {
      method: 'PUT',
      body: order,
    }).then(response => response.json())
  }

  const saveOrder = order => {
    return fetch(`${config.backend_url}/${orderRoot}/`, {
      method: 'POST',
      body: order,
    })
  }

  const deactivateOrder = id => {
    return fetch(`${config.backend_url}/${orderRoot}/${id}`, {
      method: 'DELETE',
    })
  }
}
