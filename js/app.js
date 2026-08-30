const OWNER = "oxanuragofficialprojects";

const CATEGORY_COLORS = {
  "Clone":        ["#3b82f6", "#1e40af"],
  "Animation":    ["#22d3ee", "#0e7490"],
  "CSS Demo":     ["#8b5cf6", "#5b21b6"],
  "UI Component": ["#ec4899", "#9d174d"],
  "Tool":         ["#f59e0b", "#b45309"],
  "Showcase":     ["#10b981", "#065f46"],
  "Reference":    ["#64748b", "#334155"],
};
const CLIENT_COLOR = ["#e0a84e", "#8a5a1e"];

const projects = [
  {name:"youtube-video-grid", cat:"Clone", tags:["HTML","CSS","JS"], desc:"A YouTube-style responsive video grid replicating the platform's card-based browsing layout."},
  {name:"youtube-homepage-clone", cat:"Clone", tags:["HTML","CSS","JS"], desc:"Close recreation of the YouTube homepage — sidebar navigation, top bar and thumbnail grid."},
  {name:"tcs-website-clone", cat:"Clone", tags:["HTML","CSS","JS"], desc:"Front-end clone of the TCS corporate site, focused on matching layout and typography."},
  {name:"responsive-media-query-grid", cat:"CSS Demo", tags:["CSS"], desc:"A breakpoint-driven grid system built purely with media queries to study responsive layout."},
  {name:"professional-profile-card", cat:"UI Component", tags:["HTML","CSS"], desc:"A polished profile card component with avatar, bio and social links."},
  {name:"portfolio-design", cat:"Showcase", tags:["HTML","CSS","JS"], desc:"An early personal portfolio layout exploring hero sections and project showcases."},
  {name:"pinterest-login-clone", cat:"Clone", tags:["HTML","CSS"], desc:"Recreation of Pinterest's login screen, matching its form styling and layout."},
  {name:"periodic-table", cat:"Tool", tags:["HTML","CSS","JS"], desc:"An interactive periodic table of elements with hover detail on every cell."},
  {name:"netflix-landing-clone", cat:"Clone", tags:["HTML","CSS","JS"], desc:"Clone of Netflix's landing hero and signup flow styling."},
  {name:"moving-car-animation", cat:"Animation", tags:["CSS","JS"], desc:"A looping car animation built with CSS keyframes and transforms."},
  {name:"landing-page-design", cat:"Showcase", tags:["HTML","CSS"], desc:"A standalone marketing landing page with hero, features and CTA sections."},
  {name:"instagram-clone", cat:"Clone", tags:["HTML","CSS","JS"], desc:"Front-end recreation of Instagram's feed and profile grid UI."},
  {name:"html-tags-reference", cat:"Reference", tags:["HTML"], desc:"A structured reference page documenting common HTML tags and usage."},
  {name:"html-table-practice", cat:"Reference", tags:["HTML","CSS"], desc:"Practice build exploring table structures, merged cells and styling."},
  {name:"football-bounce-animation", cat:"Animation", tags:["CSS","JS"], desc:"A bouncing football animation using CSS physics-style easing."},
  {name:"district-movie-clone", cat:"Clone", tags:["HTML","CSS","JS"], desc:"Clone of a movie-ticket booking platform's browsing interface."},
  {name:"css-positioning-demo", cat:"CSS Demo", tags:["CSS"], desc:"A visual comparison of static, relative, absolute, fixed and sticky positioning."},
  {name:"css-box-model", cat:"CSS Demo", tags:["CSS"], desc:"An interactive breakdown of the CSS box model — margin, border, padding, content."},
  {name:"css-box-layout-experiment", cat:"CSS Demo", tags:["CSS"], desc:"Experiments in box-based layout composition using flex and grid."},
  {name:"css-animation-basics", cat:"Animation", tags:["CSS"], desc:"Foundational CSS keyframe animation exercises — transforms, easing, timing."},
  {name:"calculator", cat:"Tool", tags:["JavaScript"], desc:"A functional calculator app handling core arithmetic operations."},
  {name:"baseball-bat-animation", cat:"Animation", tags:["CSS","JS"], desc:"A swinging baseball bat animation built with CSS transforms."},
  {name:"apple-website-clone", cat:"Clone", tags:["HTML","CSS","JS"], desc:"Front-end clone of Apple's product page styling and scroll-driven feel."},
  {name:"bharat-webstudio-official", cat:"Showcase", tags:["HTML","CSS","JS"], desc:"Early build of the official Bharat Web Studio business site."},
  {name:"clonefilmwebsite", cat:"Clone", tags:["HTML","CSS","JS"], desc:"Clone of a film/streaming website's browsing layout."},
  {name:"sample", cat:"Reference", tags:["HTML","CSS"], desc:"A sandbox repo used for quick experiments and testing snippets."},
  {name:"cardofuser", cat:"UI Component", tags:["HTML","CSS"], desc:"A user card component displaying avatar, name and key details."},
  {name:"counter", cat:"Tool", tags:["JavaScript"], desc:"A simple counter app demonstrating state and event handling in vanilla JS."},
  {name:"userdetails", cat:"Tool", tags:["HTML","CSS","JS"], desc:"A form-driven app that captures and displays user details with basic validation."},
  {name:"login-page", cat:"UI Component", tags:["HTML","CSS"], desc:"A styled login page UI with input validation states and clean form design."},
  {name:"web-calculator", cat:"Tool", tags:["HTML","CSS","JS"], desc:"A browser calculator UI built with vanilla JS, focused on button layout and interaction."},
  {name:"anurag-kumar-portfolio", cat:"Showcase", tags:["HTML","CSS","JS"], desc:"An earlier iteration of a personal developer portfolio, later rebuilt on the main site."},
  {name:"demo-website-template", cat:"Reference", tags:["HTML","CSS"], desc:"A general-purpose website template repo used as a base for client builds."},
];

const clientProjects = [
  {name:"ss-hair-studio", type:"Hair Salon", desc:"A salon studio website presenting services, styling galleries and booking-style contact sections."},
  {name:"the-cutz-salon-website", type:"Hair Salon", desc:"A booking-oriented salon website built around service listings and clear calls to action."},
  {name:"Perfect-Cutz-Unisex-Hair-Salon", type:"Hair Salon", desc:"A unisex salon site with service pricing, gallery and location details for walk-in and appointment clients."},
  {name:"sparklight-unisexsalon", type:"Hair Salon", desc:"An elegant unisex salon website emphasizing service tiers and a polished visual identity."},
  {name:"bakery-business-website-client", type:"Bakery", desc:"A bakery business website showcasing the menu, story and an ordering-style layout for a local client."},
  {name:"restaurant-website-client", type:"Restaurant", desc:"A restaurant website built around menu presentation, ambience and a reservation-style contact flow."},
  {name:"gym-ecommerce-website-client", type:"Gym & Fitness", desc:"A gym website combining membership plans with an ecommerce-style shop section."},
  {name:"salon-shop-website-client", type:"Salon & Retail", desc:"A hybrid salon-and-shop website pairing service bookings with product listings."},
];

// deterministic short id, purely cosmetic (shown as a "commit hash" tag)
function hashStr(str){
  let h = 2166136261;
  for(let i=0;i<str.length;i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function shortHash(str){ return hashStr(str).toString(16).slice(0,7); }

// pull named projects to the front of a list, in the order given, keep the rest as-is
function prioritize(list, featuredNames){
  const featured = featuredNames.map(n => list.find(p => p.name === n)).filter(Boolean);
  const rest = list.filter(p => !featuredNames.includes(p.name));
  return [...featured, ...rest];
}

function buildCard(p, index){
  const card = document.createElement('div');
  card.className = 'card';
  card.style.animationDelay = (index * 0.03) + 's';
  card.dataset.cat = p.cat;
  card.dataset.name = p.name.toLowerCase();

  const live = `https://${OWNER}.github.io/${p.name}/`;
  const src = `https://github.com/${OWNER}/${p.name}`;
  const hash = shortHash(p.name);

  card.innerHTML = `
    <div class="cover-wrap">
      <img src="images/${p.name}.png" alt="${p.name} screenshot" loading="lazy"
           onerror="this.style.display='none'; this.parentElement.querySelector('.cover-fallback').style.display='flex';">
      <div class="cover-tag">${p.cat}</div>
      <div class="cover-hash">#${hash}</div>
      <div class="cover-fallback">preview unavailable</div>
    </div>
    <div class="card-body">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="card-actions">
        <a class="act-live" href="${live}" target="_blank" rel="noopener">Live Demo</a>
        <a class="act-src" href="${src}" target="_blank" rel="noopener">Source</a>
      </div>
    </div>
  `;

  card.addEventListener('mousemove', (e)=>{
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left)/r.width - 0.5;
    const py = (e.clientY - r.top)/r.height - 0.5;
    card.style.transform = `translateY(-4px) rotateX(${py*-6}deg) rotateY(${px*8}deg)`;
  });
  card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });

  document.getElementById('card-grid').appendChild(card);
}

function buildClientCard(p, index){
  const card = document.createElement('div');
  card.className = 'client-card';
  card.style.animationDelay = (index * 0.06) + 's';

  const live = `https://${OWNER}.github.io/${p.name}/`;
  const src = `https://github.com/${OWNER}/${p.name}`;

  card.innerHTML = `
    <div class="client-cover">
      <img src="images/${p.name}.png" alt="${p.name} screenshot" loading="lazy"
           onerror="this.style.display='none'; this.parentElement.querySelector('.client-fallback').style.display='flex';">
      <div class="client-badge">Live client project</div>
      <div class="client-type">${p.type}</div>
      <div class="client-fallback">preview unavailable</div>
    </div>
    <div class="client-body">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="client-actions">
        <a class="ca-live" href="${live}" target="_blank" rel="noopener">View Live Site</a>
        <a class="ca-src" href="${src}" target="_blank" rel="noopener">Source</a>
      </div>
    </div>
  `;

  document.getElementById('client-grid').appendChild(card);
}

// pin the requested standout projects to the front of each section
const orderedClients = prioritize(clientProjects, ["sparklight-unisexsalon", "gym-ecommerce-website-client"]);
const orderedProjects = prioritize(projects, ["cardofuser"]);

function render(){
  document.getElementById('card-grid').innerHTML = '';
  document.getElementById('client-grid').innerHTML = '';

  orderedClients.forEach((p, i) => buildClientCard(p, i));
  orderedProjects.forEach((p, i) => buildCard(p, i));

  const total = projects.length + clientProjects.length;
  document.getElementById('stat-total').textContent = String(total).padStart(2,'0');
  document.getElementById('stat-client').querySelector('span').textContent = String(clientProjects.length).padStart(2,'0');
  const cats = [...new Set(projects.map(p=>p.cat))];
  document.getElementById('stat-cat').textContent = String(cats.length).padStart(2,'0');

  const filters = document.getElementById('filters');
  filters.innerHTML = `<button class="pill active" data-cat="all">All (${projects.length})</button>` +
    cats.map(c => `<button class="pill" data-cat="${c}">${c} (${projects.filter(p=>p.cat===c).length})</button>`).join('');
}
render();

let activeCat = 'all';
document.getElementById('filters').addEventListener('click', (e)=>{
  const btn = e.target.closest('.pill');
  if(!btn) return;
  activeCat = btn.dataset.cat;
  document.querySelectorAll('.pill').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
});
document.getElementById('search').addEventListener('input', applyFilters);

function applyFilters(){
  const q = document.getElementById('search').value.trim().toLowerCase();
  const cards = document.querySelectorAll('#card-grid .card');
  let visible = 0;
  cards.forEach(c=>{
    const matchCat = activeCat === 'all' || c.dataset.cat === activeCat;
    const matchQ = !q || c.dataset.name.includes(q);
    const show = matchCat && matchQ;
    c.style.display = show ? '' : 'none';
    if(show) visible++;
  });
  document.getElementById('result-count').textContent = `— ${visible} shown`;
  document.getElementById('empty').style.display = visible === 0 ? 'block' : 'none';
}
applyFilters();
