document.addEventListener("DOMContentLoaded", function () {
  const chatbotBtn = document.getElementById("chatbotBtn");
  const chatbotPopup = document.getElementById("chatbotPopup");
  const closeChatbotBtn = document.getElementById("closeChatbot");
  const chatbotFrame = document.getElementById("chatbotFrame");
  const programCancer = document.getElementById("program-cancer");
  const programDiabetes = document.getElementById("program-diabetes");

  chatbotBtn.addEventListener("click", () => openChatbot());
  closeChatbotBtn.addEventListener("click", closeChatbot);
  programCancer.addEventListener("click", () => openChatbot("cancer"));
  programDiabetes.addEventListener("click", () => openChatbot("diabetes"));

  function openChatbot(program) {
    chatbotPopup.style.display = "block";
    chatbotBtn.style.display = "none";
    chatbotFrame.src = "chatbot.html";

    chatbotFrame.onload = () => {
      chatbotFrame.contentWindow.postMessage(
        {
          type: "INITIALIZE_CHAT",
          program: program,
        },
        "*"
      );
    };
  }
  
  function closeChatbot() {
    chatbotPopup.style.display = "none";
    chatbotBtn.style.display = "flex";
    chatbotFrame.src = "about:blank";
  }

  window.addEventListener("message", function (event) {
    if (event.data.type === "CHATBOT_READY") {
      console.log("Chatbot is ready");
    } else if (event.data.type === "CLOSE_CHATBOT") {
      closeChatbot();
    }
  });
});
