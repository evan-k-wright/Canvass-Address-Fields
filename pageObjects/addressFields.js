module.exports = {
    url: 'https://admin.saleshub.io/users/login',
    elements: {
        //login
            canvassApp: 'a[class="enabled app-canvass"]',
            canvass: 'div[class="current-app"]',
            companyURL: 'input[placeHolder="Company URL"]',
            loginButton: 'button[type="submit"]', 
            password: 'input[placeHolder="Password"]',
            salesHub: 'div[class="current-app"]',
            username: 'input[placeHolder="Username"]',

        //add address field
            active: 'input[name="active"]',
            addressFieldTab: 'a[href="/addressFields',
            addressFieldsTitle: 'h1',
            cancel: 'a[class="cancel-button"]',
            newAddressField: 'a[href="/addressFields/add"]',
            newName: 'input[name="name"]',
            save: 'button[type="submit"]',
            typeSelect: 'option[value="select"]'

    }
}