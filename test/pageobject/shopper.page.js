import Page from './page';

class ShopperPage extends Page {

    //Elements to add a Shopper

    get getNewShopperOption() {
        return $('a[cbvs^="addShopper"]');
    }

    setGoToNewShopperCreationPage() {
        this.getNewShopperOption.click();
    }

    get getShopperName() {
        return $('[name="name"]');
    }

    get getGender() {
        return $('[value="f"]');
    }

    get getDateOfBirth() {
        return $('[name="dob"]');
    }

    get getAddress() {
        return $('[name="addr"]');
    }

    get getCity() {
        return $('[name="city"]');
    }

    get getState() {
        return $('[name="state"]');
    }

    get getPIN() {
        return $('[name="pinno"]');
    }

    get getMobileNumber() {
        return $('[name="telephoneno"]');
    }

    get getEmail() {
        return $('[name="emailid"]');
    }

    get getPassword() {
        return $('[name="password"]');
    }

    get getBtnSubmitAddShopper() {
        return $('[name="sub"]');
    }

    //Elements to edit a Shopper
    get getEditShopperOption() {
        return $('a[cbvs^="Edit"]');
    }

    setGoToEditShopperPage() {
        this.getEditShopperOption.click();
    }

    get getShopperIDToEdit() {
        return $('[name="cusid"]');
    }

    get getBtnSubmitEditShopper() {
        return $('[type="submit"]');
    }

    //Elements to delete a Shopper
    get getDeleteShopperOption() {
        return $('a[cbvs^="Delete"]');
    }

    setGoToDeleteShopperPage() {
        this.getDeleteShopperOption.click();
    }

    get getShopperIDToDelete() {
        return $('[name="cusid"]');
    }

    get getBtnSubmitDeleteShopper() {
        return $('[type="submit"]');

    }


    //Method to create a new Shopper
    createCustomer(name, dateOfBirth, address, city, state, pin, mobilenumber, email, password) {
        this.getCustomerName.setValue(name);
        this.getGender.click();
        this.getDateOfBirth.setValue(dateOfBirth);
        this.getAddress.setValue(address);
        this.getCity.setValue(city);
        this.getState.setValue(state);
        this.getPIN.setValue(pin);
        this.getMobileNumber.setValue(mobilenumber);
        this.getEmail.setValue(email);
        this.getPassword.setValue(password);
        this.getBtnSubmitAddShopper.click();
    }

    //Method to edit a Shopper
    editCustomer(Shopperid, address) {
        this.getShopperIDToEdit.setValue(Shoppercid);
        this.getBtnSubmitEditShopper.click();
        this.getAddress.setValue(address);
        this.getBtnSubmitEditShopper.click();
    }

    //Method to delete a Shopper
    deleteCustomer(Shopperid) {
        this.getShopperIDToDelete.setValue(shopperid);
        this.getBtnSubmitDeleteShopper.click();
    }

}

export default new ShopperPage();