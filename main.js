const { invoke } = window.__TAURI__.tauri;

document.getElementById("execute-button").addEventListener("click", e => {
  invoke("execute", {
    script: document.getElementById("script-input").value
  });
});

document.getElementById("attach-button").addEventListener("click", e => {
  invoke("attach", {
    port: parseInt(document.getElementById("port-input").value || 5553)
  });
});

/*let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});*/
