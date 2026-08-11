/* Screenshot driver for design review: full page + sections, desktop and mobile. */
const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const outDir = path.join(__dirname, "..", "shots");
  const browser = await chromium.launch({ channel: "chrome" });

  const errors = [];
  const shoot = async (name, viewport) => {
    const page = await browser.newPage({ viewport });
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push(String(e)));
    await page.goto("http://localhost:4173", { waitUntil: "networkidle" });
    await page.waitForTimeout(1800); // let count-up animations finish
    await page.screenshot({ path: path.join(outDir, `${name}-full.png`), fullPage: true });
    await page.screenshot({ path: path.join(outDir, `${name}-fold.png`) });
    await page.close();
  };

  await shoot("desktop", { width: 1440, height: 900 });
  await shoot("mobile", { width: 390, height: 844 });

  // expanded case study, desktop
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:4173", { waitUntil: "networkidle" });
  await page.locator("summary").first().click();
  await page.waitForTimeout(400);
  await page.locator("#work").scrollIntoViewIfNeeded();
  await page.screenshot({ path: path.join(outDir, "desktop-work-open.png") });
  await page.close();

  await browser.close();
  console.log(errors.length ? `CONSOLE ERRORS:\n${errors.join("\n")}` : "no console errors");
})();
