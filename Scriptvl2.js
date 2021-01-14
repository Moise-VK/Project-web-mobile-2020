; (function () {
    'use strict';
    window.addEventListener('load', function () {

        //add novalidate to form
        document.getElementById('vragenlijst_besmetten').setAttribute('novalidate', 'novalidate');

        // intercept document submit
        document.getElementById('vragenlijst_besmetten').addEventListener('submit', function (e) {
            // halt event
            e.preventDefault();
            e.stopPropagation();

            // form checking
            var isValid = true;

            //errormessage variables
            var leeftijd_error = document.getElementById('leeftijd_error');
            var geslacht_error = document.getElementById('geslacht-error');
            var symptomen_error = document.getElementById('symptomen-error');

            //input variables
            var leeftijd = document.getElementById('leeftijd');

            // hide all error messages
			var errMessages = document.querySelectorAll('.error');
			for (var i = 0; i < errMessages.length; i++) {
				errMessages[i].style.display = 'none';
			}

            //check leeftijd
            if (leeftijd.value == '') {
                isValid = false;
                leeftijd_error.style.display = 'block';
            }

            //radio geslacht
            var checked_geslacht = document.querySelectorAll('input[name="gender"]:checked').length;
            if (checked_geslacht < 1) {
                isValid = false;
                geslacht_error.style.display = 'block';
            }

            //radio hoest
            var checked_symptomen_hoest = document.querySelectorAll('input[name="symptomen_hoest"]:checked').length;
            if (checked_symptomen_hoest < 1) {
                isValid = false;
                symptomen_error.style.display = 'block';
            }

            //radio keelpijn
            var checked_symptomen_keelpijn = document.querySelectorAll('input[name="symptomen_keelpijn"]:checked').length;
            if (checked_symptomen_keelpijn < 1) {
                isValid = false;
                symptomen_error.style.display = 'block';
            }

            //radio vermoeidheid
            var checked_symptomen_vermoeidheid = document.querySelectorAll('input[name="symptomen_vermoeidheid"]:checked').length;
            if (checked_symptomen_vermoeidheid < 1) {
                isValid = false;
                symptomen_error.style.display = 'block';
            }

            //radio spierpijn
            var checked_symptomen_spierpijn = document.querySelectorAll('input[name="symptomen_spierpijn"]:checked').length;
            if (checked_symptomen_spierpijn < 1) {
                isValid = false;
                symptomen_error.style.display = 'block';
            }

            //radio hoofdpijn
            var checked_symptomen_hoofdpijn = document.querySelectorAll('input[name="symptomen_hoofdpijn"]:checked').length;
            if (checked_symptomen_hoofdpijn < 1) {
                isValid = false;
                symptomen_error.style.display = 'block';
            }

            //radio diarree
            var checked_symptomen_diarree = document.querySelectorAll('input[name="symptomen_diarree"]:checked').length;
            if (checked_symptomen_diarree < 1) {
                isValid = false;
                symptomen_error.style.display = 'block';
            }

            //radio smaak
            var checked_symptomen_smaak = document.querySelectorAll('input[name="symptomen_smaak"]:checked').length;
            if (checked_symptomen_smaak < 1) {
                isValid = false;
                symptomen_error.style.display = 'block';
            }

            // draw conclusion
			if (isValid) {
                document.getElementById('vragenlijst_besmetten').style.display = 'none';
                document.getElementById('intro').style.display = 'none';
                document.getElementById('thankyou').style.display = 'block';
                
                if (document.getElementById('leeftijd').value > 60){
                    document.getElementById('contact_doctor').style.display = 'block';
                    document.getElementById('thankyou').style.display = 'none';
                }
                if (document.getElementById('ja_hoest').checked || document.getElementById('ja_keelpijn').checked){
                    document.getElementById('contact_doctor').style.display = 'block';
                    document.getElementById('thankyou').style.display = 'none';
                }
			} else {
				// show summary
				window.scrollTo(0, 0);
            }
        });
    })
})();