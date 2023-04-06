var div = document.createElement("div");
div.classList.add("containerDiv");

var input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("placeholder","Enter Pincode");
input.setAttribute("id", "pin");

var search = document.createElement("button");
search.setAttribute("type", "button");
search.classList.add("btn", "btn-danger");
search.innerHTML = "Search";
search.addEventListener("click", foo);

div.append(input, search);
document.body.append(div);

var table = document.createElement("table");
var trHead = document.createElement("tr");

var th1 = document.createElement("th");
th1.innerHTML = "Location Name";
trHead.appendChild(th1);

var th2 = document.createElement("th");
th2.innerHTML = "BranchType";
trHead.appendChild(th2);

table.appendChild(trHead);
document.body.appendChild(table);

async function foo() {
    try {
        var res = document.getElementById("pin").value;
        var res1 = await fetch(`https://api.postalpincode.in/pincode/${res}`);
        var res2 = await res1.json();
        console.log(res2);

        if (res2 && res2.length > 0) {
            res2[0].PostOffice.forEach(function(PostOffice){
            
                var tr = document.createElement("tr");

                var td1 = document.createElement("td");
                td1.innerHTML = PostOffice.Name;
                tr.appendChild(td1);

                var td2 = document.createElement("td");
                td2.innerHTML = PostOffice.BranchType;
                tr.appendChild(td2);

                table.appendChild(tr);
            });
        }
    } catch(error) {
        console.log(error);
    }
}
