function display(aPet){
    //clear the field
    // document.getElementById('pet-name').innerHTML = " ";

    

    // Display number of pets registered
        document.getElementById('pets').innerHTML=
            `<h4> <b>${salon.pets.length}</b> pets are ready for Fresh Paws!!</h4>
            <h6>Pets currently Registered:</h6>`;
            
    //Travel pet's array & display on html
    // for(var i=0;i<salon.pets.length;i++){

        //assign a price for each service
    if(aPet.service == 'Bath, Brush, and Nail Trim'){
        aPet.price = 60;
    }else if(aPet.service == "Face, Feet, Sanitary" ){
        aPet.price = 75;
    }else if(aPet.service == "Full Groom" ){
        aPet.price = 100;
    }else{
        aPet.price = '0 No Service was Selected';
    }
        
    var tmp = `<tr id="${aPet.id}">
    <td>${aPet.name}</td>
    <td>${aPet.age}</td>
    <td>${aPet.breed}</td>
    <td>${aPet.gender}</td>
    <td>${aPet.service}</td>
    <td>${aPet.ownersName}</td>
    <td>${aPet.contactNumber}</td>
    <td>$${aPet.price}</td>
    <td>${aPet.payment}</td>
    <td><button class="btn-danger" onclick="deletePet(${aPet.id})">Delete</button></td></tr>
    `;
    
      
    document.getElementById('pet-name').innerHTML += tmp;
   
     //run profit calc
 profitCalculation();
 
};

    
    
$('.mobile-nav').hide();

$('#exit').on('click', function(){
    $('.mobile-nav').fadeOut(500);
});

$('.navbar-toggler').on('click', function(){
    $('.mobile-nav').fadeIn(500);
});

//use the function
display(scooby);
display(scrapy);
display(speedy);
display(max);
display(baxter);

