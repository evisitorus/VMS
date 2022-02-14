const { I } = inject();

Given('The Vendor is on VMS page', () => {
    I.amOnPage('/');
});

Given('The Vendor wants to exit from the app', () => {
    I.amOnPage('/login');
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'admin@abadijaya.co.id');
    I.waitForElement('#input-password input[class=k-input]');
    I.fillField('#input-password input[class=k-input]', '12345678');
    I.waitForElement('#btn-login');
    I.click('#btn-login');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
    I.amOnPage('/');
    I.seeElement('#btn-logout');
});

Given('The Vendor must clicks {string} button where found the top of the form', () => {
    I.waitForElement('#btn-logout');
    I.click('#btn-logout');
});

Given('The Vendor will see confirmation message', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
});

Given('The Vendor will exit from the app', () => {
    I.amOnPage('/');
    
});

Given('The Vendor will back to landing page from VMS', () => {
    I.seeInCurrentUrl('/');
});