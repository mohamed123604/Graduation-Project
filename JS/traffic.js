// 1. Data Source
let packets = [
    {time: "12:02", src: "192.168.1.12", dest: "192.168.1.12", proto: "TCP",  size: 1.3 },
    {time: "12:05", src: "192.168.1.05", dest: "192.168.1.20", proto: "UDP",  size: 0.8 },
    {time: "12:10", src: "10.0.0.1",     dest: "10.0.0.5",     proto: "HTTP", size: 5.2 },
    {time: "12:15", src: "192.168.1.50", dest: "8.8.8.8",      proto: "TCP",  size: 2.1 },
    {time: "12:20", src: "172.16.0.1",   dest: "172.16.0.10",  proto: "ICMP", size: 0.4 }
];



// 2. Initialize Search Logic
const searchInput = document.getElementById('packet-search');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // Filter based on src, dest, or protocol
        const filtered = packets.filter(pkt => 
            pkt.src.toLowerCase().includes(searchTerm) ||
            pkt.dest.toLowerCase().includes(searchTerm) ||
            pkt.size.toString().includes(searchTerm) ||
            pkt.proto.toLowerCase().includes(searchTerm)
        );

        renderTable(filtered);
    });
}

// 3. Show Details Function
function showDetails(index) {
    const pkt = packets[index];
    if (!pkt) return;
    
    document.getElementById('det-src').innerText = pkt.src;
    document.getElementById('det-dest').innerText = pkt.dest;
    document.getElementById('det-proto').innerText = pkt.proto;
    document.getElementById('det-size').innerText = pkt.size + " KB";
}

// 4. Optimized Render Function
function renderTable(dataToDisplay = packets) {
    const container = document.getElementById('packet-container');
    if (!container) return;
    
    container.innerHTML = ''; 

    if (dataToDisplay.length === 0) {
        container.innerHTML = `<p class="text-slate-500 text-xs p-4 text-center">No matching packets found.</p>`;
        return;
    }

    dataToDisplay.forEach((pkt, index) => {
        // We find the original index so showDetails always pulls the right data
        const originalIndex = packets.indexOf(pkt);

        container.innerHTML += `
            <div onclick="showDetails(${originalIndex})" 
                 class="grid grid-cols-6 items-center bg-slate-900/60 rounded-lg px-6 py-3 hover:bg-[#4D5473] transition cursor-pointer group">
                <span class="font-semibold text-white">${index + 1}</span>
                <span class="font-mono text-xs text-slate-300 group-hover:text-white">${pkt.src}</span>
                <span class="font-mono text-xs text-slate-300 group-hover:text-white">${pkt.dest}</span>
                <span class="font-mono text-xs text-slate-300 group-hover:text-white">${pkt.proto}</span>
                <span class="font-mono text-xs text-slate-300 group-hover:text-white">${pkt.time}</span>
                <span class="font-mono text-xs text-blue-400 font-bold">${pkt.size}</span>
            </div>
        `;
    });
}

// 5. Chart.js Initialization
const Traffic_Trend = document.getElementById('TrafficTrend');
if (Traffic_Trend) {
    new Chart(Traffic_Trend, {
        type: 'line',
        data: {
            labels: Array(10).fill(''),
            datasets: [
                { data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000], borderColor: '#22c55e', tension: 0.4, pointRadius: 0 },
                { data: [1000, 1240, 1500, 1100, 2000, 2400, 4300, 4000, 2100, 7000], borderColor: '#c53b22', tension: 0.4, pointRadius: 0 },
                { data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100], borderColor: '#3b82f6', tension: 0.4, pointRadius: 0 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { grid: { color: 'rgba(148,163,184,0.15)' }, ticks: { color: '#94a3b8', font: { size: 10 } } }
            }
        }
    });
}

// 6. Start the App
function init() {
    // Sort packets by size (ascending) initially
    packets.sort((a, b) => a.size - b.size);
    renderTable();
}

init();

