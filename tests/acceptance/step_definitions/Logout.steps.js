const { I } = inject();

Given('The Vendor is on VMS page', () => {
    I.amOnPage('/');
});

Given('The Vendor wants to exit from the app', () => {
    I.amOnPage('/login');
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'admin@abadijaya.co.id');
    I.waitForElement('#input-password input[class=k-input]');
    I.fillField('#input-password input[class=k-input]', '1234');
    I.waitForElement('#btn-login');
    I.click('#btn-login');
    I.waitForElement('#popUpYes');
    I.click('#popUpYes');
    I.amOnPage('/');
    I.seeElement('#');
});

Given('The Vendor must clicks {string} button where found the top of the form', () => {
    
});

Given('The Vendor will see confirmation message', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
});

Given('The Vendor will exit from the app', () => {
    
});

Given('The Vendor will back to landing page from VMS', () => {
    I.amOnPage('/');
    I.seeElement('#btn-login');
});