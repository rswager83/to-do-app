function newItem(){
        // Adding new item to list of items
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    if (inputValue === '') {
        alert('You shall not pass!');
    } else{
        $('#list').append(li);
    }
        // Strike through
    function crossOut() {
        li.toggleClass('strike');
    };

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });
        // Delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('x'));
    li.append(crossOutButton);

        // Event handler for delete button
    crossOutButton.on('click', deleteListItem);

        // Adding class delete
    function deleteListItem(){
        li.addClass('delete');
    }

        // Reordering the items
    $('#list').sortable();

   
}
    
     
    
    
    
    
