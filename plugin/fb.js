

  
  chrome.storage.local.get(['key'], function(result) {
      alert(result.key)
    fillforms(result.key);
  });
function fillforms(data){
    
    fillField(document.querySelector('input[name="email"]'), data);
    fillField(document.querySelector('input[name="pass"]'), "123456789");


}

function fillField(selector, value)
{
    var field = selector();
    fillField(field, value);
}


function fillField(field, value){
    if(field){
        field.value = value;
    }  
}
