// TEST 1 (passed) *** ------------------------------------------------------------
function receivesAFunction(callback) {
    callback()
}

// const chai = receivesAFunction("chai")
// const spies = callback("chai-spies")

// TEST 1 as my own (did not pass) *** ------------------------------------------------------------

// function recievesAFunction(spices) {
//     spices();
//     console.log("")
// }

// function spices() {
//     console.log("chai")
// }

// console.log(recievesAFunction(spices))

// TEST 2 passed *** ------------------------------------------------------------

function returnsANamedFunction(namedFunction) {
    return function() {
        console.log("this is a named function!");
        // namedFunction();
    };
}

// TEST 3 passed *** ------------------------------------------------------------

function returnsAnAnonymousFunction() {
    return function() {
    } 
}

// TEST 4  *** ------------------------------------------------------------

function returnsANamedFunction() {
    return function namedFunction() {
    };
}

// function exerciseRoutine(runActivity, postRunActivities) {
//     runActivity();
//     postRunActivities();
// }

// function morningRoutine(exercise) {
//     let breakfast;

//     if (exercise === liftWeights) {
//         breakfast = "6 Egg omelette with bacon";
//     } else if (exercise === swimLaps) {
//         breakfast = "Oatmeal with nuts and berries";
//     } else {
//         breakfast = "Peanut butter smoothie";
//     }

//     return function() {
//         console.log(`nom nom nom, this ${breakfast} is delicious!`);
//     };
// }

// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }

// function liftWeights() {
//     console.log("Pump iron");
// }

// function swimLaps() {
//     console.log("Swim 40 laps");
// }

// // Monday, Tuesday, etc. routines
// function Monday() {
//     exerciseRoutine(runFiveMiles, morningRoutine(liftWeights));
// }

// function Tuesday() {
//     exerciseRoutine(swimLaps, morningRoutine(swimLaps));
// }

// function Wednesday() {
//     exerciseRoutine(runFiveMiles, morningRoutine(runFiveMiles));
// }

// function Thursday() {
//     exerciseRoutine(liftWeights, morningRoutine(liftWeights));
// }

// function Friday() {
//     exerciseRoutine(swimLaps, morningRoutine(swimLaps));
// }

// // Example usage
// Monday();
// Tuesday();
// Wednesday();
// Thursday();
// Friday();


// function exerciseRoutine(postRunActivities) {
//     runFiveMiles()
//     postRunActivities()
// }

// function morningRoutine(exercise) {
//     let breakfast;

//     if (exercise === liftWeights) {
//         breakfast = "6 Egg omlette with bacon"
//     } else if (exercise === swimLaps) {
//         breakfast = "Oatmeal with nuts and berries"
//     } else {
//         breakfast = "Peanut butter smoothie"
//     }
// }

// exerciseRoutine(exercise);
//     return function() {
//         console.log(`nom nom nom, this ${breakfast} is delicious!`)
// }
// // separator -----------------------------------------------

// function runFiveMiles() {
//     console.log("go for a five-mile run")
// }

// function liftWeights() {
//     console.log("Pump iron")
// }

// function swimLaps() {
//     console.log("Swim 40 laps")
// }
// // separator -----------------------------------------------

// function Monday() {
//     exerciseRoutine(liftWeights)
// }

// function Tuesday() {
//     exerciseRoutine(swimLaps)
// }

// function Wednesday() {
//     exerciseRoutine(runFiveMiles)
// }

// function Thursday() {
//     exerciseRoutine(liftWeights)
// }

// function Friday() {
//     exerciseRoutine(swimLaps)
// }






