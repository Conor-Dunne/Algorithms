var range = 1000;
var sum = 0;

function multi() {

  for (var i = 0; i < range; i++) {

    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
      return sum;
    }



  }

}

multi();
