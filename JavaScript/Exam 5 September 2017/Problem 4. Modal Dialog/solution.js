class Dialog
{
    constructor(message, callback)
    {
        this.message = message;
        this.callbackFunc = callback;
        this.$element = null;
        this.inputObj = {};

        this.createElement();
    }

    createElement()
    {
        this.$element = $('<div>').addClass('overlay')
          .append($('<div>').addClass('dialog')
                   .append($('<p>').text(this.message))
                   .append($('<button>').text('OK').click(this.okClick))
                   .append($('<button>').text('Cancel').click(this.removeFromPage)));
    }

    addInput(label, name, type)
    {
        let appendPlace = this.$element.find('.dialog button:first');
        $('<label>').text(label).insertBefore(appendPlace);
        $('<input>').attr('name', name).attr('type', type).insertBefore(appendPlace);
        this.inputObj[name] = 'sad';
    }

    okClick(event)
    {
        let inputs = $(this).parent().find('input');
        inputs.each((index, element) => console.log($(element).val()))
        console.log(that.inputObj);
        $(this).parent().parent().remove();
       // this.inputObj = {};
    }

    render()
    {
        this.$element.appendTo($(document.body));
    }

    removeFromPage(event)
    {
        $(this).parent().parent().remove();
    }


}