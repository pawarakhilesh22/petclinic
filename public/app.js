document
.getElementById('ownerForm')
.addEventListener('submit', async(e)=>{

e.preventDefault();

await fetch('/owners/register',{

method:'POST',

headers:{
'Content-Type':'application/json'
},

body:JSON.stringify({

owner_name:
document.getElementById('owner_name').value,

address:
document.getElementById('address').value,

contact:
document.getElementById('contact').value,

pet_name:
document.getElementById('pet_name').value,

pet_category:
document.getElementById('pet_category').value

})

});

alert('Registration Successful');

loadOwners();

});

async function loadOwners(){

const res = await fetch('/owners');

const data = await res.json();

let rows='';

data.forEach(owner=>{

rows += `
<tr>
<td>${owner.owner_name}</td>
<td>${owner.pet_name}</td>
<td>${owner.pet_category}</td>
<td>${owner.contact}</td>
</tr>
`;

});

document.getElementById('ownersTable').innerHTML = rows;

}

loadOwners();