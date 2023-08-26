// CHAT BOOT MESSENGER////////////////////////

$(document).ready(function () {
  $(".chat_on").click(function () {
    $(".Layout").toggle();
    $(".chat_on").hide(300);

    something();
  });
  $(".chat_close_icon").click(function () {
    $(".Layout").hide();
    $(".chat_on").show(300);
  });
});

$(document).ready(function () {
  $("#enter").click(function () {
    $(".Layout").toggle();
    $(".chat_on").hide(300);

    something();
  });
  $(".chat_close_icon").click(function () {
    $(".Layout").hide();
    $(".chat_on").show(300);
  });
});

var something = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;

      setTimeout(function () {
        var BotResponse1 =
          '<img class="botAvatar" src="static/img/popcorn.png"><p class="botMsg">' +
          "Hello, I am your assistant.<br> I am here to help you in case of any queries " +
          '</p><div class="clearfix"></div>';
        $(BotResponse1).appendTo(".chats").hide().fadeIn(1000);
      }, 1000);

      setTimeout(function () {
        var buttons =
          '<div class="bts"><button type="button" class="btn btn-sm btn-outline-primary btn-rounded waves-effect" id="parents">Parents Section</button>&nbsp;&nbsp;<button type="button" class="btn btn-outline-primary btn-rounded waves-effect btn-sm" id="students">Students Section</button></div>';
        $(buttons).appendTo(".chats").hide().fadeIn(1000);
      }, 2500);

      $(document.body).on("click", "button", function () {
        if (this.id == "parents") {
          var BotResponse =
            '<br><img class="botAvatar" src="static/img/popcorn.png"><p class="botMsg">' +
            "Welcome Mam/Sir. <br> Thapar University Welcomes you <br> Can we get your Email Id please 😃 " +
            '</p><div class="clearfix"></div>';
          $(BotResponse).appendTo(".chats").hide().fadeIn(1000);
        }
        if (this.id == "students") {
          var BotResponse =
            '<br><img class="botAvatar" src="static/img/popcorn.png"><p class="botMsg">' +
            "For Students" +
            '</p><div class="clearfix"></div>';
          $(BotResponse).appendTo(".chats").hide().fadeIn(1000);
          var buttons =
            '<div class="bts"><button type="button" class="btn btn-sm btn-outline-primary btn-rounded waves-effect" id="timetable">TimeTable</button>&nbsp;&nbsp;<button type="button" class="btn btn-outline-primary btn-rounded waves-effect btn-sm" id="webkiosk">Webkiosk</button>&nbsp;&nbsp;<button type="button" class="btn btn-outline-primary btn-rounded waves-effect btn-sm" id="notification">Notifications</button>&nbsp;&nbsp;<button type="button" class="btn btn-outline-primary btn-rounded waves-effect btn-sm" id="extra">Extra</button></div>';
          $(buttons).appendTo(".chats").hide().fadeIn(1000);
        }
      });
    }
  };
})();

function setUserResponse(val) {
  var UserResponse =
    '<img class="userAvatar" src=' +
    "static/img/userAvatar.jpg" +
    '><p class="userMsg">' +
    val +
    ' </p><div class="clearfix"></div>';
  $(UserResponse).appendTo(".chats").show("slow");
  $("#mymessage").val("");
  scrollToBottomOfResults();
}

function scrollToBottomOfResults() {
  var terminalResultsDiv = document.getElementById("chats");
  terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
}

function setBotResponse(val) {
  var BotResponse =
    '<img class="botAvatar" src="static/img/popcorn.png"><p class="botMsg">' +
    val +
    '</p><div class="clearfix"></div>';
  $(BotResponse).appendTo(".chats").hide().fadeIn(1000);
  scrollToBottomOfResults();
}
