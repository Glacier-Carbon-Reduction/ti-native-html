var a=document.getElementsByClassName('small-10 columns');
var newDiv = document.createElement('div');
newDiv.innerHTML="support";
a[0].appendChild(newDiv);
newDiv.style.float = 'left';
newDiv.style.position = 'absolute';
newDiv.style.top = '50%';
newDiv.style.left = '40%';
newDiv.style.transform = 'translate(-50%, -50%)';
newDiv.style.fontSize = "14px";

var newDiv1 = document.createElement('div');
newDiv1.innerHTML="Dashboard";
a[0].appendChild(newDiv1);
newDiv1.style.position = 'absolute';
newDiv1.style.top = '70%';
newDiv1.style.left = '15%';
newDiv1.style.transform = 'translate(-50%, -50%)';
newDiv1.style.fontSize = "14px";