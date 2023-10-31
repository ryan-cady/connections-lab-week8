document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    // Connect to the socket server
    socket.on('connect', () => {
        console.log('Connected to server');
    });

    // Update background color when 'bkg' message is received
    socket.on('bkg', (data) => {
        console.log("Received 'bkg' event with data:", data);
        document.body.style.backgroundColor = data.bkg;
    });

    // Set up event listener for the button
    const bkgInput = document.getElementById('bkg-color');
    const colorButton = document.getElementById('button-color');
    colorButton.addEventListener('click', () => {
        const colorValue = bkgInput.value.trim();

        // Optional: Validate the color value here

        // Send the color data to the server
        socket.emit('bkg', { bkg: colorValue });
    });
});
