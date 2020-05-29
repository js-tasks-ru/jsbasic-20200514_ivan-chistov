/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {

	let rows = table.rows;

	for (let i = 0; i < rows.length; i++) {
	  rows[i].cells[i].style.backgroundColor = 'Red';
	}
}
