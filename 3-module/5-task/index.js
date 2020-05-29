/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr = [], a = 0, b = 0) {
	return arr.filter(num => num >= a && num <=b);
}
