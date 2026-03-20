 let fontSize = 16;
        let colors = ["#e6e6e6", "#ffe0e0", "#e0ffe0", "#e0f0ff", "#fff4cc", "#f0e0ff", "#d9e0ff", "#e0ffe6", "#ffe0f0", "#e0f7ff"];
        let colorIndex = 0;

        function changeHeading() {
            let text = document.getElementById("textInput").value;
            if (text.trim() !== "") {
                document.getElementById("heading").textContent = text;
            }
        }

        function changeBackground() {
            colorIndex = (colorIndex + 1) % colors.length;
            document.body.style.background = colors[colorIndex];
        }

        function increaseFont() {
            fontSize += 2;
            document.getElementById("para").style.fontSize = fontSize + "px";
        }

        function toggleParagraph() {
            let p = document.getElementById("para");
            p.style.display = (p.style.display === "none") ? "block" : "none";
        }

        function resetPage() {
            document.getElementById("heading").textContent = "Welcome to JavaScript Lab";
            document.getElementById("textInput").value = "";
            document.body.style.background = "linear-gradient(to bottom, #67adf0, #cfd5e6)";
            fontSize = 16;
            document.getElementById("para").style.fontSize = "16px";
            document.getElementById("para").style.display = "block";
            colorIndex = 0;
        }

        