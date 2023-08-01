import React from 'react';
import { ActionIcon, Textarea, Text, createStyles, Container, Avatar, rem, Flex } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 16,
    borderRadius: theme.radius.sm,
  },

  message: {
    gap: rem(8),
    alignItems: 'flex-start',
    marginBottom: 8,
    borderRadius: 4,
    maxWidth: '70%',
  },
  userMessage: {
    flexDirection: 'row-reverse',
    marginLeft: 'auto',
  },
  assistantMessage: {
    marginRight: 'auto',
  },

  text: {},
  assistantText: {
    padding: `${rem(8)} ${rem(25)}`,
    background: theme.colors.teal[0],
    textAlign: 'left',
    borderRadius: `0 ${rem(20)} ${rem(20)} ${rem(16)}`,
  },
  userText: {
    padding: `${rem(8)} ${rem(25)}`,
    background: theme.colors.blue[0],
    textAlign: 'right',
    borderRadius: `${rem(20)} 0 ${rem(16)} ${rem(20)}`,
  },

  space: {
    width: '100%',
    height: '100px',
  },

  inputContainer: {
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
  },
}));

interface Message {
  id: number;
  content: string;
  sender: string;
}

const BookChat = () => {
  const { classes } = useStyles();
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [messageInput, setMessageInput] = React.useState('');

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage: Message = {
        id: Date.now(),
        content: messageInput.trim().replace(/\n/g, ' '),
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Container className={classes.container}>
      <Container className={classes.chatContainer}>
        <Flex className={`${classes.message} ${classes.assistantMessage}`}>
          <Avatar>BC</Avatar>
          <Text className={classes.assistantText}>
            안녕하세요. 저는 책에 관한 토론이 즐거운 북챗입니다. 어떤 책에 대해 얘기해볼까요?
          </Text>
        </Flex>
        {messages.map(message => (
          <Flex
            key={message.id}
            className={`${classes.message} ${
              message.sender === 'assistant' ? classes.assistantMessage : classes.userMessage
            }`}>
            {message.sender === 'assistant' && <Avatar>BC</Avatar>}
            <Text
              className={`${classes.text} ${
                message.sender === 'assistant' ? classes.assistantText : classes.userText
              }`}>
              {message.content}
            </Text>
          </Flex>
        ))}
        <div className={classes.space}></div>
      </Container>
      <Container className={classes.inputContainer}>
        <Textarea
          className={classes.input}
          variant="filled"
          placeholder="책과 관련된 메시지를 입력해 주세요"
          value={messageInput}
          autosize
          minRows={2}
          maxRows={4}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          rightSection={
            <ActionIcon variant="light" onClick={sendMessage} size={35}>
              <IconSend size={20} />
            </ActionIcon>
          }
          rightSectionWidth={50}
        />
      </Container>
    </Container>
  );
};

export default BookChat;
