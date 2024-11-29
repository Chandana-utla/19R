<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-Time Data Upload</title>
</head>
<body>
    <!-- Content Upload Form -->
    <div>
        <label for="creatorName">Your Name:</label>
        <input type="text" id="creatorName" oninput="updateUserName()" placeholder="Enter your name">
    </div>
    <div>
        <label for="creatorThoughts">Your Thoughts:</label>
        <textarea id="creatorThoughts" oninput="autoExpand(this)" placeholder="Write your thoughts..."></textarea>
    </div>
    <div>
        <label for="contentFile">Upload a File (optional):</label>
        <input type="file" id="contentFile">
    </div>
    <button onclick="uploadContent()">Upload</button>

    <div id="userNameDisplay">User</div>

    <hr>

    <!-- Display Uploaded Content -->
    <div id="contentList"></div>

    <!-- Firebase SDK Scripts -->
    <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js"></script>

    <script>
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
        const app = firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
        const storage = firebase.storage();

        // Update displayed name in real-time
        function updateUserName() {
            const nameInput = document.getElementById('creatorName').value;
            const userNameDisplay = document.getElementById('userNameDisplay');
            userNameDisplay.textContent = nameInput || "User";
        }

        // Expand text area automatically as the user types
        function autoExpand(field) {
            field.style.height = 'inherit';
            const computed = window.getComputedStyle(field);
            const height =
                parseInt(computed.getPropertyValue('border-top-width'), 10) +
                parseInt(computed.getPropertyValue('padding-top'), 10) +
                field.scrollHeight +
                parseInt(computed.getPropertyValue('padding-bottom'), 10) +
                parseInt(computed.getPropertyValue('border-bottom-width'), 10);
            field.style.height = height + 'px';
        }

        // Upload content to Firestore and Firebase Storage
        async function uploadContent() {
            const creatorName = document.getElementById('creatorName').value.trim();
            const userThoughts = document.getElementById('creatorThoughts').value.trim();
            const file = document.getElementById('contentFile').files[0];

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

            if (file) {
                try {
                    const storageRef = storage.ref('uploads/' + file.name);
                    const snapshot = await storageRef.put(file);
                    fileURL = await snapshot.ref.getDownloadURL();
                    fileName = file.name;
                } catch (error) {
                    console.error("Error uploading file:", error.message);
                    alert("Failed to upload file. Please try again.");
                    return;
                }
            }

            try {
                await db.collection("contents").add({
                    creatorName,
                    thoughts: userThoughts,
                    fileName,
                    fileURL,
                    timestamp: new Date().toISOString()
                });
                alert("Content uploaded successfully!");
                document.getElementById('creatorName').value = "";
                document.getElementById('creatorThoughts').value = "";
                document.getElementById('contentFile').value = "";
            } catch (error) {
                console.error("Error saving content to Firestore:", error.message);
                alert("Failed to upload content. Please try again.");
            }
        }

        // Real-time listener to display content uploaded by others
        function listenForNewContent() {
            const contentList = document.getElementById('contentList');

            db.collection("contents")
                .orderBy("timestamp", "desc")  // Order by timestamp to get the most recent first
                .onSnapshot(snapshot => {
                    contentList.innerHTML = "";  // Clear current content

                    snapshot.forEach(doc => {
                        const data = doc.data();
                        const contentDiv = document.createElement('div');
                        contentDiv.classList.add('content-item');

                        // Display the creator's name, thoughts, and file if uploaded
                        const creatorName = document.createElement('p');
                        creatorName.textContent = `By: ${data.creatorName}`;
                        contentDiv.appendChild(creatorName);

                        const thoughts = document.createElement('p');
                        thoughts.textContent = data.thoughts;
                        contentDiv.appendChild(thoughts);

                        if (data.fileURL) {
                            const fileLink = document.createElement('a');
                            fileLink.href = data.fileURL;
                            fileLink.textContent = `Download ${data.fileName}`;
                            fileLink.target = "_blank";
                            contentDiv.appendChild(fileLink);
                        }

                        contentList.appendChild(contentDiv);
                    });
                });
        }

        // Call the real-time listener when the page loads
        listenForNewContent();
    </script>
</body>
</html>
