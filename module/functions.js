//리턴이 숫자
function one () {
  return 1;
}

//리턴이 문자 
//그냥 이렇게 적으면 함수만으로는 문자열인지 확인하기 힘들다
function two () {
  return "1";
}

//이렇게 하면 무식하긴하지만 보자마자 리턴값이 스트링이라는걸 알 수 있다.
function twoReturnString () {
  return "1";
}

//리턴이 boolean(treu/false)일때 참인 경우는 is를 많이 사용한다. 
//함수가 뭐든간에 return이 true인 것이다.
function isThree () {
  return true;
}

//호출하기 전까지는 함수이지만 호출한 후부터는 객체가 된다. 
//디버거에 의존해야 된다. 
//리턴만 보더라도 할 수 있는게 보인다.
function four(){
  return {
    a : 1,
    b : "2",
    c : true,
  }
}

//return void = return zero 라고 한다. 
//전형적인 excution function 인 실행만 하는 함수이다. 
//대표적인것이 for문이다.
function five () {
  let a = 1 + 1;
}