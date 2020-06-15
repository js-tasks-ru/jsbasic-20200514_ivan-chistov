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
 'use strict';
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
      const { target } = event;
      
      if (target.getAttribute(`href`) !== `#delete`) return;
      
      target.closest('[data-id]').remove();

      return this.onRemoved(+target.closest('[data-id]').dataset.id);
    };

  }

  
  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {}


  _pasteTheadRowInTable(data = [], {firstElementChild : thead, lastElementChild : tbody}) {
    thead.append( this._createTr( Object.keys(data[0]) ) );
  }

  /**
   * Метод, который заполняет таблицу строками и добавляет к ним атрибут data-id
   * @param {arrey, object} arrey - массив строк в виде объектов, object - таблица в которую хотим вставить строки
   */
  _pasteRowsInTable(data = [], table) {  
    const {lastElementChild : tbody} = table; 
    tbody.innerHTML = '';

    for (let row of data){
      const tr = tbody.appendChild( this._createTr( Object.values(row) ) );
      tr.dataset.id = row.id;
    } 

    return table;
  }


  _createTr(row = []) {
    const tr = document.createElement('tr');

    for (let cell of row) {
      tr.innerHTML += `<td>${cell}</td>`;
    }
    
    return tr;
  }
 
   
  _pasteColumnOfLinksRight( {firstElementChild : thead, lastElementChild : tbody} ) {
    thead.firstElementChild.append(document.createElement('td'))
    const rows = tbody.querySelectorAll('tr');

    for (let row of rows) {
      const td = document.createElement('td');
      td.innerHTML = `<a href="#delete">X</a>`;
      row.append(td);
    }
  }
}

window.ClearedTable = ClearedTable;

