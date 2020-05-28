/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  return data.filter(data => data.age <= age)
  .map( data => `${data.name}, ${data.balance}`)
  .join('\n');
}
