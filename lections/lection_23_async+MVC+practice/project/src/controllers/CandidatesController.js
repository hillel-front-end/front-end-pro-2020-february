import CandidatesService from '../services/CandidatesService';
import CandidatesView from '../views/CandidatesView';

class CandidatesController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    
    async onInit() {
        const candidates = await this.getCadidatesAllList()
        this.getTemplateCadidates(candidates)
    }

    getCadidatesAllList() {
       return this.model.getCadidatesAllList();
    }
    
    getTemplateCadidates(candidates) {
        this.view.createAllCandidates(candidates)
        this.render();
    }

    render() {
        this.view.render();
    }
}

export default new CandidatesController(new CandidatesService(), new CandidatesView());
