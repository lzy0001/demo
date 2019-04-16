var btn = document.querySelector("button");
var ps = document.querySelectorAll("p input");
var tTr = document.querySelectorAll("tbody tr");
console.log(tTr);
for (i = 0; i < ps.length; i++) {
    ps[i].placeholder = "请输入";
    ps[i].style.paddingLeft = "5px";
}
var tbody = document.querySelector("tbody");

btn.onclick = function () {
    if (ps[0].value == "" || ps[1].value == "" || ps[2].value == "" || ps[3].value == "") {
        alert("请将数据填入完全");
        return;
    }
    var xinde = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    xinde.appendChild(td1);
    xinde.appendChild(td2);
    xinde.appendChild(td3);
    xinde.appendChild(td4);
    td1.innerText = ps[0].value;
    td2.innerText = ps[1].value;
    td3.innerText = ps[2].value;
    td4.innerText = ps[3].value;

    for (i = 0; i < ps.length; i++) {
        ps[i].value = "";
    }
    var oldchild = tbody.children[0];
    tbody.insertBefore(xinde, oldchild);
}
