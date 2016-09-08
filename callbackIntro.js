// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {


/*  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      found(arr);   // execute callback
    }
  }*/

  function isWaldo(val, index){

    if(val == "Waldo"){
      found(index);
    }

  }

  arr.forEach(isWaldo);

}

function actionWhenFound(val) {
  console.log("Waldo is at position " + val + " in the array");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);