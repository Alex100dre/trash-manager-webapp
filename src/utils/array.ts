/**
 * Get next index of a given array and index. If the last index is given, it returns the first array index
 * @param array {Array} Array containing indexes.
 * @param index {number} Index of the array.
 * @return nextIndex {number} Index coming right after the given one.
 */
export const getNextArrayIndex = (array: any[], index: number) => (
    index + 1 > array.length ? 0 : index + 1
);