export default Cloudinary;
declare namespace Cloudinary {
    let cloud_name: string;
    let developer_mode: boolean;
    let origin_url: string;
    let verbose: boolean;
    namespace presets {
        export namespace avatar {
            let fallback_max_width: number;
            let min_width: number;
            let max_width: number;
            let steps: number;
            let sizes: string;
            let figure: string;
            let loading: string;
        }
        export let textImageFloatingSmall: {
            'min-width': number;
            'max-width': number;
            steps: number;
            sizes: string;
            figure: string;
            loading: string;
        };
        export let textImageFloating: {
            'min-width': number;
            'max-width': number;
            steps: number;
            sizes: string;
            figure: string;
            loading: string;
        };
        export let person: {
            'min-width': number;
            'max-width': number;
            steps: number;
            sizes: string;
            figure: string;
            loading: string;
        };
        namespace _default {
            let min_width_1: number;
            export { min_width_1 as min_width };
            let max_width_1: number;
            export { max_width_1 as max_width };
            let fallback_max_width_1: number;
            export { fallback_max_width_1 as fallback_max_width };
            let steps_1: number;
            export { steps_1 as steps };
            let sizes_1: string;
            export { sizes_1 as sizes };
            let figure_1: string;
            export { figure_1 as figure };
            let loading_1: string;
            export { loading_1 as loading };
        }
        export { _default as default };
        export namespace fullscreen4k {
            let min_width_2: number;
            export { min_width_2 as min_width };
            let max_width_2: number;
            export { max_width_2 as max_width };
            let fallback_max_width_2: number;
            export { fallback_max_width_2 as fallback_max_width };
            let steps_2: number;
            export { steps_2 as steps };
            let sizes_2: string;
            export { sizes_2 as sizes };
            let figure_2: string;
            export { figure_2 as figure };
            let loading_2: string;
            export { loading_2 as loading };
        }
        export namespace thumb {
            let min_width_3: number;
            export { min_width_3 as min_width };
            let max_width_3: number;
            export { max_width_3 as max_width };
            let fallback_max_width_3: number;
            export { fallback_max_width_3 as fallback_max_width };
            let steps_3: number;
            export { steps_3 as steps };
            let sizes_3: string;
            export { sizes_3 as sizes };
            let figure_3: string;
            export { figure_3 as figure };
            let loading_3: string;
            export { loading_3 as loading };
        }
        export namespace cardSmall {
            let min_width_4: number;
            export { min_width_4 as min_width };
            let max_width_4: number;
            export { max_width_4 as max_width };
            let steps_4: number;
            export { steps_4 as steps };
            let sizes_4: string;
            export { sizes_4 as sizes };
            let figure_4: string;
            export { figure_4 as figure };
            let loading_4: string;
            export { loading_4 as loading };
        }
        export namespace postTeaser {
            let min_width_5: number;
            export { min_width_5 as min_width };
            let max_width_5: number;
            export { max_width_5 as max_width };
            let steps_5: number;
            export { steps_5 as steps };
            let sizes_5: string;
            export { sizes_5 as sizes };
            let figure_5: string;
            export { figure_5 as figure };
            let loading_5: string;
            export { loading_5 as loading };
        }
        export namespace author {
            let min_width_6: number;
            export { min_width_6 as min_width };
            let max_width_6: number;
            export { max_width_6 as max_width };
            let steps_6: number;
            export { steps_6 as steps };
            let sizes_6: string;
            export { sizes_6 as sizes };
            let figure_6: string;
            export { figure_6 as figure };
            let loading_6: string;
            export { loading_6 as loading };
        }
        export namespace logoList {
            let min_width_7: number;
            export { min_width_7 as min_width };
            let max_width_7: number;
            export { max_width_7 as max_width };
            let fallback_max_width_4: number;
            export { fallback_max_width_4 as fallback_max_width };
            let steps_7: number;
            export { steps_7 as steps };
            let sizes_7: string;
            export { sizes_7 as sizes };
            let figure_7: string;
            export { figure_7 as figure };
            let loading_7: string;
            export { loading_7 as loading };
        }
        export namespace eventThumb {
            let min_width_8: number;
            export { min_width_8 as min_width };
            let max_width_8: number;
            export { max_width_8 as max_width };
            let steps_8: number;
            export { steps_8 as steps };
            let sizes_8: string;
            export { sizes_8 as sizes };
            let figure_8: string;
            export { figure_8 as figure };
            let loading_8: string;
            export { loading_8 as loading };
        }
    }
}
