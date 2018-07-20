import getWindowLocation from "./c"
const anotherVar = getWindowLocation
console.log('anotherVar :', anotherVar)
const testfunction = () => {
  return anotherVar
}
// make some work with anotherVar
export default testfunction