lucide.createIcons();

const projectDetails = {
    'agentic-v2': {
        title: "Agentic AI v2.0",
        description: "An advanced LLM orchestration platform utilizing LangGraph to build multi-step, stateful reasoning agents that go beyond basic chat interactions.",
        video: "LINK_TO_VIDEO_1.mp4", // Replace with your video link
        tech: ["LangGraph", "FastAPI", "React", "SQLAlchemy", "MySQL"],
        features: [
            "<strong>Graph Orchestration:</strong> Complex task breakdown via LangGraph state machines.",
            "<strong>Thread Persistence:</strong> Uses SQLAlchemy to manage unique session histories in MySQL.",
            "<strong>Async Streaming:</strong> Real-time token streaming for low-latency user feedback."
        ]
    },
    'smart-commerce': {
        title: "SmartCommerce AI",
        description: "An AI-driven support system designed to handle e-commerce queries, inventory checks, and seamless human agent handoffs.",
        video: "LINK_TO_VIDEO_2.mp4", // Replace with your video link
        tech: ["FastMCP", "Groq", "LangGraph", "SQLAlchemy", "MySQL"],
        features: [
            "<strong>Sentiment Handoff:</strong> Automatically detects customer frustration and routes to human support.",
            "<strong>Self-Correction:</strong> Agents detect and fix their own tool-calling errors in real-time.",
            "<strong>Inventory Integration:</strong> Direct database querying for real-time order tracking."
        ]
    },
    'data-oracle': {
        title: "DataOracle AI",
        description: "A specialized multi-agent system for healthcare that audits clinical datasets and generates structured executive reports.",
        video: "LINK_TO_VIDEO_3.mp4", // Replace with your video link
        tech: ["FastAPI", "Pandas", "Llama 3.3", "FPDF", "Matplotlib"],
        features: [
            "<strong>Autonomous Auditing:</strong> Scans CSV data for clinical anomalies and health-score shifts.",
            "<strong>Automated Reporting:</strong> Generates executive PDF reports using the FPDF library.",
            "<strong>Visual Insights:</strong> Dynamic plot generation using Matplotlib for trend analysis."
        ]
    },
    'diabetes': {
        title: "Diabetes Predict",
        description: "A full-stack machine learning solution for clinical diabetes prediction, deployed as a containerized service.",
        video: "LINK_TO_VIDEO_4.mp4", // Replace with your video link
        tech: ["Scikit-Learn", "Docker", "FastAPI", "Streamlit", "Python"],
        features: [
            "<strong>Production Pipeline:</strong> End-to-end ML workflow from data scaling to API inference.",
            "<strong>Dockerized Deployment:</strong> Fully containerized architecture for scalable cloud hosting.",
            "<strong>RESTful Inference:</strong> High-performance prediction API built with FastAPI."
        ]
    }
};

function openProj(id) {
    const data = projectDetails[id];
    document.getElementById('modal-body').innerHTML = `
        <h1 style="margin:0; color:var(--accent)">${data.title}</h1>
        <p style="color:#888; margin: 15px 0; font-size: 1.1rem;">${data.description}</p>
        
        <div style="display:flex; gap:10px; margin: 15px 0; flex-wrap: wrap;">
            ${data.tech.map(t => `<span class="pill">${t}</span>`).join('')}
        </div>
        
        <video controls autoplay muted style="width:100%; border-radius:15px; border:1px solid #333; margin: 20px 0;">
            <source src="${data.video}" type="video/mp4">
        </video>
        
        <h3>Key Innovations & Features:</h3>
        <ul class="feature-list">
            ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <div style="margin-top:30px;">
            <a href="https://github.com/onkar-2006" target="_blank" class="view-btn" style="text-decoration:none;">View Github Repo</a>
        </div>
    `;
    document.getElementById('modal').style.display = 'flex';
}

function closeProj() { document.getElementById('modal').style.display = 'none'; }