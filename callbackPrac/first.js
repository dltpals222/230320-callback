function firstFunction (tagName, makeText , callback) {
  let a = document.body.createElement(tagName);
  a.innerText = makeText;
  return callback(a)
}

firstFunction('div','텍스트를 입력하세요',function(a){
  a.setAttribute('id','basic-text')
})