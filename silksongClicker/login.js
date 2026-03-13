// ...existing code...
// prefer real origin, but if page is opened via file:// use localhost server
const API_BASE = (window.location.protocol === "file:" || window.location.origin === "null")
  ? "http://localhost:3000"
  : window.location.origin;

async function postJson(path, body) {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return res;
  } catch (err) {
    console.error("Network error:", err);
    throw err;
  }
}

document.getElementById("signUpForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("usernameSign").value.trim();
  const password = document.getElementById("passwordSign").value;
  const res = await postJson("/api/signup", { username, password });
  const data = await res.json();
  if (res.ok) alert("Signed up");
  else alert(data.error || "Sign up failed");
});

document.getElementById("logInForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("usernameLog").value.trim();
  const password = document.getElementById("passwordLog").value;
  const res = await postJson("/api/login", { username, password });
  const data = await res.json();
  if (res.ok) {
    // Store session data
    localStorage.setItem('username', data.username);
    localStorage.setItem('loggedIn', 'true');
    // Redirect to main game
    window.location.href = 'index.html';
  } else {
    alert(data.error || "Login failed");
  }
});
