class User {
  constructor(name) {
    this.name = name
    this.likedWines = []
  }
}

User.propTypes = {
  name: PropTypes.string,
  likedWines: PropTypes.arrayOf(),
}

export default User
