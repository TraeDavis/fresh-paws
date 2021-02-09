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
    pets:[],
    prices:{
        bathBN:'$60',
        faceFS:'$75',
        fullGroom:'$100'
    }
        
};
/*
    name, age, breed, gender, service, owners name, contact number
*/
document.getElementById('prices').innerHTML = 
`<h4>Prices:</h4>
    <p>The “Bath, Brush, and Nail Trim”: <b>${salon.prices.bathBN}</b></p>
    <p>The “Face, Feet, Sanitary (aka Trim Work)”: <b>${salon.prices.faceFS}</b></p>
    <p>The “Full Groom”: <b>${salon.prices.fullGroom}</b></p>`;

document.getElementById('first-col').innerHTML = `<p>Hours:<br>
                Monday - Friday<br>
                <b>${salon.hours.open}</b> to <b>${salon.hours.close}</b></p>`;
document.getElementById('mid-col').innerHTML+=`
    
                <p>Address:<br>
                 ${salon.address.street}, ${salon.address.number}<br>
                 ${salon.address.city}, ${salon.address.state}</p>`;


    // create the pet class
    class Pets{
        constructor(name, age, breed, gender, service, ownersName, contactNumber, payment){
            this.name=name;
            this.age=age;
            this.breed=breed;
            this.gender=gender;
            this.service=service;
            this.ownersName=ownersName;
            this.contactNumber=contactNumber;
            this.payment=payment;
        }
    };


    // create pets using the constuctor
    var scooby= new Pets('Scooby', 2,'Dane','Male','Full service', 'Shaggy', '555-555-5555', 'cash');
    var scrapy= new Pets('Scrapy', 4,'Mini-Dane','Male','Bath', 'Shaggy', '555-555-5555', "Visa" );
    var speedy= new Pets('Speedy', 10,'Mixed','Male','Nail trim', 'Bugs', '444-444-4444', 'Bitcoin' );
    var max= new Pets('Max',3,'German Sheppard','Male', 'Full Groom','Andy','123-454-7878', 'Cash');
    var baxter= new Pets('Baxter',1,'Dalmation','Male','Bath','Karen','434-466-1234', 'Mastercard');

    // push pets made using constructor to the pets array
    salon.pets.push(scooby);
    salon.pets.push(scrapy);
    salon.pets.push(speedy);
    salon.pets.push(max);
    salon.pets.push(baxter);
   
   // create register function
   function register(){
        // pull data from form

        var txtName = document.getElementById('petNameTxt').value;
        var txtAge = document.getElementById('petAgeTxt').value;
        var txtBreed = document.getElementById('petBreedTxt').value;
        var txtGender = document.getElementById('petGenderTxt').value;
        var txtService = document.getElementById('petServiceTxt').value;
        var txtOwner = document.getElementById('ownerNameTxt').value;
        var txtPhone = document.getElementById('ownerPhoneTxt').value;
        var txtPayment = document.getElementById('paymentTxt').value;

        // create generic construtor
        var thePet = new Pets(txtName,txtAge,txtBreed,txtGender,txtService,txtOwner,txtPhone, txtPayment);

        //push to pets array
        salon.pets.push(thePet);

        
       // run display function
        display();

        //reset form
        document.getElementById("myForm").reset();
        
   };


 
   
  
















