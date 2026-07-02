// Project, profile, and content data — sourced only from resume + portfolio
// document. No invented projects, numbers, or achievements.
//
// Screenshot assets are imported as real files (not base64) so Vite can
// hash, cache, and lazy-load them properly in production.

import simCostImg from "../assets/screenshots/sim_cost.webp";
import cloudCostImg from "../assets/screenshots/cloud_cost.webp";
import hologramImg from "../assets/screenshots/hologram.webp";
import smartconnectImg from "../assets/screenshots/smartconnect.webp";
import paddyHarvesterImg from "../assets/screenshots/paddy_harvester.webp";
import solarGpsImg from "../assets/screenshots/solar_gps.webp";
import aiOpsImg from "../assets/screenshots/ai_ops.webp";
import cloudKitchenImg from "../assets/screenshots/cloud_kitchen.webp";
import rechargePitchImg from "../assets/screenshots/recharge_pitch.webp";
import deviceHealthImg from "../assets/screenshots/device_health.webp";
import workflowImg from "../assets/screenshots/workflow.webp";
import agentImg from "../assets/screenshots/agent.webp";
import leadershipImg from "../assets/screenshots/leadership.webp";

// Maps the `screenshot` key used in PROJECTS below to its imported asset URL.
export const IMAGES = {
  sim_cost: simCostImg,
  cloud_cost: cloudCostImg,
  hologram: hologramImg,
  smartconnect: smartconnectImg,
  paddy_harvester: paddyHarvesterImg,
  solar_gps: solarGpsImg,
  ai_ops: aiOpsImg,
  cloud_kitchen: cloudKitchenImg,
  recharge_pitch: rechargePitchImg,
  device_health: deviceHealthImg,
  workflow: workflowImg,
  agent: agentImg,
  leadership: leadershipImg,
};

export const PROFILE = {
  name: "Hiten Subrato Chowdhary",
  role: "Hardware Operations Engineer & Data Analyst",
  company: "Carnot Technologies (Mahindra Group)",
  location: "Mumbai, Maharashtra, India",
  email: "chowdharyhiten12@gmail.com",
  phone: "+91-9769317764",
  linkedin: "https://linkedin.com/in/hiten-chowdhary", // placeholder — verify exact handle
  github: "https://github.com/hitenchowdhary", // placeholder — verify exact handle
  summary:
    "I build the dashboards and automations that sit between raw operational data and the decisions teams make every day — covering fleet health, cost tracking, and customer support across IoT and B2B operations.",
};

export const DOMAINS = ["Operations", "Finance", "IoT", "Automation", "AI"];

export const PLATFORMS = [
  "Metabase", "Hex", "Streamlit", "Google Sheets", "n8n",
  "Lovable", "Cursor", "PostgreSQL", "Python",
];

// preview = which mini-dashboard visualization style to render
export const PROJECTS = [
  {
    id: "sim-cost",
    title: "SIM Cost Reconciliation",
    oneLiner: "Tracing billing leakage back to inactive and unmapped SIMs across operators.",
    problem:
      "Monthly SIM billing didn't line up with actual device inventory and status — costs were accruing on SIMs that were inactive, in safe custody, or untraceable, with no clear view of where the leakage was.",
    impact:
      "Surfaced thousands of unmapped billed SIMs and structured the cost data by operator, category, and status — the root analysis behind a 25–30% reduction in monthly SIM spend, saving roughly ₹1.5–2 lakhs a month.",
    process:
      "Started with a monthly reconciliation view comparing billed SIMs against device inventory, then built period-based deep dives comparing available vs. inactive SIMs by operator and category — that's where the billed-but-unused cost was hiding. Each pass narrowed the gap between what was being billed and what was actually in use.",
    architecture: "PostgreSQL → Python (cleaning & joins) → Hex notebook/app, with ChatGPT/Claude used to speed up exploratory analysis.",
    lessons:
      "The real finding wasn't a chart — it was a reconciliation gap. Most of the value came from a join that should have existed in the source system, not from a prettier dashboard.",
    domain: ["Finance", "Operations"],
    platform: ["Hex", "PostgreSQL", "Python"],
    tech: ["Python", "PostgreSQL", "Hex", "Claude", "ChatGPT"],
    link: "https://app.hex.tech/01961eea-3b77-7000-b76f-da0ddd61cd47/app/Debug-InDepth-Sim-Cost-Analysis-0330zoayAiyW8QhdDXFA2j/latest?tab=sim_costapr",
    status: "live",
    screenshot: "sim_cost",
    preview: "finance",
    featured: true,
  },
  {
    id: "ai-ops",
    title: "Franchise Operations Copilot",
    oneLiner: "A self-directed build exploring what an AI-assisted executive dashboard should feel like.",
    problem:
      "This started as an open-ended dashboard exercise and turned into a real design question: what would a franchise operator actually open every morning, and what would make an AI suggestion inside that dashboard worth trusting?",
    impact:
      "Not a client engagement — a personal project built around a hypothetical EV franchise business, used to practice product thinking end to end: role-based views, profitability tracking, staffing visibility, and an AI layer that ties recommendations back to the metric that triggered them.",
    process:
      "Iterated through several versions before it held together — early passes had good charts but no point of view on what mattered that day. Rebuilt around role-specific panels (different leaders see different cuts), then layered support-ticket and field-capacity signals underneath so the AI recommendations had something real to point to.",
    architecture: "TypeScript front end, built and iterated with Lovable, Cursor, and GitHub Copilot, deployed on Netlify.",
    lessons:
      "An AI recommendation only earns trust if it's traceable back to the underlying metric — so every suggested action sits next to the number that triggered it. The harder problem wasn't generating insights, it was deciding which ones were worth surfacing at all.",
    domain: ["Finance", "AI", "Operations"],
    platform: ["Lovable", "Cursor"],
    tech: ["TypeScript", "Lovable", "Cursor", "GitHub Copilot", "Netlify"],
    link: "https://bharatevoperations.netlify.app",
    status: "personal project",
    screenshot: "ai_ops",
    preview: "ai",
    featured: true,
  },
  {
    id: "cloud-kitchen",
    title: "Cloud Kitchen P&L Benchmarking",
    oneLiner: "Kitchen-level P&L benchmarking across cities, regions, and time.",
    problem:
      "With many kitchens running across different cities, leadership had no fast way to tell which stores were healthy and which were quietly losing money.",
    impact:
      "Built a P&L tool surfacing net revenue, EBITDA, average margins, and a live count of stores running negative EBITDA — turning a large operating dataset into a benchmarking and exception-spotting tool.",
    process:
      "Layered filters for month, city, store, revenue cohort, status, zone, and profitability group so the same view supports both a network-wide scan and a single-store drill-down.",
    architecture: "Python, Pandas for data shaping, deployed as a Streamlit app.",
    lessons:
      "Filters matter more than charts here — the same five KPIs become useful only once a user can slice them down to the one store they actually care about.",
    domain: ["Finance"],
    platform: ["Streamlit", "Python"],
    tech: ["Python", "Streamlit", "Pandas"],
    link: "https://cloudkitchenpnldashboard.streamlit.app",
    status: "live",
    screenshot: "cloud_kitchen",
    preview: "finance",
    featured: true,
  },
  {
    id: "smartconnect",
    title: "SmartConnect Lifecycle Overview",
    oneLiner: "Tractor lifecycle tracking from production through billing, delivery, and activation.",
    problem:
      "Volumes were getting lost somewhere between production and final customer activation, but it wasn't visible which stage — plant, model, or state — was responsible for the drop-off.",
    impact:
      "Built a full lifecycle funnel — produced → billed → delivered → activated — broken down by plant, model, and state, so teams could see exactly where conversion was leaking and act on it.",
    process:
      "Organized the dashboard into tabs (billings, deliveries, activations, subscription health, usage) with global filters for time period, model, state, and hardware, then linked out to detailed tables for district- and dealer-level root-cause analysis.",
    architecture: "PostgreSQL as the source of truth, Metabase for the dashboard layer.",
    lessons:
      "A funnel is only useful if every stage is filterable the same way — the moment one tab can't be sliced by the same dimension as the others, people stop trusting it.",
    domain: ["Operations", "Finance"],
    platform: ["Metabase", "PostgreSQL"],
    tech: ["PostgreSQL", "Metabase"],
    link: "https://metabase.swarajtelematics.in/public/dashboard/65e1267b-6bd3-4238-82aa-0ef5c2ff112e",
    status: "live",
    screenshot: "smartconnect",
    preview: "lifecycle",
    featured: true,
  },
  {
    id: "recharge-automation",
    title: "Recharge Productivity Automation",
    oneLiner: "n8n workflow that turns raw sheet data into a leadership-ready chart, automatically.",
    problem:
      "Recharge performance reporting was manual — someone had to pull the numbers, build a chart, and push it to the team and to leadership, every cycle.",
    impact:
      "Eliminated the manual step end to end: a scheduled trigger reads the latest rows, runs the numbers, generates a chart image, and delivers it straight to the agent WhatsApp group and a separate leadership group.",
    process:
      "Two parallel n8n flows — one posts an agent-facing update via HTTP request, the other reads fresh rows, generates a chart, converts it to a PNG, and sends it as a WhatsApp group message.",
    architecture: "n8n (schedule trigger → sheet read → JS/code node → conditional → HTTP/image generation → WhatsApp delivery), with Claude/ChatGPT used to draft the transformation logic.",
    lessons:
      "Automating the chart generation mattered less than automating the judgment call (the conditional branch) about when an update was even worth sending.",
    domain: ["Automation", "AI"],
    platform: ["n8n"],
    tech: ["n8n", "Claude", "ChatGPT"],
    link: null,
    status: "deployed",
    preview: "automation",
    screenshot: "workflow",
    caseStudyLayout: "n8n",
    featured: true,
  },
  {
    id: "harvester-monitoring",
    title: "Harvester Fleet Adoption & Usage",
    oneLiner: "Fleet-wide adoption and usage tracking for paddy harvesters.",
    problem: "No consolidated view existed of how the harvester fleet was being adopted and used across states.",
    impact: "Combined installation, activity, and geographic-distribution metrics into one operational snapshot teams use to spot adoption gaps and underused regions.",
    process: "Paired installation/registration indicators with activity metrics (engine usage, farming time, acreage) and a device-type/geography split.",
    architecture: "PostgreSQL, Metabase.",
    lessons: "Adoption and usage need to sit on the same screen — viewed separately, neither tells you whether a region's problem is rollout or engagement.",
    domain: ["Operations", "IoT"],
    platform: ["Metabase", "PostgreSQL"],
    tech: ["PostgreSQL", "Metabase"],
    link: "https://metabase.carnot-analytics.com/public/dashboard/d1660705-fb59-42c6-ac07-6972e7ef9f01",
    status: "live",
    screenshot: "paddy_harvester",
    preview: "fleet",
    featured: false,
  },
  {
    id: "hologram-tracker",
    title: "Hologram SIM Operations Tracker",
    oneLiner: "Spreadsheet-native performance tracker built on the Hologram API.",
    problem: "SIM operations status was scattered, with no single sheet stakeholders could check for current state.",
    impact: "Centralized core KPIs and trend movement into one stakeholder-facing tracker, built directly on top of live Hologram API data.",
    process: "Apps Script pulls and structures live data; formulas handle the trend and segment breakdowns.",
    architecture: "Google Apps Script, Hologram API, advanced Sheets formulas.",
    lessons: "Not every monitoring tool needs a BI platform — a well-structured sheet with the right automation can be the fastest path to stakeholder trust.",
    domain: ["Operations", "IoT"],
    platform: ["Google Sheets"],
    tech: ["Google Apps Script", "Hologram API", "Sheets formulas"],
    link: null,
    status: "deployed",
    screenshot: "hologram",
    preview: "sheet",
    featured: false,
  },
  {
    id: "cloud-cost-devices",
    title: "Cloud Cost Attribution",
    oneLiner: "Tracing monthly cloud spend back to device segments and sales channels.",
    problem: "Cloud infrastructure spend needed to be traced back to specific device segments and sales channels, and the existing device counts weren't trusted.",
    impact: "Built a monthly rollup of active devices by segment and channel, giving finance and engineering a shared, validated base for cost attribution.",
    process: "Designed the device-activity data model, standardized segment classification logic, and joined it to sales-channel metadata.",
    architecture: "PostgreSQL, Python, Hex — used as both a reporting and a debugging surface.",
    lessons: "The dashboard's first job was catching anomalies before they hit downstream cost reports, not just visualizing the trend.",
    domain: ["Finance", "AI"],
    platform: ["Hex", "PostgreSQL"],
    tech: ["Python", "PostgreSQL", "Hex", "Claude", "ChatGPT"],
    link: null,
    status: "deployed",
    screenshot: "cloud_cost",
    preview: "finance",
    featured: false,
  },
  {
    id: "device-monitoring",
    title: "Field Device Health Monitoring",
    oneLiner: "Fleet telemetry and diagnostic health view for field technicians.",
    problem: "Field teams had no fast way to triage machine health — sensor data existed but wasn't translated into an actionable state.",
    impact: "Converted raw telemetry (oil pressure, coolant temp, battery voltage, DEF level, RPM) into clear healthy / warning / critical states for rapid triage.",
    process: "Grouped panels by health status, engine/emissions, individual sensors, and diagnostics, with filters by asset, location, and time window.",
    architecture: "PostgreSQL, Metabase.",
    lessons: "Raw sensor values are noise to a field technician until they're collapsed into a status label they can act on in seconds.",
    domain: ["IoT", "Operations"],
    platform: ["Metabase", "PostgreSQL"],
    tech: ["PostgreSQL", "Metabase"],
    link: "https://metabase.carnot-analytics.com/public/dashboard/23a2e8b2-1996-45ef-ad38-a81867e9c1a5",
    status: "live",
    screenshot: "device_health",
    preview: "fleet",
    featured: false,
  },
  {
    id: "recharge-pitch",
    title: "Customer Retention Command View",
    oneLiner: "Support and retention context view built around a single customer.",
    problem: "Support agents needed customer identity, usage, and ticket history together to make a renewal pitch — not spread across three systems.",
    impact: "Built a single-customer command view combining platform usage, recharge history, ticket history, and live asset location for the support team.",
    process: "A profile panel anchors the view, with ticket history and location intelligence layered underneath as supporting context.",
    architecture: "PostgreSQL, Metabase.",
    lessons: "Designing for a single customer view (vs. a fleet aggregate) is a different discipline — every panel has to answer 'should I call this person today.'",
    domain: ["Operations", "Finance"],
    platform: ["Metabase", "PostgreSQL"],
    tech: ["PostgreSQL", "Metabase"],
    link: "https://metabase.mahindradigisense.com/public/dashboard/ea2aade5-e0c5-40fe-b570-a956dd1f6872",
    status: "live",
    screenshot: "recharge_pitch",
    preview: "sheet",
    featured: false,
  },
  {
    id: "solar-gps",
    title: "Harvester Productivity Tracking (Solar GPS)",
    oneLiner: "Field-operations control tower for a solar GPS tracker fleet rollout.",
    problem: "A new solar GPS tracker product needed a way to monitor rollout — install, registration, connectivity — alongside ongoing field usage.",
    impact: "Built a monitoring dashboard for a solar-powered GPS tracker positioned as an alternative to conventional battery-powered trackers in the fleet-tracking market — giving the rollout team visibility into device connectivity, installation, and field usage as the product scaled.",
    process: "Separated device-level health from user-level account context across two tabs, with a map layer for geographic distribution.",
    architecture: "PostgreSQL, Metabase.",
    lessons: "Rollout dashboards need an installation funnel and a usage view side by side — adoption and engagement fail for different reasons.",
    domain: ["IoT", "Operations"],
    platform: ["Metabase", "PostgreSQL"],
    tech: ["PostgreSQL", "Metabase"],
    link: "https://metabase.carnot-analytics.com/public/dashboard/88b80108-6930-4e69-a504-b6fd2ee26840",
    status: "live",
    screenshot: "solar_gps",
    preview: "fleet",
    featured: false,
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);
export const OTHERS = PROJECTS.filter((p) => !p.featured);

export const TIMELINE = [
  { stage: "Hardware Operations Engineer", note: "Started in hardware operations, focusing on device testing, field deployments, troubleshooting, production support, and customer issue resolution for IoT products." },
  { stage: "Analytics & Business Intelligence", note: "Moved closer to the business by working with SQL, PostgreSQL, Metabase, and Hex to build operational dashboards, automate reporting, and turn raw data into actionable insights." },
  { stage: "Product Thinking", note: "Began identifying operational bottlenecks, suggesting product improvements, reducing manual work through automation, and collaborating across engineering and operations to improve workflows." },
  { stage: "Program & Operations Management", note: "Expanded into production planning, deployment coordination, cross-functional execution, stakeholder communication, and driving operational initiatives from planning through execution." },
];

export const SKILL_GROUPS = [
  { label: "Analytics & BI", icon: "BarChart3", items: ["SQL", "PostgreSQL", "Metabase", "Hex", "KPI Tracking", "Dashboarding"] },
  { label: "Automation", icon: "Workflow", items: ["n8n", "Google Apps Script", "API Integrations", "Workflow Automation"] },
  { label: "AI Tools", icon: "Sparkles", items: ["Claude", "ChatGPT", "Gemini", "Cursor", "GitHub Copilot", "Lovable", "Perplexity"] },
  { label: "Programming", icon: "Cpu", items: ["Python", "SQL", "PostgreSQL"] },
  { label: "Product & Program", icon: "Layers", items: ["Product Operations", "Product Validation", "GTM Support", "Stakeholder Management"] },
  { label: "Hardware / IoT", icon: "Radio", items: ["Embedded C", "Hardware–Software Integration", "Sensor Calibration", "Device Diagnostics"] },
];

export const KPIS = [
  { value: 11, suffix: "", label: "Dashboards & Systems Built", icon: "Database" },
  { value: 5, suffix: "", label: "Business Domains Covered", icon: "Layers" },
  { value: 25, suffix: "–30%", label: "SIM Cost Reduced (Carnot)", icon: "TrendingUp" },
  { value: 7, suffix: "+", label: "Platforms & Tools Worked Across", icon: "Gauge" },
];
