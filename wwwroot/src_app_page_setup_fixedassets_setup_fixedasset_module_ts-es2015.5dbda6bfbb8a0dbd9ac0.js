(self.webpackChunkapex_admin=self.webpackChunkapex_admin||[]).push([["src_app_page_setup_fixedassets_setup_fixedasset_module_ts"],{88387:function(t,n,e){"use strict";e.d(n,{K0:function(){return i},m2:function(){return s},op:function(){return o},Y0:function(){return a},h1:function(){return r},nk:function(){return c},Fu:function(){return l},kn:function(){return d},jC:function(){return h},ZN:function(){return p},_U:function(){return g},ph:function(){return u},At:function(){return b},HT:function(){return C}});class i{constructor(){this.id=null,this.code="",this.isactive=!0,this.accountmask=null,this.receivableaccount=null,this.payableaccount=null,this.minmainlevels=null,this.productionexpensesid=null,this.inventoryaccountid=null,this.contractunderprogressaccountid=null,this.costdifferencesofpurchasereturnaccountid=null,this.assetsdeperciationtypeid=null,this.accruedrevenueaccountid=null,this.subsidaryId=null,this.sumcashpaymentvoucherid=1,this.cashdailytime="11:00:00",this.subcontractormainaccountid=null,this.subcontractormainaccountcode=null,this.debitaccounttoprovesalariesid=null,this.debitaccounttoprovesalariescode=null,this.creditaccountforclosingsalariesid=null,this.creditaccountforclosingsalariescode=null,this.allowissuevoucherwithoutreceipt=!1,this.inventorysetting=new s,this.messageSetting=new p,this.WorkStatusAccountList=[],this.cloudprint=new u,this.taxsetting=new g,this.emailsetting=new b}}class s{constructor(){this.id=null,this.subsidiaryid=null,this.physicalnegativeinventoryid=1,this.transactionserial=1,this.salesreturneffect=1,this.allowdecimalpack=!1,this.enablecashcustomer=!1,this.reservedqty=!1,this.allowpack=!1,this.purchaseseffect=1,this.showstockbalance=!1,this.percentagea=0,this.percentageb=0,this.percentagec=0,this.showspecialitemfields=!1,this.printpriceinreceivingvoucher=!1,this.updatelinkedreceivingvoucher=!1,this.permissiontorepeatiteminvoucher=!1,this.mandatorycashcustomerincashsalereceipt=!1,this.payreceiptsaccordingtouserbranchsperms=!1,this.showcolor=!1,this.showsize=!1,this.showstyle=!1,this.showcomposition=!1,this.showseason=!1,this.showmodel=!1,this.showcbmfieldinpurchaseorder=!1,this.installmentsforcreditsales=!1,this.creditsalesinstallmenttype=1,this.contractsubcreditsalesinstallmenttype=1,this.subcontractinvoiceafterdays=7,this.purchasesreturneffect=1,this.dispensingpolicy=1,this.qtyinproductionvouchers=1,this.quotationpriceincrease=!1,this.dontallowcustphonerepeat=!1,this.printqrcodeininvoice=!1,this.jobordervoucher=!0,this.receivetransfers=!1,this.transferuserpermissions=!1,this.activebatchesininternalpurchesandpurchesorder=!1,this.creationinvoicesetup=1,this.invoiceincreditnote=!0,this.taxcodeinitem=!1,this.allowitemnamerepeat=!1,this.allowcustnamerepeat=!1,this.confirmationpatchinissuevoucher=!1,this.garagebatchorderonbalance=!1,this.showexpireddatesforpatches=!1}}class o{constructor(){this.id=null,this.branchid=null,this.paymenttypeid=null,this.accountid=null,this.accountcode=null,this.accountname="",this.commissionaccount=null,this.commissionaccountcode=null,this.percentageorvalue=null,this.commissionperc=null,this.percentage=null,this.value=null,this.needapprovalcode=null,this.unpaidaccount=null,this.commissioncalculationoptions=null,this.postingpaymentslice=[]}}class a{constructor(){this.id=null,this.tovalue=null,this.slicepercentage=null,this.posting_paymenttype_id=null,this.fromvalue=null}}class r{constructor(){this.id=null,this.branchid=null,this.recivableaccount=null,this.recivableaccountcode=null,this.payableaccount=null,this.payableaccountcode=null,this.deliveryaccount=null,this.deliveryaccountcode=null,this.outsidesalescommissionacc=null,this.outsidesalescommissionacccode=null,this.operationprofitaccount=null,this.operationprofitaccountcode=null,this.payableoperationprofitaccount=null,this.payableoperationprofitaccountcode=null,this.taxaccount=null,this.taxaccountcode=null}}class c{constructor(){this.id=null,this.branchid=null,this.transctionid=null,this.transctioncode=null,this.accountid=null,this.accountcode=null,this.membershipaccountid=null,this.membershipaccountcode=null,this.costofinventory=null}}class l{constructor(){this.id=0,this.branchname="",this.branchid=null,this.cashdrawerid=null,this.integrationid=0}}class d{constructor(){this.id=null,this.entryno=null,this.name=null,this.namear=null,this.subsidiaryid=null,this.uriname=null,this.apiusername=null,this.apipassword=null,this.consumerkey=null,this.consumersecret=null,this.entrydate=null,this.storeid=null,this.orderstatus=null,this.branchid=null,this.timerhour=null,this.updatestock=null,this.defaultpaymentmethod=null,this.autosysorders=null,this.webistetype=null,this.branch=null,this.store=null,this.paymenttype=null,this.status=null,this.creditcard=null,this.debitcard=null,this.cash=null,this.talabatbranches=[],this.price=null}set SetServiceInformation(t){var n,e,i;this.uriname=null==t?void 0:t.url,this.apipassword=null==t?void 0:t.password,this.apiusername=null==t?void 0:t.username,this.branchid=null===(n=null==t?void 0:t.branchid)||void 0===n?void 0:n.id,this.storeid=null===(e=null==t?void 0:t.storeid)||void 0===e?void 0:e.id,this.entryno=null==t?void 0:t.entryno,this.updatestock=!!(null==t?void 0:t.updatestock),this.autosysorders=!!(null==t?void 0:t.updatestock),this.entrydate=null==t?void 0:t.entrydate,this.defaultpaymentmethod=null===(i=null==t?void 0:t.paymenttypeid)||void 0===i?void 0:i.id,this.timerhour=null==t?void 0:t.timer,this.namear=null==t?void 0:t.namear,this.name=null==t?void 0:t.nameen}}class h{constructor(){this.id=null,this.name="",this.name_ar="",this.sort=null,this.status="",this.SearchValue="",this.subsidiaryid=0}}class p{constructor(){this.id=null,this.clientid=null,this.clientusername="",this.clientpassword="",this.clientsenderid="",this.subsidiaryid=null}}class g{constructor(){this.Id=null,this.taxcode="",this.subtaxcode="",this.taxname="",this.salespercentage=0,this.purchasepercentage=0,this.salesaccountid=null,this.purchaseaccountid=null,this.subsidiaryid=null,this.salesreturnaccountid=null,this.purchasereturnaccountid=null,this.applytaxon=1,this.itempricesincludedtax=!1}}class u{constructor(){this.id=null,this.clientid="",this.clientsecret="",this.username="",this.password="",this.subsidiaryid=null}}class b{constructor(){this.id=null,this.fromemailaddress="",this.fromemailpassword="",this.mailhost="",this.ssl=!1,this.mailhostport=0,this.subsidiaryid=null}}class C{constructor(){this.id=null,this.status_name="",this.status_name_ar="",this.code="",this.SearchValue="",this.subsidiaryid=0,this.filter=!1,this.filterby=0,this.filterd=null}}},5477:function(t,n,e){"use strict";e.d(n,{R:function(){return r}});var i=e(79996),s=e(529),o=e(31572),a=e(29063);let r=(()=>{class t{constructor(t){this.http=t,this.baseUrl=s.N.apiUrl}GetBySubsidaryId(t){return this.http.get(`${this.baseUrl}/Setting/GetBySubsidaryId?SubsidiaryID=${t}`).pipe((0,i.U)(t=>t))}GetSetupCode(){return this.http.get(`${this.baseUrl}/Setting/GetLastSetupCode`).pipe((0,i.U)(t=>t))}CountAssetDescription(t){return this.http.get(`${this.baseUrl}/Setting/CountAssetDescription?SubsidiaryID=${t}`).pipe((0,i.U)(t=>t))}Create(t,n,e){return this.http.get(`${this.baseUrl}/Setting/Create?Selectedvalue=${t}&SubsidaryId=${n}&code=${e}`).pipe((0,i.U)(t=>t))}Update(t,n){return this.http.get(`${this.baseUrl}/Setting/Update?Selectedvalue=${t}&id=${n}`).pipe((0,i.U)(t=>t))}GetAllInstallmentTypes(){return this.http.get(`${this.baseUrl}/Setting/GetAllInstallmentTypes`).pipe((0,i.U)(t=>t))}GetSettingBySubid(t){return this.http.get(`${this.baseUrl}/Setting/GetSettingBySubid?subid=${t}`).pipe((0,i.U)(t=>t))}GetSetupbySubsId(t){return this.http.get(`${this.baseUrl}/Setting/GetSetupbySubsId?SubsidiaryID=${t}`).pipe((0,i.U)(t=>t))}GetSalesAndReturnReceiptsCount(t){return this.http.get(`${this.baseUrl}/Setting/GetSalesAndReturnReceiptsCount?subid=${t}`).pipe((0,i.U)(t=>t))}GetReceivableSetting(t){return this.http.get(`${this.baseUrl}/Setting/GetReceivableSetting?SubsidiaryID=${t}`).pipe((0,i.U)(t=>t))}CreateReceivable(t){return this.http.post(this.baseUrl+"/Setting/CreateReceivable",t).pipe((0,i.U)(t=>t))}UpdateReceivable(t){return this.http.post(this.baseUrl+"/Setting/UpdateReceivable",t).pipe((0,i.U)(t=>t))}GetTransictionAccount(t,n){return this.http.get(`${this.baseUrl}/Setting/GetTransictionAccount?SubsidiaryID=${t}&where=${n}`).pipe((0,i.U)(t=>t))}GetAllReceiptsCount(t,n){return this.http.get(`${this.baseUrl}/Setting/GetAllReceiptsCount?code=${t}&SubsidiaryID=${n}`).pipe((0,i.U)(t=>t))}GetPaybalebySubsId(t){return this.http.get(`${this.baseUrl}/Setting/GetPaybalebySubsId?SubsidiaryID=${t}`).pipe((0,i.U)(t=>t))}CreatePayableSetting(t){return this.http.post(this.baseUrl+"/Setting/CreatePayableSetting",t).pipe((0,i.U)(t=>t))}UpdatePayableSetting(t){return this.http.post(this.baseUrl+"/Setting/UpdatePayableSetting",t).pipe((0,i.U)(t=>t))}GetInventorySetting(t){return this.http.get(`${this.baseUrl}/Setting/GetInventorySetting?SubsidiaryID=${t}`).pipe((0,i.U)(t=>t))}CreateInventory(t){return this.http.post(this.baseUrl+"/Setting/CreateInventory",t).pipe((0,i.U)(t=>t))}UpdateInventory(t){return this.http.post(this.baseUrl+"/Setting/UpdateInventory",t).pipe((0,i.U)(t=>t))}GetParentAccount(t){return this.http.get(`${this.baseUrl}/Setting/GetParentAccount?where=${t}`).pipe((0,i.U)(t=>t))}GetContractSetting(t){return this.http.get(`${this.baseUrl}/Setting/GetContractSetting?SubsidiaryID=${t}`).pipe((0,i.U)(t=>t))}CreateContractSetting(t){return this.http.post(this.baseUrl+"/Setting/CreateContractSetting",t).pipe((0,i.U)(t=>t))}UpdateContractSetting(t){return this.http.post(this.baseUrl+"/Setting/UpdateContractSetting",t).pipe((0,i.U)(t=>t))}AllTransiction(){return this.http.get(`${this.baseUrl}\u200b/Setting/GetAllTransictionList`).pipe((0,i.U)(t=>t))}GetTransictionByID(t){return this.http.get(`${this.baseUrl}/Setting/GetTransictionByID?ID=${t}`).pipe((0,i.U)(t=>t))}UpdateTransiction(t){return this.http.post(`${this.baseUrl}/Setting/TransictionUpdate`,t).pipe((0,i.U)(t=>t))}GetSetupById(t){return this.http.get(`${this.baseUrl}\u200b/Setting/GetSetuphByID?id=${t}`).pipe((0,i.U)(t=>t))}GetconfigurationTransactionSerial(t){return this.http.get(`${this.baseUrl}\u200b/Setting/GetconfigurationTransactionSerial?subId=${t}`).pipe((0,i.U)(t=>t))}GetSettingSubsID(t){return this.http.get(`${this.baseUrl}/Setting/GetSettingSubsID?subsid=${t}`).pipe((0,i.U)(t=>t))}CheckSetupCode(t,n,e){return this.http.get(`${this.baseUrl}/Setting/CheckSetupCode?ID=${t}&code=${n}&SubsidiaryID=${e}`).pipe((0,i.U)(t=>t))}checkAccountslevel(t,n){return this.http.get(`${this.baseUrl}/Setting/checkAccountslevel?subid=${t}&level=${n}`).pipe((0,i.U)(t=>t))}GetAccount(t,n){return this.http.get(`${this.baseUrl}/Setting/GetAccount?subid=${t}&where=${n}`).pipe((0,i.U)(t=>t))}CountSubsidiaryID(t){return this.http.get(`${this.baseUrl}/Setting/CountSubsidiaryID?SubsidiaryID=${t}`).pipe((0,i.U)(t=>t))}GetTansactionBranchAccountData(t){return this.http.get(`${this.baseUrl}/Setting/GetTansactionBranchAccountData?where=${t}`).pipe((0,i.U)(t=>t))}SaveCharOfAccount(t){return this.http.post(`${this.baseUrl}/Setting/SaveCharOfAccount`,t).pipe((0,i.U)(t=>t))}PaymentType(t){return this.http.get(`${this.baseUrl}/Receipts/PaymentType?subsidiaryID=${t}`).pipe((0,i.U)(t=>t))}GetPaymentPostingbyID(t){return this.http.get(`${this.baseUrl}/Setting/GetPaymentPostingbyID?ID=${t}`).pipe((0,i.U)(t=>t))}CheckBranchPaymentTypeInPostingPayment(t,n,e){return this.http.get(`${this.baseUrl}/Setting/CheckBranchPaymentTypeInPostingPayment?id=${t}&branchid=${n}&paymenttypeid=${e}`).pipe((0,i.U)(t=>t))}PaymentPostingCreate(t){return this.http.post(`${this.baseUrl}/Setting/PaymentPostingCreate`,t).pipe((0,i.U)(t=>t))}PaymentPostingUpdate(t){return this.http.post(`${this.baseUrl}/Setting/PaymentPostingUpdate`,t).pipe((0,i.U)(t=>t))}GetRecivablePayablePostingbyID(t){return this.http.get(`${this.baseUrl}/Setting/GetRecivablePayablePostingbyID?ID=${t}`).pipe((0,i.U)(t=>t))}CheckPayableRecievablePostingBranch(t,n){return this.http.get(`${this.baseUrl}/Setting/CheckPayableRecievablePostingBranch?id=${t}&branchid=${n}`).pipe((0,i.U)(t=>t))}PayableRecievablePostingCreate(t){return this.http.post(`${this.baseUrl}/Setting/PayableRecievablePostingCreate`,t).pipe((0,i.U)(t=>t))}PayableRecievablePostingUpdate(t){return this.http.post(`${this.baseUrl}/Setting/PayableRecievablePostingUpdate`,t).pipe((0,i.U)(t=>t))}GetTransictionPostingbyID(t){return this.http.get(`${this.baseUrl}/Setting/GetTransictionPostingbyID?ID=${t}`).pipe((0,i.U)(t=>t))}CheckTransactionsBranchesAccount(t,n,e){return this.http.get(`${this.baseUrl}/Setting/CheckTransactionsBranchesAccount?id=${t}&branchid=${n}&transctionid=${e}`).pipe((0,i.U)(t=>t))}TransactionPostingCreate(t){return this.http.post(`${this.baseUrl}/Setting/TransactionPostingCreate`,t).pipe((0,i.U)(t=>t))}TransactionPostingUpdate(t){return this.http.post(`${this.baseUrl}/Setting/TransactionPostingUpdate`,t).pipe((0,i.U)(t=>t))}WorkorderStatusAccountUpdate(t){return this.http.post(`${this.baseUrl}/Setting/WorkorderStatusAccountUpdate`,t).pipe((0,i.U)(t=>t))}GetSismatixUsers(){return this.http.get(`${this.baseUrl}/Setting/GetSismatixUsers`).pipe((0,i.U)(t=>t))}AllActiveBranchddl(t){return this.http.get(`${this.baseUrl}/Branch/GetAllActiveBranchddlbysub?SubsidiaryID=${t}`).pipe((0,i.U)(t=>t))}SaveTaxSetting(t){return this.http.post(`${this.baseUrl}/Setting/SaveTaxSetting`,t).pipe((0,i.U)(t=>t))}SaveCloudSetting(t){return this.http.post(`${this.baseUrl}/Setting/SaveCloudSetting`,t).pipe((0,i.U)(t=>t))}SaveMessageSetting(t){return this.http.post(`${this.baseUrl}/Setting/SaveMessageSetting`,t).pipe((0,i.U)(t=>t))}SaveEmailConfigration(t){return this.http.post(`${this.baseUrl}/Setting/SaveEmailConfigration`,t).pipe((0,i.U)(t=>t))}}return t.\u0275fac=function(n){return new(n||t)(o["\u0275\u0275inject"](a.eN))},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()},78189:function(t,n,e){"use strict";e.r(n),e.d(n,{SetupFixedassetModule:function(){return U},childLoaderFactory:function(){return v}});var i=e(61511),s=e(59218),o=e(45593),a=e(16073),r=e(29063),c=e(53544),l=e(96898),d=e(48160),h=e(20180),p=e(88387),g=e(5477),u=e(31572),b=e(25181),C=e(7427),P=e(62120),_=e(82589);const M=["SForm"];function O(t,n){1&t&&(u["\u0275\u0275elementStart"](0,"option",18),u["\u0275\u0275text"](1," Select "),u["\u0275\u0275elementEnd"]())}function m(t,n){1&t&&(u["\u0275\u0275elementStart"](0,"option",18),u["\u0275\u0275text"](1," \u0627\u062e\u062a\u0631 "),u["\u0275\u0275elementEnd"]())}function f(t,n){if(1&t&&(u["\u0275\u0275elementStart"](0,"span"),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&t){const t=u["\u0275\u0275nextContext"]().$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](null==t?null:t.Name)}}function S(t,n){if(1&t&&(u["\u0275\u0275elementStart"](0,"span"),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&t){const t=u["\u0275\u0275nextContext"]().$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](null==t?null:t.NameAr)}}function y(t,n){if(1&t&&(u["\u0275\u0275elementStart"](0,"option",19),u["\u0275\u0275template"](1,f,2,1,"span",20),u["\u0275\u0275template"](2,S,2,1,"span",20),u["\u0275\u0275elementEnd"]()),2&t){const t=n.$implicit,e=u["\u0275\u0275nextContext"]();u["\u0275\u0275propertyInterpolate"]("value",null==t?null:t.Id),u["\u0275\u0275property"]("selected",(null==t?null:t.Id)==e._Setup.assetsdeperciationtypeid),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf","ar"!=e.lang),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf","ar"==e.lang)}}function v(t){return new h.z(t,[{prefix:"assets/i18n/Branch/",suffix:".json"},{prefix:"assets/i18n/subsidiary/",suffix:".json"},{prefix:"assets/i18n/costcenter/",suffix:".json"},{prefix:"assets/i18n/shared/",suffix:".json"}])}const x=[{path:"fixedassetssitting",component:(()=>{class t{constructor(t,n,e,i,s,o,a,r,c){this._SettingService=t,this.cd=n,this.toastr=e,this._generalService=i,this._router=s,this.translate=a,this._translateGlobalService=r,this.spinner=c,this.subsidiaryID=0,this._Setup=new p.K0,this.toastrSuccessDelete="",this.toastrErrorDelete="",this.title="",this.SaveMsg="",this.CodeExist="",this.ErrMsg="",this.EnableConstructionMsg="",this.DisableConstructionMsg="",this.allowToChangeBasecurrency=!1,this.AssetDEscriptionDisabled=!1,this.SetupId=0,this.AssetsDeperciationTypeList=[],this.GetData=[],o.params.subscribe(t=>{this.subsidiaryID=this._generalService.SubsidiaryID,this.GetBySubsidaryId(),this.GetCountAssetDEscription()}),this.ngTransUnsubscribe=this._translateGlobalService.currentLang.subscribe(t=>{this.lang=t.lang,this.dir=t.dir,this.translate.use(t.lang)}),this.ngTransUnsubscribe=this.translate.get(["CodeExist","SaveMsg","NumNotExist","errMsg","Settings","EnableConstructionMsg","DisableConstructionMsg"]).subscribe(t=>{this.CodeExist=t.CodeExist,this.SaveMsg=t.SaveMsg,this.ErrMsg=t.errMsg,this.title=t.Settings,this.EnableConstructionMsg=t.EnableConstructionMsg,this.DisableConstructionMsg=t.DisableConstructionMsg,document.title=this.title}),this.ngUnsubscribe=i.proadCastSubsidiaryID.subscribe(t=>{this.subsidiaryID=this._generalService.SubsidiaryID,this.GetBySubsidaryId(),this.GetCountAssetDEscription(),this.cd.markForCheck()})}GetSetup(){this.AssetsDeperciationTypeList=[{Name:"Original Asset life Time",NameAr:"\u0639\u0645\u0631 \u0627\u0644\u0623\u0635\u0644 \u0627\u0644\u062d\u0642\u064a\u0642\u064a",Id:"1"},{Name:"Asset life time from Opening Balance",NameAr:"\u0639\u0645\u0631 \u0627\u0644\u0623\u0635\u0644 \u0645\u0646 \u0628\u062f\u0623 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062c",Id:"2"}],this._Setup=new p.K0,this._Setup.subsidaryId=this.subsidiaryID,this.SetupCode(),this.spinner.show()}GetBySubsidaryId(){this._SettingService.GetBySubsidaryId(this.subsidiaryID).subscribe(t=>{this.GetData=t.data,this._Setup=t.data[0],console.log("dataaa",this._Setup),this.cd.markForCheck()})}SetupCode(){this._SettingService.GetSetupCode().subscribe(t=>{this._Setup.code=(parseInt(t[0].code)+1).toString(),this.Code=t[0].code.toString(),this.cd.markForCheck()})}GetCountAssetDEscription(){this._SettingService.CountAssetDescription(this.subsidiaryID).subscribe(t=>{this.AssetDEscriptionDisabled=t[0].total>0})}SaveSetup(t){this._Setup.subsidaryId=this.subsidiaryID,null==this._Setup.id?(this._Setup.subsidaryId=this.subsidiaryID,this._SettingService.Create(this._Setup.assetsdeperciationtypeid,this._Setup.subsidaryId,this._Setup.code).subscribe(t=>{this.toastr.success(this.SaveMsg),this._router.navigate(["/page/setupfixedasset/fixedassetssitting"]),this.GetSetup()})):(this._Setup.subsidaryId=this.subsidiaryID,this._SettingService.Update(this._Setup.assetsdeperciationtypeid,this._Setup.subsidaryId).subscribe(t=>{this.toastr.success(this.SaveMsg),this._router.navigate(["/page/setupfixedasset/fixedassetssitting"]),this.GetSetup()})),this.cd.markForCheck()}ngOnInit(){this.subsidiaryID=this._generalService.SubsidiaryID,this.GetBySubsidaryId(),this.GetSetup()}Cancle(){location.reload()}}return t.\u0275fac=function(n){return new(n||t)(u["\u0275\u0275directiveInject"](g.R),u["\u0275\u0275directiveInject"](u.ChangeDetectorRef),u["\u0275\u0275directiveInject"](b._W),u["\u0275\u0275directiveInject"](C.m),u["\u0275\u0275directiveInject"](l.F0),u["\u0275\u0275directiveInject"](l.gz),u["\u0275\u0275directiveInject"](d.sK),u["\u0275\u0275directiveInject"](P.K),u["\u0275\u0275directiveInject"](_.t2))},t.\u0275cmp=u["\u0275\u0275defineComponent"]({type:t,selectors:[["app-fixedassetssitting"]],viewQuery:function(t,n){if(1&t&&u["\u0275\u0275viewQuery"](M,5),2&t){let t;u["\u0275\u0275queryRefresh"](t=u["\u0275\u0275loadQuery"]())&&(n.SForm=t.first)}},features:[u["\u0275\u0275ProvidersFeature"]([g.R])],decls:27,vars:17,consts:[[1,"card","my-4","mx-2","px-3"],[1,"card-header","p-0","position-relative","mt-n4","mx-3","z-index-2"],[1,"bg-gradient-secondary","border-radius-lg","pt-4","pl-2","pr-2","pb-3","mb-2"],[1,"text-white","text-capitalize","ps-3","cardTitle"],["method","POST","role","form",3,"ngSubmit"],["SForm","ngForm"],[1,"row","col-md-6","col-sm-12","m-3"],["for","assetdescription",1,"col-md-4","control-label"],["name","assetdescription",1,"form-control","col-md-8",3,"ngModel","disabled","ngModelChange"],["assetdescription","ngModel"],["Value","null",4,"ngIf"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["type","submit",1,"btn","btn-success","ml-2"],[1,"ft-check-square","mr-1"],["type","button",1,"btn","btn-danger","ml-2",3,"click"],[1,"fa","fa-window-close","mr-1"],["Value","null"],[3,"selected","value"],[4,"ngIf"]],template:function(t,n){if(1&t){const t=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"div",1),u["\u0275\u0275elementStart"](2,"div",2),u["\u0275\u0275elementStart"](3,"h6",3),u["\u0275\u0275text"](4),u["\u0275\u0275pipe"](5,"translate"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"form",4,5),u["\u0275\u0275listener"]("ngSubmit",function(){u["\u0275\u0275restoreView"](t);const e=u["\u0275\u0275reference"](7);return n.SaveSetup(e)}),u["\u0275\u0275elementStart"](8,"div",6),u["\u0275\u0275elementStart"](9,"label",7),u["\u0275\u0275text"](10),u["\u0275\u0275pipe"](11,"translate"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"select",8,9),u["\u0275\u0275listener"]("ngModelChange",function(t){return n._Setup.assetsdeperciationtypeid=t}),u["\u0275\u0275template"](14,O,2,0,"option",10),u["\u0275\u0275template"](15,m,2,0,"option",10),u["\u0275\u0275template"](16,y,3,4,"option",11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](17,"div",12),u["\u0275\u0275elementStart"](18,"div",13),u["\u0275\u0275elementStart"](19,"button",14),u["\u0275\u0275element"](20,"i",15),u["\u0275\u0275text"](21),u["\u0275\u0275pipe"](22,"translate"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](23,"button",16),u["\u0275\u0275listener"]("click",function(){return n.Cancle()}),u["\u0275\u0275element"](24,"i",17),u["\u0275\u0275text"](25),u["\u0275\u0275pipe"](26,"translate"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}2&t&&(u["\u0275\u0275advance"](4),u["\u0275\u0275textInterpolate1"](" ",u["\u0275\u0275pipeBind1"](5,9,"fixedassetssitting")," "),u["\u0275\u0275advance"](6),u["\u0275\u0275textInterpolate"](u["\u0275\u0275pipeBind1"](11,11,"assetdescriptionType")),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngModel",n._Setup.assetsdeperciationtypeid)("disabled",n.AssetDEscriptionDisabled),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf","ar"!=n.lang),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf","ar"==n.lang),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",n.AssetsDeperciationTypeList),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate1"]("",u["\u0275\u0275pipeBind1"](22,13,"Submit")," "),u["\u0275\u0275advance"](4),u["\u0275\u0275textInterpolate1"](" ",u["\u0275\u0275pipeBind1"](26,15,"Cancel")," "))},directives:[a._Y,a.JL,a.F,a.EJ,a.JJ,a.On,i.O5,i.sg,a.YN,a.Kr],pipes:[d.X$],styles:['.searchBarSection[_ngcontent-%COMP%]{direction:ltr}.form-section[_ngcontent-%COMP%]{background-color:#fff;box-shadow:8px 8px 5px 0 rgba(25,42,70,.1);padding:15px;margin-bottom:10px}.form-section[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:100%;margin-top:0}.form-section[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]:after{background-color:#4ba6ec}.form-section[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]:before, .form-section[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]:before{border:1px solid #4ba6ec}form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{line-height:1rem}.form-section[_ngcontent-%COMP%], .headerinfo[_ngcontent-%COMP%]{border-radius:15px}.btn-primary[_ngcontent-%COMP%], .headerform[_ngcontent-%COMP%], .headerinfo[_ngcontent-%COMP%]{background-color:#4ba6ec}.btn-primary[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:hover{background:#4ba6ec}input[name=SearchValue][_ngcontent-%COMP%]{background-color:#fff}.card-body[_ngcontent-%COMP%]{padding:0}.card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:0}.invalid-data[_ngcontent-%COMP%]{border:1px solid red}.nav-tabs[_ngcontent-%COMP%]{background-color:#f1f9ff;border-bottom:none}.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:1em;color:#333;position:relative}.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:before{content:"";left:0;background-color:#dee2e6;width:1px;position:absolute;height:70%;top:8px}.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#4ba6ec;border-bottom:none}.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:after{top:98%;left:50%;content:"";height:0;width:0;position:absolute;pointer-events:none;border:10px solid rgba(136,183,213,0);border-top-color:#f7f7f8;margin-left:-10px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.5rem .2rem!important}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .taslsLink[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .taslsLink[_ngcontent-%COMP%]{display:block;font-size:.8em;color:#333!important;text-decoration:underline}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .addTasksIcon[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .addTasksIcon[_ngcontent-%COMP%]{width:1em;height:1em}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%]   i.fa-plus[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .addTasksIcon[_ngcontent-%COMP%]   i.fa-plus[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%]   i.fa-plus[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .addTasksIcon[_ngcontent-%COMP%]   i.fa-plus[_ngcontent-%COMP%]{color:#fff;font-size:11px!important;top:-14px;z-index:1}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%]   i.fa-stack-2x[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .addTasksIcon[_ngcontent-%COMP%]   i.fa-stack-2x[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%]   i.fa-stack-2x[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .addTasksIcon[_ngcontent-%COMP%]   i.fa-stack-2x[_ngcontent-%COMP%]{top:-5px;font-size:1em!important}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%]   i.fa-list-alt.fa-stack-2x[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .addTasksIcon[_ngcontent-%COMP%]   i.fa-list-alt.fa-stack-2x[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%]   i.fa-list-alt.fa-stack-2x[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .addTasksIcon[_ngcontent-%COMP%]   i.fa-list-alt.fa-stack-2x[_ngcontent-%COMP%]{font-size:1.1em!important}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%]   i.fa-plus-circle.fa-stack-1x[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .addTasksIcon[_ngcontent-%COMP%]   i.fa-plus-circle.fa-stack-1x[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%]   i.fa-plus-circle.fa-stack-1x[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .addTasksIcon[_ngcontent-%COMP%]   i.fa-plus-circle.fa-stack-1x[_ngcontent-%COMP%]{top:-6px;right:-10px}.form-control.totalValInput[_ngcontent-%COMP%]{background-color:transparent!important;border:none;font-size:1.1em;cursor:default;font-weight:700}.form-control[readonly][_ngcontent-%COMP%]{background-color:#f7f7f7}@media (max-width:800px){form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{font-size:.85rem}}@media (max-width:500px){.headerform[_ngcontent-%COMP%]{padding:5px 10px}.buttons-ds[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%]{min-width:30%;margin-top:5px}.text-center-sm[_ngcontent-%COMP%]{text-align:center!important}}.btn-primary[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:hover{background:#26c6da}.headerform[_ngcontent-%COMP%]{font-size:1.5rem;padding:5px 2em}.headerform[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{border-radius:5px}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]{background-color:#fff}table.table-responsive[_ngcontent-%COMP%]{display:table}table[_ngcontent-%COMP%]   .tableheader[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:transparent;color:#7b809a;background:#80808030}table[_ngcontent-%COMP%]   .tableheader[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;padding:.8rem}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:50px}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.5rem;border-top:none}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1rem!important}.gridActionsTd[_ngcontent-%COMP%]{min-width:20px;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;padding:.5rem .1rem!important;width:50px;white-space:nowrap}.gridActionsTd[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .gridActionsTd[_ngcontent-%COMP%]   bottom[_ngcontent-%COMP%]{display:inline-block;border:none;background:transparent!important;color:#26c6da;padding:5px 2px}.gridActionsTd[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, .gridActionsTd[_ngcontent-%COMP%]   bottom[_ngcontent-%COMP%]:hover{background:transparent;box-shadow:none}.card-body[_ngcontent-%COMP%]   .has-error[_ngcontent-%COMP%]{color:red;transition:all 1s;border:none}.cardTitle[_ngcontent-%COMP%]{top:25%}.SearchValue[_ngcontent-%COMP%]{width:auto}.pagination-display-block[_ngcontent-%COMP%], .pagination-display-block[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{color:#7b809a!important}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]{padding:8px;border-collapse:separate;box-sizing:border-box;background-color:#fff}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border-top:none}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#fff}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead.tabel-header-style-two[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1)!important;margin-top:.5rem!important;padding:.1rem .2rem!important}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:25px;max-height:25px;padding:.1rem .5rem!important}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem .5rem!important}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .icon.icon-shape[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%]   .fa-sticky-note[_ngcontent-%COMP%]{left:14px;top:-9px}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .icon.icon-shape[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%]{top:-11px;left:-1px;font-size:9px!important}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .icon.icon-shape.bg-gradient-warning[_ngcontent-%COMP%]   .addNotesIcon[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%]{color:#ffa726}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .icon.icon-shape[_ngcontent-%COMP%]:first-child{right:8%}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .icon.icon-shape[_ngcontent-%COMP%]:nth-child(2){right:4.5%}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .icon.icon-shape[_ngcontent-%COMP%]:last-child{right:1%}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child{border-top-left-radius:10px}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child{border-top-right-radius:10px}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{line-height:1.25;font-size:.75rem!important;font-weight:400;color:#7b809a}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]:last-child   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child{border-bottom-left-radius:10px}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]:last-child   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:10px}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:0}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:700;font-size:.875rem}.card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   table.bill-design[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:right!important}@media (max-width:800px){input[name=SearchValue][_ngcontent-%COMP%]{margin-top:10px}}@media (max-width:576px){.pagination-display-block[_ngcontent-%COMP%]{display:block!important;text-align:center}}.cardTitle[_ngcontent-%COMP%]{position:absolute;top:8%!important;font-size:22px}'],changeDetection:0}),t})()}];let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=u["\u0275\u0275defineInjector"]({providers:[d.gM,d.sK],imports:[[a.u5,i.ez,s.m,a.UX,c.WN,l.Bz.forChild(x),d.aw.forChild({loader:{provide:d.Zw,useFactory:v,deps:[r.eN]},extend:!0}),o.xc]]}),t})()}}]);