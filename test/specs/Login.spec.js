import LoginPage from '../pageobjects/login.page';

describe('Login actions: ', () => {

   it('9.1-should change the manager password', async () => {
      LoginPage.managerLogIn('mngr377083', 'YretumU');// Manager credentials to change the password
      LoginPage.setGoToChangePasswordPage();
      LoginPage.changeManagerPassword("YretumU", "qehUzEr1!", "qehUzEr1!"); //Old password, new password and confirm password
      await expect(AccountPage.pageTitle).toHaveTextContaining('Password is Changed');
   });

   it('9.2-should log in with the new credentials', async () => {
      LoginPage.managerLogIn('mngr377083', 'qehUzEr1!');// New manager password
      await expect(AccountPage.pageTitle).toHaveTextContaining('Welcome To Manager');
   });

});