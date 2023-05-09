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

    //add content 
    deleteBtn.textContent = 'delete';
    bookName.textContent = values;

    //Add classes
     bookName.classList.add('name');
     deleteBtn.classList.add('delete');

    //append element 
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
   
})

  //hide books 
  let hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change' , function(e){
      if(hideBox.checked){
          list.style.display= "none";
      }
      else {
          list.style.display= "initial";
      }
          
  })
