let context = {}
async function getdata()
{
    let api = await fetch("https://reqres.in/api/users?page=2&fbclid=IwAR2MEV8TpD_2GnUMm60D2QnXSbObOJXE6JecFIS7mIw0yWFkIRWbzFExvOg")
    let dataJson = await api.json()
    console.log(dataJson)
    let data = dataJson.data
    console.log(data)
    context.data= data
}
async function viewData (){
    await getdata()
    // console.log(context)
    let container = document.getElementById("container")
    console.log(context.data)
    for(let i = 0;i<context.data.length;i++)
    {
        let html = ` <div class="user" id="user-${i}">
        <p>
        ${context.data[i].first_name} ${context.data[i].last_name}
        </p>
        <img src="${context.data[i].avatar}" alt="">
        <div class="un-view">${context.data[i].email}</div>
    </div>`
        container.innerHTML += html
    }
    for(let i =0;i<context.data.length;i++)
    {
        let user = document.getElementById(`user-${i}`)
        user.addEventListener('mouseover',()=>{
            user.children[2].classList.toggle('view')
            console.dir(user)
        })
        user.addEventListener('mouseout',()=>{
            user.children[2].classList.toggle('view')
            console.dir(user)
        })
    }
}
viewData()
