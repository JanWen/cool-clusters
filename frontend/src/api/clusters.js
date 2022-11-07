const HEADERS = {
  'Content-Type': 'application/json',
};

async function request(path, method, body = undefined) {
  const params = {
    headers: HEADERS,
    method: method,
    body: method === 'POST' ? JSON.stringify(body) : undefined,
  };
  const result = await fetch(
    path,
    params,
  );
  return result.json();
}

const API = {
  list: async () => request('/clusters', 'GET'),
  get: async (clusterId) => request('/clusters/' + clusterId, 'GET'),
  add: async (body) => request('/clusters', 'POST', body),
  edit: async (clusterId, body) => (
    request('/clusters/' + clusterId, 'POST', {...body, clusterId})
  ),
  del: async (clusterId) => request('/clusters/' + clusterId, 'DELETE'),
};
export default API;
