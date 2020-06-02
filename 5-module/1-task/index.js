/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

	let rows = [...table.rows].slice(1);
	//console.log(rows);



	for(let row of rows){
		//console.log( isRowAvailable(row) );
		if (isRowAvailable(row) === true) {
			row.classList.add('available');
			//console.log(row.classList);
		} else if (isRowAvailable(row) === false) {
			row.classList.add('unavailable');
		} else if (isRowAvailable(row) === null) {
			row.hidden = true;
		}


		if (getRowsGender(row) === 'm') {
			row.classList.add('male');
		} else if (getRowsGender(row) === 'f') {
			row.classList.add('female');
		}


		if (getRowsAge(row) < 18) {
			row.style.textDecoration = 'line-through';
		}
	}
	
	return;

}


function isRowAvailable (row) {
	
	if(!row.cells[row.cells.length-1].dataset.available){
		return null;
	}

	if(row.cells[row.cells.length-1].dataset.available === 'true'){
		return true;
	}

	if(row.cells[row.cells.length-1].dataset.available === 'false'){
		return false;
	} 
}

function getRowsGender (row) {
	//console.log(row.cells[2].innerHTML);
	return row.cells[2].innerHTML;
}

function getRowsAge (row) {
	return +row.cells[1].innerHTML;
}