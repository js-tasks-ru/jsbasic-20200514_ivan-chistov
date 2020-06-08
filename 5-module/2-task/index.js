/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  this.el.innerHTML = 
    `<thead>    
    </thead>
    <tbody>
    </tbody>`;

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    
    items.sort((a, b) => {
      if(Object.values(a)[column] < Object.values(b)[column]){
        return 1*(desc-0.5);
      }

      if(Object.values(a)[column] > Object.values(b)[column]){
        return -1*(desc-0.5);;
      }

      return 0;
    });

    pasteRowsInTable( items, this.el); 
  }

  pasteTheadRowInTable(items, this.el)
  pasteRowsInTable(items, this.el);
  

  function pasteTheadRowInTable(items = [], table) {
    table.querySelector('thead').append( createTr( Object.keys(items[0]) ) );
  }


  function pasteRowsInTable(items = [], table) {   
    table.querySelector("tbody").innerHTML = '';

    for (let row of items){
      table.querySelector('tbody').append( createTr( Object.values(row) ) );
    } 

    return table;
  }


  function createTr(row = []) {
    let tr = document.createElement('tr');

    for (let cell of row) {
      tr.innerHTML += `<td>${cell}</td>`;
    }
    
    return tr;
  }


}


