function generateQrCode() {
            var url = document.getElementById("text").value.trim();

            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                alert("Please enter a valid URL starting with http:// or https://");
                return;
            }

            var qrcodeElement = document.getElementById("qrcode");
            qrcodeElement.innerHTML = ""; // Clear previous QR code

            var qrcode = new QRCode(qrcodeElement, {
                text: url,
                width: 128,
                height: 128,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
            });

            // Show download button
            document.getElementById("download-btn").style.display = "inline-block";
        }

        function downloadQrCode() {
            var qrCanvas = document.querySelector("#qrcode canvas");

            if (!qrCanvas) {
                alert("Please generate a QR Code first!");
                return;
            }

            var qrImage = qrCanvas.toDataURL("image/png");
            var downloadLink = document.createElement("a");
            downloadLink.href = qrImage;
            downloadLink.download = "qr-code.png";
            downloadLink.click();
        }