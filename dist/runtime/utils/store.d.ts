export default Store;
declare function Store(value: any): {
    (...args: any[]): any;
    subscribe: (subscriber: any, immediate: any) => void;
    unsubscribe(subscriber: any): void;
};
declare namespace Store {
    function computed(fn: any): {
        (...args: any[]): any;
        subscribe: (subscriber: any, immediate: any) => void;
        unsubscribe(subscriber: any): void;
    };
    function from(executor: any): {
        (...args: any[]): any;
        subscribe: (subscriber: any, immediate: any) => void;
        unsubscribe(subscriber: any): void;
    };
}
