let text = {}
async function getdata()
{
    let api = await fetch("http://dummy.restapiexample.com/api/v1/employees")
    console.log(api)
    let dataJson = await api.json()
    // console.log(dataJson)
    let data = dataJson.data
    console.log(data)
    text.data = data
}

async function viewData()
{
    await getdata()
    let container = document.getElementById("container")
    // console.log(text.data)
    for(let i = 0;i<text.data.length;i++)
    {
        let html = `
        <div class="userBlox" id="user-${i}">
        <div id="id">Id:${text.data[i].id}</div>
        <div id="name">Name: ${text.data[i].employee_name}</div>
        <div class="un-view" id="salary">Salary: ${text.data[i].employee_salary}</div>
        <div id="age">Age: ${text.data[i].employee_age}</div>
        <img src="${text.data[i].profile_image}" alt="">
         </div>`
        container.innerHTML += html
    }
    for(let i =0;i<text.data.length;i++)
    {
      let user = document.getElementById(`user-${i}`)   
      user.children[1].addEventListener('mouseover',()=>
      {
        user.children[2].classList.toggle('view')
        console.dir(user)
      })
      user.children[1].addEventListener('mouseout',()=>{
        user.children[2].classList.toggle('view')
        console.dir(user)
    })
    }
}
viewData()