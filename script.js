document.addEventListener('DOMContentLoaded', function() {
    var printButton = document.getElementById('printButton');
    var output = document.getElementById('output');
    var word = 'TechFest';
    var delay = 500; 
  
    function printNextLetter() {
      var index = 0;
  
      function printNextLetter() {
        if (index < word.length) {
          var letter = word[index];
          output.textContent += letter;
          index++;
          setTimeout(printNextLetter, delay);
        } else {
         
          index = 0;
          output.textContent = '';
          setTimeout(printNextLetter, delay);
        }
      }
  
      printNextLetter();
    }
  
  
    printNextLetter();
  
  
    window.addEventListener('scroll', function() {
      if (window.scrollY === 0) {
        printNextLetter();
      }
    });
  
    printButton.addEventListener('click', printNextLetter);
  });
  

 
