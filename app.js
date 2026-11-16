const internships = [
  { id: 1, title: "Frontend Developer Intern", company: "TechCorp Solutions", domain: "Engineering", location: "Remote", stipend: "$1,500/mo", description: "Build and optimize responsive user interfaces." },
  { id: 2, title: "UI/UX Design Intern", company: "CreativeStudio", domain: "Design", location: "Hybrid", stipend: "$1,200/mo", description: "Create wireframes and user flows." }
];

const gridEl = document.getElementById('internship-grid');
const searchInput = document.getElementById('search-input');
const domainFilter = document.getElementById('domain-filter');
const emptyStateEl = document.getElementById('empty-state');

function renderInternships(data) {
  gridEl.innerHTML = '';
  
  if (data.length === 0) {
    emptyStateEl.classList.remove('hidden');
    return;
  }
  
  emptyStateEl.classList.add('hidden');

  data.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0; // Makes card keyboard-focusable for accessibility
    
    card.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <div class="company">${item.company} • ${item.location}</div>
        <p>${item.description}</p>
      </div>
      <div>
        <strong>${item.stipend}</strong>
      </div>
    `;
    gridEl.appendChild(card);
  });
}

function filterData() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedDomain = domainFilter.value;

  const filtered = internships.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm) || 
                          item.company.toLowerCase().includes(searchTerm);
    const matchesDomain = selectedDomain === "" || item.domain === selectedDomain;
    
    return matchesSearch && matchesDomain;
  });

  renderInternships(filtered);
}

searchInput.addEventListener('input', filterData);
domainFilter.addEventListener('change', filterData);

// Initial Render
renderInternships(internships);