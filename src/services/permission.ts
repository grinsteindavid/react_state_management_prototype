import faker from 'faker';
import { uniqBy } from 'lodash';

export interface IPermission {
    id: number,
    fullName: string,
    city: string,
    createdAt: string
}
class PermissionsService {


    constructor() {

    }

    async fetchPermissions() {
        let permissions: IPermission[] = []

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() <= 0.4) {
                    reject()
                }

                permissions = Array.from(Array(100).keys()).map(() => {
                    return {
                        id: faker.random.number(),
                        fullName: faker.name.findName(),
                        city: faker.address.city(),
                        createdAt: faker.date.between('2020-01-01', '2020-01-05').toDateString()
                    }
                })

                resolve()
            }, 1200)
        })

        return uniqBy(permissions, 'id')
    }
}

export default new PermissionsService();
