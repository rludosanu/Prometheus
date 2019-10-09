export function localLogIn(email = null, password = null) {
  return new Promise(resolve =>
    setTimeout(() => {
      if (email === 'hello@world.com' && password === 'helloworld') {
        resolve('helloworld');
      } else {
        resolve(null);
      }
    }, 2000),
  );
}

export function localVerifyToken(token = null) {
  return new Promise(resolve =>
    setTimeout(() => {
      if (token === 'helloworld') {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 2000),
  );
}
