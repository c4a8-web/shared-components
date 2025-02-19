declare namespace _default {
    let tagName: string;
    function data(): {
        hasMultipleDays: boolean;
    };
    namespace computed {
        function style(): any;
        function textWithAmpersand(): any;
        function normalizedDate(): any;
        function normalizedText(): any;
        function validDate(): Date | null;
        function dateDay(): any;
        function dateMonth(): any;
        function dateWeekDay(): any;
        function imageValue(): any;
        function cloudinary(): any;
        function timeValue(): any;
    }
    namespace methods {
        function handleClick(): any;
    }
    namespace props {
        let title: StringConstructor;
        let date: StringConstructor;
        let moment: StringConstructor;
        let category: StringConstructor;
        let text: StringConstructor;
        let excerpt: StringConstructor;
        let image: ObjectConstructor;
        let bgColor: StringConstructor;
        let color: StringConstructor;
        let time: StringConstructor;
        let timeColor: StringConstructor;
        let classes: StringConstructor;
        let url: StringConstructor;
        let external: BooleanConstructor;
    }
}
export default _default;
