// //모듈을 가져온게 아니라 함수를 가져온거 같아 보인다. commonJS 스타일
// const fromModuleObjectBasicData = require('./module/basic-data') 
//파이썬등 다른 언어들은 이렇게 사용한다. 모듈스타일
import fromModuleObjectBasicData from './module/basic-data' 

console.dir(fromModuleObjectBasicData)

//현재는 commonJS 스타일이 사라지고 있다.