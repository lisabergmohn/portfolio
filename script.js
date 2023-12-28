function submitForm(event) {
    event.preventDefault();

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;

    if(fname !== '' && lname !== '' && email !== '' && subject !== '') { 
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
    
        alert('Your message is submitted'); 

        } else {
            alert('Fill out all fields!');
        }

    }

    document.getElementById('contactform').addEventListener('submit', submitForm);
    

