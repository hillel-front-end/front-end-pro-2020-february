class HTTP {
    constructor() {
        this._url = null;
        this.domain = 'http://localhost:3005'
    } 

    get url () {
        return this._url;
    }

    set url(path) {
        this._url = `${this.domain}/${path || ''}`;
    }

    async getCadidatesAllList() {
        this.url = 'candidates';
        const responce = await fetch(this.url);
        const data = await responce.json();

        return data;
    }
}

export default new HTTP();