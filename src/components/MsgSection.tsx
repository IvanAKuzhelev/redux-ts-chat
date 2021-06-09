import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  sendMessage,
  updateNewMessages,
} from "../features/messages/messagesSlice";

const MsgSection = () => {
  const messages = useAppSelector((state) => state.messages.messages);
  const newMessage = useAppSelector((state) => state.messages.newMessage);
  const dispatch = useAppDispatch();
  return (
    <section>
      <ul>
        {messages.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(sendMessage());
        }}
      >
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            onChange={(e) => dispatch(updateNewMessages(e.target.value))}
          >
            {newMessage}
          </textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};
export default MsgSection;
