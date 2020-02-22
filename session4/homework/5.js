let products = [
    {
        name:'Xiaomi portable charger 20000mah',
        brand:'Xiaomi',
        price:'428',
        color:'While',
        category:'charger',
    },
    {
        name:'VSmart Active 1 ',
        brand:'VSmart',
        price:'5487',
        color:'Black',
        category:'phone',
    },
    {
        name:'IPhone X',
        brand:'Apple',
        price:'21490',
        color:'Gray ',
        category:'phone',
    },
    {
        name:'Samsung Galaxy A9',
        brand:'Samsung ',
        price:'8490',
        color:'Blue',
        category:'phone',
    },
]
products.forEach((value,index) =>
{
    console.log('-------------------------------')
    console.log(`#${index+=1}.Name: ${value.name}\nPrice: ${value.price}`)
})
let input = Number(prompt("Enter product position:"))
let keys = Object.keys(products[input])
for(let j = 0; j < keys.length;j++)
{
    console.log(`${keys[j]}: ${products[input-1][keys[j]]}`)
}
let seach_category = prompt("Enter your category?")
for(let k = 0;k<products.length;k++)
{
    if(products[k][keys[4]]== seach_category)
    {
        console.log('-------------------------------')
        console.log(`\n${keys[0]}: ${products[k][keys[0]]}\n${keys[0]}: ${products[k][keys[2]]}`)
    }
}
let x
for(let n = 0;n<products.length;n++)
{
    products[n].providers = prompt("Add name providers: ")
    x = products[n].providers.split(" ")
}
console.log("TÍP")
products.forEach((value,index) =>
    {
        console.log('-------------------------------')
        console.log(`#${index+=1}.Name: ${value.name}\nPrice: ${value.price}\ncolor: ${value.color}\nProvider: ${value.providers}`)
    })

let seach_provider = prompt("Enter providers: ")
let c = 0
console.log("TÍP")
products.forEach((value,index) =>
    {
        if(value.providers.indexOf(seach_provider)!=-1)
        {
            console.log('-------------------------------')
            console.log(`#${index+=1}.Name: ${value.name}\nbrand:${value.brand}\nPrice: ${value.price}\ncolor: ${value.color}\nCaterory: ${value.category}\nProvider: ${value.providers}`)
        }
    })


