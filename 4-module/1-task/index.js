/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends = []) {
	let ul = document.createElement('ul');
	let list = ''

	for ( let friend of friends) {
		list += `<li>${friend.firstName} ${friend.lastName}</li>\n`;
	}

	ul.innerHTML = list

	return ul;
}
