
function main() {
    var lista = [
        {
            'attività':'uno',
            'eseguita': false,
        },
        {
            'attività':'due',
            'eseguita': true,
        }
    ];

    var list = $('.todos');
    var newInput = $('.add-todo');
    var template = $('#template li');

    for (k in lista) {
        console.log(lista[k]);
        var item = template.clone();
        item.find('.text').text(lista[k].attività);
        if (!lista[k].eseguita) 
        item.find('span').first().addClass('complete');
        list.append(item);
        
    }
    
    newInput.keyup(function(e){
        console.log(e);
        if (e.key==='Enter'){
           var text = newInput.val().trim();
           item = template.clone();
           console.log(text);
           item.find('.text').text(text);
           list.append(item);
           newInput.val('');
           
        }
        

    

    });
    /*console.log(list.find('.material-icons-two-tone'));
    list.find('.material-icons-two-tone').click(function(e){
        
        var x = e.target.parentElement.remove();
        console.log(list);
    })*/

    $( "body" ).on( "click", "li span.material-icons-two-tone", function() {
        console.log(this);
        $(this).parent().remove();
       
      });

      $( "body" ).on( "click", "li span", function() {
        console.log(this);
        
        $(this).toggleClass("complete");
       
      });

    
    
}

