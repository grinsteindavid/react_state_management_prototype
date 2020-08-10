class AuthService {
    intendeedRoute: string | null;
    user: { email: string } | null;
    token: string | null;

    constructor() {
        this.intendeedRoute = null;
        this.user = null;
        this.token = null;
    }

    setIntendedRoute(path: string) {
        if (path !== '/') {
            this.intendeedRoute = path;
        }
    }

    getIntendeedRoute() {
        return this.intendeedRoute;
    }

    async login(email: string, password: string) {
        await new Promise(resolve => {
            setTimeout(() => {
                this.user = { email };
                this.token = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
                resolve();
            }, 2000)
        })

        return true
    }

    logout() {
        this.user = null;
        this.token = null;
        this.intendeedRoute = null;
    }

    isAuthenticated() {
        return this.token && this.token.length > 0;
    }

    removeToken() {
        this.token = null;
    }
}

export default new AuthService()
