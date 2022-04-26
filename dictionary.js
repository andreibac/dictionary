<!-- Option 2: Separate Popper and Bootstrap JS -->
    
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    
<script>
var dictionary = [" "];
    
function addWord() {
	var word1 = document.getElementById("add").value;
	dictionary.push(word1);
}

function searchWord() {
  var word2 = document.getElementById("search").value;
  var found = 0;
  for (var i = 0; i < dictionary.length; ++i) {
    if (word2.match(dictionary[i])) {
    	found = 1;				
    } 
  }

  if (found == 1) {
  	alert("Word \"" + word2 + "\" already exists in dictionary");
  } else {
  	alert("Word \"" + word2 + "\" is not in dictionary");
  }
  return false;
}
</script>
