import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { token } from "@/config/axios";

window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: "pusher",
  key: import.meta.env.VITE_PUSHER_KEY,
  authEndpoint: import.meta.env.VITE_API_BASE_URL + "broadcasting/auth",
  auth: {
    headers: {
      Authorization: "Bearer " + token,
    },
  },
  cluster: "eu",
  forceTLS: true,
});
