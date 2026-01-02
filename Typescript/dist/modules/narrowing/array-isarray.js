export const bootstrap = () => {
    const arr = [1, 2, 3];
    console.log("typeof do array: ", typeof arr);
    console.log('InstanceOf do array', arr instanceof Array);
    console.log('Array.isArray(): ', Array.isArray(arr));
    if (Array.isArray(arr)) {
        arr.map((item) => {
            console.log(item);
        });
    }
};
