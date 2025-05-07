import { useMemo } from "react";
import { MessagesProps } from "./props";
import { useChatContext } from "./ChatContext";
import { Message, Role, TextMessage, gqlToAGUI } from "@copilotkit/runtime-client-gql";
import { useCopilotChat } from "@copilotkit/react-core";
import { StickToBottom } from "use-stick-to-bottom";

export const Messages = ({
  children,
  inProgress,
  RenderTextMessage,
  AssistantMessage,
  UserMessage,
  onRegenerate,
  onCopy,
  onThumbsUp,
  onThumbsDown,
  markdownTagRenderers,
}: MessagesProps) => {
  const { labels } = useChatContext();
  const { visibleMessages, interrupt } = useCopilotChat();

  const initialMessages = useMemo(() => makeInitialMessages(labels.initial), [labels.initial]);

  const messages = [...gqlToAGUI(initialMessages), ...visibleMessages];

  return (
    <StickToBottom resize="smooth" initial="smooth" className="copilotKitMessages">
      <StickToBottom.Content className="copilotKitMessagesContainer">
        {messages.map((message, index) => {
          const isCurrentMessage = index === messages.length - 1;

          return (
            <RenderTextMessage
              key={index}
              message={message}
              inProgress={inProgress}
              index={index}
              isCurrentMessage={isCurrentMessage}
              AssistantMessage={AssistantMessage}
              UserMessage={UserMessage}
              onRegenerate={onRegenerate}
              onCopy={onCopy}
              onThumbsUp={onThumbsUp}
              onThumbsDown={onThumbsDown}
              markdownTagRenderers={markdownTagRenderers}
            />
          );
        })}
        {interrupt}
      </StickToBottom.Content>
      <footer className="copilotKitMessagesFooter">{children}</footer>
    </StickToBottom>
  );
};

function makeInitialMessages(initial?: string | string[]): Message[] {
  let initialArray: string[] = [];
  if (initial) {
    if (Array.isArray(initial)) {
      initialArray.push(...initial);
    } else {
      initialArray.push(initial);
    }
  }

  return initialArray.map(
    (message) =>
      new TextMessage({
        role: Role.Assistant,
        content: message,
      }),
  );
}
