//const str = `hello 
//world`//``통하면 개행가능 ''은 불가능
let str = `
010-1234-5678
thesecon@gmail.com
https://www.obdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//const regexp = new RegExp('the', 'gi')//'g' grap
// const regexp = /fox/gi // 11행 정규 표현식과 동일
// // console.log(regexp.test(str))
// str = str.replace(regexp, 'AAA')
// console.log(str)

// * const regexp = /the/gi
// * console.log(str.match(regexp))
// * console.log(str.match(/the/gi))
//*console.log(str.match(/\.$/gi))// 마침표를 찾음

console.log(
  str.match(/(?<=@).{1,}/g)
)