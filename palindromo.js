document.getElementById("check").addEventListener("click", controllo);

function controllo() {
    var str = document.getElementById("palindromi").value 
    str = str.toLowerCase();
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          alert("Non è palindromo");
          return false;
      }
    }
    alert("È palindromo");
   }
