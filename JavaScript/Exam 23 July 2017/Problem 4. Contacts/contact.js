class Contact {
    constructor(name, lastName, phone, email) {
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
        this.lastSelector;
        this.htmlelement;
    }

    get online() {
        return this.isOnline;
    }

    set online(value) {
        this.isOnline = value;
        if(this.online == true)
        {
            this.makeOnline();
        }
        else
        {
            this.makeOffline();
        }
    }

    render(selectorId) {
        this.lastSelector = selectorId;
        let element = $('<article>');
        element.append($('<div>').addClass('title').text(`${this.name} ${this.lastName}`)
            .append($('<button>').html('&#8505;').click(trigger)));
        element.append($('<div>').addClass('info').css('display', 'none')
            .append($('<span>').html(`&#9742; ${this.phone}`))
            .append($('<span>').html(`&#9993; ${this.email}`))
        );
        this.htmlelement = element.children()[0];
        if(this.online) this.makeOnline();

        element.appendTo($('#' + selectorId));
        function trigger(event) {
            let current = $(this).parent().parent()
            let infoto = $(current).find('.info');
            if (infoto.attr('style') != undefined) {
                $(infoto).removeAttr('style');
            }
            else {
                $(infoto).css('display', 'none');
            }
        }
    }

    makeOnline(){
        $(this.htmlelement).addClass('online');
    }

    makeOffline()
    {
        $(this.htmlelement).removeClass('online');
    }
    emptyField()
    {
        $(this.lastSelector).empty();
    }
    
}

$(document).ready(() => {
    // let contacts = [
    //     new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    //     new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    //     new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    //   ];
    //   contacts.forEach(c => c.render('main'));
      
    //   // After 1 second, change the online status to true
    //   setTimeout(() => contacts[0].online = true, 2000);      

    let contact = new Contact("Ivan", "Petkov", "0929837283", "asdag.bvas@asad");
    contact.online = true;
    contact.render('holder');
});