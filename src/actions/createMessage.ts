'use server';

export const createMessage = async (data: FormData) => {
  const messageData = Object.fromEntries(data.entries());
  const res = await fetch('https://personal-portfolio-blog-server.vercel.app/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(messageData),
  });

  const message = await res.json();

  return message;
};
