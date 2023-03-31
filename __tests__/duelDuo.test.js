const { Builder, Browser, By, until, Capabilities } = require("selenium-webdriver");
require('chromedriver')

let driver;

beforeEach(async () => {
  driver = new Builder().withCapabilities(Capabilities.chrome()).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  // test("draw button should display div", async () => {
  //   let drawBtn = await driver.findElement(By.id("draw"));
  //   await drawBtn.click();
  //   await driver.findElement(By.xpath('//*[@id="choices"]'));

  // })
});