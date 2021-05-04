const firstName = document.getElementById("firstInput");
const firstError = document.getElementById("firstError");
var nameInput = document.getElementById("firstName");
const surName = document.getElementById("surnameInput");
const surNameError = document.getElementById("surNameError")
var surNameInput = document.getElementById("surname")
const age = document.getElementById("ageInput");
const ageError = document.getElementById("ageError")
var ageInput = document.getElementById("age")
const currentLevel = document.getElementById("levelInput");
const currentError = document.getElementById("levelError");
var levelInput = document.getElementById("level");
const favoriteClub = document.getElementById("clubInput");
const clubError = document.getElementById("clubError")
var clubInput = document.getElementById("club")
const table = document.querySelector('table');

let data = [];


var obj = {
    name:"",
    surname:"",
    age:"",
    currentLevel:"",
    favoriteClub:""
}

function firstNameValidation() {
        if(firstName.value == "") {
            firstName.style.borderColor = 'red';
            firstError.innerHTML = "Please Enter your First Name";
        } else {
            firstName.style.borderColor = 'green';
            firstError.innerHTML = ""
        } 
        var upperCase = firstName.value;
       
           
obj.name =  upperCase.charAt(0).toUpperCase() + upperCase.slice(1);
        

    }
      
    function surNameValidation() {
        
            if(surName.value == "") {
                surName.style.borderColor = 'red';
                surNameError.innerHTML = "Please Enter your Surname";
            } else {
                surName.style.borderColor = 'green';
                surNameError.innerHTML = ""
            }    
    var surCase = surName.value;

         obj.surname = surCase.charAt(0).toUpperCase() + surCase.slice(1) ;
        }
        function ageValidation() {
                if(age.value == "") {
                    age.style.borderColor = 'red';
                    ageError.innerHTML = "Please Enter your Age";
                } else {
                    age.style.borderColor = 'green';
                    ageError.innerHTML = ""
                }    
        
             obj.age = age.value
            }
            function currentLevelValidation() {
                if(currentLevel.value == "") {
                    currentLevel.style.borderColor = "red";
                    currentError.innerHTML = "Please Enter Your Current Level";
                } else {
                    currentLevel.style.borderColor = "green"
                    currentError.innerHTML = ""
                }
                obj.currentLevel = currentLevel.value;
            }
                
                function favoriteClubValidation() {  
                        if(favoriteClub.value == "") {
                            favoriteClub.style.borderColor = 'red';
                            clubError.innerHTML = "Please Enter your Favorite Club";
                        } else {
                            favoriteClub.style.borderColor = 'green';
                            clubError.innerHTML = ""
                        }    
                var clubCase = favoriteClub.value;
                     obj.favoriteClub = clubCase.charAt(0).toUpperCase() + clubCase.slice(1) ;
                    }   

function clickMe() {
        data.push({...obj, id: Math.random()})
    console.log(data)
    buildTable(data);
}

function buildTable(data) {
    let tempData = [];

    const _init = `
        <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Current Level</th>
            <th>Favorite Club</th>
            <th>Delete</th>
        </tr>
    `;

    const _arr = data.map((item, index) => {
        return `
            <tr>
                <td>${item.name}</td>
                <td>${item.surname}</td>
                <td>${item.age}</td>
                <td>${item.currentLevel}</td>
                <td>${item.favoriteClub}</td>
                <td>
                    <button onClick="remove(${item.id})">delete</button>
                </td>
            </tr>
        `;
    });

    tempData = `${_init}${_arr.join('')}`;
    table.innerHTML = tempData;
}
          

function remove(id) {
    console.log(id);
    const _arr = data.filter(item => item.id !== id);
    data = _arr;
    buildTable(data)
    console.log(data);
}