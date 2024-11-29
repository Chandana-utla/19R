// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHEcml3aP5X8H6iY3qNnjmoIYKE6WZ4Cc",
    authDomain: "profusion-55ee5.firebaseapp.com",
    projectId: "profusion-55ee5",
    storageBucket: "profusion-55ee5.appspot.com",
    messagingSenderId: "705597166854",
    appId: "1:705597166854:web:f714caa1b9141a93353a87"
};

// Initialize Firebase
let fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

// Update User Name Display
function updateUserName() {
    const nameInput = document.getElementById('creatorName').value;
    const userNameDisplay = document.getElementById('userNameDisplay');
    userNameDisplay.textContent = nameInput || "User";
}

// Auto-expand Textarea
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

// Upload Content
async function uploadContent() {
    const fileInput = document.getElementById('contentFile');
    const thoughtsInput = document.getElementById('creatorThoughts');
    const creatorNameInput = document.getElementById('creatorName');

    const creatorName = creatorNameInput.value.trim();
    const userThoughts = thoughtsInput.value.trim();
    const file = fileInput.files[0];

    // Validation
    if (!creatorName) {
        alert("Please enter your name!");
        return;
    }
    if (!userThoughts && !file) {
        alert("Please write your thoughts or upload a file!");
        return;
    }

    let fileURL = null;
    let fileName = "No file uploaded";

    try {
        if (file) {
            fileName = file.name;
            const storageRef = storage.ref(`uploads/${fileName}`);

            // Upload file to Firebase Storage
            const snapshot = await storageRef.put(file);
            fileURL = await snapshot.ref.getDownloadURL();
        }

        // Prepare data to save
        const contentData = {
            creatorName,
            thoughts: userThoughts,
            fileName,
            fileURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };

        // Save data to Firestore
        await db.collection("contents").add(contentData);

        // Reset form fields
        creatorNameInput.value = "";
        thoughtsInput.value = "";
        fileInput.value = "";
        thoughtsInput.style.height = "inherit"; // Reset textarea height

        alert("Content uploaded successfully!");
    } catch (error) {
        console.error("Error uploading content:", error.message);
        alert("Failed to upload content. Please try again.");
    }
}
