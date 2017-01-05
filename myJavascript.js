//sample data modified from randomUser.me


var randomGrab;
function getRandom(){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: `https://randomuser.me/api/`
    })
    .done(function(data, textStatus, XHR){
      resolve(data);
      console.log(data);
    })
  })
}
getRandom()
.then(function(value){
//handlebars step one: grap the html from the script tag
var entryHTML = $("#random-user").html();

//handlebars step two: compile it into a template
var entryTemplate = Handlebars.compile(entryHTML);

//handlebars step three:render the HTML by passing the data to the template
var entryOutput = entryTemplate(value);
console.log(entryOutput);

//handlebars step four: put the complete HTML into the DOM
$("#output").append(entryOutput);

})
