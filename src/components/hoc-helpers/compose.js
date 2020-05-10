const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((prevRes, f) => f(prevRes), comp);
};

export {
    compose
}