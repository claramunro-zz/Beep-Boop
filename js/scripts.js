// business logic

function beep(input) {
  var outputArray = [];
  for (var i = 0; i <= input; i++) {
    if (i % 3 === 0 && i != 0 ) {
      outputArray.push(' I\'M SORRY ' + name + ', I\'M AFRAID I CAN\'T DO THAT ');
    }

    else if (i.toString().match(/1/)) {
      outputArray.push(' B00P ');
    }

    else if (i.toString().match(/0/)) {
      outputArray.push(' BEEP ');
    }

    else {
      outputArray.push('' + i + '');
    }
  }
  return outputArray;
}

// front end logic
$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    name = $('#inputName').val();
    var input = parseInt($('#input').val());
    $('#output').text(beep(input));
  });
});
