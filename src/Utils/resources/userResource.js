import config from '../../config/config.json'

const userRoot = 'users'

export const UserResource = () => {
  const getAllUser = () => {
    return fetch(`${config.backend_url}/${userRoot}`, {
      method: 'GET',
    }).then(response => response.json())
  }

  const getUserById = id => {
    return fetch(`${config.backend_url}/${userRoot}/${id}`, {
      method: 'GET',
    }).then(response => response.json())
  }

  const updateUser = user => {
    return fetch(`${config.backend_url}/${userRoot}/`, {
      method: 'PUT',
      body: user,
    }).then(response => response.json())
  }

  const saveUser = user => {
    return fetch(`${config.backend_url}/${userRoot}/`, {
      method: 'POST',
      body: user,
    })
  }

  const deactivateUser = id => {
    return fetch(`${config.backend_url}/${userRoot}/${id}`, {
      method: 'DELETE',
    })
  }
}
