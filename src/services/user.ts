import faker from 'faker';

export interface IUser {
    id: number,
    fullName: string,
    email: string,
    birthday: string
}
class UserService {


    constructor() {

    }

    async fetchUsers() {
        let users: IUser[] = []

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() <= 0.4) {
                    reject()
                }

                users = Array.from(Array(100).keys()).map(() => {
                    return {
                        id: faker.random.number(),
                        fullName: faker.name.findName(),
                        email: faker.internet.email(),
                        birthday: faker.date.between('1970-01-01', '1990-01-05').toDateString()
                    }
                })

                resolve()
            }, 1200)
        })

        return users
    }
}

export default new UserService();
