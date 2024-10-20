export default Personio;
declare class Personio {
    constructor(options: any);
    defaultLang: string;
    types: {
        OPENINGS: string;
        APPLICATIONS: string;
        DOCUMENTS: string;
    };
    recruitingChannels: {
        CAREER_PAGE: number;
    };
    phaseIds: {
        NEW_APPLICATION: number;
    };
    responseTypes: {
        XML: string;
        JSON: string;
    };
    defaultClientName: string;
    mockApplyUrl: string;
    mockDocumentsUrl: string;
    options: any;
    lang: string;
    jobId: any;
    apiUrl: string;
    openingsUrl: string;
    applicationsUrl: string;
    documentsUrl: string;
    getUrl(type: any): string;
    setLang(lang: any): void;
    setFilter(filter: any): void;
    filter: any;
    getAll(): Promise<any>;
    getOpening(jobId: any): Promise<any>;
    convertPosition(position: any): {
        lang: string;
        id: any;
        title: any;
        description: any;
        team: string;
        position_type: any;
        tags: any;
        order: number | null;
    } | null;
    filterPosition(position: any): any;
    convertData(data: any): any;
    getConvertedJson(data: any): any;
    fetchXML(fetchPromise: any): Promise<any>;
    fetch(url: any, options: any, type: any): Promise<any>;
    uploadDocuments(fileData: any): Promise<any[]>;
    uploadDocument(fileData: any): Promise<any>;
    applyFileData(fileData: any, _: any, fields: any): Promise<any>;
    addFilesToFields(responses: any, fields: any, resolve: any, reject: any): Promise<any>;
    getMappedFieldName(name: any): any;
    isValidResponseCode(response: any): boolean;
    hasValidResponseCodes(responses: any): any;
    handleApply(fields: any): Promise<any>;
    getFormPayload(formData: any, Form: any): {
        job_position_id: number;
        attributes: never[];
        phase: {
            type: string;
            id: number;
        };
        recruiting_channel_id: number;
    };
    getHeaders(): {
        'Ocp-Apim-Subscription-Key': any;
    };
    apply(fields: any): Promise<any>;
}
