
function main() {

    var lista = [ //dichiaro lista array di oggetti
        {
            'attività':'uno',
            'eseguita': 0,
        },
        {
            'attività':'due',
            'eseguita': 1,
        }
    ];
    
    /*for(j in lista) //
        for(y in lista[j]){
            //setCookie(y+j,lista[j][y],1); //aggiornamento cookie/lista
            //lista[j][y]=getCookie(y+j); 
        }*/
    
      
    

    var list = $('.todos'); // lista non ordinata ul
    var newInput = $('.add-todo'); //input 
    var template = $('#template li'); // template da usare come modello

    for (k in lista) {                      //scorro lista che 
        var item = template.clone();        // clono il template
        item.find('.text').text(lista[k].attività); // cerco la classe text e ci inietto l'elemento della lista corente 
        console.log('eseguita',k,((lista[k].eseguita))); // controllo da log
        if ((lista[k].eseguita===1)) { // se lista[k].eseguita è true
            console.log((lista[k].eseguita));  //conreollo log
            item.find('span').first().addClass('complete'); // aggiungo la classe complete all'elemento corrente
        }
        
        list.append(item);  // aggiungo il template aggiornato alla fine della list
        item.attr('id','id'+k);    // aggiungo l'id corispondente  
    }
    
    newInput.keyup(function(e){ // premo invio e aggiungo nuova riga
        //console.log(e);
        if (e.key==='Enter'){
           var text = newInput.val().trim(); // prendo il testo dall'input
           item = template.clone(); // clono il template
           //console.log(item);

           //cookie
           var tmpObj = {
            'attività':text, 
            'eseguita':false
        };
            lista.push(tmpObj);// aggiungo un nuovo oggetto alla lista
            //console.log(lista);           
           item.find('.text').text(text); // inietto il testo nel nuovo template clonato nella classe text
           item.attr('id','id'+(lista.length-1)); // aggiungo un nuovo id di nome id+lunghezza di lista
           
           console.log(item); // stampo item
           list.append(item); // lo aggiungo al termine della list (ul)
           newInput.val(''); // resetto  input
           
        }
        

    

    });
    /*console.log(list.find('.material-icons-two-tone'));
    list.find('.material-icons-two-tone').click(function(e){
        
        var x = e.target.parentElement.remove();
        console.log(list);
    })*/

    

    $( "body" ).on( "click", "li span.material-icons-two-tone", function(e) { 

        //cookie
        //console.log($(this).parent().eq(0).find('.text')[0].innerText);
        var val = $(this).parent().index()-1;  //accedo al 
        console.log("evento",$(this).parent().index()-1); /*
        function index(el) {
            if (!el) return -1;
            var i = 0;
            do {
              i++;
            } while (el = el.previousElementSibling);
            return i;
          }*/ 


        function fil(s){
            //console.log(val,"funzione fil",$(this).parent().parent());
            return s!=val; //crea nuova lista senza l'elemento passato (val)
        }
        
        var listaTmp;
        listaTmp=lista.filter(fil);
        
        //for (k in lista){
            //if (lista[k].attività===val) {
                //console.log("obj",lista.filter(fil)); 
                
            //}
            
                
        //}
       //lista=listaTmp;
       console.table(lista);
        
        
        $(this).parent().remove();
        
       
      });

      $( "body" ).on( "click", "li span", function() {
        console.log('complete',this);        
        $(this).toggleClass("complete");       
      });

     /*for(j in lista)
        for(y in lista[j]){
            setCookie(y+j,lista[j][y],1);
            //lista[j][y]=getCookie(y+j); 
        }*/
        console.table(lista);

    
        
}



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
