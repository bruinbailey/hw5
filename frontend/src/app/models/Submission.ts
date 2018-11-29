export class Submission {
    assignment: {name: String, section: String, submitter: String}
    fileName: String
    text: String
    submittedDate: String
    grade: Number

    constructor() {
        this.assignment = {
            name: '',
            section: '',
            submitter: '',
        }
    }
}
