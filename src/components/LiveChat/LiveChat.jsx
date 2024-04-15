import './LiveChat.css';
import LiveChatMessage from './LiveChatMessage/LiveChatMessage';
import { useForm } from 'react-hook-form';
import { mockLiveChatMessagges } from '../../utils/mock-data';
import { useState } from 'react';

function LiveChat() {
  const [messageStack, setMessageStack] = useState(mockLiveChatMessagges);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { isDirty },
  } = useForm({ defaultValues: { chatInput: '' } });
  const onSubmit = (data) => {
    const newMessage = { text: data.chatInput, type: 'send', time: new Date() };
    setMessageStack((prev) => [...prev, newMessage]);
    resetField('chatInput');
  };

  return (
    <div className="live-chat">
      <div className="live-chat__header">Чат</div>
      <div className="live-chat__message-list-wrapper">
        <ul className="live-chat__message-list">
          {messageStack.map((message) => (
            <LiveChatMessage message={message} key={message.time.getTime()} />
          ))}
        </ul>
      </div>
      <form className="live-chat__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="live-chat__input"
          type="text"
          placeholder="Печатайте..."
          {...register('chatInput')}
          aria-label="Введите текст сообщения"
          title="Введите текст сообщения"
        />
        <input
          disabled={!isDirty}
          className="live-chat__button"
          type="submit"
          value=""
          aria-label="Отправить сообщение"
          title="Отправить сообщение"
        />
      </form>
    </div>
  );
}

export default LiveChat;
