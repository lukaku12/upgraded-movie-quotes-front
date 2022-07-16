import Echo from "laravel-echo";

import Pusher from "pusher-js";
window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: "pusher",
  key: import.meta.env.VITE_WEBSOCKETS_KEY,
  //
  wsHost: "localhost",
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
  cluster: "eu",
});
