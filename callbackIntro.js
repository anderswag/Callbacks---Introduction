// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      found(arr);   // execute callback
    }
  }
}

function actionWhenFound(arr) {
  var waldoIndex = arr.indexOf("Waldo");
  console.log(waldoIndex);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);