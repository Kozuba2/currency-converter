

$.ajax({
  url: 'http://api.nbp.pl/api/exchangerates/tables/a/',
  datatype : "json",
  timeout: 3000 ,
  
})
.done(function(response)
{
   for( let i = 0 ; i<2;i++)
   {
    document.getElementsByClassName("dolar")[i].value = response[0].rates[0].mid;
    document.getElementsByClassName("euro")[i].value = response[0].rates[7].mid;
    document.getElementsByClassName("frank")[i].value = response[0].rates[9].mid;
    document.getElementsByClassName("funt")[i].value  = response[0].rates[10].mid;
    document.getElementsByClassName("zlote")[i].value = 1;
   }
   
 

});

function val()
{
    var x = document.getElementById("wyb").value;
    var r = document.getElementById("wyb2").value;
    var y = document.getElementById("inp").value;
    y=y.replace(',', '.');
        if(isNaN(y)==false)
        {
            var h2 = y*x/r;
            var h3 = y*x*r;
            var e2 = h2.toFixed(2);    
            var e3 = h3.toFixed(2);
            var z = document.getElementById("out");
            if(x>r){
                if(id="euro", id="funt" ){                                 
                z.innerHTML = e2 }
                else
                z.innerHTML = e3                        
            }
            else if(r>x){
                z.innerHTML = e2
            }
            else if(r=x){
                if(r=1){
                
                }
                z.innerHTML = y
            }
        }else
        {
            alert("Wprowadź poprawną liczbę");
        }

}


var b=document.getElementById("cli");

b.addEventListener("click", val);

var enter = document.getElementById("inp");
enter.onkeyup = function(e){
    if(e.keyCode == 13){
       val();
    }
}