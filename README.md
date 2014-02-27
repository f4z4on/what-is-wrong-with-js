# What is wrong with JavaScript?

Accompanying files to [my
talk](https://speakerdeck.com/frzng/what-is-wrong-with-js) about flaws
and shortcommings of JavaScript as a language and as a community.

## Description

*01* - Shows how bad, immaturiture and needless JavaScript
meta/reflection capabilities are.

It also shows original takes on defining getter which is not
sufficient due to other properties of the language but way simpler. To
me, it also shows why macros should among top priorities in language
developement.

*02* - Stupid example of [Sweeet.js](http://sweetjs.org)
macro. Originaly, I wanted to find a simple yet practical example from
[Clojure](http://clojure.org) and compare it with Sweet.js.

I actually think Sweet.js is nice, but the problem here is that even
though JavaScript is used to solve wide range of problems, the
community doesn't see that original syntax is very limiting in many
cases.

*03* - Comparison of ES6 generators with actor model from [IO
language](http://iolanguage.org). Honestly, it is not very comparable
because using actors lead to different design than use of coroutines.

One thing here is the syntax around generators which to me is
understable but still very unfortunate. `Yield` being a keyword and
that asterisc in generator definition are the worst I think.

[Koa](http://koajs.com) is a new take on the job commonly done by
[Connect](http://www.senchalabs.org/connect/) and
[Express.js](http://expressjs.com). The example code in IO is nearly
pseudo-code.

*04* - Asynchronicity has many faces even when you have only one
thread.
