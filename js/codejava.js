function myFunction() {
  var textarea = document.getElementById("text")
  if (textarea.style.fontWeight == "bold")
    textarea.style.fontWeight = '';
  else
    textarea.style.fontWeight = 'bold';
}

function myitalicFunction() {
  var textarea = document.getElementById("text")
  if (textarea.style.fontStyle == 'italic')
    textarea.style.fontStyle = 'normal';
  else
    textarea.style.fontStyle = 'italic';
}

function myunderlineFunction() {
  var textarea = document.getElementById("text")
  if (textarea.style.textDecoration == 'underline')
    textarea.style.textDecoration = 'none';
  else
    textarea.style.textDecoration = 'underline';
}

var fontSizeDD = document.getElementById('fontSizeDD');
fontSizeDD.onchange = function () {
  var txtBox = document.getElementById("text")
  txtBox.style.fontSize = this.value;
};


function changeFont(font) {
  document.getElementById("text").style.fontFamily = font.value;
}

$(document).ready(function () {

  //jquery code goes here
  $(".course1").hover(function () {
    $("#btn1").toggle();
  });
  $(".course2").hover(function () {
    $("#btn2").toggle();
  });
  $(".course3").hover(function () {
    $("#btn3").toggle();
  });
  $(".course4").hover(function () {
    $("#btn4").toggle();
  });

  $(".course5").hover(function () {
    $("#btn5").toggle();
  });

  $(".course6").hover(function () {
    $("#btn6").toggle();
  });
  $(".course7").hover(function () {
    $("#btn7").toggle();
  });
  $(".course8").hover(function () {
    $("#btn8").toggle();
  });

  $(".course9").hover(function () {
    $("#btn9").toggle();
  });


  //end 
});
$(document).ready(function () {

  $(".coursehome1").hover(function () {
    $("#btnhome1").toggle();
  });

  $(".coursehome2").hover(function () {
    $("#btnhome2").toggle();
  });

  $(".coursehome3").hover(function () {
    $("#btnhome3").toggle();
  });

});

$(document).ready(function () {
  $("#btntest").click(function () {
    $("p").css("color", "red");
  });
});