let menuBtn = document.getElementById('menu-btn');
let MobileMenu = document.getElementById('mobile-menu');
let bar = document.getElementById('bar');
let isOpen = false;

menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    MobileMenu.classList.toggle('open', isOpen);
    if (isOpen) {
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-xmark');
    } else {
        bar.classList.remove('fa-xmark');
        bar.classList.add('fa-bars');
    }
});

MobileMenu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        isOpen = false;
        MobileMenu.classList.remove('open');
        bar.classList.remove('fa-xmark');
        bar.classList.add('fa-bars');
    });
});

const titleContent = document.getElementById("title-content");
const parContent = document.getElementById('title-par');
const liContainer = document.getElementById('li-container');
const dataBox = document.getElementById('data-box');

const tabData = {
    'it-title': {
        title: 'Zero-trust file intake for IT operations',
        paragraph: 'Automatically scan every file entering your network perimeter. Block threats before they reach internal systems with policy-based automation.',
        listItems: [
            'Automated quarantine on threat detection',
            'Active Directory & SIEM integration',
            'Custom scan policies per department',
            'Real-time Slack & email alerts'
        ],
        data_box: `<div id="line1" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">File</h1><p>installer_patch.exe</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line2" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Risk Score</h1><p class="text-yellow-500">72 / High</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line3" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Verdict</h1><p class="text-yellow-500">Suspicious</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line4" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Action Taken</h1><p class="text-green-500">Quarantined</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line5" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Alert Sent</h1><p class="text-green-500">✓ Slack #sec-alerts</p></div>`
    },
    'saas-title': {
        title: 'Protect your users from malicious uploads',
        paragraph: 'If your product accepts file uploads, you are responsible for what those files do. Add enterprise-grade scanning to your app in hours, not months.',
        listItems: [
            'Simple REST API — integrate in any stack',
            'Webhooks for async scan results',
            '99.99% uptime SLA',
            'White-label reporting available'
        ],
        data_box: `<div id="line1" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">API Calls Today</h1><p>12,840</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line2" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Files Blocked</h1><p class="text-yellow-500">23</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line3" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Latency (p99)</h1><p class="text-green-500">48ms</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line4" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Uptime (30d)</h1><p class="text-green-500">100%</p></div>`
    },
    'finance-title': {
        title: 'Compliance-grade scanning for financial institutions',
        paragraph: 'Meet PCI-DSS, SOX, and internal security requirements with full audit trails and data residency controls for every scanned file.',
        listItems: [
            'Full audit logs for every scan',
            'On-premise deployment option',
            'EU & US data residency',
            'Dedicated compliance reports'
        ],
        data_box: `<div id="line1" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Compliance</h1><p class="text-green-500">PCI-DSS ✓</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line2" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Data Residency</h1><p class="text-white">EU (Frankfurt)</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line3" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Audit Logs</h1><p class="text-green-500">Enabled</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line4" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Encryption</h1><p class="text-green-500">AES-256</p></div>`
    },
    'health-title': {
        title: 'HIPAA-compliant file security for healthcare',
        paragraph: 'Protect patient data and ensure every document that touches your systems is verified clean — without slowing down clinical workflows.',
        listItems: [
            'HIPAA Business Associate Agreement',
            'Zero data retention after scanning',
            '24/7 priority support',
            'EHR system integration'
        ],
        data_box: `<div id="line1" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">HIPAA BAA</h1><p class="text-green-500">Signed ✓</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line2" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Data Retained</h1><p class="text-green-500">0 days</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line3" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Scan Result</h1><p class="text-green-500">Clean</p></div><hr class="w-[95%] mx-auto bg-gray-300"><div id="line4" class="flex justify-between text-center p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm"><h1 class="text-gray-400">Support</h1><p class="text-white">24/7 Priority</p></div>`
    }
};

async function updateContent(tabId) {
    const data = tabData[tabId];
    if (!data) return;
    const elements = [titleContent, parContent, dataBox, liContainer];
    elements.forEach(el => {
        if (el) {
            el.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';
            el.style.opacity = '0';
            el.style.transform = 'translateY(10px)';
        }
    });
    await new Promise(resolve => setTimeout(resolve, 200));
    titleContent.textContent = data.title;
    parContent.textContent = data.paragraph;
    dataBox.innerHTML = data.data_box;
    liContainer.innerHTML = data.listItems.map(item =>
        `<li class="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-1.5 sm:mt-2" style="animation:slideIn 0.3s ease-out">${item}</li>`
    ).join('');
    elements.forEach(el => {
        if (el) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}

function setActiveTab(activeTab) {
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.classList.remove('bg-[#3C69D4]', 'bg-opacity-20');
        tab.classList.add('bg-black', 'bg-opacity-20');
    });
    activeTab.classList.remove('bg-black');
    activeTab.classList.add('bg-[#3C69D4]', 'bg-opacity-20');
}

document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', function () {
        setActiveTab(this);
        updateContent(this.id);
    });
});

const FaqData = {
    FaqOne: {
        Faq: "What file formats do you support?",
        Answer: "We support 50+ formats including PDF, DOC/DOCX, XLS/XLSX, EXE, DLL, ZIP, RAR, 7z, JAR, APK, scripts (JS, PS1, BAT, SH), images (PNG, JPG, SVG), and many more. New formats are added regularly.",
        isOpen: false
    },
    FaqTwo: {
        Faq: "Do you store my files after scanning?",
        Answer: "No. Files are deleted immediately after scanning completes. We only retain scan metadata and results for your audit logs. For Enterprise plans, zero-retention mode deletes everything including results on request.",
        isOpen: false
    },
    FaqThree: {
        Faq: "How fast is the scanning?",
        Answer: "Most files are scanned in under 30 seconds. Large archives or files requiring sandbox execution may take up to 60 seconds. Our p99 API latency is under 55ms for standard scans.",
        isOpen: false
    },
    FaqFour: {
        Faq: "Can I integrate ShieldScan into my own app?",
        Answer: "Yes — that's our primary use case. We provide a clean REST API with SDKs for Python, Node.js, Java, Go, and Ruby. Full API docs and interactive sandbox are available to all registered users.",
        isOpen: false
    },
    FaqFive: {
        Faq: "What compliance certifications do you have?",
        Answer: "We are SOC 2 Type II certified, ISO 27001 certified, and GDPR compliant. We can sign HIPAA BAAs for healthcare customers and provide PCI-DSS audit documentation for financial institutions.",
        isOpen: false
    },
    FaqSix: {
        Faq: "Is there a free trial?",
        Answer: "Yes. All new accounts get 100 free scans with no credit card required. You can test the full API and all scan types before committing to a paid plan.",
        isOpen: false
    }
};

const container = document.getElementById('faq-container');

Object.entries(FaqData).forEach(([key, faq], index) => {
    const wrapper = document.createElement('div');

    if (index > 0) {
        const topHr = document.createElement('hr');
        topHr.className = 'border-gray-800';
        wrapper.appendChild(topHr);
    }

    const row = document.createElement('div');
    row.className = 'flex items-start justify-between p-2 sm:p-3 text-white cursor-pointer group';

    const left = document.createElement('div');
    left.className = 'flex-1 pr-3 sm:pr-4';

    const question = document.createElement('p');
    question.className = 'group-hover:text-[#3C69D4] duration-200 text-[10px] sm:text-xs md:text-base';
    question.textContent = faq.Faq;

    const answer = document.createElement('p');
    answer.id = `answer-${key}`;
    answer.className = 'faq-answer text-[9px] sm:text-[10px] md:text-xs text-gray-400 leading-relaxed';
    answer.textContent = faq.Answer;

    left.appendChild(question);
    left.appendChild(answer);

    const iconWrapper = document.createElement('p');
    iconWrapper.className = 'pt-0.5 sm:pt-1 flex-shrink-0';

    const icon = document.createElement('i');
    icon.id = `icon-${key}`;
    icon.className = 'fa-solid fa-chevron-down text-gray-400 faq-icon text-[10px] sm:text-xs';

    iconWrapper.appendChild(icon);
    row.appendChild(left);
    row.appendChild(iconWrapper);
    wrapper.appendChild(row);

    const bottomHr = document.createElement('hr');
    bottomHr.className = 'border-gray-800';
    wrapper.appendChild(bottomHr);

    container.appendChild(wrapper);

    row.addEventListener('click', () => {
        faq.isOpen = !faq.isOpen;
        document.getElementById(`answer-${key}`).classList.toggle('open', faq.isOpen);
        document.getElementById(`icon-${key}`).classList.toggle('rotated', faq.isOpen);
        question.classList.toggle('text-[#3C69D4]', faq.isOpen);
    });
});