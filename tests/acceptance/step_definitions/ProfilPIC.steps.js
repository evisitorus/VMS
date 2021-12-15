const { I } = inject();

Given('The Vendor must click button {string} button where found on the right-buttom of the {string} form', () => {
    I.click('k-form-buttons.k-button');
});

Given('The Vendor will see information details from recorded data', () => {
    
});

Given('The Vendor wants to change their password', () => {
    
});

Given('The Vendor must define new password on {string} form', () => {
    I.click('col-md.k-label-empty')
    I.attachFile('#input-pic-avatar input[type=file]', './tests/acceptance/_fixture/sample_image.jpg');
    I.fillField('#input-name.k-textbox', 'George Bush');
    I.fillField('#input-phone-number.k-textbox', 'George Bush');
    I.fillField('#input-old-password.k-textbox', 'George Bush');
    I.fillField('#input-new-password.k-textbox', 'George Bush');
    I.fillField('#input-confirm-new-password.k-textbox', 'George Bush');
});

Given('', () => {
    
});

Given('', () => {
    
});

Given('', () => {
    
});

Given('', () => {
    
});

Given('', () => {
    
});

Given('', () => {
    
});