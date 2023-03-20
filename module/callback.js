//타입 조건문(이런형태의 if문은 불편하다. 맨날 써줘야 하기 때문이다.)
//너무 불편하다 하면 타입스크립트로 넘어가면 된다. 함수에 타입을 적어주기만 하면 되기 때문이다.
function six(number, append){
  if(typeof(number) === "number" && typeof(append)==='number'){
    return number + append;
  } else {
    console.error("이 매개변수는 둘 다 숫자여야만 동작합니다.")
  }
}

//여기서 덧셈말고도 다른것도 사용하고 싶다. (이렇게 정적으로 만들 수 있지만 그 수가 엄청 많다면?)
function seven (number, append) {
  return number - append;
}

//callback은 정해져있다.(다른거 써도 되긴 하지만 헷갈리기 때문에 정해둔걸로 하자)
function eight (number, append, callback) {
  return callback(number,append); //파라미터, arguement를 전달받았다.
} //실체가 없는 형태가 되어버렸다.

//호출할 때 선언되었다. 
console.log(eight(1,2,function(a, b){
  return a + b;
}))

//이렇게 사용할 수도 있다.
console.log(eight(3,4,seven));


//동기 방식 (뭔가를 실행 한 후에 알고리즘을 만듦)
function eightTwo (number, append, callback) {
  let a = number + 1;
  let b = append + 2;
  return callback(a,b);
}