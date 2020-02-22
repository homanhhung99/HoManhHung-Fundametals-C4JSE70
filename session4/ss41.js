let nhanvien = [
    {
        name:'HoHung',
        Days:30,
        hours:8,
        price1:50000,
    },
    {
        name:'viet',
        Days:30,
        hours:6,
        price1:50000,
    },
    {
        name:'Thinh',
        Days:25,
        hours:8,
        price1:30000,
    },
    {
        name:'binh',
        Days:20,
        hours:5,
        price1:100000,
    }
]
console.log(nhanvien)
let luong = []
for(let i = 0;i<nhanvien.length;i++)
{
    luong[i]=Number(nhanvien[i].price1*nhanvien[i].Days*nhanvien[i].hours)
    console.log(`${nhanvien[i].name} có số lương là : ${luong[i]}`)
}
let sum = 0
for(let j = 0;j<nhanvien.length;j++)
{
    sum+=Number(luong[j])
}
console.log(`\ntong so tien ${nhanvien.length} be la: ${sum}`)

// nhanvien.forEach(value=>{
//     console.log(`${nhanvien[i].name} có số lương là : ${nhanvien[i].price1*nhanvien[i].Days*nhanvien[i].hours}`)
//      sum+=nhanvien[i].price1*nhanvien[i].Days*nhanvien[i].hours
// })
