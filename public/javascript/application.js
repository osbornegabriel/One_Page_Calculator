var calculate;

$(document).ready(function(){
  console.log("I'm in the mainframe!!!!")
  calculate();
})

calculate = function(){
  $('#equation-form').on("submit", function(event){
    event.preventDefault();
    var $form = $(this);
    var formUrl = $form.attr('action');
    var formMethod = $form.attr('method');
    var formData = $form.serialize();
    console.log(formData);
    console.log("bacon")
    $.ajax({
      url: formUrl,
      method: formMethod,
      data: formData
    }).done(function(response){
      console.log("in the response section");
      console.log(response);
    })
    console.log("The equation was submitted >)")
  })
}