// ===== Simulated "AI" personalization logic =====
// (No API key needed — this mimics AI-generated, user-specific text.
//  If you have an OpenAI key, see the note below to swap this for a real API call.)

const messageTemplates = {
  "web development": [
    "{name}, the web dev world is huge right now — keep building projects and shipping code!",
    "Hey {name}! Web development skills are in high demand. Consider learning React or Vue next."
  ],
  "artificial intelligence": [
    "{name}, AI is transforming every industry. Great time to be learning it!",
    "Hi {name}! Dive deeper into machine learning — it pairs perfectly with your frontend skills."
  ],
  "design": [
    "{name}, great design is what makes users fall in love with a product. Keep sharpening your eye!",
    "Hey {name}! Try exploring Figma and design systems to level up your UI/UX game."
  ],
  "career growth": [
    "{name}, consistency beats intensity. Small daily progress adds up fast!",
    "Hi {name}! Networking and building a portfolio are your best career growth tools right now."
  ]
};

function generateAIMessage(name, interest) {
  const options = messageTemplates[interest] || ["{name}, keep learning and building!"];
  const randomTemplate = options[Math.floor(Math.random() * options.length)];
  return randomTemplate.replace("{name}", name);
}

// ===== Form submit handler =====
document.getElementById("personalizeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("userName").value.trim();
  const interest = document.getElementById("userInterest").value;

  const output = document.getElementById("aiOutput");
  output.classList.remove("d-none");
  output.textContent = "Generating your personalized message...";

  // Simulate a short "AI thinking" delay
  setTimeout(() => {
    const message = generateAIMessage(name, interest);
    output.textContent = message;

    // Save personalization to localStorage so the navbar greeting persists
    localStorage.setItem("aiHelperName", name);
    updateGreeting();
  }, 800);
});

// ===== Personalization logic: greet returning users in the navbar =====
function updateGreeting() {
  const savedName = localStorage.getItem("aiHelperName");
  const greetingEl = document.getElementById("greeting");
  if (savedName) {
    greetingEl.textContent = `👋 Welcome, ${savedName}!`;
  }
}

// Run on page load
updateGreeting();