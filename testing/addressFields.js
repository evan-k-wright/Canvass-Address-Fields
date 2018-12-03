const data =  require('../sources/data')

module.exports = {
    after: browser => {
        browser.end()
    },

    'Address Fields': (browser) => {
        let addressFields = browser.page.addressFields();
        addressFields.navigate()
            //login 
                .waitForElementVisible('@companyURL', 5000)
                .waitForElementVisible('@username', 5000)
                .waitForElementVisible('@password', 5000)
                .setValue('@companyURL', data.company)
                .setValue('@username', data.username)
                .setValue('@password', data.password)
                .waitForElementVisible('@loginButton', 5000)
                .click('@loginButton')
                .waitForElementVisible('@salesHub', 5000)
                .click('@salesHub')
                .waitForElementVisible('@canvassApp', 5000)
                .click('@canvassApp')
                .waitForElementVisible('@canvass', 5000)

            //add address field
                .waitForElementVisible('@addressFieldTab', 5000)
                .click('@addressFieldTab')
                .waitForElementVisible('@addressFieldsTitle', 5000)
                .waitForElementVisible('@newAddressField', 5000)
                .click('@newAddressField')
                .waitForElementVisible('@newName', 5000)
                .waitForElementVisible('@typeSelect', 5000)
                .waitForElementVisible('@active', 5000)
                .setValue('@newName', data.fieldName)
                .click('@typeSelect')
                .click('@active')
                .waitForElementVisible('@cancel', 5000)
                .click('@cancel')
                .waitForElementVisible('@newAddressField', 5000)
                .click('@newAddressField')
                .waitForElementVisible('@newName', 5000)
                .waitForElementVisible('@typeSelect', 5000)
                .waitForElementVisible('@active', 5000)
                .setValue('@newName', data.fieldName)
                .click('@typeSelect')
                .click('@active')
                .waitForElementVisible('@save', 5000)
                .click('@save')
                .waitForElementVisible('@fieldName', 5000)
                .click('@fieldName')
                .waitForElementVisible('@newName', 5000)
                .waitForElementVisible('@typeSelect', 5000)
                .waitForElementVisible('@active', 5000)
                .clearValue('@newName')
                .setValue('@newName', data.editName)
                .click('@typeText')
                .click('@active')
                .waitForElementVisible('@save', 5000)
                .click('@save')
                .waitForElementVisible('@newFieldName', 5000)
    }
}