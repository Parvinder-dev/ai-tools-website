const tools = [
  { name: "ChatGPT", category: "Text", description: "AI for conversations and writing", url: "https://chat.openai.com/" },
  { name: "DALL·E", category: "Image", description: "Generate images from text prompts.", url: "https://openai.com/dall-e" },
  { name: "Copy.ai", category: "Marketing", description: "Blogs, ads, and email writing.", url: "https://www.copy.ai/" },
  { name: "Tome", category: "Productivity", description: "AI presentations tool.", url: "https://tome.app" },
  { name: "Notion AI", category: "Productivity", description: "Smart writing inside Notion.", url: "https://www.notion.so/product/ai" },
  { name: "Runway ML", category: "Video", description: "AI video editing and effects.", url: "https://runwayml.com/" },
  { name: "Looka", category: "Design", description: "Make your logo with AI.", url: "https://looka.com/" },
  { name: "Remove.bg", category: "Image", description: "Remove background instantly.", url: "https://www.remove.bg/" },
  { name: "Jasper", category: "Text", description: "Content writing assistant.", url: "https://www.jasper.ai/" },
  { name: "Descript", category: "Video", description: "Edit video & audio with text.", url: "https://www.descript.com/" },
  { name: "Pictory", category: "Video", description: "Turn blogs into videos.", url: "https://pictory.ai/" },
  { name: "Beautiful.ai", category: "Productivity", description: "Smart slide presentations.", url: "https://www.beautiful.ai/" },
  { name: "Synthesia", category: "Video", description: "AI avatar video creation.", url: "https://www.synthesia.io/" },
  { name: "Midjourney", category: "Image", description: "AI image gen via Discord.", url: "https://www.midjourney.com/" },
  { name: "Durable", category: "Productivity", description: "AI website builder.", url: "https://durable.co/" },
  { name: "Magical", category: "Productivity", description: "Automate browser tasks.", url: "https://www.getmagical.com/" },
  { name: "Cleanup.pictures", category: "Image", description: "Erase unwanted objects.", url: "https://cleanup.pictures/" },
  { name: "Kuki Chatbot", category: "Chatbot", description: "Smart website chatbot.", url: "https://www.kuki.ai/" },
  { name: "Replika", category: "Chatbot", description: "AI emotional companion.", url: "https://replika.com/" },
  { name: "HeyGen", category: "Video", description: "AI avatar for voice videos.", url: "https://www.heygen.com/" }
];

const toolList = document.getElementById("tool-list");
const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filters button");

function showTools(filterCategory = "All", searchText = "") {
  toolList.innerHTML = "";

  const filtered = tools.filter(tool => {
    const matchesCategory = filterCategory === "All" || tool.category === filterCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    toolList.innerHTML = "<p>No tools found.</p>";
  } else {
    filtered.forEach(tool => {
      const toolDiv = document.createElement("div");
      toolDiv.className = `tool ${tool.category.toLowerCase().trim()}`;
      toolDiv.innerHTML = `
        <h2>${tool.name}</h2>
        <p>${tool.description}</p>
        <a href="${tool.url}" target="_blank">Visit</a>
      `;
      toolList.appendChild(toolDiv);
    });
  }
}

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value;
  const activeButton = document.querySelector(".filters button.active");
  const category = activeButton ? activeButton.dataset.category : "All";
  showTools(category, searchText);
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    showTools(button.dataset.category, searchInput.value);
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// Show all tools initially
showTools();