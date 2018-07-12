import config from '../../config/config.json'

const userRoot = 'users'

export const UserResource = {
  getAllUsers: () => {
    return fetch(`${config.backend_url}/${userRoot}`, {
      method: 'GET',
    }).then(response => response.json())
  },

  getUserById: id => {
    return fetch(`${config.backend_url}/${userRoot}/${id}`, {
      method: 'GET',
    }).then(response => response.json())
  },

  updateUser: user => {
    return fetch(`${config.backend_url}/${userRoot}/`, {
      method: 'PUT',
      body: user,
    }).then(response => response.json())
  },

  saveUser: user => {
    return fetch(`${config.backend_url}/${userRoot}/`, {
      method: 'POST',
      body: user,
    })
  },

  deactivateUser: id => {
    return fetch(`${config.backend_url}/${userRoot}/${id}`, {
      method: 'DELETE',
    })
  },
}
