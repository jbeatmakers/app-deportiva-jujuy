const state = {
  deportes: [],
  query: '',
};

const iconsBySport = {
  fútbol: '⚽',
  futbol: '⚽',
  básquet: '🏀',
  basquet: '🏀',
  rugby: '🏉',
};

const apiStatus = document.querySelector('#apiStatus');
const apiTime = document.querySelector('#apiTime');
const sportsGrid = document.querySelector('#sportsGrid');
const totalSports = document.querySelector('#totalSports');
const totalTeams = document.querySelector('#totalTeams');
const searchInput = document.querySelector('#searchInput');
const emptyState = document.querySelector('#emptyState');

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function getSportIcon(name) {
  return iconsBySport[normalize(name)] || '🏆';
}

function sportMatchesQuery(sport, query) {
  const haystack = normalize([
    sport.deporte,
    sport.liga,
    ...(sport.equipos || []),
  ].join(' '));

  return haystack.includes(normalize(query));
}

function renderSports() {
  const filtered = state.deportes.filter((sport) => sportMatchesQuery(sport, state.query));

  sportsGrid.innerHTML = filtered.map((sport) => `
    <article class="sport-card">
      <div class="sport-card__icon" aria-hidden="true">${getSportIcon(sport.deporte)}</div>
      <h3>${sport.deporte}</h3>
      <p>${sport.liga}</p>
      <ul class="team-list">
        ${(sport.equipos || []).map((team) => `<li>${team}</li>`).join('')}
      </ul>
    </article>
  `).join('');

  emptyState.hidden = filtered.length > 0;
}

function updateMetrics() {
  const teams = state.deportes.reduce((acc, sport) => acc + (sport.equipos || []).length, 0);
  totalSports.textContent = state.deportes.length;
  totalTeams.textContent = teams;
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

async function loadApiStatus() {
  try {
    const health = await fetchJson('/health');
    apiStatus.textContent = health.status === 'OK' ? 'Operativa' : health.status;
    apiTime.textContent = `Última verificación: ${health.timestamp}`;
  } catch (error) {
    apiStatus.textContent = 'Con error';
    apiTime.textContent = error.message;
  }
}

async function loadSports() {
  try {
    const data = await fetchJson('/deportes');
    state.deportes = Array.isArray(data.deportes) ? data.deportes : [];
    updateMetrics();
    renderSports();
  } catch (error) {
    sportsGrid.innerHTML = '';
    emptyState.hidden = false;
    emptyState.querySelector('h3').textContent = 'Error cargando deportes';
    emptyState.querySelector('p').textContent = error.message;
  }
}

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value;
  renderSports();
});

loadApiStatus();
loadSports();
