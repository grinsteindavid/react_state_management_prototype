import faker from 'faker';
import { openAuthModal } from '../reducers/auth_modal';
import reduxStore from '../redux_store';
import { uniqBy } from 'lodash';

export interface IUser {
    id: number,
    fullName: string,
    email: string,
    birthday: string
}
class UserService {

    async fetchUsers(): Promise<IUser[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let users: IUser[] = []
                const randomNumber = Math.random()
                const HTTP_503 = randomNumber <= 0.1
                const HTTP_401 = randomNumber <= 0.7

                if (HTTP_503) {
                    reject()
                }
                if (HTTP_401) {
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

                resolve(uniqBy(users, 'id'))
            }, 1200)
        })
    }
}

export default new UserService();
