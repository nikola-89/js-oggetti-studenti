$(document).ready(function() {
    $('.msg-input input').focus();
    setTimeout(function() {$('.msg-input input').effect('bounce', 'fast').effect('highlight', 'slow')}, 500);
    $('.msg-input input').keydown(function() {
        if (event.which == 13) {
            if (sendMessage()) {
                setTimeout(function() {
                    incomingMessage();
                }, 1000);
            }
        }
    });
});

// ***************************
// **********function*********
// ***************************

function sendMessage() {
    if ($('.msg-input input').val().trim().length !== 0) {
        let data = new Date();
        let templateMessage = Handlebars.compile($('#message_template').html());
        let message = {
            message_class: 'msg-sent',
            message_text: $('.msg-input input').val(),
            message_h: addZero(data.getHours()) + ':' + addZero(data.getMinutes())
        }
        $('.msg-conversation').append(templateMessage(message)).scrollTop($('.msg-conversation').height());
        $('.msg-input input').val('');
        }
        return true;
    $('.msg-input input').val('');
    return false;
}

function incomingMessage() {
    let data = new Date();
    let templateMessage = Handlebars.compile($('#message_template').html());
    let message = {
        message_class: 'msg-received',
        message_text: '0K',
        message_h: addZero(data.getHours()) + ':' + addZero(data.getMinutes())
    }
    $('.msg-conversation').append(templateMessage(message)).scrollTop($('.msg-conversation').height());
}

function addZero(number) {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}
