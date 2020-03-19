/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {

    $("#lookup").click(function() {
        var word=$("#word").val();
        //alert(word);
        $.ajax({
            url: "dictServlet",
            data: {word:word},
            type: "GET",
        })
            .done(functionName)
            .fail(ajaxFailure);

    });
});
function functionName(data)
{
    $("#lookup").empty();
    $("#showWord").empty();
    $("#notfound").empty();
    $('#content').empty();
    if(data.length<=0)
        $("#notfound").append("<p id='error'>\""+$("#word").val()+"\" not found</p>");
    else
    {
        console.log(data);
        "<ol>" + data + "</ol>";
        data.replace("br", "li");
        var ol="<div><ol><strong>"+$("#word").val()+"</strong>";

        //var ol="<div><strong>"+$("#word").val()+"</strong></div>";
        $("#showWord").append(ol);
        $('#content').html(data);
    }

}
function ajaxFailure()
{
    $("#notfound").empty();
    $("#notfound").append("<p id='error'>\""+$("#word").val()+"\" not found</p>");
}

