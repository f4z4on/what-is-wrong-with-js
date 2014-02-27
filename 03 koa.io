app := Koa clone

// x-response-time

app use(
  start := Date clone;
  yield
  ms := (Date clone) - start
  set('X-Response-Time', ms + 'ms')
)

// logger

app use(
  start := Date clone
  yield
  ms := (Date clone) - start
  printf('%s %s - %s', self.method, url, ms)
)

// response

app use(
  body := 'Hello World'
)

app listen(3000)
