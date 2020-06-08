/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;

    for (let obj of this.data ) {
      Object.defineProperty( obj, "id", {
      enumerable: false
    } );
    }
          
    this.el.innerHTML = 
    `<thead>    
    </thead>
    <tbody>
    </tbody>`;   
    this.el.classList.add("pure-table");
    this._pasteTheadRowInTable(this.data, this.el)
    this._pasteRowsInTable(this.data, this.el);
    this._pasteColumnOfLinksRight(this.el);

    this.el.onclick = (event) => {
      
      if (event.target.getAttribute(`href`) !== `#delete`) return;
      
      event.target.parentElement.parentElement.remove();

      return this.onRemoved(+event.target.parentElement.parentElement.dataset.id);
    };

  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {}


  _pasteTheadRowInTable(data = [], table) {
    table.querySelector('thead').append( this._createTr( Object.keys(data[0]) ) );
  }

  /**
   * Метод, который заполняет таблицу строками и добавляет к ним атрибут data-id
   * @param {arrey, object} arrey - массив строк в виде объектов, object - таблица в которую хотим вставить строки
   */
  _pasteRowsInTable(data = [], table) {   
    table.querySelector("tbody").innerHTML = '';

    for (let row of data){
      let tr = table.querySelector('tbody').appendChild( this._createTr( Object.values(row) ) );
      tr.dataset.id = row.id;
    } 

    return table;
  }


  _createTr(row = []) {
    let tr = document.createElement('tr');

    for (let cell of row) {
      tr.innerHTML += `<td>${cell}</td>`;
    }
    
    return tr;
  }


  _pasteColumnOfLinksRight({firstElementChild : thead, lastElementChild : tbody}) {
    thead.firstElementChild.append(document.createElement('td'))
    let rows = tbody.querySelectorAll('tr');

    for (let row of rows) {
      let td = document.createElement('td');
      td.innerHTML = `<a href="#delete">X</a>`;
      row.append(td);


    }
  }
}

window.ClearedTable = ClearedTable;
