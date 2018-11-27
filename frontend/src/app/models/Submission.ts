export class Submission {
    assignment: {name: string, section: string, submitter: string}
    fileName: string
    upload: Buffer
    text: string
    submittedDate: string
    grade: Number
}