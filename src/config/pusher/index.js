import Pusher from 'pusher-js';

Pusher.logToConsole = true;

const pusher = new Pusher('3907cea223bcce7f0feb', {
    cluster: 'eu'
});

export default pusher;