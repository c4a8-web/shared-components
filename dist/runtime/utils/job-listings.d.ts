export default JobListings;
declare class JobListings {
    constructor(options: any);
    jobDataUrl: string;
    options: any;
    api: Personio;
    setLang(lang: any): void;
    setFilter(filter: any): void;
    getAll(): Promise<any>;
    getOpening(jobId: any): Promise<any>;
    getUrl(type: any, params: any, action: any): string;
    fetch(url: any, options: any): Promise<any>;
    getLangFromEntry(entry: any): any;
    getJobId(): string;
    getOrderedList(list: any): any[];
    getFormData(form: any): {
        job_position_id: number;
        attributes: never[];
        phase: {
            type: string;
            id: number;
        };
        recruiting_channel_id: number;
    };
    applyFileData(fileData: any, data: any, fields: any): Promise<any>;
    handleApply(fields: any): Promise<any>;
}
import Personio from './personio.js.js';
