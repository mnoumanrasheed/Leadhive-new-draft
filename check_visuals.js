import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://127.0.0.1:5180';

async function run() {
  console.log('Launching browser for LeadHive visual verification...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.error('[Console Error]:', msg.text());
    }
  });

  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
    console.error('[Page Error]:', err.toString());
  });

  // 1. Desktop Homepage
  console.log('Navigating to LeadHive Homepage...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'leadhive-homepage-desktop.png', fullPage: true });
  console.log('Captured leadhive-homepage-desktop.png');

  // 2. Mobile Homepage
  console.log('Capturing LeadHive Mobile Homepage...');
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.screenshot({ path: 'leadhive-homepage-mobile.png', fullPage: true });
  console.log('Captured leadhive-homepage-mobile.png');

  // Reset to desktop
  await page.setViewport({ width: 1440, height: 900 });

  // 3. Open Telemetry Drawer
  console.log('Testing Telemetry Drawer...');
  const telemetryBtn = await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Telemetry'));
    if (btn) btn.click();
    return !!btn;
  });
  if (telemetryBtn) {
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: 'leadhive-telemetry-drawer.png', fullPage: false });
    // Close it
    await page.evaluate(() => {
      const closeBtn = document.querySelector('button[aria-label="Close telemetry drawer"]');
      if (closeBtn) closeBtn.click();
    });
  }

  // 4. Open Booking Modal
  console.log('Testing Booking Modal...');
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Book Demo'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'leadhive-booking-modal.png', fullPage: false });
  // Close booking modal
  await page.evaluate(() => {
    const closeBtn = document.querySelector('button[aria-label="Close modal"]');
    if (closeBtn) closeBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));

  // 5. Navigate to Experience Centre (Screen 01)
  console.log('Navigating to Experience Centre Screen 01...');
  await page.goto(`${BASE_URL}/#experience`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'leadhive-exp-screen1.png', fullPage: true });

  // 6. Navigate to Screen 02 (Omnichannel Feed)
  console.log('Navigating to Screen 02...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btn = buttons.find(b => b.textContent.includes('Start with Default Real Estate Scenario') || b.textContent.includes('Omnichannel Feed'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'leadhive-exp-screen2.png', fullPage: true });

  // 7. Navigate to Screen 03 (Core 3-Panel AI Engine)
  console.log('Navigating to Screen 03 (Core 3-Panel Engine)...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btn = buttons.find(b => b.textContent.includes('AI Intelligence') || b.textContent.includes('Proceed to Core 3-Panel'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: 'leadhive-exp-screen3.png', fullPage: true });

  // 8. Navigate to Screen 04 (Opportunity Dashboard)
  console.log('Navigating to Screen 04 (Opportunity Dashboard)...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btn = buttons.find(b => b.textContent.includes('Opportunities') || b.textContent.includes('Opportunity Dashboard'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'leadhive-exp-screen4.png', fullPage: true });

  // 9. Navigate to Screen 05 (Sales Handover Simulation)
  console.log('Navigating to Screen 05 (Sales Handover)...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btn = buttons.find(b => b.textContent.includes('Handover') || b.textContent.includes('Simulate Sales Handover'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'leadhive-exp-screen5.png', fullPage: true });

  // 10. Navigate to Screen 06 (Conversion CTA)
  console.log('Navigating to Screen 06 (Conversion CTA)...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btn = buttons.find(b => b.textContent.includes('Next Steps') || b.textContent.includes('Final Summary'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'leadhive-exp-screen6.png', fullPage: true });

  console.log('ALL SCREENS CAPTURED SUCCESSFULLY! Total console errors:', consoleErrors.length);
  await browser.close();
}

run().catch(e => {
  console.error('Check failed:', e);
  process.exit(1);
});
