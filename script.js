const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp India",
    location: "Mumbai",
    type: "Full Time"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Infosys",
    location: "Pune",
    type: "Full Time"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Bangalore",
    type: "Remote"
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Hyderabad",
    type: "Part Time"
  },
  {
    id: 5,
    title: "Flutter Developer",
    company: "AppWorks",
    location: "Mumbai",
    type: "Full Time"
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "Startup Hub",
    location: "Remote",
    type: "Remote"
  }
];

function displayJobs(jobList) {
  let container = document.getElementById("jobContainer");
  container.innerHTML = "";
  if (jobList.length === 0) {
  container.innerHTML = "<p style='color:gray;'>No jobs found. Try a different search.</p>";
  return;
}

  jobList.forEach((job) => {
    let card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p>🏢 ${job.company}</p>
      <p>📍 ${job.location}</p>
      <p>⏰ ${job.type}</p>
      <button onclick="applyJob(${job.id})">Apply Now</button>
    `;

    container.appendChild(card);
  });
}

displayJobs(jobs);
let searchBtn = document.getElementById("searchBtn");
let searchBar = document.getElementById("searchBar");

searchBtn.addEventListener("click", () => {
  let searchText = searchBar.value.toLowerCase();

  let filteredJobs = jobs.filter((job) => {
    return job.title.toLowerCase().includes(searchText) ||
           job.location.toLowerCase().includes(searchText) ||
           job.company.toLowerCase().includes(searchText);
  });

  displayJobs(filteredJobs);
});
let filterBtns = document.querySelectorAll(".filterBtn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    let type = btn.dataset.type;

    if (type === "All") {
      displayJobs(jobs);
    } else {
      let filtered = jobs.filter((job) => job.type === type);
      displayJobs(filtered);
    }
  });
});
function applyJob(id) {
  let job = jobs.find((j) => j.id === id);

  document.getElementById("modalTitle").textContent = job.title;
  document.getElementById("modalCompany").textContent = "🏢 " + job.company;
  document.getElementById("modalLocation").textContent = "📍 " + job.location;
  document.getElementById("modalType").textContent = "⏰ " + job.type;
  document.getElementById("modal").style.display = "flex";
}

document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

document.getElementById("submitBtn").addEventListener("click", () => {
  let name = document.getElementById("applicantName").value;
  let email = document.getElementById("applicantEmail").value;

  if (name === "" || email === "") {
    alert("Please fill in all fields!");
    return;
  }

  document.getElementById("modal").style.display = "none";
  alert(`Thank you ${name}! Your application has been submitted successfully. We will contact you at ${email}. 🎉`);
});