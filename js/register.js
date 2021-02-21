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
function displayPrices(){
document.getElementById('prices').innerHTML = 
`<h4>Prices:</h4>
    <p>The “Bath, Brush, and Nail Trim”: <b>${salon.prices.bathBN}</b></p>
    <p>The “Face, Feet, Sanitary (aka Trim Work)”: <b>${salon.prices.faceFS}</b></p>
    <p>The “Full Groom”: <b>${salon.prices.fullGroom}</b></p>`;
}

function displayInfo(){
document.getElementById('first-col').innerHTML = `<p>Hours:<br>
                Monday - Friday<br>
                <b>${salon.hours.open}</b> to <b>${salon.hours.close}</b></p>`;
document.getElementById('mid-col').innerHTML+=`
    
                <p>Address:<br>
                 ${salon.address.street}, ${salon.address.number}<br>
                 ${salon.address.city}, ${salon.address.state}</p>`;
}
 var c = 0;
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
            this.price=0;
            this.id=c++;
        }
    }


    // create pets using the constuctor
    var scooby= new Pets('Scooby', 2,'Dane','Male','Full Groom', 'Shaggy', '555-555-5555', 'cash');
    var scrapy= new Pets('Scrapy', 4,'Mini-Dane','Male','Bath, Brush, and Nail Trim', 'Shaggy', '555-555-5555', "Visa" );
    var speedy= new Pets('Speedy', 10,'Mixed','Male','Face, Feet, Sanitary', 'Bugs', '444-444-4444', 'Bitcoin' );
    var max= new Pets('Max',3,'German Sheppard','Male', 'Full Groom','Andy','123-454-7878', 'Cash');
    var baxter= new Pets('Baxter',1,'Dalmation','Male','Bath, Brush, and Nail Trim','Karen','434-466-1234', 'Mastercard');

    var txtName = document.getElementById('petNameTxt');
        var txtAge = document.getElementById('petAgeTxt');
        var txtBreed = document.getElementById('petBreedTxt');
        var txtGender = document.getElementById('petGenderTxt');
        var txtService = document.getElementById('petServiceTxt');
        var txtOwner = document.getElementById('ownerNameTxt');
        var txtPhone = document.getElementById('ownerPhoneTxt');
        var txtPayment = document.getElementById('paymentTxt');
   
   // create register function
   function register(){
        // pull data from form
        
        

        // create generic construtor
        var thePet = new Pets(txtName.value,txtAge.value,txtBreed.value,txtGender.value,txtService.value,txtOwner.value,txtPhone.value, txtPayment.value);

        //push to pets array
        salon.pets.push(thePet);

        
       // run display function
        display(thePet);

        
        //reset form
        document.getElementById("myForm").reset();
        
   }


 
   function profitCalculation(){
       //create a variable sum and initialize the variable
        var sum = 0;
       //travel the salon.pets[](for)
            for(var i=0;i<salon.pets.length;i++){
                sum= parseInt(salon.pets[i].price) + sum;
            }
       // sum all the prices

    // display the result on the html
            document.getElementById('profit').innerHTML = `<p> profit: $${sum}`
   }

function deletePet(petId){
    
    // travel the array
    for(var i=0; i<salon.pets.length; i++){
        var pet = salon.pets[i];
        // if thePet.id === petId
        if( pet.id == petId ){
            // remove from html
            $('#'+petId).remove();

            // remove from the array
            salon.pets.splice(i, 1);

        
        }
    }
    profitCalculation();
    

    document.getElementById('pets').innerHTML=
            `<h4> <b>${salon.pets.length}</b> pets are ready for Fresh Paws!!</h4>
            <h6>Pets currently Registered:</h6>`;
    
    
}


function search(){
    var searchResult = document.getElementById('selectSearch').value.toLowerCase();
    
    console.log(searchResult);
    
    // hightlight pet that was searched for
    for(var i=0; i<salon.pets.length; i++){     var lowerResult = salon.pets[i].name.toLowerCase();
        
        if( searchResult === lowerResult){
           $('#'+ salon.pets[i].id).addClass('searched');
        }else{
            console.log('That pet is not registered.');
        }
    }

    // reset search box after search
    document.getElementById("mySearch").reset();
}
  
function init(){
    // default
    console.log('Initialization');
    // push pets made using constructor to the pets array
        salon.pets.push(scooby);
        salon.pets.push(scrapy);
        salon.pets.push(speedy);
        salon.pets.push(max);
        salon.pets.push(baxter);
        
        displayInfo();

        displayPrices();

        
        
    // hook
   
}

window.onload = init();


