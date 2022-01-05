export class ErrorResponse {
    title: string;
    detail: any;
    code?: string | number;

    constructor(title: string, detail: any, code?: string | number) {
        this.title = title;
        this.detail = detail;
        this.code = code;
    }
}
