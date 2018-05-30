import config from '../../config/config.json'

const sellerRoot = 'sellers'

export const SellerResource = () => {
  const getAllSeller = () => {
    return fetch(`${config.backend_url}/${sellerRoot}`, {
      method: 'GET',
    }).then(response => response.json())
  }

  const getSellerById = id => {
    return fetch(`${config.backend_url}/${sellerRoot}/${id}`, {
      method: 'GET',
    }).then(response => response.json())
  }

  const updateSeller = seller => {
    return fetch(`${config.backend_url}/${sellerRoot}/`, {
      method: 'PUT',
      body: seller,
    }).then(response => response.json())
  }

  const saveSeller = seller => {
    return fetch(`${config.backend_url}/${sellerRoot}/`, {
      method: 'POST',
      body: seller,
    })
  }

  const deactiveSeller = id => {
    return fetch(`${config.backend_url}/${wineRoot}/${id}`, {
      method: 'DELETE',
    })
  }
}
