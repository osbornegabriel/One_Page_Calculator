var calculate;

$(document).ready(function(){
  console.log("I'm in the mainframe!!!!")
  calculate();
})

calculate = function(){
  $('#equation-form').on("submit", function(event){
    event.preventDefault();
    var $form = $(this);
    var formUrl = $form.attr('url');
    var formMethod = $form.attr('method');
    var formData = $form.serialize();

    console.log("The equation was submitted >)")
  })
}