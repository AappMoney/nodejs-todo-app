
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelector('form');
  const lists = document.querySelectorAll('li');

  forms.addEventListener('submit', async (e) => {
    fetch('/todo', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({item: forms.item.value})
    }).then(res => {
        return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR" + error))
  });

  lists.forEach(list => {
    list.addEventListener('click', () => {
      const text = list.textContent;
      
      fetch('/todo' +  '/' + text, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
      }).then(res => {
        return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR" + error));
    
    document.location.reload(true);
    })
  });

});


// $(document).ready(function(){

//   $('form').on('submit', function(){

//         var item = $('form input');
//         var todo = {item: item.val()};

//         $.ajax({
//           type: 'POST',
//           url: '/todo',
//           data: todo,
//           success: function(data){
//             //do something with the data via front-end framework
//             location.reload();
//           }
//         });



//         return false;

//     });
    
//     $('li').on('click', function(){
//           var item = $(this).text().replace(/ /g, "-");
//           $.ajax({
//               type: 'DELETE',
//               url: '/todo/' + item,
//               success: function(data){
//                   //do something with the data via front-end framework
//                   location.reload();
//                 }
//               });
//           });
          
//         });