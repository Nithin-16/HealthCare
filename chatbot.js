document.addEventListener("DOMContentLoaded", function () {
  const chatbotBtn = document.getElementById("chatbotBtn");
  const loginHelpBtn = document.getElementById("loginHelpBtn");
  const chatbotPopup = document.getElementById("chatbotPopup");
  const closeChatbotBtn = document.getElementById("closeChatbot");
  const chatbotFrame = document.getElementById("chatbotFrame");

  if (loginHelpBtn) {
    loginHelpBtn.addEventListener("click", openChatbot);
  }

  if (chatbotBtn) {
    chatbotBtn.addEventListener("click", openChatbot);
  }

  if (closeChatbotBtn) {
    closeChatbotBtn.addEventListener("click", closeChatbot);
  }

  function openChatbot() {
    if (chatbotPopup && chatbotFrame) {
      chatbotPopup.style.display = "block";
      chatbotBtn.style.display = "none";
      chatbotFrame.src = "chatbot.html";
    }
  }

  function closeChatbot() {
    if (chatbotPopup && chatbotFrame) {
      chatbotPopup.style.display = "none";
      chatbotBtn.style.display = "flex";
      chatbotFrame.src = "about:blank";
    }
  }

  // Optional: Handle messages from chatbot iframe
  window.addEventListener("message", function (event) {
    // Make sure the message is from your chatbot domain
    if (event.origin !== "<CHATBOT_URL>") return;

    console.log("Message received from chatbot:", event.data);
    // You can add custom behavior here based on messages from the chatbot
  });
});
