// const skipElement = document.getElementById("skipButton");

// skipElement.addEventListener("click", function() {
//     window.location.href = "index2.html";
// });


// index.html
document.addEventListener('DOMContentLoaded', function() {
    const skipButton = document.getElementById('skipButton');
    if (skipButton) {
        skipButton.addEventListener('click', function() {
            window.location.href = 'index2.html';
        });
    }
});

// index2.html
document.addEventListener('DOMContentLoaded', function() {
    const skipButton2 = document.getElementById('skipButton2');
    if (skipButton2) {
        skipButton2.addEventListener('click', function() {
            window.location.href = 'index3.html';
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
  const clickButton = document.getElementById('clickButton');

  if (clickButton) {
      clickButton.addEventListener('click', function() {
          // Redirect to index3.html when the button is clicked
          window.location.href = 'index3.html';
      });
  }
});


// index3.html
document.addEventListener('DOMContentLoaded', function() {
    const createAccountButton = document.getElementById('createAccountButton');
    if (createAccountButton) {
        createAccountButton.addEventListener('click', function() {
            window.location.href = 'index4.html';
        });
    }
});

// index4.html
document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.getElementById('signInButton');
    if (signInButton) {
        signInButton.addEventListener('click', function() {
            window.location.href = 'index5.html';
        });
    }
});

// index5.html
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form'); 
  const confirmButton = document.getElementById('confirmButton'); 

  if (form && confirmButton) {
      confirmButton.addEventListener('click', function(event) {
          event.preventDefault(); 
          form.dispatchEvent(new Event('submit'));
      });

      form.addEventListener('submit', function(event) {
          event.preventDefault(); 

         
          window.location.href = 'index7.html';
      });
  }
});


// index7.html
document.addEventListener('DOMContentLoaded', function() {
    const plusButton = document.getElementById('plusButton');
    if (plusButton) {
        plusButton.addEventListener('click', function() {
            window.location.href = 'index6.html';
        });
    }
});






 