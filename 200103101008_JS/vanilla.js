function demoExternalAlert(){
    alert('this is an alert')
}
function demoExternalConfirm(){
    if(confirm('are you sure?')){
        alert('Yes')
        }
    else{
        alert('NO')
        }
}
function demoExternalPrompt(){
    var demo1 = prompt('Enter your first name');
    var demo2 = prompt('Enter your LastName')
    alert(demo1+" "+demo2)
}