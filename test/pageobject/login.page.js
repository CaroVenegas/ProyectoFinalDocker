import Page from './page';

class LoginPage extends Page {


    managerLogIn(username, password) {
        return browser.url(`http://${username}:${password}@demo.guru99.com/V4/manager/Managerhomepage.php`);
    }

    open() {
        return super.open('login');
    }

    //Elements to change password

    get getChangePassowordOption() {
        return $('a[cbvs^="PasswordInput"]');
    }

    setGoToChangePasswordPage() {
        this.getChangePassowordOption.click();
    }

    get getChangePasswordOption() {
        return $('a[cbvs^="PasswordInput"]');
    }

    get getOldPassword() {
        return $('[name="oldpassword"]');
    }

    get getNewPassword() {
        return $('[name="newpassword"]');
    }

    get getConfirmPassword() {
        return $('[name="confirmpassword"]');
    }

    get getBtnSubmitChangePassword() {
        return $('[type="submit"]');
    }

    //Method to change the manager password
    changeManagerPassword(oldpassword, newpassword, confirmpassword) {
        this.getOldPassword.setValue(oldpassword);
        this.getNewPassword.setValue(newpassword);
        this.getConfirmPassword.setValue(confirmpassword);
        this.getBtnSubmitChangePassword.click();
    }
}


export default new LoginPage();