//write out functions and
function run5Miles() {
    console.log('...')
}
function run5Miles() {
    console.log'...'
}
function liftWeights() {
    console.log'...'
}
function swimFortyLaps() {
    console.log'...'
}


//pass a function as a value omit () liftweights.
function Monday() {
    exerciseRoutine(liftWeights)
}
function exerciseRoutine(postRunExercise) {
    run5Miles()
    postRunExercise()
}

function Monday () {
    exerciseRoutine(liftWeights)
}
function exerciseRoutine(postRunExercise) {
    run5Miles()
    postRunExercise()
}

//In-line Functions
//pilates. adding another event we can use Anonymous Function
exerciseRoutine(function () {
    console.log('...')
//or
// exerciseRoutine(() => console.log('...'))
})

//Returning Functions
function morningRoutine(exercise) {
    let breakfast

    if (exercise ===liftWeights) {
        breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
        breakfast = "kale Smoothie";
    } else {
        breakfast = "granola";
    }


exerciseRoutine(exercise)
return function() {
    console.log(`yummy this ${breakfast} is good!`)
}
}
//to combine first exercise with 2nd:
const afterExercise = morningRoutine(liftWeights)
afterExercise()
// will log exercise text and food text

