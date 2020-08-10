import Store from 'store'
import SessionStorage from 'store/storages/sessionStorage'

class AuthService {
    intendeedRoute: string | null;
    user: { email: string } | null;
    token: string | null;

    constructor() {
        this.intendeedRoute = null;
        this.user = Store.get('user');
        this.token = Store.get('token');
    }

    setIntendedRoute(path: string) {
        if (path !== '/') {
            SessionStorage.write('intendeedRoute', path);
            this.intendeedRoute = path;
        }
    }

    getIntendeedRoute() {
        return SessionStorage.read('intendeedRoute');
    }

    async login(email: string, password: string) {
        await new Promise(resolve => {
            setTimeout(() => {
                this.user = { email };
                this.token = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
                resolve();
            }, 2000)
        })

        Store.set('token', this.token);
        Store.set('user', this.user);

        return this.user
    }

    logout() {
        Store.remove('user');
        Store.remove('token');
        SessionStorage.remove('intendeedRoute');

        this.user = null;
        this.token = null;
        this.intendeedRoute = null;
    }

    isAuthenticated() {
        return this.token && this.token.length > 0;
    }

    removeToken() {
        this.token = null;
        Store.remove('token');
    }
}

export default new AuthService()
