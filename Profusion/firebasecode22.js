// Firebase Configuration (Replace these values with your Firebase project settings)
const firebaseConfig = {
    apiKey: "AIzaSyDHEcml3aP5X8H6iY3qNnjmoIYKE6WZ4Cc",
    authDomain: "profusion-55ee5.firebaseapp.com",
    projectId: "profusion-55ee5",
    storageBucket: "profusion-55ee5.appspot.com",
    messagingSenderId: "705597166854",
    appId: "1:705597166854:web:f714caa1b9141a93353a87"
};

// Initialize Firebase (No need for import or export, using the Firebase global object)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Functions to interact with the form
function updateUserName() {
    const nameInput = document.getElementById('creatorName').value;
    const userNameDisplay = document.getElementById('userNameDisplay');
    userNameDisplay.textContent = nameInput || "User";
}

function autoExpand(field) {
    field.style.height = 'inherit';
    const computed = window.getComputedStyle(field);
    const height =
        parseInt(computed.getPropertyValue('border-top-width'), 10) +
        parseInt(computed.getPropertyValue('padding-top'), 10) +
        field.scrollHeight +
        parseInt(computed.getPropertyValue('padding-bottom'), 10) +
        parseInt(computed.getPropertyValue('border-bottom-width'), 10);
    field.style.height = `${height}px`;
}
async function uploadContent() {
    const thoughtsInput = document.getElementById('creatorThoughts');
    const creatorNameInput = document.getElementById('creatorName');
   // const fileInput = document.getElementById('contentFile');

    const creatorName = creatorNameInput.value.trim();
    const userThoughts = thoughtsInput.value.trim();
   // const file = fileInput.files[0];

    if (!creatorName) {
        alert("Please enter your name!");
        return;
    }

    if (!userThoughts ) {
        alert("Please write your thoughts or upload a file!");
        return;
    }

    // let fileName = "No file uploaded";
    // let fileURL = null;

    // if (file) {
    //     // Store the file in the browser's localStorage
    //     const reader = new FileReader();
    //     reader.onload = function (event) {
    //         localStorage.setItem("uploadedFile", JSON.stringify({
    //             fileName: file.name,
    //             fileContent: event.target.result
    //         }));
    //     };
    //     reader.readAsDataURL(file); // Read file as a base64 URL for storage
    //     fileName = file.name;
    //     fileURL = "File stored locally";
    // }

    // Prepare content data without the file
    const contentData = {
        creatorName,
        thoughts: userThoughts,
        // fileName, // Save the file name in Firestore
        // fileURL, // Indicate that the file is stored locally
         timestamp: new Date().toISOString(),
    };

    try {
        // Store other data in Firebase Firestore
        await db.collection("contents").add(contentData);
        
        // Reset form inputs
        creatorNameInput.value = "";
        thoughtsInput.value = "";
        // fileInput.value = "";
        thoughtsInput.style.height = "inherit";
        
        alert("Content uploaded successfully!");
    } catch (error) {
        console.error("Error uploading content:", error.message);
        alert("Failed to upload content. Please try again.");
    }
}
