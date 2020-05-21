import http from './HTTPService';

export default class CandidatesService {
    constructor() {

    }

    async getCadidatesAllList() {
        let data = await http.getCadidatesAllList();
        // data = data.filter(item => age > 18);
        return data;
    }
}