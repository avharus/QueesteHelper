$("document").ready(function() {
  $("#roll").on('click', function() {
    var n = document.getElementById('sterkte').value;
    var result = 0;
    document.getElementById('dobbelwaarde').value = result;
  });
});
