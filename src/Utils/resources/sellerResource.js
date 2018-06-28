import config from '../../config/config.json'

const sellerRoot = 'sellers'

export const SellerResource = {
  getAllSeller: () => {
    return fetch(`${config.backend_url}/${sellerRoot}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .catch(() => console.log(`Could not load all Sellers`))
  },

  getSellerById: id => {
    return fetch(`${config.backend_url}/${sellerRoot}/${id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .catch(() => console.log(`Could not load Seller ${id}`))
  },

  updateSeller: seller => {
    return () => {
      return fetch(`${config.backend_url}/${sellerRoot}/`, {
        method: 'PUT',
        body: seller,
      })
        .then(response => response.json())
        .catch(() => console.log(`Could not update Seller ${seller}`))
    }
  },

  saveSeller: seller => {
    return fetch(`${config.backend_url}/${sellerRoot}/`, {
      method: 'POST',
      body: seller,
    }).catch(() => console.log(`Could not save Seller ${seller}`))
  },

  deactiveSeller: id => {
    return fetch(`${config.backend_url}/${sellerRoot}/${id}`, {
      method: 'DELETE',
    }).catch(() => console.log(`Could not deactivate Seller ${id}`))
  },
}
