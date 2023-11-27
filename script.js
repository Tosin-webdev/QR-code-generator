const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

// Function to handle form submission
const onGenerateSubmit = (e) => {
// Prevent the default form submission behavior
    e.preventDefault()

     // Clear previous QR code
    document.getElementById("qrcode").innerHTML = "";

     // Retrieve values from the URL and size input fields
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value

     // Check if the URL is empty
    if(url == ""){
        alert("please enter a URL")
    }else {
    // If URL is not empty, generate QR code and trigger download
        generateQRCode(url, size)
        downloadQRCode()
    }
}

// Function to generate QR code
const generateQRCode = (url, size) => {
     // Use the QRCode library to generate a QR code inside the 'qrcode' element
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size
    })
}

const downloadQRCode = () => {
    // Get the download button element by its ID
    const downloadBtn = document.getElementById('downloadBtn');

    // Set the display property of the download button to 'block' (make it visible)
    downloadBtn.style.display = 'block';

    // Add an event listener to the download button
    downloadBtn.addEventListener('click', function() {
        // Get the source URL of the QR code image
        const qrCodeDataUrl = document.querySelector('#qrcode img').src;
        console.log(qrCodeDataUrl);
        // Create a new 'a' (anchor) element
        const a = document.createElement('a');

        // Set the href attribute of the anchor element to the QR code image URL
        a.href = qrCodeDataUrl;

        // Set the download attribute to specify the filename when downloading
        a.download = 'qrcode.png';

        // Simulate a click on the anchor element to trigger the download
        a.click();
    });
};
// Assign the onGenerateSubmit function to the form's submit event
form.addEventListener("submit", onGenerateSubmit);