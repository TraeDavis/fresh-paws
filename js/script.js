const salon = {
    businessName:'Fresh Paws',
    address:{
        street:"Av. University",
        number:"Suite 192",
        city:"city",
        state:"State"
    },
    hours:{
        open:'8:00 am',
        close:'5:00 pm'
    },
    pets:[
        {name:'Scooby',age:2,breed:'Dane',gender:'Male',owner:'Shaggy',phone:'555-555-5555'},
        {name:'Scrapy',age:5,breed:'Dane',gender:'Male',owner:'Shaggy',phone:'555-555-5555'},
        {name:'Speedy Gonzalez',age:50,breed:'Mouse',gender:'Male',owner:'Bugs',phone:'444-444-4444'},
        {name:'Max',age:3,breed:'German Sheppard',gender:'Male',owner:'Andy',phone:'123-454-7878'},
        {name:'Baxter',age:1,breed:'Dalmation',gender:'Male',owner:'Karen',phone:'434-466-1234'},
    ]
        
};

document.getElementById('mid-col').innerHTML+=`
    
    <p>Address:<br>
     ${salon.address.street}, ${salon.address.number}<br>
     ${salon.address.city}, ${salon.address.state}</p>`;





document.getElementById('first-col').innerHTML = `<p>Hours:<br>
                Monday - Friday<br>
                <b>${salon.hours.open}</b> to <b>${salon.hours.close}</b></p>`;

$('.mobile-nav').hide();

$('#exit').on('click', function(){
    $('.mobile-nav').fadeOut(500);
});

$('.navbar-toggler').on('click', function(){
    $('.mobile-nav').fadeIn(500);
});

