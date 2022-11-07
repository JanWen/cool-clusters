import sqlite3 from 'sqlite3';
const db = new sqlite3.Database(':memory:');

const INSERT = 'INSERT INTO clusters VALUES (?, ?, ?, ?, ?)';

// initialize table and exmaple data
db.serialize(() => {
  db.run(`CREATE TABLE clusters
    (id NUMBER,
    name TEXT,
    nodes NUMBER,
    url TEXT,
    created TEXT);
    `);
  const stmt = db.prepare(INSERT);
  for (let i = 0; i < 5; i++) {
    const s = (Math.random() + 1).toString(36).substring(9);
    stmt.run(
      i,
      `cluster-${s}`,
      i,
      `cluster-${s}.coolcluster.com`,
      new Date().toISOString().split('T')[0]
    );
  }
  stmt.finalize();
});

// close db connection upon termination
process.on('SIGINT', () => {
  db.close();
  process.exit(0);
});

// dictionary of database operations
const SQL = {
  run: (cmd) => {
    return new Promise((resolve, reject) => {
      db.get(cmd, (err, row) => {
        if (err) {return reject(err);}
        return resolve(row);
      });
    });
  },
  list: () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM clusters', (err, row) => {
        if (err) {return reject(err);}
        return resolve(row);
      });
    });
  },
  get: (id) => {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM clusters where id = ?', id, (err, row) => {
        if (err) {return reject(err);}
        return resolve(row);
      });
    });
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM clusters where id = ?;', id, (err, row) => {
        if (err) {return reject(err);}
        return resolve(row);
      });
    });
  },
  put: (cluster) => {
    return new Promise((resolve, reject) => {
      const values = [
        cluster.id,
        cluster.name,
        cluster.nodes,
        cluster.url,
        cluster.created,
      ];
      db.run(INSERT, values, (err, row) => {
        if (err) {return reject(err);}
        return resolve(row);
      });
    });
  },

  update: (id, cluster) => {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE clusters
        SET name = ?, nodes = ?, url = ?, created=?
        WHERE id = ?;`,
        [
          cluster.name,
          cluster.nodes,
          cluster.url,
          cluster.created,
          id,
        ],
        (err, row) => {
          if (err) {return reject(err);}
          return resolve(row);
        }
      );
    });
  },
};

export default SQL;