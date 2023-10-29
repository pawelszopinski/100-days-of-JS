// window.addEventListener("load", (_ev)=> {
//   const statusDisplay = document.getElementById("status");
//   statusDisplay.textContent = navigator.onLine ? "Online" : "Offline"
// })
// window.addEventListener("offline", (ev)=> {
//   const statusDisplay= document.getElementById("status");
//   statusDisplay.textContent = "Offline"
// })
// window.addEventListener("online", (ev)=> {
//   const statusDisplay = document.getElementById("status");
//   statusDisplay.textContent = "Online"
// })

const backgroundEl = document.getElementById("main");
const imageEl = document.getElementById("image");
const statusEl = document.getElementById("status");

function setColor() {
  backgroundEl.classList.add("online");
}

const fetchResults = async () => {
  try {
    const fetchImage = await fetch(
      "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D?time=" +
        new Date().getTime()
    );
    setColor();
    imageEl.src = `https://cdn.icon-icons.com/icons2/2551/PNG/512/status_online_icon_152750.png`;
    statusEl.textContent = "Connection is fine";
    return fetchImage.status >= 200 && fetchImage.status < 300;
  } catch (error) {
    console.log(error);
    statusEl.textContent = "Connection is down";
    imageEl.src = "/connection status/images/7612759.png";
    backgroundEl.classList.remove("online");
  }
};
fetchResults();
setInterval(fetchResults, 5000);
