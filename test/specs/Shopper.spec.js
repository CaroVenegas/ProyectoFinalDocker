import ShopperPage from '../pageobjects/Shopper.page';
import LoginPage from '../pageobjects/login.page';

describe('Shopper actions: ', () => {

    beforeAll(async function () {
        await LoginPage.managerLogIn('cbvs241301', 'caBeVS'); // Manager user to log in
    });

    it('1.1-should go to the Add New Shopper Page', async () => {
        ShopperPage.setGoToEditShopperPage();
        await expect(ShopperrPage.pageTitle).toHaveTextContaining('Add New Shopper');
    });


    it('1.2-should  a Shopper', async () => {
        ShopperPage.setGoToNewShopperCreationPage();
        ShopperPage.createShopper(
            "Carolina Benavides",
            "20-05-2020",
            "1 km al norte de la iglesia de San Rafael",
            "Heredia",
            "241301",
            "85271911",
            Math.floor((Math.random() * 100) + 1) + "@gmail.com", //random email to create 'n' users
            "Test241301");
        await expect(ShopperPage.pageMessage).toHaveTextContaining('Shopper Registered Successfully!!!');
    });

    it('2.1-should go to the Edit Shopper Form Page', async () => {
        ShopperPage.setGoToEditShopperPage();
        await expect(ShopperPage.pageTitle).toHaveTextContaining('Edit Shopper Form');
    });

    it('2.2-should edit a Shopper', async () => {
        ShopperPage.setGoToEditShopperPage();
        ShopperPage.editShopper("47937", "Heredia"); //Shopper ID and new address
        await expect(ShopperPage.pageMessage).toHaveTextContaining('Shopper details updated Successfully!!!');
    });

    it('3.1-should go to the Delete Shopper Form Page', async () => {
        ShopperPage.setGoToDeleteShopperPage();
        await expect(ShopperPage.pageTitle).toHaveTextContaining('Delete Shopper Form');
    });

    it('3.2-should delete a Shopper', async () => {
        ShopperPage.setGoToDeleteShopperPage();
        ShopperPage.deleteShopper("284817");//Shopper ID
        await expect(ShopperPage.pageMessage).toHaveTextContaining('Shopper deleted Successfully!!!');
    });

});
