module.exports = {
    url: 'http://admin.salesos.info/users/login',
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
            typeSelect: 'option[value="select"]',

                //xpath
                    fieldName: {
                        selector: '//a[.="Testing"]',
                        locateStrategy: 'xpath'
                    },

        //edit cumstom field 
            active: 'input[name="active"]',
            save: 'button[type="submit"]',
            typeText: 'option[value="text"]',


                //xpath
                    fieldName: {
                        selector: '//a[.="Testing"]',
                        locateStrategy: 'xpath'
                    },

                    newFieldName: {
                        selector: '//a[.="QA Test"]',
                        locateStrategy: 'xpath'
                    },
        //delete custom field
                    deleteField: 'a[class="delete-item"]',
                    
                //xpath
                    newFieldName: {
                        selector: '//a[.="QA Test"]',
                        locateStrategy: 'xpath'
                    },
    }
}