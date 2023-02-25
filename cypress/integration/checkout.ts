import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('Test Sauce Demo Sauce labs checkout sauce labs backpack success', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addToCart()
    dashboardPage.shoppingcart()
    dashboardPage.clickcheckout()
    dashboardPage.inputFirstName()
    dashboardPage.inputLastName()
    dashboardPage.inputZipCode()
    dashboardPage.clickContinue()
    dashboardPage.clickfnish()
})
it('Test Sauce Demo Sauce labs checkout sauce labs backpack failed', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addToCart()
    dashboardPage.shoppingcart()
    dashboardPage.clickcheckout()
    dashboardPage.clickcontinuegagal()
})
