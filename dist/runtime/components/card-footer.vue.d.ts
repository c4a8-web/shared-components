declare namespace _default {
    let tagName: string;
    function data(): {
        maxTags: number;
    };
    namespace computed {
        function lang(): string;
        function tagsList(): any;
        function dataAuthorsList(): any;
    }
    namespace props {
        let classes: StringConstructor;
        let date: StringConstructor;
        namespace author {
            let type: (ArrayConstructor | StringConstructor)[];
        }
        let authorsList: ArrayConstructor;
        let hasNoLink: BooleanConstructor;
        let dataAuthors: ObjectConstructor;
        let isRow: BooleanConstructor;
        let tags: ArrayConstructor;
    }
}
export default _default;
