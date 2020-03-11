let rowIndex,table = document.getElementById('bang')
let inputF = document.getElementById('Firstname')
let inputL = document.getElementById('Lastname')
let inputAge = document.getElementById('Age')
function checkEntryInput()
{
    let check = false
    if(inputF.value=="")
    {
        alert("First name  cannot be entry")
        check = true
    }
    else if(inputL.value=="")
    {
        alert("Last name  cannot be entry")
        check = true
    }
    else if(inputAge.value=="")
    {
        alert("Age cannot be entry")
        check = true
    }
    console.log(check)
    return check
}
function addHtmlTalbeRow(){
    if(!checkEntryInput())
    {
        var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),//thêm cột 1
        cell2 = newRow.insertCell(1),//thêm cột 2
        cell3 = newRow.insertCell(2)//thêm cột 3
        console.dir(table)
        cell1.innerHTML = inputF.value//gán cột một có dữ liệu từ inputF
        cell2.innerHTML = inputL.value//gán cột một có dữ liệu từ inputL
        cell3.innerHTML = inputAge.value//gán cột một có dữ liệu từ inputAge
    }
}
function selectTedRowInput(){
    for(let i = 1;i<table.rows.length;i++)
    {
        table.rows[i].onclick = function()
        {
            console.dir(table)
            rowIndex = this.rowIndex//trỏ vào thứ tự index thẻ tr
            console.log(rowIndex)
            document.getElementById("Firstname").value = this.cells[0].innerHTML
            document.getElementById("Lastname").value = this.cells[1].innerHTML
            document.getElementById("Age").value = this.cells[2].innerHTML
        }
    }
}
selectTedRowInput()
function editHtmlTedRow()
{
    table.rows[rowIndex].cells[0].innerHTML = inputF.value
    table.rows[rowIndex].cells[1].innerHTML = inputL.value
    table.rows[rowIndex].cells[2].innerHTML = inputAge.value
}
function deleteSelectTedRow()
{
    table.deleteRow(rowIndex)
}

