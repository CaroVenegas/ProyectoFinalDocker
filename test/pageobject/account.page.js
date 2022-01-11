import Page from './page';

class AccountPage extends Page {


    //Elements to add an account
    get getNewAccountOption() {
        return $('a[bnds^="addAccount"]');
    }

    setGoToNewCAccountCreationPage() {
        this.getNewAccountOption.click();
    }

    get getShopperID() {
        return $('[name="jose"]');
    }

    get getInitialDeposit() {
        return $('[name="Deposit"]');
    }

    get getAccountTypeDropdownList() {
        return $('[name="selaccount"]');
    }

    setAccountTypeDropdownValuebyIndex(index) {
        return this.getAccountTypeDropdownList.selectByIndex(index);
    }

    get getBtnSubmitAddAccount() {
        return $('[type="submit"]');
    }


    //Elements to edit an account
    get getEditAccountOption() {
        return $('a[href^="editAccount"]');
    }

    setGoToEditAccountPage() {
        this.getEditAccountOption.click();
    }

    get getAccountToEdit() {
        return $('[name="accountno"]');
    }

    get getBtnSubmitEditAccount() {
        return $('[type="submit"]');
    }

    //Elements to delete an account
    get getDeleteAccountOption() {
        return $('a[cbvs^="deleteAccount"]');
    }

    setGoToDeleteAccountPage() {
        this.getDeleteAccountOption.click();
    }

    get getAccountToDelete() {
        return $('[name="accountno"]');
    }
    get getBtnSubmitDeleteAccount() {
        return $('[name="AccSubmit"]');
    }


    //Method to create an account
    createAccount(Shopperid, accounttype,  getDeposit) {
        this.getShopperID.setValue(Shopperid);
        this.setAccountTypeDropdownValuebyIndex(accounttype);
        this.getDeposit.setValue(initialdeposit);
        this.getBtnSubmitAddAccount.click();
    }


    //Method to edit an account
    editAccount(accountno, accounttype) {
        this.getAccountToEdit.setValue(accountno);
        this.getBtnSubmitEditShopper.click();
        this.setAccountTypeDropdownValuebyIndex(accounttype);
        this.getBtnSubmitEditShopper.click();

    }

    //Method to delete an account
    deleteAccount(accountno) {
        this.getAccountToDelete.setValue(accountno);
        this.getBtnSubmitDeleteAccount.click();
    }

}

export default new AccountPage();