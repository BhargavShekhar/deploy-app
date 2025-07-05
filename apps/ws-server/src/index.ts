import { client } from '@repo/db/client';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {
  ws.on('error', console.error);

  const res = await client.user.create({
    data: {
      username: Math.random().toString(),
      password:Math.random().toString()
    }
  })

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});