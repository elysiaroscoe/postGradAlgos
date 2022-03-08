function gimme (triplet) {

  let a = triplet[0];
  let b = triplet[1];
  let c = triplet[2];
  
  if((a>b&&a<c) || (a<b&&a>c)){
    return 0;
  }
  if ((b>a&&b<c) || (b<a&&b>c)) {
    return 1;
  }
  if((c>a&&c<b) || (c<a&&c>b)){
    return 2;
  }
}

//expect 0
console.log(gimme([2, 3, 1]))

//expect 1
console.log(gimme([5, 10, 14]))