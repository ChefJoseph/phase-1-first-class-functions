function receivesAFunction(cb) {
    cb()
}

function returnsANamedFunction() {
    return function namedFunct() { console.log('ok')}
}

function returnsAnAnonymousFunction() {
   return () => console.log(`yummy this is good!`)

}