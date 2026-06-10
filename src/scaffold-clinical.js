const fs = require('fs');
const path = require('path');

const pages = [
    { filename: 'clinical-dashboard.html', title: 'Clinical Dashboard', icon: 'activity' },
    { filename: 'clinical-patients.html', title: 'Patients', icon: 'users' },
    { filename: 'clinical-patient-detail.html', title: 'Patient Record (EHR)', icon: 'file-text', hidden: true },
    { filename: 'clinical-schedule.html', title: 'Schedule', icon: 'calendar-days' },
    { filename: 'clinical-analytics.html', title: 'Analytics', icon: 'bar-chart-2' }
];

const generateClinicalTemplate = (pageTitle, filename) => {
    let sidebarLinks = pages.filter(p => !p.hidden).map(p => {
        const isActive = p.filename === filename;
        const activeClasses = isActive 
            ? 'bg-brand-secondary text-text-inverse shadow-md' 
            : 'text-brand-light hover:bg-brand-secondary/50 hover:text-text-inverse';
        
        return `
                <li>
                    <a href="${p.filename}" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeClasses}">
                        <i data-lucide="${p.icon}" class="w-5 h-5"></i>
                        ${p.title}
                    </a>
                </li>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle} | VITARA Clinical Admin</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS (compiled) -->
    <link rel="stylesheet" href="../dist/assets/css/vitara.min.css">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-bg-canvas text-text-primary antialiased selection:bg-brand-light selection:text-brand-primary overflow-x-hidden">

    <div class="flex h-screen overflow-hidden">
        
        <!-- SIDEBAR (CLINICAL VIEW - DARK) -->
        <aside class="w-72 bg-brand-primary text-text-inverse flex-shrink-0 hidden md:flex flex-col">
            <div class="p-6 md:p-8 flex items-center gap-3">
                <div class="w-8 h-8 rounded bg-brand-light text-brand-primary flex items-center justify-center font-display text-xl">
                    <i data-lucide="plus" class="w-5 h-5"></i>
                </div>
                <span class="font-display font-semibold text-2xl tracking-tight text-text-inverse">VITARA</span>
            </div>
            
            <div class="px-6 mb-8">
                <div class="px-4 py-2 rounded-lg bg-brand-secondary/50 border border-brand-light/10 flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-status-success shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    <span class="text-xs font-medium text-brand-light uppercase tracking-wider">Clinical Space</span>
                </div>
            </div>

            <nav class="flex-1 px-4 overflow-y-auto py-4">
                <ul class="space-y-2">
                    ${sidebarLinks}
                </ul>
            </nav>

            <div class="p-6 border-t border-brand-secondary/30">
                <a href="index.html" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-brand-light hover:bg-brand-secondary/50 transition-all">
                    <i data-lucide="log-out" class="w-5 h-5"></i>
                    Sign Out
                </a>
            </div>
        </aside>

        <!-- MAIN CONTENT AREA -->
        <div class="flex-1 flex flex-col relative overflow-hidden">
            
            <!-- TOPBAR -->
            <header class="h-20 bg-bg-canvas/80 backdrop-blur-md border-b border-border-light flex items-center justify-between px-6 md:px-10 z-10 sticky top-0">
                <div class="flex items-center gap-4 flex-1">
                    <button class="md:hidden text-text-secondary hover:text-brand-primary transition-colors">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                    <!-- Global Search -->
                    <div class="hidden sm:flex items-center relative w-full max-w-md">
                        <i data-lucide="search" class="w-5 h-5 text-text-muted absolute left-4"></i>
                        <input type="text" placeholder="Search patients, ID, or records..." class="w-full bg-bg-surface border border-border-default rounded-full pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-shadow">
                    </div>
                </div>

                <div class="flex items-center gap-4 sm:gap-6">
                    <button class="bg-brand-primary text-text-inverse px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-secondary transition-colors hidden md:flex items-center gap-2">
                        <i data-lucide="plus" class="w-4 h-4"></i> New Record
                    </button>
                    
                    <div class="h-8 w-px bg-border-light mx-2 hidden md:block"></div>

                    <button class="relative text-text-secondary hover:text-brand-primary transition-colors">
                        <i data-lucide="bell" class="w-6 h-6"></i>
                        <span class="absolute top-0 right-0 w-2.5 h-2.5 bg-status-error rounded-full border-2 border-bg-canvas"></span>
                    </button>
                    
                    <div class="flex items-center gap-3 cursor-pointer group ml-2">
                        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150" alt="Dr. Michael Chen" class="w-10 h-10 rounded-full object-cover border-2 border-transparent group-hover:border-brand-primary transition-colors">
                        <div class="hidden lg:block text-right">
                            <p class="text-sm font-semibold text-text-primary leading-none mb-1">Dr. Michael Chen</p>
                            <p class="text-xs text-brand-primary font-medium leading-none">Cardiology</p>
                        </div>
                    </div>
                </div>
            </header>

            <!-- PAGE CONTENT -->
            <main class="flex-1 overflow-y-auto p-6 md:p-10 pb-24 bg-bg-canvas">
                <!-- CONTENT GOES HERE -->
                <div class="max-w-7xl mx-auto">
                    <h1 class="text-4xl font-display font-medium text-text-primary mb-8">${pageTitle}</h1>
                    <div class="h-96 rounded-2xl border border-dashed border-border-default flex items-center justify-center text-text-muted">
                        Page under construction
                    </div>
                </div>
            </main>

        </div>
    </div>

    <!-- Initialize Icons -->
    <script>
        lucide.createIcons();
    </script>
</body>
</html>`;
};

const srcDir = path.join(__dirname);

pages.forEach(p => {
    const filePath = path.join(srcDir, p.filename);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, generateClinicalTemplate(p.title, p.filename));
        console.log(`Created: ${p.filename}`);
    } else {
        console.log(`Skipped (already exists): ${p.filename}`);
    }
});

console.log('Clinical scaffolding complete.');
