const orderRoot = 'orders'

export const OrderResource = () => {

  const getAllOrder = () => {
    return fetch(`${TODO}/${orderRoot}`, {
      method: 'GET'
    })
      .then(response => response.json())
  }

  const getOrderById = (id) => {
    return fetch (`${TODO}/${orderRoot}/${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
  }

  const updateOrder = (order) => {
    return fetch (`${TODO}/${orderRoot}/`, {
      method: 'PUT',
      body: order
    })
      .then(response => response.json())
  }

  const saveOrder = (order) => {
    return fetch (`${TODO}/${orderRoot}/`, {
      method: 'POST',
      body: order
    })
  }
}
