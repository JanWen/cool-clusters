import express from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';
import bodyParser from 'body-parser';
import SQL from './db.js';


const app = express();
const port = 4000;
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ],
});

app.use(bodyParser.json());
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console(),
  ],
  //format: winston.format.colorize(),
  meta: false,
  msg: 'HTTP {{req.method}} {{req.url}}',
  // expressFormat: true,
  colorize: true,
}));

app.get('/clusters', async (_, res) => {
  res.send(await SQL.list());
});

app.get('/clusters/:clusterId', async (req, res) => {
  res.send(await SQL.get(req.params.clusterId));
});

app.delete('/clusters/:clusterId', async (req, res) => {
  res.send(await SQL.delete(req.params.clusterId));
});

app.post('/clusters/:clusterId', async (req, res) => {
  const new_cluster = {...req.body, id: req.params.clusterId};
  await SQL.update(req.params.clusterId, req.body);
  res.send(new_cluster);
});

app.post('/clusters', async (req, res) => {
  const {name, nodes, url, created} = req.body;
  const latest = await SQL.run(
    'SELECT * FROM clusters ORDER BY id DESC LIMIT 0, 1'
  );
  if (!name || !nodes) {return res.status(500).send('No name or nodes given.');}
  await SQL.put({
    id: latest ? latest.id + 1 : 0,
    name: name,
    nodes: nodes,
    url: url,
    created: created ? created : new Date().toISOString().split('T')[0],
  });
  res.send(await SQL.list());
});

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});