function display(){
    //clear the field
    document.getElementById('pet-name').innerHTML = " ";

    

    // Display number of pets registered
        document.getElementById('pets').innerHTML=
            `<h4> <b>${salon.pets.length}</b> pets are ready for Fresh Paws!!</h4>
            <h6>Pets currently Registered:</h6>`;
            
    //Travel pet's array & display on html
    for(var i=0;i<salon.pets.length;i++){

        //assign a price for each service
    if(salon.pets[i].service == 'Bath, Brush, and Nail Trim'){
        salon.pets[i].price = 60;
    }else if(salon.pets[i].service == "Face, Feet, Sanitary" ){
        salon.pets[i].price = 75;
    }else if(salon.pets[i].service == "Full Groom" ){
        salon.pets[i].price = 100;
    }else{
        salon.pets[i].price = '0 No Service was Selected';
    }
        
        document.getElementById('pet-name').innerHTML+=  `<div class="pet">
    <h4>${salon.pets[i].name}</h4>
    <p>Age: ${salon.pets[i].age}</p>
    <p>Breed: ${salon.pets[i].breed}</p>
    <p>Gender: ${salon.pets[i].gender}</p>
    <p>Service: ${salon.pets[i].service}</p>
    <p>Owner: ${salon.pets[i].ownersName}</p>
    <p>Phone: ${salon.pets[i].contactNumber}</p>
    <p>Price: $${salon.pets[i].price}</p>
    <p>Payment Method: ${salon.pets[i].payment}</p>
    </div>`;
    //run profit calc
    
};

   profitCalculation();
    
    
};

//use the function
display();

