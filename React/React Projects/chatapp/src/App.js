import './App.css';
import { ChatEngine } from "react-chat-engine"
import ChatFeed from "./components/ChatFeed"

function App() {
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="aae4ae99-0933-4730-a8b2-098c8cbc8dcf"
        userName="thanh"
        userSecret="nguyen"
        renderChatFeed= { (chatAppProps) => <ChatFeed  {...chatAppProps} />}
        onNewMessage= { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
      />
    </div>
  );
}

export default App;
