/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

// const button = document.querySelector('button');

function promiseClick(button) {
	let promise = new Promise(function(resolve,reject){

		button.addEventListener('click', event => {
			return resolve(event);
		}, { once: true })


	});

	return promise
}


//promiseClick(button)
//  .then((event) => console.log(event)); // Объект события "click"