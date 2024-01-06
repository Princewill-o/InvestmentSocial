var stdNo = 0;
var tbody = doument.getElementById('tbody1');

            function AddItemToTable(name,num,desc){
              let trow = document.createElement("trow");
              let td1 = document.createElement('td');
              let td2 = document.createElement('td');
              let td3 = document.createElement('td');

              td1.innerHTML= ++stdNo;
              td2.innerHTML= name;
              td3.innerHTML= num;
              td4.innerHTML= description;

              trow.appendChild(td1);
              trow.appendChild(td2);
              trow.appendChild(td3);

              tbody.appendChild(trow);

            }

            function AddAllItemsToTable(TheStudent){
              stdNo-0;
              tbody.innerHTML="";
              TheStudent.forEach(element => {
                AddItemToTable(element.NameOfStd,element.RollNo, element.Section element.Gender)
            }
