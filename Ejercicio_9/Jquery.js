$(document).ready(function() {
   
    $("#contenido").text("Contenido de la Tab 1");
    $("#tab1").addClass("active");

    
    $(".tab").click(function() {
        
        $(".tab").removeClass("active");

        
        $(this).addClass("active");

  
        var tabId = $(this).attr("id");

      
        if (tabId === "tab1") {
            $("#contenido").text("Contenido de la Tab 1");
        } else if (tabId === "tab2") {
            $("#contenido").text("Contenido de la Tab 2");
        } else if (tabId === "tab3") {
            $("#contenido").text("Contenido de la Tab 3");
        }
    });
});