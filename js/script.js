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
        list.append(item);
        
    }

    newInput.keyup(function(e){
        console.log(e);
        if (e.key==='Enter')
           var text = newInput.val().trim();
           console.log(text);
           item.find('.text').text(text);
           list.append(item);
           newInput.val('');
    })
    
}

