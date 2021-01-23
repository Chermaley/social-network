import {ChatMessageType} from "../component/chat/chatPage";

let subscribers = [] as Array<SubscriberType>;

const closeHandler = () => {
    setTimeout(createChannel, 3000);
};

let ws: WebSocket | null = null;

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers.forEach(s =>  s(newMessages));
};

function createChannel() {
    ws?.close();
    ws?.removeEventListener('close', closeHandler);
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
}

export const chatApi = {
    start() {
      createChannel();
    },
    stop() {
        ws?.removeEventListener('close', closeHandler);
        ws?.removeEventListener('message', messageHandler);
        ws?.close();
        subscribers = [];
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback);
        return () => {
          subscribers = subscribers.filter(s => s !== callback);
        };
    },
    sendMessage(message: string) {
        ws?.send(message);
    }
};

type SubscriberType = (messages: ChatMessageType[]) => void
