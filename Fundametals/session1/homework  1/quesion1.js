// Question 1:
// Cách kiểm tra 1 biến thể ta có thể sử dùng keyword : typeof
let name = "ho hung"
let number = 4
let bool = true
// solution 1
console.log(typeof name)//xuất ra "string"
console.log(typeof number)//Xuất ra " Number"
console.log(typeof bool)//xuất ra kiểu boolean
// solution 2
console.log(Object.prototype.toString.call([1,2,3]))// "[object Array]"
console.log(Object.prototype.toString.call("whatthat"))// "[object String]"
console.log(Object.prototype.toString.call(45))// "[object Number]"
console.log(Object.prototype.toString.call(false))// "[object Boolean]"
console.log(Object.prototype.toString.call(new String("whatthis")))// "[object String]"
console.log(Object.prototype.toString.call(null))// "[object Null]"
// Mặc dù vậy, hãy cẩn thận nếu bạn xác định các nguyên hàm này bằng các 
// trình bao bọc đối tượng của chúng 
// (điều mà bạn không bao giờ nên làm, hãy sử dụng chữ theo bất cứ khi nào có thể):
console.log(typeof new String("whatisthis"))
console.log(typeof new Boolean(false))//đây là các loại object
console.log(typeof new Number(42))



