import config from '../../config/config.json'

const sellerRoot = 'sellers'

export const SellerResource = {
  getAllSellers: () => {
    return fetch(`${config.backend_url}/${sellerRoot}`, {
      method: 'GET',
    }).then(response => response.json())
  },

  getSellerById: id => {
    return fetch(`${config.backend_url}/${sellerRoot}/${id}`, {
      method: 'GET',
    }).then(response => response.json())
  },

  updateSeller: seller => {
    return () => {
      return fetch(`${config.backend_url}/${sellerRoot}/`, {
        method: 'PUT',
        body: seller,
      }).then(response => response.json())
    }
  },

  saveSeller: seller => {
    return fetch(`${config.backend_url}/${sellerRoot}/`, {
      method: 'POST',
      body: seller,
    })
  },

  deactiveSeller: id => {
    return fetch(`${config.backend_url}/${sellerRoot}/${id}`, {
      method: 'DELETE',
    })
  },
}
