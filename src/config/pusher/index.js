import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { token } from "@/config/axios";

window.Pusher = Pusher;
Pusher.logToConsole = true;

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: import.meta.env.VITE_WEBSOCKETS_KEY,
  authEndpoint: import.meta.env.VITE_API_BASE_URL + "broadcasting/auth",
  auth: {
    headers: {
      Authorization: "Bearer " + token,
      'X-CSRF-Token': "CSRF_TOKEN",
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
    }
  },
  cluster: "eu",
  forceTLS: true,
});
