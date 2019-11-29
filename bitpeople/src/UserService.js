import User from './User'

const FetchUser = () => {
    const url = 'https://randomuser.me/api/?results=15'

    return fetch(url)
        .then(res => res.json)
        .then(data => {

            const MyUsers = data.result.map(userData => {
                return new User(userData)
            })
            return MyUsers
        })
}

export { FetchUser }