import config from '../../config/config.json'

const wineRoot = 'wines'

export const WineResource = {
  getAllWines: () => {
    return fetch(`${config.backend_url}/${wineRoot}`, {
      method: 'GET',
    }).then(response => response.json())
  },

  getWineById: id => {
    return fetch(`${config.backend_url}/${wineRoot}/${id}`, {
      method: 'GET',
    }).then(response => response.json())
  },

  updateWine: wine => {
    return fetch(`${config.backend_url}/${wineRoot}/`, {
      method: 'PUT',
      body: wine,
    }).then(response => response.json())
  },

  saveWine: wine => {
    return fetch(`${config.backend_url}/${wineRoot}/`, {
      method: 'POST',
      body: wine,
    })
  },

  deactivateWine: id => {
    return fetch(`${config.backend_url}/${wineRoot}/${id}`, {
      method: 'DELETE',
    })
  },

  getUserLikingWine: id => {
    return fetch(`${config.backend_url}/${wineRoot}/${id}/users`, {
      method: 'GET',
    })
  },
}
