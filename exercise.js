function printAsyncName(callback, name){
    setTimeout(callback,1000)
    setTimeout(() => console.log(name),2000)
}
const sayHello = () => console.log("hello")

printAsyncName(sayHello,"nuri")



// setInterval(() => console.log("hello"),1000)
// setInterval(() => console.log(name),2000)