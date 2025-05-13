// Generate random room code
function generateRoomCode() {
  const code = Math.floor(100000 + Math.random() * 900000);
  return code.toString().match(/.{1,3}/g).join("-");
}

// Start meeting
function startMeeting() {
  const name = document.getElementById("name").value.trim();
  let room = document.getElementById("room").value.trim();

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  if (!room) {
    room = generateRoomCode();
    document.getElementById("room").value = room;
  }

  const link = `${window.location.origin}/meeting.html?name=${encodeURIComponent(name)}&room=${encodeURIComponent(room)}`;
  document.getElementById("meetingLink").value = link;
  alert("Meeting link created successfully!");
}

// Join meeting
function joinMeeting() {
  const name = document.getElementById("name").value.trim();
  const room = document.getElementById("room").value.trim();

  if (!name || !room) {
    alert("Please enter both name and room code.");
    return;
  }

  const link = `${window.location.origin}/meeting.html?name=${encodeURIComponent(name)}&room=${encodeURIComponent(room)}`;
  window.location.href = link;
}

// Copy link
function copyLink() {
  const linkInput = document.getElementById("meetingLink");
  linkInput.select();
  linkInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Meeting link copied to clipboard!");
}
