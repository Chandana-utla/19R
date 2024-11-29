// Firebase Configuration
var firebaseConfig = {
    apiKey: "AIzaSyDHEcml3aP5X8H6iY3qNnjmoIYKE6WZ4Cc",
    authDomain: "profusion-55ee5.firebaseapp.com",
    projectId: "profusion-55ee5",
    storageBucket: "profusion-55ee5.appspot.com",
    messagingSenderId: "705597166854",
    appId: "1:705597166854:web:f714caa1b9141a93353a87"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore and Storage references
var db = firebase.firestore();
var storage = firebase.storage();  // Now it should work because Firebase Storage SDK is loaded

// Function to update user name display
function updateUserName() {
    var nameInput = document.getElementById('creatorName').value;
    var userNameDisplay = document.getElementById('userNameDisplay');
    userNameDisplay.textContent = nameInput || "User";
}

// Function to auto-expand textarea
function autoExpand(field) {
    field.style.height = 'inherit';
    var computed = window.getComputedStyle(field);
    var height =
        parseInt(computed.getPropertyValue('border-top-width'), 10) +
        parseInt(computed.getPropertyValue('padding-top'), 10) +
        field.scrollHeight +
        parseInt(computed.getPropertyValue('padding-bottom'), 10) +
        parseInt(computed.getPropertyValue('border-bottom-width'), 10);
    field.style.height = height + 'px';
}

// Function to upload content (including files)
async function uploadContent() {
    var fileInput = document.getElementById('contentFile');
    var thoughtsInput = document.getElementById('creatorThoughts');
    var creatorNameInput = document.getElementById('creatorName');

    var creatorName = creatorNameInput.value.trim();
    var userThoughts = thoughtsInput.value.trim();
    var file = fileInput.files[0];

    if (!creatorName) {
        alert("Please enter your name!");
        return;
    }

    if (!userThoughts && !file) {
        alert("Please write your thoughts or upload a file!");
        return;
    }

    var fileURL = null;
    var fileName = "No file uploaded";

    if (file) {
        // Upload file to Firebase Storage
        var storageRef = storage.ref('uploads/' + file.name);
        try {
            // Upload the file to Firebase Storage
            var uploadTask = storageRef.put(file);
            uploadTask.on('state_changed', function(snapshot) {
                // Optionally handle progress updates
            }, function(error) {
                console.error("Error uploading file:", error.message);
                alert("Failed to upload file. Please try again.");
                return;
            }, function() {
                // Once the file is uploaded, get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    fileURL = downloadURL;
                    fileName = file.name;
                    saveContentToFirestore(creatorName, userThoughts, fileURL, fileName);
                });
            });
        } catch (error) {
            console.error("Error uploading file:", error.message);
            alert("Failed to upload file. Please try again.");
        }
    } else {
        // If no file, just save the content without file
        saveContentToFirestore(creatorName, userThoughts, null, "No file uploaded");
    }
}

// Function to save content to Firestore
function saveContentToFirestore(creatorName, userThoughts, fileURL, fileName) {
    var contentData = {
        creatorName: creatorName,
        thoughts: userThoughts,
        fileName: fileName,
        fileURL: fileURL,
        timestamp: new Date().toISOString()
    };

    // Save content data to Firestore
    db.collection("contents").add(contentData)
        .then(function() {
            alert("Content uploaded successfully!");
            // Clear form inputs
            document.getElementById('creatorName').value = "";
            document.getElementById('creatorThoughts').value = "";
            document.getElementById('contentFile').value = "";
        })
        .catch(function(error) {
            console.error("Error uploading content:", error.message);
            alert("Failed to upload content. Please try again.");
        });
}
