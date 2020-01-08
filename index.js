'use strict';

//submits to add to list

$('#js-shopping-list-form').submit(function(event){
  event.preventDefault();
  const item = $('#shopping-list-entry').val();
  
  //adds to shopping list

  const addToList = `<li>
  <span class="shopping-item">` + item + `</span> 
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`;
  $('.shopping-list').append(addToList);
})
