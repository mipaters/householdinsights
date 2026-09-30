const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  nodes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M10.8 7.2 6.2 15.8M13.2 7.2l4.6 8.6M7.5 18h9"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.5a3.5 3.5 0 0 0-1 6.85A3.5 3.5 0 0 0 9.5 20V4.5ZM14.5 4.5A3.5 3.5 0 0 1 18 8v.5a3.5 3.5 0 0 1 1 6.85A3.5 3.5 0 0 1 14.5 20V4.5ZM9.5 9H7m7.5 2H17m-7.5 4H7.5m7-7H17"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3 1.45 4.55L18 9l-4.55 1.45L12 15l-1.45-4.55L6 9l4.55-1.45L12 3Z"/><path d="m19 15 .75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75L19 15ZM5 13l.65 1.85L7.5 15.5l-1.85.65L5 18l-.65-1.85-1.85-.65 1.85-.65L5 13Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3 4.5 6v5.5c0 4.6 3.15 7.8 7.5 9.5 4.35-1.7 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="M12 8v4m0 3h.01"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/><path d="m15 9 5-5m0 0v4m0-4h-4"/></svg>',
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 8h18c0-1-3-1-3-8ZM10 21h4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20M9 10.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 4.5a3 3 0 0 1 0 5.8M22 20v-1.5a4 4 0 0 0-3-3.87"/></svg>',
  dollar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M15 8.5c-.7-.7-1.7-1-3-1-1.7 0-3 1-3 2.3 0 3.4 6 1.4 6 4.6 0 1.3-1.3 2.3-3 2.3-1.3 0-2.5-.4-3.3-1.2M12 5.5v13"/></svg>',
  trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m3 11 9-8 9 8v9H3v-9Z"/><path d="M9 20v-6h6v6"/></svg>',
  person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 9a13 13 0 0 1 16 0M7 12.5a8 8 0 0 1 10 0M10 16a3 3 0 0 1 4 0"/><circle cx="12" cy="19" r=".7" fill="currentColor"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 5h4m-3 14h2"/></svg>',
  tv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="13" rx="2"/><path d="m9 22 3-4 3 4M9 2l3 3 3-3"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg>',
  ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 7h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4V7Z"/><path d="M13 7v2m0 2v2m0 2v2m0 2v-2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M7 18h11a4 4 0 0 0 .4-7.98A6.5 6.5 0 0 0 6 8.5V9a4.5 4.5 0 0 0 1 9Z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/></svg>',
};

const households = {
  thompson: {
    name: "The Thompson Family",
    short: "Thompson",
    initials: "TF",
    members: 4,
    location: "Toronto, ON",
    value: "$8,420",
    arpu: "$287",
    ltv: "$24.8K",
    upsell: "$1,860",
    confidence: "96%",
    tags: ["3 Wireless lines", "Ignite Internet", "Sportsnet+", "Blue Jays", "Rogers Mastercard"],
  },
  garcia: {
    name: "The Garcia Family",
    short: "Garcia",
    initials: "GF",
    members: 2,
    location: "Mississauga, ON",
    value: "$4,180",
    arpu: "$168",
    ltv: "$14.2K",
    upsell: "$1,240",
    confidence: "93%",
    tags: ["2 Wireless lines", "Ignite Internet", "High sports intent", "Ticket browsing"],
  },
};

const opportunityData = [
  { type: "SPORTS & ENTERTAINMENT", icon: "tv", title: "Sportsnet Premium Expansion", text: "Weekly Blue Jays viewing and high post-game engagement indicate strong premium sports intent.", revenue: "$479 / yr", confidence: "94%", score: 96, color: "#e51b23" },
  { type: "TELECOM", icon: "phone", title: "Family Roaming Package", text: "Three lines show recurring travel usage and $186 in out-of-plan roaming fees this year.", revenue: "$540 / yr", confidence: "91%", score: 92, color: "#6898ff" },
  { type: "HOME SERVICES", icon: "home", title: "Smart Home Security", text: "Homeowner profile, multiple connected devices and high digital engagement suggest product fit.", revenue: "$720 / yr", confidence: "87%", score: 88, color: "#a67cff" },
  { type: "MEMBERSHIP", icon: "ticket", title: "MLSE Membership", text: "Frequent Leafs and Raptors content consumption with repeat ticket browsing across the household.", revenue: "$1,120 / yr", confidence: "83%", score: 85, color: "#f5ad48" },
  { type: "ENTERTAINMENT", icon: "spark", title: "Family Streaming Bundle", text: "Four distinct content profiles and fragmented third-party subscriptions create bundle potential.", revenue: "$288 / yr", confidence: "89%", score: 89, color: "#45d29d" },
  { type: "FINANCIAL", icon: "card", title: "Additional Cardholder", text: "Strong Rogers Mastercard utilization with a second qualified adult household member.", revenue: "$340 / yr", confidence: "86%", score: 84, color: "#62d8ca" },
];

const churnData = [
  { title: "The Morgan Household", text: "Three service-quality contacts in 14 days and a 22% usage decline on two wireless lines.", impact: "$9,840 LTV", confidence: "92%", score: 88, color: "#f5ad48" },
  { title: "The Patel Household", text: "Negative billing sentiment detected following a promotional rate expiry across bundled services.", impact: "$7,210 LTV", confidence: "89%", score: 82, color: "#f5ad48" },
  { title: "The Wilson Household", text: "Primary account holder viewed competitor offers after recent internet performance degradation.", impact: "$6,440 LTV", confidence: "84%", score: 76, color: "#ff7a45" },
];

const experienceData = [
  { category: "SPORTS", title: "Blue Jays All-Access Household Pass", text: "Personalized access package with preferred seating, Sportsnet Premium and exclusive family experiences.", value: "$84 / mo", acceptance: "72%", color: "#e51b23" },
  { category: "TELECOM", title: "Connected Family Upgrade", text: "Upgrade two eligible devices and add Canada–U.S. roaming across all household lines.", value: "$56 / mo", acceptance: "68%", color: "#6898ff" },
  { category: "ENTERTAINMENT", title: "Family Streaming Collection", text: "One curated bundle matched to four household viewing profiles with a single Rogers bill.", value: "$24 / mo", acceptance: "76%", color: "#a67cff" },
  { category: "FINANCIAL", title: "Rogers Mastercard Accelerator", text: "Enhanced cash back across Rogers services plus a qualified supplementary cardholder offer.", value: "$410 / yr", acceptance: "64%", color: "#45d29d" },
  { category: "HOME", title: "Smart Home Confidence", text: "Camera, sensor and monitoring package personalized to the Thompson connected-home footprint.", value: "$49 / mo", acceptance: "61%", color: "#f5ad48" },
  { category: "LOYALTY", title: "Household Rewards Booster", text: "Aggregate household activity into one loyalty experience with milestone-based benefits.", value: "$320 / yr", acceptance: "79%", color: "#62d8ca" },
];

function icon(name) {
  return icons[name] || icons.spark;
}

function renderAllIcons() {
  document.querySelectorAll("[data-icon]").forEach((element) => {
    element.innerHTML = icon(element.dataset.icon);
  });
}

function pageIntro(title, copy, withSelect = false) {
  return `
    <div class="page-intro">
      <div><h2>${title}</h2><p>${copy}</p></div>
      ${withSelect ? `
        <div class="select-wrap">
          <label>ACTIVE HOUSEHOLD</label>
          <select class="household-select">
            <option value="thompson">The Thompson Family</option>
            <option value="garcia">The Garcia Family</option>
          </select>
        </div>` : ""}
    </div>`;
}

function metric(label, value, trend, iconName, color = "#e51b23", down = false) {
  return `<div class="metric-card" style="--card-glow:${color}">
    <span>${label}</span><strong>${value}</strong>
    <div class="metric-trend ${down ? "down" : ""}">${trend}</div>
    <div class="metric-icon">${icon(iconName)}</div>
  </div>`;
}

function renderDashboard() {
  document.getElementById("dashboardPage").innerHTML = `
    ${pageIntro("Good morning, Jennifer.", "The Household Insights Agent is actively monitoring 2.4 million households and has identified $184M in new annualized revenue potential.")}
    <div class="metric-grid">
      ${metric("TOTAL HOUSEHOLDS", "2.41M", "↑ 3.2% vs last quarter", "users")}
      ${metric("HOUSEHOLD VALUE", "$18.7B", "↑ 7.8% annualized", "dollar", "#45d29d")}
      ${metric("CHURN RISK", "18,240", "↓ 4.1% vs last month", "shield", "#f5ad48", true)}
      ${metric("GROWTH OPPORTUNITIES", "486K", "↑ 12.4% discovered", "trend", "#a67cff")}
      ${metric("ACTIVE RECOMMENDATIONS", "1.2M", "↑ 18.6% activation", "spark", "#6898ff")}
      ${metric("REVENUE PIPELINE", "$184M", "↑ $22M this quarter", "bolt", "#e51b23")}
    </div>
    <div class="dashboard-grid">
      <div class="panel">
        <div class="panel-header">
          <div><h3 class="panel-title">Household Value Growth</h3><span class="panel-subtitle">Total managed household value · trailing 12 months</span></div>
          <button class="panel-action" data-navigate="intelligence">VIEW INSIGHTS →</button>
        </div>
        <div class="chart">
          <div class="chart-value">$18.7B</div>
          <svg viewBox="0 0 800 205" preserveAspectRatio="none">
            <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e51b23" stop-opacity=".25"/><stop offset="1" stop-color="#e51b23" stop-opacity="0"/></linearGradient></defs>
            <path d="M0 174 C50 168 72 160 116 162 S182 148 228 146 S292 130 330 137 S400 106 443 112 S498 92 548 91 S620 62 661 69 S730 36 800 31 L800 205 L0 205Z" fill="url(#chartFill)"/>
            <path d="M0 174 C50 168 72 160 116 162 S182 148 228 146 S292 130 330 137 S400 106 443 112 S498 92 548 91 S620 62 661 69 S730 36 800 31" fill="none" stroke="#ed3038" stroke-width="2.5"/>
            <circle cx="800" cy="31" r="4" fill="#ff4b52"/><circle cx="800" cy="31" r="9" fill="#e51b23" opacity=".15"/>
          </svg>
        </div>
        <div class="chart-labels"><span>OCT</span><span>DEC</span><span>FEB</span><span>APR</span><span>JUN</span><span>AUG</span><span>SEP</span></div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div><h3 class="panel-title">Opportunity Pipeline</h3><span class="panel-subtitle">$184M total annualized potential</span></div>
          <button class="panel-action" data-navigate="opportunities">EXPLORE →</button>
        </div>
        <div class="pipeline-list">
          ${[
            ["Wireless expansion", 82, "$52.4M"], ["Sports & entertainment", 70, "$44.7M"],
            ["Home services", 55, "$35.1M"], ["Financial services", 45, "$28.8M"],
            ["Loyalty & partners", 36, "$23.0M"]
          ].map(([name, width, val]) => `<div class="pipeline-row"><span>${name}</span><div class="progress-track"><i style="width:${width}%"></i></div><strong>${val}</strong></div>`).join("")}
        </div>
      </div>
    </div>
    <div class="lower-grid">
      <div class="panel">
        <div class="panel-header"><div><h3 class="panel-title">Household Segmentation</h3><span class="panel-subtitle">By lifetime value tier</span></div></div>
        <div class="donut-layout">
          <div class="donut"></div>
          <div class="legend">
            ${[["High value", "#e51b23", "42%"], ["Growth", "#a67cff", "25%"], ["Core", "#6898ff", "19%"], ["Emerging", "#353943", "14%"]].map(([n,c,v]) => `<div class="legend-row"><span><i style="background:${c}"></i>${n}</span><b>${v}</b></div>`).join("")}
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><div><h3 class="panel-title">Top Agent Discoveries</h3><span class="panel-subtitle">Highest-value signals today</span></div></div>
        <div class="opportunity-mini">
          ${[
            ["tv", "Sports fans without premium", "18.4K households", "$12.8M"],
            ["phone", "Family roaming candidates", "24.1K households", "$9.4M"],
            ["card", "Bank cross-sell ready", "11.7K households", "$7.2M"]
          ].map(([ic,n,s,v]) => `<div class="opportunity-mini-row"><span class="mini-icon">${icon(ic)}</span><div><strong>${n}</strong><small>${s}</small></div><b>${v}</b></div>`).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><div><h3 class="panel-title">Live Agent Activity</h3><span class="panel-subtitle">Continuous household intelligence</span></div><span class="feed-header-status"><i></i> LIVE</span></div>
        <div class="activity-mini">
          ${[
            ["link", "Identity Agent", "Linked 4,208 new household relationships", "12 sec ago"],
            ["spark", "Opportunity Agent", "Discovered $420K in revenue potential", "38 sec ago"],
            ["shield", "Retention Agent", "Flagged 84 spreading churn signals", "1 min ago"]
          ].map(([ic,n,s,t]) => `<div class="activity-mini-row"><span class="mini-icon">${icon(ic)}</span><div><strong>${n} · ${s}</strong><small>${t}</small></div></div>`).join("")}
        </div>
      </div>
    </div>
    <div class="outcome-strip">
      <div class="outcomes">
        ${[["+15%", "Cross-Sell Conversion"], ["+12%", "Household ARPU"], ["−20%", "Household Churn"], ["+18%", "Sports Revenue"], ["+22%", "Offer Acceptance"]].map(([v,l]) => `<div class="outcome"><strong>${v}</strong><span>${l}</span><small>ILLUSTRATIVE DEMO METRIC</small></div>`).join("")}
      </div>
    </div>`;
}

function graphNodes() {
  const nodes = [
    ["household", "home", "Thompson", "HOUSEHOLD", 350, 260],
    ["member", "person", "Sarah", "PRIMARY", 185, 105],
    ["member", "person", "Mark", "MEMBER", 500, 95],
    ["member", "person", "Emma", "MEMBER", 135, 305],
    ["member", "person", "Jake", "MEMBER", 550, 320],
    ["service", "wifi", "Ignite Internet", "SERVICE", 310, 445],
    ["service", "phone", "3 Wireless Lines", "SERVICE", 435, 445],
    ["sports", "tv", "Sportsnet+", "SPORTS", 630, 175],
    ["sports", "ticket", "Blue Jays", "TICKETS", 665, 390],
    ["financial", "card", "Mastercard", "DISCOVERED", 65, 155],
  ];
  return nodes.map(([type, ic, label, sub, x, y], index) =>
    `<button class="node ${type} ${index === 0 ? "selected" : ""}" data-node="${label}" style="left:${x}px;top:${y}px">
      <span class="node-bubble">${icon(ic)}</span><span>${label}</span><small>${sub}</small>
    </button>${sub === "DISCOVERED" ? `<i class="discovery-ring" style="left:${x}px;top:${y}px"></i>` : ""}`
  ).join("");
}

function renderGraph() {
  document.getElementById("graphPage").innerHTML = `
    ${pageIntro("Household Graph Explorer", "Explore the identity connections, services, devices and affinity signals that form a complete household understanding.", true)}
    <div class="graph-layout">
      <div class="panel graph-canvas">
        <div class="graph-toolbar">
          <div class="graph-mode"><button class="active">RELATIONSHIPS</button><button>SIGNALS</button><button>VALUE</button></div>
          <div class="zoom-tools"><button id="zoomOut">−</button><button id="zoomIn">+</button></div>
        </div>
        <div class="network" id="network">
          <svg class="network-lines" viewBox="0 0 700 530">
            <line class="hot" x1="350" y1="260" x2="185" y2="105"/><line x1="350" y1="260" x2="500" y2="95"/>
            <line x1="350" y1="260" x2="135" y2="305"/><line x1="350" y1="260" x2="550" y2="320"/>
            <line x1="350" y1="260" x2="310" y2="445"/><line x1="350" y1="260" x2="435" y2="445"/>
            <line x1="350" y1="260" x2="630" y2="175"/><line x1="350" y1="260" x2="665" y2="390"/>
            <path class="hot" d="M185 105 C125 95,95 115,65 155"/><line x1="630" y1="175" x2="665" y2="390"/>
            <line x1="185" y1="105" x2="310" y2="445"/><line x1="500" y1="95" x2="435" y2="445"/>
          </svg>
          ${graphNodes()}
        </div>
      </div>
      <div class="panel detail-panel" id="nodeDetail">
        ${householdDetail(households.thompson)}
      </div>
    </div>`;
}

function householdDetail(h) {
  return `<div class="detail-hero"><div class="detail-avatar">${h.initials}</div><h3>${h.name}</h3><p>${h.members} members · ${h.location}</p><span class="confidence">${h.confidence} identity confidence</span></div>
    <div class="detail-section"><h4>HOUSEHOLD VALUE</h4><div class="detail-row"><span>Annual value</span><b>${h.value}</b></div><div class="detail-row"><span>Monthly ARPU</span><b>${h.arpu}</b></div><div class="detail-row"><span>Predicted LTV</span><b>${h.ltv}</b></div></div>
    <div class="detail-section"><h4>CONNECTED RELATIONSHIPS</h4><div class="tag-list">${h.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div></div>
    <div class="detail-section"><h4>AGENT INSIGHT</h4><p style="color:var(--muted);font-size:9px;line-height:1.6;margin:0">A shared address and recurring payment relationship linked Sarah's Rogers Mastercard to the wireless household with 96% confidence.</p></div>
    <button class="primary-button" style="width:100%;margin-top:16px" data-navigate="intelligence">OPEN INTELLIGENCE CENTER</button>`;
}

function renderIntelligence(h = households.thompson) {
  document.getElementById("intelligencePage").innerHTML = `
    ${pageIntro("Household Intelligence Center", "A unified, continuously updated intelligence profile spanning identity, engagement, behavior and financial value.", true)}
    <div class="intelligence-hero">
      <div class="panel household-summary">
        <div class="family-avatar">${h.initials}</div>
        <div><h2>${h.name}</h2><p>${h.members} members · ${h.location} · Established 2017</p><div class="tag-list">${h.tags.slice(0,4).map(t => `<span class="tag">${t}</span>`).join("")}</div></div>
      </div>
      <div class="panel" style="display:grid;grid-template-columns:140px 1fr;align-items:center">
        <div class="score-ring"></div>
        <div><h3 class="panel-title">Identity Resolution</h3><span class="panel-subtitle">12 verified links across 8 source systems</span><div class="signal-list"><div class="signal-row"><span>Deterministic links</span><span>9</span></div><div class="signal-row"><span>Probabilistic links</span><span>3</span></div></div></div>
      </div>
    </div>
    <div class="intelligence-grid">
      ${insightPanel("Engagement Insights", "Viewing, sports and service engagement", [
        ["Weekly content", "18.4h"], ["Sports affinity", "Very high"], ["Digital active", "4 / 4"]
      ], [["Blue Jays affinity", "94%"], ["Sportsnet engagement", "Top 8%"], ["Ignite TV utilization", "High"]], [42,65,48,81,73,92,84,68,89,76])}
      ${insightPanel("Behavior Insights", "Digital journeys and purchase intent", [
        ["Intent signals", "12"], ["Journeys", "8"], ["Last activity", "6m ago"]
      ], [["Ticket package browsing", "3 visits"], ["Roaming plan comparison", "2 visits"], ["Support sentiment", "Positive"]], [32,55,47,72,62,81,93,72,58,87])}
      ${insightPanel("Financial Insights", "Household economics and potential", [
        ["Annual value", h.value], ["Monthly ARPU", h.arpu], ["Predicted LTV", h.ltv]
      ], [["Upsell potential", h.upsell], ["Payment reliability", "Excellent"], ["Value percentile", "Top 12%"]], [64,67,70,72,78,75,81,83,87,92])}
      ${insightPanel("Service Utilization", "Usage across the Rogers ecosystem", [
        ["Active services", h === households.garcia ? "3" : "7"], ["Devices", h === households.garcia ? "4" : "11"], ["Tenure", "8.2 yrs"]
      ], [["Wireless utilization", "78%"], ["Internet utilization", "High"], ["Bundle penetration", h === households.garcia ? "34%" : "68%"]], [76,71,80,75,83,85,81,89,84,91])}
    </div>`;
}

function insightPanel(title, subtitle, stats, signals, bars) {
  return `<div class="panel insight-card"><div class="panel-header"><div><h3 class="panel-title">${title}</h3><span class="panel-subtitle">${subtitle}</span></div><button class="panel-action">DETAILS →</button></div>
    <div class="insight-stats">${stats.map(([l,v]) => `<div class="insight-stat"><span>${l}</span><strong>${v}</strong></div>`).join("")}</div>
    <div class="heat-bars">${bars.map(v => `<i style="height:${v}%"></i>`).join("")}</div>
    <div class="signal-list">${signals.map(([l,v]) => `<div class="signal-row"><span>${l}</span><span>${v}</span></div>`).join("")}</div></div>`;
}

function renderOpportunities() {
  document.getElementById("opportunitiesPage").innerHTML = `
    ${pageIntro("Opportunity Discovery Agent", "AI-discovered growth opportunities ranked by propensity, predicted revenue and household relevance.", true)}
    <div class="metric-grid" style="grid-template-columns:repeat(4,1fr)">
      ${metric("OPPORTUNITIES FOUND", "12", "Across 5 categories", "spark")}
      ${metric("ANNUAL POTENTIAL", "$4,267", "For selected household", "dollar", "#45d29d")}
      ${metric("AVG. CONFIDENCE", "88.3%", "High-confidence set", "brain", "#a67cff")}
      ${metric("TOP PROPENSITY", "96", "Sportsnet expansion", "trend", "#6898ff")}
    </div>
    <div class="card-grid">${opportunityData.map(opportunityCard).join("")}</div>`;
}

function opportunityCard(item) {
  return `<div class="panel agent-card" style="--accent:${item.color}">
    <div class="agent-card-top"><span class="agent-type">${icon(item.icon)} ${item.type}</span><div class="score-badge"><strong>${item.score}</strong><small>SCORE</small></div></div>
    <h3>${item.title}</h3><p>${item.text}</p>
    <div class="agent-card-metrics"><div><span>PREDICTED REVENUE</span><strong>${item.revenue}</strong></div><div><span>CONFIDENCE</span><strong>${item.confidence}</strong></div></div>
    <div class="card-actions"><button class="ghost-button" data-action="details">VIEW SIGNALS</button><button class="primary-button" data-action="offer">GENERATE OFFER</button></div>
  </div>`;
}

function renderChurn() {
  document.getElementById("churnPage").innerHTML = `
    ${pageIntro("Churn Prevention Agent", "Detect early risk signals, understand household-level impact and activate coordinated save actions before churn spreads.")}
    <div class="panel risk-banner"><div class="risk-icon">${icon("shield")}</div><div><h3>3 high-priority households require attention</h3><p>Combined exposure of $23.5K lifetime value. Retention Agent recommends action within the next 48 hours.</p></div><div class="risk-impact"><span>REVENUE AT RISK</span><strong>$23.5K</strong></div></div>
    <div class="card-grid">${churnData.map((item, i) => `
      <div class="panel agent-card" style="--accent:${item.color}">
        <div class="agent-card-top"><span class="agent-type">${icon("shield")} ${i === 0 ? "CRITICAL RISK" : "ELEVATED RISK"}</span><div class="score-badge"><strong>${item.score}</strong><small>RISK</small></div></div>
        <h3>${item.title}</h3><p>${item.text}</p>
        <div class="agent-card-metrics"><div><span>FINANCIAL IMPACT</span><strong>${item.impact}</strong></div><div><span>CONFIDENCE</span><strong>${item.confidence}</strong></div></div>
        <div class="card-actions"><button class="ghost-button" data-action="details">ANALYZE</button><button class="primary-button" data-action="retention">BUILD SAVE PLAN</button></div>
      </div>`).join("")}</div>
    <div class="panel" style="margin-top:18px">
      <div class="panel-header"><div><h3 class="panel-title">Household Risk Signal Composition</h3><span class="panel-subtitle">Signals monitored continuously by the Retention Agent</span></div></div>
      <div class="pipeline-list">${[["Service quality",76,"34%"],["Billing & price",64,"27%"],["Usage decline",51,"21%"],["Negative sentiment",35,"12%"],["Competitive activity",18,"6%"]].map(([n,w,v]) => `<div class="pipeline-row"><span>${n}</span><div class="progress-track"><i style="width:${w}%;background:linear-gradient(90deg,#9c5416,#f5ad48)"></i></div><strong>${v}</strong></div>`).join("")}</div>
    </div>`;
}

function renderExperiences() {
  document.getElementById("experiencesPage").innerHTML = `
    ${pageIntro("Next Best Experience Agent", "Household-level experiences composed in real time from affinity, intent, eligibility and value signals.", true)}
    <div class="card-grid">${experienceData.map(item => `
      <div class="panel agent-card recommendation-card" style="--accent:${item.color}">
        <div class="experience-visual"><span>${item.category}</span></div>
        <h3 style="margin-top:0">${item.title}</h3><p>${item.text}</p>
        <div class="agent-card-metrics"><div><span>HOUSEHOLD VALUE</span><strong>${item.value}</strong></div><div><span>ACCEPTANCE</span><strong>${item.acceptance}</strong></div></div>
        <div class="card-actions"><button class="ghost-button" data-action="details">PREVIEW</button><button class="primary-button" data-action="activate">ACTIVATE</button></div>
      </div>`).join("")}</div>`;
}

const agents = [
  ["Identity Agent", "Household resolution", "link", "#6898ff"],
  ["Insights Agent", "Behavior & value", "brain", "#a67cff"],
  ["Opportunity Agent", "Growth discovery", "spark", "#e51b23"],
  ["Retention Agent", "Churn prevention", "shield", "#f5ad48"],
  ["Experience Agent", "Personalization", "target", "#45d29d"],
];

let feedEvents = [
  ["10:14:32", 0, "Relationship discovered", "Linked a Rogers Bank account to the Thompson household using shared payment and address signals.", "96% match"],
  ["10:14:29", 2, "Opportunity scored", "Sportsnet Premium expansion ranked as the highest-value Thompson household opportunity.", "$479 / yr"],
  ["10:14:24", 1, "Engagement model updated", "Blue Jays affinity increased following repeat content and ticket browsing activity.", "94% affinity"],
  ["10:14:18", 4, "Experience composed", "Generated a household-level Blue Jays All-Access offer across four profiles.", "72% accept"],
  ["10:14:12", 3, "Risk pattern evaluated", "No elevated churn pattern detected for the Thompson household.", "Low risk"],
  ["10:14:06", 0, "Entity graph refreshed", "Resolved 12 verified identity links across eight source systems.", "12 links"],
];

function feedItem(event) {
  const [time, agentIndex, title, copy, result] = event;
  const agent = agents[agentIndex];
  return `<div class="feed-item">
    <span class="feed-time">${time}</span>
    <span class="feed-agent" style="--agent-color:${agent[3]}">${icon(agent[2])}</span>
    <div class="feed-copy"><strong>${agent[0]} · ${title}</strong><small>${copy}</small></div>
    <span class="feed-result">${result}</span>
  </div>`;
}

function renderOrchestration() {
  document.getElementById("orchestrationPage").innerHTML = `
    ${pageIntro("Live Agent Orchestration", "Watch specialized AI agents collaborate in real time to resolve identity, discover value and coordinate the next best household action.")}
    <div class="orchestration-grid">
      <div class="panel"><div class="panel-header"><div><h3 class="panel-title">Agent Network</h3><span class="panel-subtitle">5 specialized agents active</span></div></div>
        <div class="agent-roster">${agents.map(a => `<div class="roster-item"><span class="roster-orb" style="--agent-color:${a[3]}">${icon(a[2])}</span><div><strong>${a[0]}</strong><small>${a[1]}</small></div><span class="status-wave" style="--agent-color:${a[3]}"><i></i><i></i><i></i></span></div>`).join("")}</div>
        <div class="detail-section" style="margin-top:14px"><h4>ORCHESTRATION HEALTH</h4><div class="detail-row"><span>Tasks completed today</span><b>184,602</b></div><div class="detail-row"><span>Average latency</span><b>1.4 sec</b></div><div class="detail-row"><span>Confidence threshold</span><b>85%</b></div></div>
      </div>
      <div class="panel activity-feed"><div class="panel-header"><div><h3 class="panel-title">Reasoning & Activity Feed</h3><span class="panel-subtitle">Live multi-agent collaboration stream</span></div><span class="feed-header-status"><i></i> PROCESSING</span></div><div class="feed-list" id="feedList">${feedEvents.map(feedItem).join("")}</div></div>
    </div>`;
}

function renderArchitecture() {
  const flow = [
    ["database", "Data Sources", "Telecom · Sports · Bank · Partners"],
    ["layers", "Microsoft Fabric", "Unified analytics foundation"],
    ["cloud", "Azure Data Lake", "Governed household data"],
    ["link", "Customer Identity", "Entity resolution graph"],
    ["brain", "Azure AI Foundry", "Models · prompts · safety"],
    ["nodes", "Multi-Agent Orchestration", "Specialized agent network"],
    ["target", "Business Actions", "Offers · saves · experiences"],
  ];
  const services = ["Azure AI Foundry", "Azure OpenAI", "Microsoft Fabric", "Azure Data Factory", "Azure Data Lake", "Azure Cosmos DB", "Azure AI Search", "Azure Monitor", "Power BI"];
  document.getElementById("architecturePage").innerHTML = `
    ${pageIntro("Platform Architecture", "An enterprise-ready Microsoft Azure architecture that unifies household data, activates multi-agent intelligence and delivers measurable business outcomes.")}
    <div class="panel architecture-stage">
      <div class="architecture-flow">${flow.map((f,i) => `<div class="architecture-node ${i === 4 || i === 5 ? "highlight" : ""}"><span class="arch-icon">${icon(f[0])}</span><strong>${f[1]}</strong><small>${f[2]}</small></div>`).join("")}</div>
    </div>
    <div class="dashboard-grid" style="margin-top:18px">
      <div class="panel"><div class="panel-header"><div><h3 class="panel-title">Azure Service Foundation</h3><span class="panel-subtitle">Secure, scalable and observable by design</span></div></div><div class="service-grid">${services.map(s => `<div class="service-tile"><i></i><span>${s}</span></div>`).join("")}</div></div>
      <div class="panel"><div class="panel-header"><div><h3 class="panel-title">Enterprise Guardrails</h3><span class="panel-subtitle">Responsible AI and data governance</span></div></div><div class="signal-list">${[["Responsible AI controls","Active"],["Role-based data access","Enforced"],["Customer consent policies","Integrated"],["Model observability","Real time"],["Human approval workflows","Configurable"],["Data residency","Canada"]].map(([l,v]) => `<div class="signal-row"><span>${l}</span><span>${v}</span></div>`).join("")}</div></div>
    </div>
    <div class="outcome-strip"><div class="outcomes">${[["+15%", "Cross-Sell Conversion"], ["+12%", "Household ARPU"], ["−20%", "Household Churn"], ["+18%", "Sports Revenue"], ["+22%", "Offer Acceptance"]].map(([v,l]) => `<div class="outcome"><strong>${v}</strong><span>${l}</span><small>ILLUSTRATIVE DEMO METRIC</small></div>`).join("")}</div></div>`;
}

const walkthroughs = [
  {
    number: "01",
    title: "Household Growth Discovery",
    household: "The Thompson Family",
    summary: "Connect fragmented identities, reveal hidden value and activate a personalized growth offer.",
    outcome: "+$1,019 annual revenue",
    color: "#e51b23",
    steps: [
      { label: "Resolve", icon: "link", title: "Discover the hidden household relationship", copy: "The Identity Agent connects Sarah Thompson's Rogers Mastercard to the wireless household using a shared address, payment patterns and consented profile signals.", metric: "96%", metricLabel: "IDENTITY CONFIDENCE", target: "graph", action: "OPEN HOUSEHOLD GRAPH" },
      { label: "Understand", icon: "brain", title: "Build a complete household value profile", copy: "The Insights Agent combines four members, three wireless lines, Ignite Internet, sports engagement and financial products into one continuously updated household view.", metric: "$24.8K", metricLabel: "PREDICTED LIFETIME VALUE", target: "intelligence", action: "OPEN INTELLIGENCE CENTER" },
      { label: "Grow", icon: "spark", title: "Identify the next growth opportunity", copy: "Weekly Blue Jays viewing and strong post-game engagement reveal high propensity for Sportsnet Premium and a family roaming package.", metric: "$1,019", metricLabel: "ANNUAL REVENUE POTENTIAL", target: "opportunities", action: "REVIEW OPPORTUNITIES" },
      { label: "Activate", icon: "target", title: "Generate the next best household offer", copy: "The Experience Agent composes a coordinated sports and connectivity offer personalized across all four household members and their preferred channels.", metric: "72%", metricLabel: "PREDICTED ACCEPTANCE", target: "experiences", action: "VIEW GENERATED OFFER" },
    ],
  },
  {
    number: "02",
    title: "Sports & Entertainment Expansion",
    household: "The Garcia Family",
    summary: "Turn digital sports engagement into a high-confidence cross-sell and membership journey.",
    outcome: "74% conversion propensity",
    color: "#6898ff",
    steps: [
      { label: "Detect", icon: "activity", title: "Detect strong Blue Jays engagement", copy: "The Insights Agent observes frequent Blue Jays content consumption, repeat game-day activity and ticket browsing across both household members.", metric: "94%", metricLabel: "SPORTS AFFINITY", target: "intelligence", action: "VIEW ENGAGEMENT SIGNALS" },
      { label: "Predict", icon: "brain", title: "Model household purchase intent", copy: "Cross-channel behavior indicates the household is actively evaluating premium sports access but has not yet converted to a Rogers sports product.", metric: "8", metricLabel: "HIGH-INTENT JOURNEYS", target: "intelligence", action: "OPEN INTELLIGENCE CENTER" },
      { label: "Recommend", icon: "ticket", title: "Recommend a coordinated sports bundle", copy: "The Opportunity Agent pairs Sportsnet Premium with a Blue Jays ticket package, optimizing for value, relevance and likely household adoption.", metric: "$1,340", metricLabel: "ANNUAL REVENUE POTENTIAL", target: "opportunities", action: "REVIEW RECOMMENDATION" },
      { label: "Convert", icon: "target", title: "Launch a personalized conversion journey", copy: "The Experience Agent selects the best message, channel and timing for Carlos and Elena, while suppressing irrelevant telecom offers.", metric: "74%", metricLabel: "CROSS-SELL PROPENSITY", target: "experiences", action: "PREVIEW EXPERIENCE" },
    ],
  },
  {
    number: "03",
    title: "Household Churn Prevention",
    household: "At-Risk Household",
    summary: "Detect risk spreading between members and coordinate a household-level retention response.",
    outcome: "$9,840 lifetime value saved",
    color: "#f5ad48",
    steps: [
      { label: "Listen", icon: "activity", title: "Detect a negative member experience", copy: "The Retention Agent detects repeated service-quality contacts, declining usage and negative sentiment from one household member within a 14-day window.", metric: "3", metricLabel: "SERVICE CONTACTS", target: "churn", action: "VIEW RISK SIGNALS" },
      { label: "Assess", icon: "shield", title: "Predict household-level risk propagation", copy: "The model recognizes that the affected member influences the household's internet and wireless decisions, raising the risk across all connected services.", metric: "88", metricLabel: "HOUSEHOLD RISK SCORE", target: "churn", action: "OPEN RISK ANALYSIS" },
      { label: "Plan", icon: "brain", title: "Build a coordinated retention plan", copy: "The agent recommends service recovery, a proactive bill review and a targeted connectivity credit sequenced across the primary decision-makers.", metric: "4", metricLabel: "RECOMMENDED ACTIONS", target: "churn", action: "REVIEW SAVE PLAN" },
      { label: "Protect", icon: "dollar", title: "Protect household lifetime value", copy: "The next best retention experience is routed for human approval, with projected save probability and financial impact clearly quantified.", metric: "$9,840", metricLabel: "LIFETIME VALUE PROTECTED", target: "orchestration", action: "WATCH AGENT ORCHESTRATION" },
    ],
  },
];

let activeWalkthrough = 0;
let activeWalkthroughStep = 0;

function renderWalkthrough() {
  const scenario = walkthroughs[activeWalkthrough];
  const step = scenario.steps[activeWalkthroughStep];
  document.getElementById("walkthroughModalBody").innerHTML = `
    <div class="walkthrough-intro"><p>A guided, presentation-ready story showing how household intelligence moves from identity discovery to measurable growth and retention outcomes.</p></div>
    <div class="walkthrough-scenarios">
      ${walkthroughs.map((item, index) => `
        <button class="walkthrough-scenario ${index === activeWalkthrough ? "active" : ""}" data-walkthrough-scenario="${index}" style="--scenario-color:${item.color}">
          <span class="scenario-number">${item.number}</span>
          <span class="scenario-copy"><strong>${item.title}</strong><small>${item.household}</small></span>
          <span class="scenario-outcome">${item.outcome}</span>
        </button>`).join("")}
    </div>
    <div class="panel walkthrough-stage" style="--scenario-color:${scenario.color}">
      <div class="walkthrough-stage-header">
        <div><span class="walkthrough-kicker">SCENARIO ${scenario.number} · ${scenario.household.toUpperCase()}</span><h2>${scenario.title}</h2><p>${scenario.summary}</p></div>
        <div class="walkthrough-counter"><strong>${String(activeWalkthroughStep + 1).padStart(2, "0")}</strong><span>/ 04</span></div>
      </div>
      <div class="walkthrough-progress">
        ${scenario.steps.map((item, index) => `<button class="${index === activeWalkthroughStep ? "active" : ""} ${index < activeWalkthroughStep ? "complete" : ""}" data-walkthrough-step="${index}"><i>${index < activeWalkthroughStep ? icon("check") : index + 1}</i><span>${item.label}</span></button>`).join("")}
      </div>
      <div class="walkthrough-content">
        <div class="walkthrough-story">
          <span class="story-icon">${icon(step.icon)}</span>
          <div><span class="story-label">STEP ${activeWalkthroughStep + 1} · ${step.label.toUpperCase()}</span><h3>${step.title}</h3><p>${step.copy}</p></div>
        </div>
        <div class="walkthrough-impact">
          <span>EXECUTIVE PROOF POINT</span><strong>${step.metric}</strong><small>${step.metricLabel}</small>
        </div>
      </div>
      <div class="walkthrough-footer">
        <button class="ghost-button" data-walkthrough-prev ${activeWalkthroughStep === 0 ? "disabled" : ""}>← PREVIOUS STEP</button>
        <button class="ghost-button walkthrough-live-link" data-navigate="${step.target}">${step.action} ↗</button>
        <button class="primary-button" data-walkthrough-next>${activeWalkthroughStep === scenario.steps.length - 1 ? (activeWalkthrough === walkthroughs.length - 1 ? "RESTART WALKTHROUGH" : "NEXT SCENARIO") : "NEXT STEP"} →</button>
      </div>
    </div>
    <div class="walkthrough-takeaways">
      <div><span>${icon("link")}</span><strong>One household identity</strong><small>Unify fragmented customer and partner relationships.</small></div>
      <div><span>${icon("brain")}</span><strong>Continuous intelligence</strong><small>Understand behavior, value, intent and risk in real time.</small></div>
      <div><span>${icon("spark")}</span><strong>Measurable growth</strong><small>Turn insight into personalized revenue and retention actions.</small></div>
    </div>`;
}

const pageTitles = {
  dashboard: "Executive Dashboard",
  graph: "Household Graph Explorer",
  intelligence: "Household Intelligence Center",
  opportunities: "Opportunity Discovery Agent",
  churn: "Churn Prevention Agent",
  experiences: "Next Best Experience Agent",
  orchestration: "Live Agent Orchestration",
  architecture: "Platform Architecture",
};

function navigate(page) {
  closeWalkthrough();
  document.querySelectorAll(".page").forEach((item) => item.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.page === page));
  document.getElementById(`${page}Page`).classList.add("active");
  document.getElementById("pageTitle").textContent = pageTitles[page];
  document.getElementById("sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openWalkthrough() {
  activeWalkthrough = 0;
  activeWalkthroughStep = 0;
  renderWalkthrough();
  renderAllIcons();
  const modal = document.getElementById("walkthroughModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("walkthrough-open");
}

function closeWalkthrough() {
  const modal = document.getElementById("walkthroughModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("walkthrough-open");
}

let toastTimeout;
function showToast(title, text) {
  const toast = document.getElementById("toast");
  document.getElementById("toastTitle").textContent = title;
  document.getElementById("toastText").textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3200);
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-walkthrough]")) {
      openWalkthrough();
      return;
    }

    if (event.target.closest("[data-close-walkthrough]")) {
      closeWalkthrough();
      return;
    }

    const nav = event.target.closest("[data-page], [data-navigate]");
    if (nav) navigate(nav.dataset.page || nav.dataset.navigate);

    const action = event.target.closest("[data-action]");
    if (action) {
      const actions = {
        offer: ["Offer generated", "Experience Agent created a personalized household offer."],
        retention: ["Save plan ready", "Retention actions prioritized by financial impact and propensity."],
        activate: ["Experience activated", "The recommendation is ready for the selected journey."],
        details: ["Signals expanded", "Agent evidence and contributing signals are now available."],
      };
      showToast(...actions[action.dataset.action]);
    }

    const scenarioButton = event.target.closest("[data-walkthrough-scenario]");
    if (scenarioButton) {
      activeWalkthrough = Number(scenarioButton.dataset.walkthroughScenario);
      activeWalkthroughStep = 0;
      renderWalkthrough();
      renderAllIcons();
    }

    const stepButton = event.target.closest("[data-walkthrough-step]");
    if (stepButton) {
      activeWalkthroughStep = Number(stepButton.dataset.walkthroughStep);
      renderWalkthrough();
      renderAllIcons();
    }

    if (event.target.closest("[data-walkthrough-prev]") && activeWalkthroughStep > 0) {
      activeWalkthroughStep -= 1;
      renderWalkthrough();
      renderAllIcons();
    }

    if (event.target.closest("[data-walkthrough-next]")) {
      if (activeWalkthroughStep < walkthroughs[activeWalkthrough].steps.length - 1) {
        activeWalkthroughStep += 1;
      } else if (activeWalkthrough < walkthroughs.length - 1) {
        activeWalkthrough += 1;
        activeWalkthroughStep = 0;
      } else {
        activeWalkthrough = 0;
        activeWalkthroughStep = 0;
        showToast("Walkthrough complete", "All three executive scenarios are ready to present again.");
      }
      renderWalkthrough();
      renderAllIcons();
    }

    const node = event.target.closest(".node");
    if (node) {
      document.querySelectorAll(".node").forEach(n => n.classList.remove("selected"));
      node.classList.add("selected");
      const title = node.dataset.node;
      if (title === "Thompson") {
        document.getElementById("nodeDetail").innerHTML = householdDetail(households.thompson);
      } else {
        document.getElementById("nodeDetail").innerHTML = `<div class="detail-hero"><div class="detail-avatar">${title.slice(0,2).toUpperCase()}</div><h3>${title}</h3><p>Connected household entity</p><span class="confidence">Verified relationship</span></div><div class="detail-section"><h4>RELATIONSHIP</h4><p style="color:var(--muted);font-size:9px;line-height:1.6">The Identity Agent linked this entity using consented account, address, payment and behavioral signals.</p></div><div class="detail-section"><h4>SIGNAL STRENGTH</h4><div class="detail-row"><span>Confidence</span><b>94%</b></div><div class="detail-row"><span>Data sources</span><b>4</b></div><div class="detail-row"><span>Last verified</span><b>Today</b></div></div>`;
      }
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches(".household-select")) {
      const key = event.target.value;
      document.querySelectorAll(".household-select").forEach(select => select.value = key);
      renderIntelligence(households[key]);
      renderAllIcons();
      bindHouseholdSelectors(key);
      showToast("Household context updated", `${households[key].name} is now active across all agents.`);
    }
  });

  document.getElementById("menuButton").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeWalkthrough();
  });
  document.querySelectorAll(".time-filter button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".time-filter button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    showToast("Reporting period updated", `Dashboard metrics now reflect ${button.textContent}.`);
  }));

  let zoom = 1;
  document.getElementById("zoomIn")?.addEventListener("click", () => {
    zoom = Math.min(1.35, zoom + 0.1);
    document.getElementById("network").style.transform = `translate(-50%, -50%) scale(${zoom})`;
  });
  document.getElementById("zoomOut")?.addEventListener("click", () => {
    zoom = Math.max(0.7, zoom - 0.1);
    document.getElementById("network").style.transform = `translate(-50%, -50%) scale(${zoom})`;
  });
}

function bindHouseholdSelectors(value = "thompson") {
  document.querySelectorAll(".household-select").forEach(select => select.value = value);
}

function startLiveFeed() {
  const messages = [
    [0, "Identity graph scanned", "Evaluated 2,406 cross-account signals for potential household relationships.", "18 links"],
    [2, "Growth signal detected", "Identified premium sports intent within a high-value family segment.", "$620 / yr"],
    [1, "Value model refreshed", "Updated predicted household lifetime value using the latest engagement activity.", "+2.4% LTV"],
    [4, "Journey personalized", "Re-ranked next best experiences using real-time channel context.", "5 offers"],
    [3, "Churn signal cleared", "Service recovery response reduced modeled household churn probability.", "−11% risk"],
  ];
  let index = 0;
  setInterval(() => {
    const feed = document.getElementById("feedList");
    if (!feed) return;
    const now = new Date().toLocaleTimeString([], { hour12: false });
    const message = messages[index++ % messages.length];
    const wrapper = document.createElement("div");
    wrapper.innerHTML = feedItem([now, ...message]);
    feed.prepend(wrapper.firstElementChild);
    while (feed.children.length > 7) feed.lastElementChild.remove();
  }, 5200);
}

function init() {
  renderDashboard();
  renderWalkthrough();
  renderGraph();
  renderIntelligence();
  renderOpportunities();
  renderChurn();
  renderExperiences();
  renderOrchestration();
  renderArchitecture();
  renderAllIcons();
  bindEvents();
  startLiveFeed();
}

init();
