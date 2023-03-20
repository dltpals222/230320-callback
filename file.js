import fs from 'fs';

let name = "leesemin";
let date = new Date();
let fileName = date.getDay() + name;

//파일 이름을 우리가 동적으로 저장 혹은 만들 수 있다.
fs.writeFileSync("./" + fileName + ".txt" , name)

//파일 이름 자동생성기 등과 같은 것도 만들 수 있다.

// console.dir(fs)