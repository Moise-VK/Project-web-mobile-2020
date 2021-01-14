;(function(){
    'use strict';
    window.addEventListener('load', function() {

        //Wanneer de persoon wel opreis is gegaan
        var reisbool = false;
        var opreis =  document.getElementById('ja_reis').onclick = function(){
            if (this.checked){
                document.getElementById('wel_opreis').style.display = 'block';
                reisbool = true;
                //Ander vervoersmiddel
                var other = document.getElementById('andere_reis').onclick = function(){
                    if (this.checked){
                        document.getElementById('andere_reis_text').style.display = 'block';
                    }
                    else if (!this.checked){
                        document.getElementById('andere_reis_text').style.display = 'none';
                    }
                }
			}
			else if (!this.checked){
				document.getElementById('wel_opreis').style.display = 'none';
			}
        }

        //Ander vervoersmiddel werk
        var other = document.getElementById('andere').onclick = function(){
            if (this.checked){
                document.getElementById('andere_text').style.display = 'block';
            }
            else if (!this.checked){
                document.getElementById('andere_text').style.display = 'none';
            }
        }

        //Wanneer een persoon een 2de verblijf heeft
        var verblijf2 = false;
        var verblijf = document.getElementById('ja_verblijf').onclick = function(){
            if (this.checked){
                document.getElementById('wel_verblijf').style.display = 'block';
                verblijf2 = true;
			}
			else if (!this.checked){
				document.getElementById('wel_verblijf').style.display = 'none';
			}
        }

        //nieuwe contactpersoon toevoegen bij click op naamveld
        var contactpersonen = document.getElementById('contactpersonen');
        var i = 1;
        var enter = document.createElement("br");
        var enter2 = document.createElement("br");
        var enter3 = document.createElement("br");
        var nieuwe_persoon = document.getElementById('voornaam1').onclick = function(){
            i++;

            var label_naam = document.createElement("label");
            label_naam.setAttribute("for", "voornaam"+ i);
            label_naam.innerHTML = "Voornaam";
            
            var input_naam = document.createElement("input");
            input_naam.setAttribute("type", "text");
            input_naam.setAttribute("id", "voornaam"+ i);
            input_naam.setAttribute("value", "");

            var label_mail = document.createElement("label");
            label_mail.setAttribute("for", "email"+ i);
            label_mail.innerHTML = "E-mailadres";
            
            var input_mail = document.createElement("input");
            input_mail.setAttribute("type", "email");
            input_mail.setAttribute("id", "email"+ i);
            input_mail.setAttribute("value", "");

            var label_nummer= document.createElement("label");
            label_nummer.setAttribute("for", "nummer"+ i);
            label_nummer.innerHTML = "Telefoonnummer (optioneel)";
            
            var input_nummer = document.createElement("input");
            input_nummer.setAttribute("type", "text");
            input_nummer.setAttribute("id", "nummer"+ i);
            input_nummer.setAttribute("value", "");

            contactpersonen.appendChild(document.createElement("br"));
            contactpersonen.appendChild(label_naam);
            contactpersonen.appendChild(input_naam);
            contactpersonen.appendChild(document.createElement("br"));
            contactpersonen.appendChild(label_mail);
            contactpersonen.appendChild(input_mail);
            contactpersonen.appendChild(document.createElement("br"));
            contactpersonen.appendChild(label_nummer);
            contactpersonen.appendChild(input_nummer);
            contactpersonen.appendChild(document.createElement("br"));

            var tweede = document.getElementById('voornaam' + i).onclick = function(){
                nieuwe_persoon();
            }
        }


        //add novalidate to form
        document.getElementById('vragenlijst_besmetten').setAttribute('novalidate', 'novalidate');

        // intercept document submit
		document.getElementById('vragenlijst_besmetten').addEventListener('submit', function(e) {
            // halt event
			e.preventDefault();
			e.stopPropagation();

			// form checking
            var isValid = true;
            
            //errormessage variables
            var leeftijd_error = document.getElementById('leeftijd_error');
            var geslacht_error = document.getElementById('geslacht-error');
            var symptomen_error = document.getElementById('symptomen-error');
            var datum_error = document.getElementById('datum-error');
            var woonplaats_error = document.getElementById('woonplaats-error');
            var verblijf_error1 = document.getElementById('verblijf-error1');
            var verblijf_error2 = document.getElementById('verblijf-error2');
            var werkplaats_error = document.getElementById('werkplaats-error');
            var werk_error = document.getElementById('werk-error');
            var reis_error1 = document.getElementById('reis-error1');
            var reis_error2 = document.getElementById('reis-error2');
            var indoor_error = document.getElementById('indoor-error');

            //input variables
            var leeftijd = document.getElementById('leeftijd');
            var datum = document.getElementById('datum');
            var woonplaats = document.getElementById('woonplaats');
            var gemeente_verblijf = document.getElementById('gemeente_verblijf');
            var straat_verblijf = document.getElementById('straat_verblijf');
            var werkplaats = document.getElementById('werkplaats');
            var gemeente_werk = document.getElementById('gemeente');
            var straat_werk = document.getElementById('straat');
            var land = document.getElementById('land');
            var stad = document.getElementById('stad');

            // hide all error messages
			var errMessages = document.querySelectorAll('.error');
			for (var i = 0; i < errMessages.length; i++) {
				errMessages[i].style.display = 'none';
			}

            //radio geslacht
            var checked_geslacht = document.querySelectorAll('input[name="gender"]:checked').length;
            if(checked_geslacht < 1){
                isValid = false;
                geslacht_error.style.display = 'block';
            }

            //checkboxes symptomen
            var checked_symptomen = document.querySelectorAll('input[name="symptomen"]:checked').length;
            if(checked_symptomen < 1){
                isValid = false;
                symptomen_error.style.display = 'block';
            }

            //checkboxes verblijfplaats
            var checked_verblijfplaats = document.querySelectorAll('input[name="2de_verblijf"]:checked').length;
            if(checked_verblijfplaats != 1){
                isValid = false;
                verblijf_error1.style.display = 'block';
            }

            //checkboxes werk vervoer
            var checked_vervoer = document.querySelectorAll('input[name="vervoer"]:checked').length;
            if(checked_vervoer < 1){
                isValid = false;
                werk_error.style.display = 'block';
            }

            //checkboxes opreis
            var checked_opreis = document.querySelectorAll('input[name="opreis"]:checked').length;
            if(checked_opreis != 1){
                isValid = false;
                reis_error1.style.display = 'block';
            }

            //check leeftijd
            if (leeftijd.value == '') {
				isValid = false;
				leeftijd_error.style.display = 'block';
            }
            //check datum
            if (datum.selectedIndex == '0'){
				isValid= false;
				datum_error.style.display = 'block';
            }
            //check woonplaats
            if (woonplaats.value == ''){
				isValid= false;
				woonplaats_error.style.display = 'block';
            }
            //check 2de verblijf
            if (verblijf2){
                if (gemeente_verblijf.value == '' || straat_verblijf.value == ''){
                    isValid= false;
                    verblijf_error2.style.display = 'block';
                }
            }

            //check werkplaats
            if (werkplaats.value == '' || gemeente_werk.value == '' || straat_werk.value == ''){
                isValid= false;
                werkplaats_error.style.display = 'block';
            }

            //check opreis
            if (reisbool){
                if (land.value == '' || stad.value == ''){
                    isValid= false;
                    reis_error2.style.display = 'block';
                }
            }

            // draw conclusion
			if (isValid) {
                document.getElementById('vragenlijst_besmetten').style.display = 'none';
                document.getElementById('intro').style.display = 'none';
                document.getElementById('thankyou').style.display = 'block';
			} else {
				// show summary
				window.scrollTo(0, 0);
			}
        });
    })
})();