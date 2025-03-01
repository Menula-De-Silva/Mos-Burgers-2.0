// Load messages from localStorage
window.onload = function() {
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    const chatBox = document.getElementById('chat-box');
    savedMessages.forEach(message => {
        const messageWrapper = document.createElement('div');
        const timeStamp = message.timeStamp;

        messageWrapper.classList.add('mb-3', 'text-end');

        messageWrapper.innerHTML = `
            <div class="p-3 border rounded bg-secondary text-white d-inline-block">
                <p class="mb-1">${message.text}</p>
            </div>
            <p class="text-light small mt-1">
                Sent at: ${timeStamp} | <i class="fas fa-check-double text-success"></i>
            </p>
        `;

        chatBox.appendChild(messageWrapper);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
};

document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
    if (messageText === '') return;

    const timeStamp = new Date().toLocaleTimeString();
    const newMessage = { text: messageText, timeStamp: timeStamp };

    // Save message to localStorage
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    savedMessages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(savedMessages));

    // Display the message in chat box
    const chatBox = document.getElementById('chat-box');
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('mb-3', 'text-end');
    messageWrapper.innerHTML = `
        <div class="p-3 border rounded bg-secondary text-white d-inline-block">
            <p class="mb-1">${messageText}</p>
        </div>
        <p class="text-light small mt-1">
            Sent at: ${timeStamp} | <i class="fas fa-check-double text-success"></i>
        </p>
    `;
    chatBox.appendChild(messageWrapper);
    chatBox.scrollTop = chatBox.scrollHeight;
    messageInput.value = '';
});