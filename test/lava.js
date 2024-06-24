function lol() {
    try {
        console.NonExist();
    } catch(e) {
        console.log(e);
    }
}

lol();              // Will not crash because it's wrapped with try/catch. Error will be printed.
console.NonExist(); // Should crash because you don't know how to write code that works.