import config from '../../config/config.json'

const wineRoot = 'wines'

export const WineResource = () => {
  const getAllWine = () => {
    return fetch(`${config.backend_url}/${wineRoot}`, {
      method: 'GET',
    }).then(response => response.json())
  }

  const getWineById = id => {
    return fetch(`${config.backend_url}/${wineRoot}/${id}`, {
      method: 'GET',
    }).then(response => response.json())
  }

  const updateWine = wine => {
    return fetch(`${config.backend_url}/${wineRoot}/`, {
      method: 'PUT',
      body: wine,
    }).then(response => response.json())
  }

  const saveWine = wine => {
    return fetch(`${config.backend_url}/${wineRoot}/`, {
      method: 'POST',
      body: wine,
    })
  }

  const deactivateWine = (id) => {
    return fetch(`${config.backend_url}/${wineRoot}/${id}`, {
      method: 'DELETE',
    })
  }
}
