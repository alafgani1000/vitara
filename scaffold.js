const fs = require("fs");
const html = fs.readFileSync("src/index.html", "utf8");
const header = html.split("<!-- SECTION 1: HERO (Split Layout) -->")[0];
const footer = "    <!-- FOOTER -->" + html.split("<!-- FOOTER -->")[1];
const pages = [
  "about",
  "services",
  "doctors",
  "blog",
  "blog-article",
  "contact",
];

pages.forEach((page) => {
  const content = `
    <!-- PAGE CONTENT: ${page.toUpperCase()} -->
    <main class="min-h-screen pt-32 pb-20 flex items-center justify-center bg-bg-canvas">
        <h1 class="text-4xl font-display font-bold">${page.toUpperCase()} PAGE COMING SOON</h1>
    </main>
`;
  fs.writeFileSync(`src/${page}.html`, header + content + footer);
});
console.log("Scaffolded: " + pages.join(", "));
