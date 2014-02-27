e := try(
  foo := xhr @read("foo.json")
  bar := xhr @read("bar.json")
  wait(1000)
  if(Scheduler yieldingCoros size > 1, Exception raise("timed out"))
  render(foo)
  render(bar)
)
e catch(Exception,
  console.log("read failed: " + e);
)
