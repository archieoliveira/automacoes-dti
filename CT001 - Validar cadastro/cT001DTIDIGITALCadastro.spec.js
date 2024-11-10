// Generated by Selenium IDE 
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CT001 - DTI DIGITAL - Cadastro', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('CT001 - DTI DIGITAL - Cadastro', async function() {
    await driver.get("http://www.automationpractice.pl/index.php")
    await driver.manage().window().setRect({ width: 976, height: 1032 })
    await driver.findElement(By.linkText("Sign in")).click()
    await driver.sleep(linikText=Sign in)
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("email_create"))), 5000)
    await driver.findElement(By.id("email_create")).sendKeys("arturfoliv@gmail.com")
    await driver.findElement(By.css("#SubmitCreate > span")).click()
    await driver.findElement(By.id("id_gender1")).click()
    await driver.findElement(By.id("customer_firstname")).click()
    await driver.findElement(By.id("customer_firstname")).sendKeys("Artur")
    await driver.findElement(By.id("customer_lastname")).sendKeys("Oliveira")
    await driver.findElement(By.id("passwd")).click()
    await driver.findElement(By.id("passwd")).sendKeys("qwe123")
    await driver.findElement(By.id("days")).click()
    {
      const dropdown = await driver.findElement(By.id("days"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:19\\s+']")).click()
    }
    await driver.findElement(By.id("months")).click()
    {
      const dropdown = await driver.findElement(By.id("months"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:May\\s']")).click()
    }
    await driver.findElement(By.id("years")).click()
    {
      const dropdown = await driver.findElement(By.id("years"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:2001\\s+']")).click()
    }
    await driver.findElement(By.css("#submitAccount > span")).click()
  })
})

