function enviar(){
    var name = document.getElementById("nameInput").value;
    var text = document.getElementById("messageInput").value;

    firebase.database().ref("Chat/").push({name: name, text: text})

}

firebase.database().ref("Chat/").on('child_added', function(snapshot){
  var message = snapshot.val();
  displayChatMessage(message.name, message.text);
})

function displayChatMessage(name, text){


  var historial = document.getElementById('chatbox');
  historial.innerHTML += "<div>"+ name + ": " +text+"</div>";
}
