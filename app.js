
$(document).ready(function(){
  
  let mesaj_gonder = (User,mesaj) => {
    
    $(".userslist").children().append('<li><input type="image" src="'+User.pp+'" width="50px"></li>')
    
  }

  mesaj_gonder(user[1])
});

