const socket = new WebSocket("ws://127.0.0.1:8000/ws/")

socket.send("lemur")

socket.onmessage = (event) => {
  // append received message from the server to the DOM element
  const chat = document.querySelector("#chat");
  chat.innerHTML += event.data;
}
