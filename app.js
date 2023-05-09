var btn = document.querySelectorAll('#book-list .delete');

Array.from(btn).forEach(function(item){
   item.addEventListener('click' , function(e){
         var li = e.target.parentElement;
         li.parentNode.removeChild(li);
      
   })
})


