const oldData = {
    fireRice:
    {
        price:30,
        vnName:'Com rang dua bo'
    },
    noddle:
    {
        price:20,
        vnName:'my tom chanh'
    },
    pho:
    {
        price:35,
        vnName:'pho bo tai chin'
    }
}
var fireRice,noddle,pho
({fireRice, noddle,pho}=oldData)
var newData = {fireRice,pho}
console.log(newData)