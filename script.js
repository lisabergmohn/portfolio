function submitForm(event) {
    event.preventDefault();

    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let area = document.getElementById('area').value;

    if(firstname !== '' && lastname !== '' && email !== '' && area !== '') { 
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('area').value = '';
    
        alert('Your message is submitted'); 

        } else {
            alert('Fill out all fields!');
        }

    }

    document.getElementById('contactform').addEventListener('submit', submitForm);
    

