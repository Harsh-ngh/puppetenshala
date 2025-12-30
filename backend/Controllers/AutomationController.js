import puppeteer from "puppeteer";

let browser;
let page;
let automationData;


export const startAutomation = async (req, res) => {
  try {
    automationData = req.body;

    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
      args: ["--start-maximized"]
    });

    page = await browser.newPage();
    await page.goto("https://internshala.com/login", { waitUntil: "networkidle2" });

    res.json({
      success: true,
      message: "Login window opened. Please login manually and then click Continue."
    });

  } catch (error) {
    console.error("startAutomation failed:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export const continueAutomation = async (req, res) => {
  try {
    if (!page) {
      return res.status(400).json({ success: false, message: "No active session found" });
    }

    console.log("Waiting for user to login...");

   
    await page.waitForFunction(
      () => document.querySelector(".profile_name") !== null,
      { timeout: 0 }
    );



  
    const cookies = await page.cookies();
    // fs.writeFileSync("session.json", JSON.stringify(cookies, null, 2));

    const data = automationData;

    await page.goto("https://internshala.com/student/resume", { waitUntil: "networkidle2" });


    await page.waitForSelector("#graduation-tab button", { visible: true, timeout: 60000 });
    await page.click("#graduation-tab button");


    await page.type("#college", data.college);
    await page.type("#degree", data.degree);
    await page.type("#stream", data.stream);
    await page.type("#performance-college", data.percentage);
    await page.click("#college-submit");

 
    await page.waitForSelector(".experiences-tabs[data-target='#training-modal'] .ic-16-plus", { visible: true });
    await page.click(".experiences-tabs[data-target='#training-modal'] .ic-16-plus");

    await page.type("#other_experiences_course", data.training.join(", "));
    await page.type("#other_experiences_organization", data.organisation);
    await page.type("#other_experiences_training_description", "Professional training");
    await page.click("#training-submit");

    await page.waitForSelector("#other_portfolio_link", { visible: true });
    await page.type("#other_portfolio_link", data.link);
    await page.click("#save_work_samples");

    console.log("Automation completed successfully");

    res.json({ success: true, message: "Automation completed successfully" });

  } catch (error) {
    console.error("continueAutomation failed:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
