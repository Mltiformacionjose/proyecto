$(document).ready(function() {
    
    $("#mover").click(function() {
        
        $(".animar").animate({
            left: "+=100px"
        }, 500); 
    });
});