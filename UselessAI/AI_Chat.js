const replies = [
    "Nice!",
    "Cool, tell me more!",
    "Yep. Or nah. Maybe. ",
    "I'm getting bored...",
    "Hey! What was that?"
];

const suggestions = [
    "Maybe a walk in the park.",
    "Chocolate ice cream!",
    "It's bad. You know it.",
    "Think of something yourself!",
    "100%.",
    "What??"
];

function sendMessage() {
    const input = document.getElementById("chatInput");
    const text = input.value.trim();
    if (text !== "") {
        const messages = document.getElementById("messages");
        const newMessage = document.createElement("div");
        newMessage.classList.add("message", "user");
        newMessage.textContent = text;
        messages.appendChild(newMessage);
        input.value = "";
        messages.scrollTop = messages.scrollHeight; // auto-scroll
    
        // Simulate bot reply after 1.5 seconds
        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.classList.add("message", "other");
            botMessage.textContent = getBotReply(text);
            messages.appendChild(botMessage);
            messages.scrollTop = messages.scrollHeight;
        }, 1500);
        }
}

// Simple bot logic
function getBotReply(userText) {
    const lower = userText.toLowerCase();
    if (lower.includes("hello")) return "Hi there! 😀";
    if (lower.includes("how are you")) return "Nice. In my silicon cupboard.";
    if (lower.includes("bye")) return "Goodbye! 👋";
    if (lower.includes("stupid")) return "Yes. Definitely.";
    if (lower.includes("EASTER EGG")) return "Nope. Nope. Nope. 6-7 6-7 6-7 6-7 6-7 6-7 6-7"
    if (lower.includes("?")) return suggestions[Math.floor(Math.random() * suggestions.length)];
    return replies[Math.floor(Math.random() * replies.length)];
}

// Allow pressing Enter to send
document.getElementById("chatInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
    sendMessage();
    }
});