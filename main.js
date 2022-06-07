document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    var ele = document.getElementsByName('rate');
        
        for (i = 0; i < ele.length; i++) {
          if (ele[i].checked)
            document.getElementById("result").innerHTML
              =  ele[i].value;
        }
  });
    