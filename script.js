const projectData = {
    'server-project': {
        title: "Server Management Automation",
        desc: `<div class="modal-body-content">
                <div class="modal-text">
                    <ul>
                        <li>Configured Group Policy for workstation power management based on operational schedules</li>
                        <li>Developed PowerShell scripts to automate system power settings and enforce usage policies</li>
                        <li>Implemented automated SQL database backups using scheduled tasks</li>
                        <li>Managed backup retention and storage through file handling</li>
                        <li>Utilized Windows Server and Task Scheduler for time-based automation and system administration</li>
                    </ul>
                </div>
                <div class="modal-images">
                    <img src="s1.1.png" alt="Server Setup" class="modal-img-main">
                    <div class="modal-img-sub">
                        <img src="s2.png" alt="Workstation">
                        <img src="s3.png" alt="System Admin">
                    </div>
                </div>
            </div>`
    },
    'python-project': {
    title: "PUPian the Explorer",
    desc: `<div class="modal-body-content">
            <div class="modal-text">
                <ul>
                    <li>Led the UI/UX design team in creating an intuitive and engaging interface tailored for a campus-themed educational game.</li>
                    <li>Designed and developed the characters, ensuring visual consistency for the target audience.</li>
                    <li>Implemented pathfinding algorithms to navigate the digital map of Sintang Paaralan.</li>
                    <li>Utilized Python to bridge custom visual assets with functional game logic.</li>
                </ul>
            </div>
            <div class="modal-images">
                <img src="p1.png" alt="Game Map" class="modal-img-main">
                <div class="modal-img-sub">
                    <img src="p2.png" alt="Character Selection">
                    <img src="p3.png" alt="Gameplay Interface">
                </div>
            </div>
        </div>`
    },
    'portfolio-project': {
    title: "Web Page Portfolio",
    desc: `<div class="modal-body-column">
            <div class="modal-images-row">
                <img src="w1.png" alt="Portfolio Home" class="portfolio-img">
                <img src="w2.png" alt="Team Page" class="portfolio-img">
            </div>
            <div class="modal-text-bottom">
                <ul>
                    <li>Led the UI/UX team in designing a portfolio website.</li>
                    <li>Established the overall visual direction and layout structure to ensure a cohesive look and experience across all pages.</li>
                    <li>Emphasized creativity and originality to showcase individual and team identities visually.</li>
                </ul>
            </div>
        </div>`
    },
};

function openProject(projectId) {
    const modal = document.getElementById("projectModal");
    const body = document.getElementById("modal-body");
    const data = projectData[projectId];

    if (data) {
        body.innerHTML = `<h2 style="text-align:center; margin-bottom:30px;">${data.title}</h2>${data.desc}`;
        modal.style.display = "flex"; 
    }
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
    document.getElementById("modal-body").innerHTML = "";
}

window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        closeModal();
    }
}

// --- ALL INTERACTIVE LOGIC ---
document.addEventListener('DOMContentLoaded', () => {

    // --- 4. CATEGORY UNDERLINE LOGIC (Scrollspy) ---
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active class from all links
            navItems.forEach(link => link.classList.remove('active-link'));
            
            // Get the class of the current section
            const sectionClass = `.${entry.target.classList[0]}`;
            
            // Find the link that matches this section's class and highlight it
            const activeLink = document.querySelector(`.nav-item[href="${sectionClass}"]`);
            if (activeLink) activeLink.classList.add('active-link');
        }
    });
}, { 
    threshold: 0.5 // Highlighting happens when 50% of the section is visible
});

sections.forEach(section => navObserver.observe(section));
    
    // --- 1. THE TYPING EFFECT LOGIC (Cleaned up) ---
    const textElement = document.querySelector(".statement");
    if (textElement) {
        const originalText = textElement.innerHTML.trim();
        textElement.innerHTML = ""; 
        let index = 0;

        function typeWriter() {
            if (index < originalText.length) {
                textElement.innerHTML += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 30); 
            }
        }
        typeWriter();
    }

    // --- 2. SKILLS HIGHLIGHT LOGIC ---
    const sqlLogo = document.getElementById('sql-logo');
    const dbText = document.getElementById('database-text');
    if (sqlLogo && dbText) {
        sqlLogo.onmouseenter = () => dbText.classList.add('move-highlight');
        sqlLogo.onmouseleave = () => dbText.classList.remove('move-highlight');
    }

    const vbLogo = document.getElementById('vb-logo');
    const cscLogo = document.getElementById('csc-logo');
    const netItems = [document.getElementById('networking-text'), document.getElementById('hardware-text'), document.getElementById('tpf-text')];
    [vbLogo, cscLogo].forEach(logo => {
        if(logo) {
            logo.onmouseenter = () => netItems.forEach(item => item?.classList.add('move-highlight'));
            logo.onmouseleave = () => netItems.forEach(item => item?.classList.remove('move-highlight'));
        }
    });

    const designLogos = [document.getElementById('cpt-logo'), document.getElementById('cv-logo'), document.getElementById('adb-logo')];
    const dmText = document.getElementById('dm-text');
    designLogos.forEach(logo => {
        if(logo && dmText) {
            logo.onmouseenter = () => dmText.classList.add('move-highlight');
            logo.onmouseleave = () => dmText.classList.remove('move-highlight');
        }
    });

    const wLogo = document.getElementById('w-logo');
    const sysText = document.getElementById('systems-text');
    if (wLogo && sysText) {
        wLogo.onmouseenter = () => sysText.classList.add('move-highlight');
        wLogo.onmouseleave = () => sysText.classList.remove('move-highlight');
    }

    const progLogos = [document.getElementById('pyt-logo'), document.getElementById('html-logo')];
    const progText = document.getElementById('programming-text');
    progLogos.forEach(logo => {
        if(logo && progText) {
            logo.onmouseenter = () => progText.classList.add('move-highlight');
            logo.onmouseleave = () => progText.classList.remove('move-highlight');
        }
    });

    // --- 3. SCROLL REVEAL LOGIC (Adjusted for better Fade) ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // If the element is far enough away, remove active to fade out
                entry.target.classList.remove('active');
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: "0px 0px -100px 0px" // Only trigger fade out when it's truly leaving
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});

const contactData = {
    'email': {
        title: "Email Address",
        info: "capundan.claudette.perocho@gmail.com",
        action: "mailto:capundan.claudette.perocho@gmail.com",
        btnText: "Compose Email"
    },
    'call': {
        title: "Phone Number",
        info: "+63 956 597 4656",
        action: "tel:+639565974656",
        btnText: "Call Now"
    }
};

function openContact(type) {
    const modal = document.getElementById("contactModal");
    const body = document.getElementById("contact-modal-body");
    const data = contactData[type];

    if (data) {
        body.innerHTML = `
            <h2 style="color: var(--beige); font-size: 1.8rem; margin-bottom: 15px;">${data.title}</h2>
            
            <p style="font-size: 1.1rem; margin-bottom: 25px; border-bottom: 1px solid rgba(230, 222, 208, 0.3); padding-bottom: 10px;">
                ${data.info}
            </p>
            
            <div style="display: flex; gap: 10px; justify-content: center;">
                <a href="${data.action}" class="project-card" 
                   style="height: auto; width: auto; padding: 10px 20px; font-size: 0.9rem; text-decoration: none;">
                    ${data.btnText}
                </a>
                
                <button onclick="navigator.clipboard.writeText('${data.info}'); alert('Copied!')" 
                        class="project-card" 
                        style="height: auto; width: auto; padding: 10px 20px; font-size: 0.9rem; background: transparent; border: 1px solid var(--beige);">
                    Copy
                </button>
            </div>
        `;
        modal.style.display = "flex";
    }
}

function closeContactModal() {
    document.getElementById("contactModal").style.display = "none";
}
