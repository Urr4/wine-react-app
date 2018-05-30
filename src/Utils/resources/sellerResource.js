const sellerRoot = 'sellers'

export const SellerResource = () => {

  const getAllSeller = () => {
    return fetch(`${TODO}/${sellerRoot}`, {
      method: 'GET'
    })
      .then(response => response.json())
  }

  const getSellerById = (id) => {
    return fetch (`${TODO}/${sellerRoot}/${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
  }

  const updateSeller = (seller) => {
    return fetch (`${TODO}/${sellerRoot}/`, {
      method: 'PUT',
      body: seller
    })
      .then(response => response.json())
  }

  const saveSeller = (seller) => {
    return fetch (`${TODO}/${sellerRoot}/`, {
      method: 'POST',
      body: seller
    })
  }
}
