const userRoot = 'users'

export const UserResource = () => {

  const getAllUser = () => {
    return fetch(`${TODO}/${userRoot}`, {
      method: 'GET'
    })
      .then(response => response.json())
  }

  const getUserById = (id) => {
    return fetch (`${TODO}/${userRoot}/${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
  }

  const updateUser = (user) => {
    return fetch (`${TODO}/${userRoot}/`, {
      method: 'PUT',
      body: user
    })
      .then(response => response.json())
  }

  const saveUser = (user) => {
    return fetch (`${TODO}/${userRoot}/`, {
      method: 'POST',
      body: user
    })
  }
}
