import fs from 'fs';

let name = "leesemin";
let date = new Date();
let fileName = date.getDate(2023) + name;


//파일 이름을 우리가 동적으로 저장 혹은 만들 수 있다.
// fs.writeFileSync("./" + fileName + ".txt" , name)


//파일, 폴더 삭제하기
// fs.rm('./1leesemin.txt')

//파일 이름 자동생성기 등과 같은 것도 만들 수 있다.

//내용 추가 밑 \n으로 문자열 엔터 친것과 같은 기능 주기 (이번이 아니라 다음에 실행할때 밑으로 내려감)
try {
  fs.appendFileSync("./" + fileName + ".txt",'1leesemin 파일 지우기\n')
} catch (error) {
  console.error(error)
}
