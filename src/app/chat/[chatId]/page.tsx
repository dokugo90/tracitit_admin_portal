import ChatScreen from "../../screens/chatScreen";


export default function ChatPage({ params }: any) {
    return (
        <>
            <ChatScreen chatId={params.chatId} />
        </>
    );
}