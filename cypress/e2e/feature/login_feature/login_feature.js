import { locator } from "../../locator/locator";
import { login_page } from "../../page/login_page/login_page";


const login_feature = {

    login(title, username, password) {
        login_page.contains_text(locator.title(), title);
        login_page.input_username(locator.username(), username);
        login_page.input_password(locator.password(), password);
        login_page.get_should(locator.username(), username);
        login_page.wait_page(1000);
        login_page.get_should(locator.password(), password);
        login_page.wait_page(1000);
        login_page.click_element(locator.button_save());
    },

    menu(menu) {
        cy.clickLink(menu);
    }
}

export { login_feature }