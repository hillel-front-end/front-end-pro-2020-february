export default class CandidatesView {
    constructor() {
        this.app = document.querySelector('#app');
        this.template = '';
    }


    createAllCandidates(condidates) {
        this.template = `
            <article class="candidates">
                ${
                    condidates.map(candidate => {
                        return `
                            <section class="candidates__candidate">
                                <div class="candidates__name">
                                    ${candidate.name}
                                </div>
                                <div class="candidates__desc">
                                    ${candidate.desc}
                                </div>
                            </section>
                        `
                    }).join(' ')
                }
            </article>
        `;
    }

    render() {
        this.app.innerHTML = this.template;
    }
}