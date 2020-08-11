import faker from 'faker';
import { openAuthModal } from '../reducers/auth_modal';
import reduxStore from '../redux_store';

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
                const randomNumber = Math.random()
                if (randomNumber <= 0.1) {
                    reject()
                }
                if (randomNumber <= 0.4) {
                    reduxStore.dispatch(openAuthModal())
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
