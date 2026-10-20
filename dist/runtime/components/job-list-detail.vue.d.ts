declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): string[];
        function headlineClassList(): string;
        function headlineLevelValue(): any;
        function style(): string;
        function color(): any;
        function getUuid(): string;
    }
    function setup(): {
        locale: any;
    };
    function mounted(): void;
    function data(): {
        loadingDelay: number;
        sleepDelay: number;
        loading: {};
        hasLoading: boolean;
        hasLoader: boolean;
        hideLoading: boolean;
        api: {};
        hasBack: boolean;
        entryData: {};
        personQuote: null;
        videoInner: null;
        jobIdValue: null;
    };
    namespace methods {
        function init(): void;
        function showBackButton(): void;
        function loadJob(): void;
        function handleCta(): void;
        function handleJob(entry: any): void;
        function stopLoading(): void;
        function update(entryData: any): void;
        function loadLocalJobData(): any;
        function addCustomStyle(): void;
    }
    namespace props {
        let detailColor: StringConstructor;
        let clientName: StringConstructor;
        let jobId: StringConstructor;
        let apiUrl: StringConstructor;
        let headlineLevel: StringConstructor;
        let headlineClasses: StringConstructor;
        let ctaText: StringConstructor;
        let ctaButton: BooleanConstructor;
        let form: ObjectConstructor;
        let googleMaps: ObjectConstructor;
        let modalSuccess: ObjectConstructor;
        let modalError: ObjectConstructor;
        let apiKey: StringConstructor;
        let mockApplyUrl: StringConstructor;
        let mockDocumentsUrl: StringConstructor;
        let lang: StringConstructor;
    }
}
export default _default;
