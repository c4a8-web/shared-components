declare namespace _default {
    let tagName: string;
    function data(): {
        isDragging: boolean;
        hasError: boolean;
        filesLength: number;
        files: DataTransfer;
    };
    namespace computed {
        function filesList(): any;
        function classList(): any;
        function interactableClassList(): any;
        function requiredValue(): any;
        function maxSizeMb(): any;
        function maxFilesValue(): any;
        function extensionList(): any;
        function extensionListText(): string;
        function acceptList(): any;
    }
    namespace props {
        namespace hasError {
            let _default: null;
            export { _default as default };
        }
        let maxSize: NumberConstructor;
        let description: StringConstructor;
        let text: StringConstructor;
        namespace requiredMsg {
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace required {
            let _default_2: null;
            export { _default_2 as default };
        }
        let extensions: ArrayConstructor;
        let id: StringConstructor;
        let maxFiles: NumberConstructor;
    }
    function mounted(): void;
    namespace methods {
        function bindEvents(): void;
        function handleFormAttachmentError(e: any): void;
        function handleDragStart(e: any): void;
        function handleDragOver(e: any): void;
        function handleDrop(e: any): void;
        function isAllowedFileExtension(file: any): any;
        function isUnderMaxSize(file: any): boolean | undefined;
        function handleDroppedFiles(files: any): void;
        function handleAddAttachment(): void;
        function restoreDataTransfer(): void;
        function showError(text: any): void;
        function setErrorText(text: any): void;
        function reset(): void;
        function resetError(): void;
        function appendDroppedFiles(droppedFiles: any): void;
        function areFilesAllowed(files: any): boolean;
        function getErrors(files: any): any;
        function appendFiles(files: any): void;
        function syncFiles(): void;
        function handleChange(event: any): void;
        function handleClick(index: any): void;
        function toSize(size: any): string;
    }
}
export default _default;
