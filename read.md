# Step 1 — What is a callback and why we need it (with hands-on example + exercise)

Short version: a **callback** is just a function you pass into another function so it can call back later — usually when some work (often asynchronous) finishes.

Why callbacks matter in Node:

* Node is single-threaded and does many I/O operations asynchronously.
* Instead of blocking while waiting for I/O, Node starts the operation and gives a callback to run when the operation completes. This keeps the program responsive.

---

### Example 1 — synchronous vs asynchronous

Synchronous (blocks):

```js
// synchronous
function doSync() {
  const result = heavyComputation(); // blocks until done
  console.log('sync result:', result);
}
```

Asynchronous with callback (non-blocking):

```js
// asynchronous using callback
function doAsync(cb) {
  setTimeout(() => {
    // simulate async work
    cb(null, 'done after 1s');
  }, 1000);
}

doAsync((err, res) => {
  if (err) return console.error('error:', err);
  console.log(res); // prints: done after 1s (after ~1s)
});
console.log('this prints before the async result');
```

Notice: `console.log('this prints before...')` runs before the callback — that's the non-blocking behavior.

---

### Example 2 — error-first callback pattern (common in Node)

Node convention: the first callback argument is an error (if any), then the result(s).

```js
const fs = require('fs');

fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    // handle error (file not found, permission, etc.)
    console.error('read error:', err);
    return;
  }
  console.log('file contents:', data);
});
```

This is the classic Node style: `(err, result) => { ... }`

---

### Small exercise (try in a Node REPL or file)

1. Write a function `delayedSum(a, b, cb)` that waits 500ms and then calls `cb(null, sum)` where `sum = a + b`.

   * Then call `delayedSum(4, 7, callback)` and in the callback print the sum.

2. Write `delayedDivide(a, b, cb)` that waits 300ms and:

   * If `b === 0` call `cb(new Error('divide by zero'))`
   * Otherwise call `cb(null, a / b)`

3. Combine them: Use `delayedSum(10, 5, cb1)` inside which you call `delayedDivide(sum, 3, cb2)` and print the final result. Observe order of prints.

**Hints**

* Use `setTimeout` to simulate the delay.
* Follow the `(err, result)` pattern.
* Watch console output order to internalize async flow.

---

If you want, I can:

* Show the **solution code** for these exercises now, **or**
* Move to **Step 2**: callbacks with multiple asynchronous operations, and patterns to avoid "callback hell" (nesting), including `async` module style, named callbacks, and early returns for errors.

Which would you like?
