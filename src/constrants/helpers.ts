function convertToArray<T>(input: T): T[] {
    return [input]
}

const arrowFunc = <T, K>(input: T, input2: K): [T, K] => {
    return [input, input2];
}

convertToArray("3");

arrowFunc(2,2);