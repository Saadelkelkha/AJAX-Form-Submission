$(document).ready(function(){
    $('#myForm').submit(function(){
        event.preventDefault(); 
        $.ajax({
            method: "POST",
            data: "name=" + $("#name").val() + "&firstname=" + $("#firstname").val() + "&age=" +  $("#age").val(),
            url: "add.php",
            success: function(data, status){
                $("#response").append("<p>Bonjour " + data[data.length - 1].name + " " + data[data.length - 1].firstname + " vous avez " + data[data.length - 1].age +" ans</p>");
                /*$.each(data, function(index, user){
                    $("#response").append("<p>Bonjour " + user.name + " " + user.firstname + " vous avez " + user.age +" ans</p>");
                });*/



            },
            error: function(error){
                alert("ça ne marche pas " + error);
            }
        });
    });
});
