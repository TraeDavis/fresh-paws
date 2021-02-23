



function submit(){
    var contactName = $('#contact-name');
    var contactEmail = $('#contact-email');
    var contactMessage = $('#contact-message');

        const message = 
`Name: ${contactName.val()}
Email: ${contactEmail.val()}
Message: ${contactMessage.val()}`;

    console.log(message);
    resetForm();
    $('.successfull-submit').fadeIn(1000).fadeOut(4000);
    
    return false;
}



// reset form after submit
function resetForm(){
    document.getElementById('myForm').reset();
}


function initContact(){
    // hide successfull-submit
    $('.successfull-submit').hide();

    // call submit function on submit click
    $('#contact-btn').on('click', submit);

    // make submit button work on enter
    $('textarea').keypress(function(e){
        
        if(e.key==="Enter"){
            submit();
            return false;
        }
    });
    

}

window.onload = initContact();