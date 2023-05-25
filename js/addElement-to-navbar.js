var sa = document.createElement('a');
sa.innerHTML = "Support"
sa.href = "/support"
var sd = document.createElement('div');
sd.appendChild(sa)
sd.className="dashboard-header__name"
var sdd = document.createElement('div');
sdd.className = "small-3 columns"
sdd.appendChild(sd)

var da = document.createElement('a');
da.innerHTML = "Dashboard"
da.href = "/support"
var dd = document.createElement('div');
dd.appendChild(da)
dd.className="dashboard-header__name"
var ddd = document.createElement('div');
ddd.className = "small-3 columns"
ddd.appendChild(dd)

var div1=document.getElementsByClassName('small-10 columns');
div1[0].classList.replace("small-10", "small-4")

var app = document.getElementsByClassName("row collapse")
app[0].appendChild(sdd)
app[0].appendChild(ddd)