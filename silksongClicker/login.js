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
  if (res.ok) {
    alert("Signed up");
    if (data.ok) {
      localStorage.setItem("username", data.username);
      window.location.href = "index.html"
    }
  }
  else alert(data.error || "Sign up failed");
});

document.getElementById("logInForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("usernameLog").value.trim();
  const password = document.getElementById("passwordLog").value;
  const res = await postJson("/api/login", { username, password });
  const data = await res.json();
  if (res.ok) {
    alert("Logged in");
    if (data.ok) {
      localStorage.setItem("username", data.username);
      window.location.href = "index.html"
    }
  } else alert(data.error || "Login failed");
});
