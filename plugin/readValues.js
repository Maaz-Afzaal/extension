var a=document.getElementsByClassName("accountButton")

for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function() {
        setTimeout(()=>{
            var valueToRead=document.getElementById("valueToRead");
            chrome.storage.local.set({key: valueToRead.value}, function() {
                console.log("value set to",valueToRead.value)
            });
        },1000)
        
     });
  }

