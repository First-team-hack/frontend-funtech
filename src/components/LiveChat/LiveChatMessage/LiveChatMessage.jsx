import './LiveChatMessage.css';

function LiveChatMessage({ message }) {
  return (
    <>
      {message?.type === 'send' ? (
        <li className="live-chat-message live-chat-message_type_send">
          <div className="live-chat-message__body live-chat-message__body_type_send">
            <p className="live-chat-message__text live-chat-message__text_type_send">
              {message.text}
            </p>
            <p className="live-chat-message__time live-chat-message__time_type_send">
              {`${message.time?.getHours()}:${
                (message.time?.getMinutes() < 10 ? '0' : '') + message.time?.getMinutes()
              }`}
            </p>
          </div>
        </li>
      ) : (
        <li className="live-chat-message">
          <img
            src={message.authorAvatar}
            className="live-chat-message__avatar"
            alt="Аватар пользователя"
          />
          <div className="live-chat-message__body">
            <h3 className="live-chat-message__name">{message.authorName}</h3>
            <p className="live-chat-message__text">{message.text}</p>
            <p className="live-chat-message__time">
              {`${message.time?.getHours()}:${
                (message.time?.getMinutes() < 10 ? '0' : '') + message.time?.getMinutes()
              }`}
            </p>
          </div>
        </li>
      )}
    </>
  );
}

export default LiveChatMessage;
