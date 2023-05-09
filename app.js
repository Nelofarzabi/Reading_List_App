var list = document.querySelector('#book-list ul');

//delete books 
list.addEventListener('click' , function(e){
    if(e.target.className == 'delete'){
       const li = e.target.parentElement;
       list.removeChild(li);
    }
})


//add books
var form = document.forms['add-book'];
form.addEventListener('submit' , function(e){
    e.preventDefault();
    var values = form.querySelector('input[type="text"]').value;
    
    //create element 
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span'); 

    //append element 
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);


} )
