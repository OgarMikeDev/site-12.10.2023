function openForm() {

    document.getElementById('container_for_form').style.display = 'flex';
}

function openFormEntrance() {

    document.getElementById('container_for_entrance').style.display = 'flex';
    // document.getElementById('container_for_entrance').style.alignContent = 'right';

}

    //Adding user
     $("#button_for_registration").click(function() {
             var data = $("#content form").serialize();
             $("#content").css("display", "none");
             $.ajax({
                 method: "POST",
                 url: "/addStudent/",
                 data: data,
                 success: function(response) {
                     var user = {};
                     user.id = response;
                     var dataArray = $("#content form").serializeArray();
                     for(i in dataArray) {
                         user[dataArray[i]["email"]] = dataArray[i]["value"];
                     }
                     document.getElementById('password').setAttribute('type', 'password');
                     document.getElementById("container_for_form").reset();
                 }
             });
             return false;
       });