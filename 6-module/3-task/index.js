'use strict';

class Menu {
 /* template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;*/

  constructor(element) {
    this.el = element;

    this._insertMenu(this.el);

    for ( let item of this.el.querySelectorAll('.list-group-item') ){

      item.addEventListener('pointerenter', event => {     
        let {target, relatedTarget} = event;
       
        target.querySelector('.dropdown-menu').classList.add('show');
        document.querySelector('.backdrop').classList.add('show');
      });

      item.addEventListener('pointerleave', event => {
        let {target, relatedTarget} = event;
       
        target.querySelector('.dropdown-menu').classList.remove('show');
        document.querySelector('.backdrop').classList.remove('show');
      });

    }



  }

  

  _insertMenu(element) {
    element.innerHTML = 
    `
    <ul class="list-group sidebar">
      <li class="list-group-item dropdown">
        <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
        <ul class="dropdown-menu">

         <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>

        </ul>
      </li>

      <li class="list-group-item dropdown">
        <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
        <ul class="dropdown-menu">

         <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>

         <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>

        </ul>
      </li>
    </ul>  
    `
  }


}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;