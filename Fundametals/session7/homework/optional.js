function addHtmlTalbeRow(){
    let table = document.getElementById('bang')
    var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2)
    let inputstt = document.getElementById('Firstname').value
    let inputname = document.getElementById('Lastname').value
    let inputAge = document.getElementById('Age').value
    console.dir(table)
    cell1.innerHTML = inputstt
    cell2.innerHTML = inputname
    cell3.innerHTML = inputAge

    selectTedRowInput()
}
function selectTedRowInput(){
    let rowIndex,table = document.getElementById('bang')
    for(let i = 1;i<table.rows.length;i++)
    {
        table.rows[i].onclick = function()
        {
            rowIndex = this.rowIndex
            console.log(rowIndex)
        }
    }
}