class Note {
    createNote() {
        var counter = 1;
        $("#noteText").hide();
        $("#confirmBtn").hide();

        $("#addBtn").click(function() {
            $("#content").append("<div id='note" + counter + "' class='note'></div>");

            $("#note" + counter).draggable({
                containment: "#content"
            });

            $("#addBtn").hide();
            $("#noteText").show();
            $("#confirmBtn").show();
        });

        $("#confirmBtn").click(function() {
            let text = $("#noteText").val();

            $("#note" + counter).html(text);

            $("#note" + counter).draggable('disable');
            
            counter+=1;

            $("#addBtn").show();
            $("#noteText").hide();
            $("#confirmBtn").hide();
        });
    }
}

export {Note};