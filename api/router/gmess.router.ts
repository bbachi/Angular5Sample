import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { EnvironmentConfig } from 'env-read';
import {
    PreLoginController,
    TransactionsController,
    ReportsController,
    FormsController,
    MyAccountController,
    ProfileController,
    StartServiceController,
    StopServiceController,
    VUMController,
    BillingController,
    ContentController,
    CCController,
    PreviousBillsController,
    ContractAccountController,
    PaymentHistoryController,
    PCIController
  } from '../controller';


export class GMESSRouter {

     router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        var preloginController = new PreLoginController();
        var transactionsController = new TransactionsController();
        var reportsController = new ReportsController();
        var formsController = new FormsController();
        var myAccountController = new MyAccountController();
        var profileController = new ProfileController();
        var startserviceController = new StartServiceController();
        var stopServiceController = new StopServiceController();
        var vumController = new VUMController();
        var billingController = new BillingController();
        var contentController = new ContentController();
        var ccController = new CCController();
        var previousBillsController = new PreviousBillsController();
        var caController = new ContractAccountController();
        var paymentHistoryController = new PaymentHistoryController();
        var pciController = new PCIController();

        this.router.get('/get', preloginController.testget);
        this.router.get('/environment/ui', (req: Request, res: Response, next: NextFunction) => res.json(EnvironmentConfig.getEnvConfig().ui));

        /* Prelogin calls start */
        this.router.post('/prelogin/firstlogin/get', preloginController.getFirstLogonFlag);
        this.router.post('/prelogin/firstlogin/set', preloginController.setFirstLogonFlag);
        this.router.post('/prelogin/user/details', preloginController.getUserProfileDetails);
        this.router.post('/prelogin/search/bpnumber', preloginController.searchByBpNumber);
        this.router.post('/prelogin/search/taxid', preloginController.searchByFedTaxId)
        /* Prelogin calls end */

        /* Transactions calls start */
        this.router.post('/transactions/list', transactionsController.listTransactions);
        this.router.post('/transactions/detail', transactionsController.detailTransaction);
        /* Transactions calls end */

        /* Reports calls start */
        this.router.post('/reports/vacancy', reportsController.vacancyReport);
        this.router.post('/reports/roll', reportsController.rollReport);
        /* Reports calls end */

        /* Forms calls start */
        this.router.post('/forms/list', formsController.getGMEForms);
        this.router.post('/forms/pdf/', formsController.getPDFs);
        //this.router.get('/form/pdf/:pid',formsController.getPDF);
        //this.router.post('/reports/roll', reportsController.rollReport);
        /* Forms calls end */

        /* MyAccount calls start */
        this.router.post('/dashboard/custdtls', myAccountController.getCustomerDetails);
        this.router.post('/multifamily/noncaa/esiid/list', myAccountController.getMFESIIDListForNONCAABPList);
        /* MyAccount calls end */

        /* Start service calls start */
        this.router.post('/service/start/addresses/list', startserviceController.listPropertyAddress);
        this.router.post('/service/start/submit', startserviceController.startServiceSubmit);
        this.router.post('/service/start/promocode/list',startserviceController.getpromoCodeDetails);
        this.router.post('/service/unavailableDates', startserviceController.getUnavailableDates);
        this.router.post('/service/selectunitsGetNearTo5pm', startserviceController.getNearto5PMFlagSelectUnits);
        this.router.post('/service/verifyGetNearTo5pm', startserviceController.getNearto5PMFlagVerifyPage);
        /* Start service calls stop */

        /* Stop service calls start */
        this.router.post('/service/stop/addresses/list', stopServiceController.listPropertyAddress);
        this.router.post('/service/stop/submit', stopServiceController.stopServiceSubmit);
        /* Stop service calls stop */

        /* VUM calls start */
        this.router.post('/vum/vacant/dailyreport', vumController.getVacantDailyReport);
        this.router.post('/vum/vacant/data', vumController.getVacantDailySetupData);
        this.router.post('/vum/emailpref/update', vumController.updateEmailPreference);
        this.router.post('/vum/esiidattr/update', vumController.updateESIIDAtribute);
        /* VUM calls end */

        /* Billing calls start */
        this.router.post('/billing/previousbills/list', previousBillsController.getPreviousBills);
        this.router.post('/billing/contractaccount/list', caController.getContractAccountList);
        this.router.post('/billing/invoices/list', billingController.getBillingDetails);
        this.router.post('/billing/paymentmethods/list', billingController.getStoredBankDtls);
        this.router.post('/billing/paymentmethod/delete', billingController.deletePaymentMethod);
        this.router.post('/billing/payment/submit', billingController.submitPayment);
        this.router.post('/billing/dashboard/paydetails', billingController.getDashboardBillingDetails);
        /* Billing calls end */

        /* Payment History start */
        this.router.post('/billing/paymenthistory/list', paymentHistoryController.getPaymentHistory);
        this.router.post('/billing/payment/cancel', paymentHistoryController.cancelPayment);
        this.router.post('/billing/payment/modify', paymentHistoryController.modifyPayment);
        this.router.post('/billing/duedateforca', paymentHistoryController.getDueDateForCA);
        /* Payment History end */

        /* Profile Management calls start */
        this.router.post('/userdetails/txnid', profileController.getUserDetailsForTxnId);
        this.router.post('/profile/user/save', profileController.saveUser);
        this.router.post('/profile/user/remove', profileController.removeUser);
        this.router.post('/profile/user/username/validate', profileController.validateUserName);
        this.router.post('/profile/user/associates/list', profileController.listAssociates);
        this.router.post('/profile/user/details', profileController.getUserDetails);
        this.router.post('/profile/user/firsttime/updpassword', profileController.setupPasswordFirstTime)
        this.router.post('/profile/user/update', profileController.updateUser)
        this.router.post('/profile/user/search', profileController.searchUsersForUpdate)
        this.router.post('/profile/user/password/reset', profileController.passwordReset)
        this.router.post('/profile/user/password/update', profileController.updatePassword)
        /* Profile Management calls end */

        /* Customer care calls start */
        this.router.post('/cc/emailus', ccController.emailUs);
        /* Customer care calls start */

        /* Content calls Start */
        this.router.post('/content/plan/details', contentController.getPlanDetails);
        this.router.post('/content/faqs', contentController.getFAQs);
        this.router.post('/content/message', contentController.getMessageContentByTitle);
        /* Content calls End */

        /* PCI controller start */
        this.router.post('/pci/pcitogme', pciController.pciToGme);
        /* PCI controller end */
    }

}
