/*---
includes: []
flags: [async]
---*/

var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 0, 'one');
});

var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 0, 'two');
});

Promise.race([p1, p2]).then(
    v => assert.sameValue(v, 'one'),
    v => $DONOTEVALUATE(),
)
.then($DONE, $DONE);
