function display(){
    //clear the field
    document.getElementById('pet-name').innerHTML = " ";

    // Display number of pets registered
        document.getElementById('pets').innerHTML=
            `<h4> <b>${salon.pets.length}</b> pets are ready for Fresh Paws!!</h4>
            <h6>Pets currently Registered:</h6>`;
            
    //Travel pet's array & display on html
    for(var i=0;i<salon.pets.length;i++){
        
        document.getElementById('pet-name').innerHTML+=  `<div class="pet">
    <h4>${salon.pets[i].name}</h4>
    <p>Age: ${salon.pets[i].age}</p>
    <p>Breed: ${salon.pets[i].breed}</p>
    <p>Gender: ${salon.pets[i].gender}</p>
    <p>Service: ${salon.pets[i].service}</p>
    <p>Owner: ${salon.pets[i].ownersName}</p>
    <p>Phone: ${salon.pets[i].contactNumber}</p>
    <p>Payment Method: ${salon.pets[i].payment}</p>
    </div>`;
    };
   
    
    
    
    
};

//use the function
display();