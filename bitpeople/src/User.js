class User {
    constructor(userData) {
        this.id = userData.login.uuid
        this.name = `${userData.name.first} ${userData.name.last}`
        this.dob = new Date(userData.dob.date).toLocaleString().split(',')[0]
        this.email = userData.email   /* getMail metoda */
        this.image = userData.picture.medium
    }
}

export default User;