var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

// Insert a row in the table at the last row
var totalRow   = tableRef.insertRow();

// Insert a cell in the row at index 0
var firstCell  = totalRow.insertCell();

firstCell.innerHTML = '<div class = "align">Total Marks</div>'

var x = document.getElementById("myTable").rows.length;
var tableElem = window.document.getElementById('myTable');
var tableBody = tableElem.getElementsByTagName("tbody").item(0);
var i;
function sum()
{
    var result = 0;
    for(i=1;i<(x-1);i++)
    {
      var thisTrElem = tableBody.rows[i];
       var thisTdElem = thisTrElem.cells[1];			
       var thisTextNode = thisTdElem.childNodes.item(0);
       var thisNumber = parseFloat(thisTextNode.data);
       result += thisNumber;
    }
    return result;
}
var secondCell  = totalRow.insertCell();
secondCell.innerHTML = '<div class = "align">'+sum()+'</div>'

// Insert a row in the table at the last row
var averageRow   = tableRef.insertRow();

// Insert a cell in the row at index 0
var thirdCell  = averageRow.insertCell();

thirdCell.innerHTML = '<div class = "align">Average Marks</div>'

var fourthCell  = averageRow.insertCell();
fourthCell.innerHTML = '<div class = "align">'+sum()/(x-2)+'</div>'