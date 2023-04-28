const firebaseConfig = {
    apiKey: "AIzaSyAZ5HpQfyUYHP39oOK_u2LcclkSgCv5kVM",
    authDomain: "pantry-database.firebaseapp.com",
    projectId: "pantry-database",
    storageBucket: "pantry-database.appspot.com",
    messagingSenderId: "884071730946",
    appId: "1:884071730946:web:5dae4c2230f21649bf3c1b",
    measurementId: "G-ERB946X61X"
  };

firebase.initializeApp(firebaseConfig);


document.getElementById('application-form').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();

    var pantryname = document.getElementById('pantryname');
    var chefname = document.getElementById('chefname');
    var email = document.getElementById('email');
    var bio = document.getElementById('bio');
    var sociallinks = document.getElementById('sociallinks');
    var submit = document.getElementById('submit');
    console.log("values: ", pantryname.value, chefname.value, email.value, bio.value, sociallinks.value);

    // Save data to Firebase firestore
    savePantry(pantryname.value, chefname.value, email.value, bio.value, sociallinks.value);

    // Clear form
    document.getElementById('application-form').reset();
  }

    // Save data to Firebase firestore
    function savePantry(pantryname, chefname, email, bio, sociallinks) {
        var newPantryRef = firebase.firestore().collection('chefApplication').doc();
        newPantryRef.set({
            pantryname: pantryname,
            chefname: chef-name,
            email: email,
            bio: bio,
            sociallinks: sociallinks
        }).then(function() {
            console.log("Document successfully written!");
        }
        ).catch(function(error) {
            console.error("Error writing document: ", error);
        }
        );
    }