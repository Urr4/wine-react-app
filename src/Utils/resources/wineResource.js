const wineRoot = 'wines'

export const WineResource = () => {

  const getAllWine = () => {
    return fetch(`${TODO}/${wineRoot}`, {
      method: 'GET'
    })
      .then(response => response.json())
  }

  const getWineById = (id) => {
    return fetch (`${TODO}/${wineRoot}/${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
  }

  const updateWine = (wine) => {
    return fetch (`${TODO}/${wineRoot}/`, {
      method: 'PUT',
      body: wine
    })
      .then(response => response.json())
  }

  const saveWine = (wine) => {
    return fetch (`${TODO}/${wineRoot}/`, {
      method: 'POST',
      body: wine
    })
  }
}
