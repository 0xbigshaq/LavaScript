/*---
includes: []
flags: [async]
---*/

async function af(x) {
    const y = await new Promise(resolve => {resolve(x + 10)});

    return x + y;
}

af(50).then(v => {
    assert.sameValue(v, 110);
})
.then($DONE, $DONE);
