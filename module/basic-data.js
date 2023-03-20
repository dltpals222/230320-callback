// //commonJS 방식
// module.exports = {
//   a : "이것은 a데이터야",
// }


// //이렇게 해도 위에서 사용하는 것처럼 사용가능하다.
const abcde = {
  b : "이것은 b데이터야"
}

//abcde는 내보내기 위한 장치로서 지역변수라고 생각해도된다.
// module.exports = abcde; 





//모듈방식
export default abcde;