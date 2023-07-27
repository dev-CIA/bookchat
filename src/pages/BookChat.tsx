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

const mockData = [
  {
    id: 123,
    content: '안녕',
    sender: 'user',
  },
  {
    id: 456,
    content: '무슨 얘기를 할까요?',
    sender: 'assistant',
  },
  {
    id: 234,
    content: '안녕',
    sender: 'user',
  },
  {
    id: 1233,
    content: '무슨 얘기를 할까요?',
    sender: 'assistant',
  },
  {
    id: 789,
    content: 'a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed',
    sender: 'user',
  },
  {
    id: 790,
    content: 'Duis sit amet diam eu dolor egestas rhoncus. Proin nisl',
    sender: 'assistant',
  },
  {
    id: 791,
    content: 'gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat.',
    sender: 'user',
  },
  {
    id: 792,
    content: 'Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie',
    sender: 'assistant',
  },
  {
    id: 793,
    content: 'amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt',
    sender: 'user',
  },
  {
    id: 795,
    content: 'metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus',
    sender: 'assistant',
  },
  {
    id: 796,
    content: 'amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat.',
    sender: 'user',
  },
  {
    id: 797,
    content: 'Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu,',
    sender: 'assistant',
  },
  {
    id: 798,
    content: 'aliquet vel, vulputate eu, odio. Phasellus at augue id ante',
    sender: 'user',
  },
  {
    id: 799,
    content: 'sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo.',
    sender: 'user',
  },
  {
    id: 800,
    content: 'erat semper rutrum. Fusce dolor quam, elementum at, egestas a,',
    sender: 'assistant',
  },
  {
    id: 801,
    content: 'nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent',
    sender: 'user',
  },
  {
    id: 802,
    content: 'Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum',
    sender: 'assistant',
  },
  {
    id: 803,
    content: 'Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut',
    sender: 'user',
  },
  {
    id: 804,
    content: 'at pretium aliquet, metus urna convallis erat, eget tincidunt dui',
    sender: 'user',
  },
  {
    id: 805,
    content: 'Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi,',
    sender: 'assistant',
  },
  {
    id: 806,
    content: 'ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis',
    sender: 'user',
  },
  {
    id: 807,
    content: 'elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum',
    sender: 'assistant',
  },
  {
    id: 808,
    content: 'ornare, lectus ante dictum mi, ac mattis velit justo nec',
    sender: 'user',
  },
];

const BookChat = () => {
  const { classes } = useStyles();
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [messageInput, setMessageInput] = React.useState('');

  //임시
  React.useEffect(() => {
    setMessages(mockData);
  }, []);

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage: Message = {
        id: Date.now(),
        content: messageInput.trim(),
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
  };

  // const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
  //     handleSendMessage();
  //   }
  // };

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
          // onKeyPress={handleKeyPress}
          rightSection={
            <ActionIcon variant="light" onClick={handleSendMessage} size={35}>
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
