document.getElementById('subscribe-btn').addEventListener('click', function() {
  
    var email = document.getElementById('email-input').value;
    
    if(email !== '') {
      
        alert('Thanks for subscribing!');
        
        document.getElementById('email-input').value = '';
    } else {
      
        alert('Please enter your email address.');
    }
});
