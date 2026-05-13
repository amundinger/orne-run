export async function onRequest({ request, next, env }) {
  const user = env.AUTH_USER;
  const pass = env.AUTH_PASS;

  const authHeader = request.headers.get('Authorization');
  if (authHeader?.startsWith('Basic ')) {
    const decoded = atob(authHeader.slice(6));
    const colon = decoded.indexOf(':');
    if (colon !== -1) {
      const inputUser = decoded.slice(0, colon);
      const inputPass = decoded.slice(colon + 1);
      if (inputUser === user && inputPass === pass) {
        return next();
      }
    }
  }

  return new Response('Zugang verweigert', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Sportivo Orne Lauf"',
      'Content-Type': 'text/plain;charset=UTF-8',
    },
  });
}
