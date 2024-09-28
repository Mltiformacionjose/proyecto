
        $(document).ready(function() {
            
            $("#miCheckbox").change(function() {
                if ($(this).is(":checked")) {
                   
                    $("#miInput").prop("disabled", true);
                } else {
                   
                    $("#miInput").prop("disabled", false);
                }
            });
        });
  