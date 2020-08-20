import faker from 'faker';
import { uniqBy } from 'lodash';
import { openAuthModal } from '../reducers/auth_modal';
import reduxStore from '../redux_store';

export interface IPermission {
    id: number,
    fullName: string,
    city: string,
    createdAt: string
}
class PermissionsService {

    async fetchPermissions(): Promise<IPermission[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let permissions: IPermission[] = []
                const randomNumber = Math.random()
                const HTTP_503 = randomNumber <= 0.4
                const HTTP_401 = randomNumber <= 0.7

                if (HTTP_503) {
                    reject()
                }
                if (HTTP_401) {
                    reduxStore.dispatch(openAuthModal())
                }

                permissions = Array.from(Array(100).keys()).map(() => {
                    return {
                        id: faker.random.number(),
                        fullName: faker.name.findName(),
                        city: faker.address.city(),
                        createdAt: faker.date.between('2020-01-01', '2020-01-05').toDateString()
                    }
                })

                resolve(uniqBy(permissions, 'id'))
            }, 1200)
        })
    }
}

export default new PermissionsService();
