const room = "ROOM";
export default defineWebSocketHandler({
  open(peer) {
    console.log("opened WS", peer);
    peer.subscribe(room);
    peer.publish(room, "another user joined the chat");
  },
  close(peer, event) {
    console.log("closed WS");
  },
  error(peer, error) {
    console.error("error on WS", peer, error);
  },
  message(peer, message) {
    console.log("message on WS", peer, message);
    peer.publish(room, message.text());
  },
});
