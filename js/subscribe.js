window.onload = function()
{
    $("#sub-button").click(function()
    {
        var msg = $('#email').val();
        $.post("http://api.cumets.com/subscription/add",
        {
          email: msg
        },
        function(data,status){
            if (status != "success")
            {
                alert(status);
                alert("message not sent");
            }
            else
            {
                alert("sent");
            }
        });
    });
}
