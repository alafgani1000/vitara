const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");

const patientSidebarTemplate = `    <aside class="w-64 bg-bg-surface border-r border-border-light flex flex-col transition-all duration-300 hidden md:flex z-20">
        <div class="h-16 flex items-center px-6 border-b border-border-light shrink-0">
            <a href="index.html" class="flex items-center gap-2">
                <div class="w-8 h-8 rounded bg-brand-primary text-text-inverse flex items-center justify-center font-display text-xl">
                    <i data-lucide="cross" class="w-5 h-5"></i>
                </div>
                <span class="font-display font-semibold text-xl tracking-tight text-text-primary">VITARA</span>
            </a>
        </div>

        <div class="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
            <p class="px-3 text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Portal</p>
            <a href="patient-dashboard.html" class="PATIENT_DASHBOARD_CLASS">
                <i data-lucide="layout-dashboard" class="w-5 h-5"></i> <span class="font-medium text-sm">Dashboard</span>
            </a>
            <a href="patient-appointments.html" class="PATIENT_APPOINTMENTS_CLASS">
                <i data-lucide="calendar" class="w-5 h-5"></i> <span class="font-medium text-sm">Appointments</span>
            </a>
            <a href="patient-records.html" class="PATIENT_RECORDS_CLASS">
                <i data-lucide="folder-open" class="w-5 h-5"></i> <span class="font-medium text-sm">Health Records</span>
            </a>
            <a href="patient-prescriptions.html" class="PATIENT_PRESCRIPTIONS_CLASS">
                <i data-lucide="pill" class="w-5 h-5"></i> <span class="font-medium text-sm">Prescriptions</span>
            </a>
            <a href="patient-lab-results.html" class="PATIENT_LAB_RESULTS_CLASS">
                <i data-lucide="microscope" class="w-5 h-5"></i> <span class="font-medium text-sm">Lab Results</span>
            </a>
            <a href="patient-messages.html" class="PATIENT_MESSAGES_CLASS">
                <i data-lucide="message-square" class="w-5 h-5"></i> <span class="font-medium text-sm">Messages</span>
            </a>
            <a href="patient-telemedicine.html" class="PATIENT_TELEMEDICINE_CLASS">
                <i data-lucide="video" class="w-5 h-5"></i> <span class="font-medium text-sm">Telehealth</span>
            </a>
            <a href="patient-wearable.html" class="PATIENT_WEARABLE_CLASS">
                <i data-lucide="activity" class="w-5 h-5"></i> <span class="font-medium text-sm">Health Data</span>
            </a>
        </div>

        <div class="p-4 border-t border-border-light shrink-0">
            <a href="patient-settings.html" class="PATIENT_SETTINGS_CLASS">
                <i data-lucide="settings" class="w-5 h-5"></i> <span class="font-medium text-sm">Settings</span>
            </a>
            <a href="auth-login.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-status-error hover:bg-status-error/10 transition-colors mt-1">
                <i data-lucide="log-out" class="w-5 h-5"></i> <span class="font-medium text-sm">Logout</span>
            </a>
        </div>
    </aside>`;

const clinicalSidebarTemplate = `    <aside class="w-64 bg-bg-surface border-r border-border-light flex flex-col transition-all duration-300 hidden md:flex z-20">
        <div class="h-16 flex items-center px-6 border-b border-border-light shrink-0">
            <a href="index.html" class="flex items-center gap-2">
                <div class="w-8 h-8 rounded bg-brand-primary text-text-inverse flex items-center justify-center font-display text-xl">
                    <i data-lucide="cross" class="w-5 h-5"></i>
                </div>
                <span class="font-display font-semibold text-xl tracking-tight text-text-primary">VITARA <span class="font-sans font-normal text-xs opacity-70 ml-1">PRO</span></span>
            </a>
        </div>

        <div class="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
            <p class="px-3 text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Clinical</p>
            <a href="clinical-dashboard.html" class="CLINICAL_DASHBOARD_CLASS">
                <i data-lucide="layout-dashboard" class="w-5 h-5"></i> <span class="font-medium text-sm">Dashboard</span>
            </a>
            <a href="clinical-patients.html" class="CLINICAL_PATIENTS_CLASS">
                <i data-lucide="users" class="w-5 h-5"></i> <span class="font-medium text-sm">Patients</span>
            </a>
            <a href="clinical-schedule.html" class="CLINICAL_SCHEDULE_CLASS">
                <i data-lucide="calendar" class="w-5 h-5"></i> <span class="font-medium text-sm">Schedule</span>
            </a>
            <a href="clinical-prescriptions.html" class="CLINICAL_PRESCRIPTIONS_CLASS">
                <i data-lucide="pill" class="w-5 h-5"></i> <span class="font-medium text-sm">Prescriptions</span>
            </a>
            <a href="clinical-messages.html" class="CLINICAL_MESSAGES_CLASS">
                <i data-lucide="message-square" class="w-5 h-5"></i> <span class="font-medium text-sm">Messages</span>
            </a>
            <a href="clinical-analytics.html" class="CLINICAL_ANALYTICS_CLASS">
                <i data-lucide="bar-chart-3" class="w-5 h-5"></i> <span class="font-medium text-sm">Analytics</span>
            </a>
        </div>

        <div class="p-4 border-t border-border-light shrink-0">
            <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-bg-muted transition-colors">
                <i data-lucide="settings" class="w-5 h-5"></i> <span class="font-medium text-sm">Settings</span>
            </a>
            <a href="auth-login.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-status-error hover:bg-status-error/10 transition-colors mt-1">
                <i data-lucide="log-out" class="w-5 h-5"></i> <span class="font-medium text-sm">Logout</span>
            </a>
        </div>
    </aside>`;

const activeClass =
  "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-brand-light/50 text-brand-primary transition-colors";
const inactiveClass =
  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-bg-muted hover:text-text-primary transition-colors";

const files = fs.readdirSync(srcDir);

files.forEach((file) => {
  if (!file.endsWith(".html")) return;

  let isPatient = file.startsWith("patient-");
  let isClinical = file.startsWith("clinical-");

  if (!isPatient && !isClinical) return;

  const filePath = path.join(srcDir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Find the aside block using regex
  const asideRegex = /<aside[\s\S]*?<\/aside>/;
  const hasAside = asideRegex.test(content);

  if (hasAside) {
    let newSidebar = isPatient
      ? patientSidebarTemplate
      : clinicalSidebarTemplate;

    // Replace classes to set active state
    const links = isPatient
      ? [
          "PATIENT_DASHBOARD",
          "PATIENT_APPOINTMENTS",
          "PATIENT_RECORDS",
          "PATIENT_PRESCRIPTIONS",
          "PATIENT_LAB_RESULTS",
          "PATIENT_MESSAGES",
          "PATIENT_TELEMEDICINE",
          "PATIENT_WEARABLE",
          "PATIENT_SETTINGS",
        ]
      : [
          "CLINICAL_DASHBOARD",
          "CLINICAL_PATIENTS",
          "CLINICAL_SCHEDULE",
          "CLINICAL_PRESCRIPTIONS",
          "CLINICAL_MESSAGES",
          "CLINICAL_ANALYTICS",
        ];

    const baseName = file.replace(".html", "").replace(/-/g, "_").toUpperCase();

    links.forEach((link) => {
      if (
        link === baseName ||
        (link === "CLINICAL_PATIENTS" && baseName === "CLINICAL_PATIENT_DETAIL")
      ) {
        newSidebar = newSidebar.replace(link + "_CLASS", activeClass);
      } else {
        newSidebar = newSidebar.replace(link + "_CLASS", inactiveClass);
      }
    });

    content = content.replace(asideRegex, newSidebar);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Updated sidebar in ${file}`);
  }
});
