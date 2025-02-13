import ContentWrappter from '@/components/ContentWrappter/ContentWrappter';
import MessageList from '@/components/Messages/MessageList';

export type TMessage = {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

const Messages = async () => {
  const res = await fetch('https://personal-portfolio-blog-server.vercel.app/api/messages', {
    cache: 'no-store',
  });
  const messages = await res.json();

  return (
    <ContentWrappter breadcrumb1="Message Management" breadcrumb2="Messages">
      <MessageList messages={messages?.data} />
    </ContentWrappter>
  );
};

export default Messages;
