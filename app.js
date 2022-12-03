$(document).ready(function(){
    $("#eror").hide();

    var isim = $("#firstName").val();
    var soyisim = $("#lastName").val();
    var mail = $("#email").val();
    var adres;
    var sehir;
    var ilce;
    var not;
    var siparisEkle = (isim,soyisim,mail,adres,sehir,ilce,not) => {
        var boslukvar= false;
        var liste = [isim,soyisim,mail,adres,sehir,ilce,not];
        for (let i = 0; i < liste.length; i++) {
            if(liste[i] == "" || liste[i] == " " || liste[i] == "  " || liste[i] == "   "){
                boslukvar = true;
                
            }
            
        }
        if(boslukvar){
            $("#eror").show();
            window.scrollTo(0, 0);
        }
        else{
            $("#eror").hide();
            alert("Siparisin Verildi: "+liste);
        }
       
      
    }
    $("#butonn").click(function(){
        
        isim = $("#firstName").val();
        soyisim = $("#lastName").val();
        mail = $("#email").val();
        adres = $("#address").val();
        sehir = $("#country").val();
        ilce = $("#state").val();
        not = $("#not").val();
        
        siparisEkle(isim,soyisim,mail,adres,sehir,ilce,not);
        
        
    })

    
    
})