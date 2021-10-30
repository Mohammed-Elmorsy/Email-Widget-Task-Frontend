window.onload = (event) => {
    document.querySelector('#subscribebox').style.display = "block";
    document.querySelector('.container').style.display = "block";

    document.querySelector('.subscribe-button').addEventListener('click', function() {
        document.querySelector('#subscribebox').style.display = "none";
        document.querySelector('.container').style.display = "none";

        const email = document.querySelector('.subscribe-email').value;
        const data = { email: email};

        fetch('https://dalia-api.herokuapp.com/customers/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });

    }); // end of subcribe button click event 
};

