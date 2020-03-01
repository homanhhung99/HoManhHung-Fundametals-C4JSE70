const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
 };
 for (let x in product) {
 console.log(x);
 }
 //1.1 x là các từ khóa trong object product: name , price,brand,color
 let keys = Object.keys(product)
 keys.forEach((value, index) =>{
    console.log(`${index+1}.${value}: ${product[value]}`)
})
    