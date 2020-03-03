let list = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team']
for(let i = 0;i<list.length;i++)
{
    let x = 1
    for(let j = i+1;j<list.length;j++)
    {
        if(list[i]==list[j])
        {
            x++
            list.splice(j,1)
        }
    }
    console.log(`${list[i]}: ${x}`)
}

const inventory = [

    {
    
        name: 'HP Envy 13aq',
    
        price: 21000,
    
        brand: 'HP',
    
        quantity: 5,
    
    },
    
    {
    
        name: 'Dell XPS 9370',
    
        price: 30000,
    
        brand: 'Dell',
    
        quantity: 1,
    
    },
    
    {
    
        name: 'Dell Inspiron 3567',
    
        price: 9300,
    
        brand: 'Dell',
    
        quantity: 12,
    
    },
    
    {
    
        name: 'Dell Latitude E5450',
    
        price: 8600,
    
        brand: 'Dell',
    
        quantity: 2,
    
    },
    
    {
    
        name: 'Asus Zenbook',
    
        brand: 'Asus',
    
        price: 20000,
    
        quantity: 4,
    
    },
    
    {
    
        name: 'HP Pavilion',
    
        brand: 'HP',
    
        price: 14000,
    
        quantity: 7,
    
    },]
    inventory.forEach((value,index)=>
    {
        console.log(`${index+1}:\nname:${value.name}\nbrand:${value.brand}\nprice:${value.price}\nquantity:${value.quantity}`)
    })
    inventory.forEach((value,index)=>
    {
        if(value.brand=="Dell")
        {
            console.log(`${index}:\nname: ${value.name}\nprice: ${value.price}`)
        }
    })
    for(let i = 0;i<inventory.length;i++)
    {
        for(let j = 0;j<inventory.length-i-1;j++)
        {
            if(inventory[j].price>inventory[j+1].price)
            {
                let temp = inventory[j]
                inventory[j]=inventory[j+1]
                inventory[j+1]=temp
            }
        }
    }
    console.log(inventory)
let InventByBrand = {}
for(let i = 0 ; i < inventory.length;i++)
{
    let x = []
    for(let j = 0;j<inventory.length;j++)
    {
        InventByBrand[inventory[i].brand] = x
        if(inventory[i].brand==inventory[j].brand)
        {
            x.push(inventory[j])
        }
    }
}
console.log(InventByBrand)

let keys = Object.keys(InventByBrand)
let input = prompt("which brand?")
for(let j = 0;j<keys.length;j++)
{
    if(input==keys[j])
    {
        let newName = InventByBrand[keys[j]]
        let x = []
        let sum = 0
        for(let n = 0;n<newName.length;n++)
        {
            x.push(newName[n].name)
            sum+=Number(newName[n].price*newName[n].quantity*100)
        }
        alert(`There are ${InventByBrand[keys[j]].length} generration of '${keys[j]}' in ventory'\n\n${x.join(`\n`)}\n\nWith total value:${sum.toLocaleString('de-DE', { style: 'currency', currency: 'VND' })}`)
        break
    }
}

