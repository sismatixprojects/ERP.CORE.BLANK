!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkapex_admin=self.webpackChunkapex_admin||[]).push([["default-src_app_Entities_Approvals_ts-src_app_Entities_Currency_ts-src_app_Entities_Descripti-68698a"],{48968:function(t,e,i){"use strict";i.d(e,{mP:function(){return s},hD:function(){return r},LJ:function(){return a},sO:function(){return l},be:function(){return o},mr:function(){return c},nb:function(){return u},WN:function(){return p},w:function(){return h},Xf:function(){return d},F3:function(){return m},Np:function(){return f},q:function(){return v}});var s=function t(){n(this,t),this.PageNo=1,this.PageSize=10},r=function t(){n(this,t),this.PageNo=1,this.PageSize=10,this.Type=1},a=function t(){n(this,t),this.id=null,this.subsidiaryid=null,this.approvalname=null,this.approvalname_ar=null,this.approvaldescription=null,this.automatedsequence=!1,this.code=null,this.approverssequence=!1,this.hrmodelid=null,this.hrmodel=null,this.minimumapproval=1,this.employeesmanager=null,this.fieldslist=new Array,this.approverslist=new Array,this.transactionId=null,this.branchId=null,this.allBranches=!1,this.transactionmodule=null},l=function t(){n(this,t),this.id=null,this.masterid=null,this.fieldname=null,this.visiblestatus=1,this.fieldcode=null},o=function t(){n(this,t),this.id=null,this.masterid=null,this.employeeid=null,this.approvalcode=null,this.name=null,this.name_ar=null,this.sequencenum=null,this.isrequired=!1},c=function t(){n(this,t)},u=function t(){n(this,t)},p=function t(){n(this,t),this.id=null,this.subsidiaryid=null,this.statusid=null,this.statuscode=1,this.code=null,this.approvalsubject=null,this.requestowner=null,this.requestownercode=null,this.requestownername=null,this.requestownername_ar=null,this.contact=null,this.description=null,this.approvalstypeid=null,this.approvalstypecode=null,this.approvalstypename=null,this.approvalstypename_ar=null,this.date=null,this.periodfrom=null,this.periodto=null,this.reference=null,this.location=null,this.amount=0,this.notificationmsg=null,this.productslist=new Array,this.documentslist=new Array,this.approverslist=new Array,this.logstatuslist=new Array,this.lognoteslist=new Array},h=function t(){n(this,t),this.id=null,this.masterid=null,this.item_id=null,this.itemcode=null,this.itemname=null,this.itemname_ar=null,this.qty=0,this.unit_id=null},d=function t(){n(this,t),this.id=null,this.masterid=null,this.statusfrom=null,this.statusto=null,this.employeeid=null,this.employeename=null,this.employeename_ar=null,this.statusfrom_nameen=null,this.statusfrom_namear=null,this.statusto_nameen=null,this.statusto_namear=null,this.date=null,this.statustype=null},m=function t(){n(this,t),this.id=null,this.masterid=null,this.note=null,this.employeeid=null,this.employeename=null,this.employeename_ar=null,this.createddatetime=null},f=function t(){n(this,t),this.id=null,this.masterid=null,this.path=null,this.filename=null,this.filetype=null},v=function t(){n(this,t),this.id=null,this.masterid=null,this.mainapprover=!1,this.employeeid=null,this.approvalcode=null,this.name=null,this.name_ar=null,this.sequencenum=null,this.isrequired=!1,this.ismanger=!1,this.statusid=null,this.sendnotification=!1}},46817:function(t,e,i){"use strict";i.d(e,{F:function(){return s}});var s=function t(){n(this,t),this.ID=null,this.Code="",this.CurrencyPrecision=null,this.CurrencySymbol="",this.CurrencySymbolAr="",this.Name="",this.SymbolPosition="",this.SmallSymbol="",this.SmallSymbolAr="",this.NameAr=""}},86322:function(t,e,i){"use strict";i.d(e,{w:function(){return s}});var s=function t(){n(this,t),this.descriptionen="",this.descriptionar="",this.path="",this.path_ar=""}},80753:function(t,e,i){"use strict";i.d(e,{q:function(){return s}});var s=function t(){n(this,t),this.ID=null,this.Code="",this.Name="",this.IsActive=!1,this.ParentID=null,this.Name_AR="",this.Description="",this.ImageName="",this.ImagePath=""}},85162:function(t,e,i){"use strict";i.d(e,{W:function(){return s}});var s=function t(){n(this,t),this.id=null,this.code="",this.isactive=!0,this.accountmask=null,this.receivableaccount=null,this.payableaccount=null,this.minmainlevels=null,this.productionexpensesid=null,this.inventoryaccountid=null,this.accruedrevenueaccountid=null,this.subsidaryId=null,this.cashdailytime="11:00:00",this.debitaccounttoprovesalariesid=null,this.debitaccounttoprovesalariescode=null,this.creditaccountforclosingsalariesid=null,this.creditaccountforclosingsalariescode=null}},72535:function(t,e,i){"use strict";i.d(e,{b:function(){return s}});var s=function t(){n(this,t),this.code="",this.isactive=!0,this.subsidiaryid=null,this.subcontractormainaccountid=null,this.subcontractormainaccountcode=null,this.contractsubcreditsalesinstallmenttype=1,this.subcontractinvoiceafterdays=7,this.allowcontractquantitytobeexceeded=!1,this.appearanceshippingcontracts=!1}},50022:function(t,e,i){"use strict";i.d(e,{F:function(){return s}});var s=function t(){n(this,t),this.code="",this.isactive=!0,this.subsidiaryid=null,this.allowissuevoucherwithoutreceipt=!1,this.physicalnegativeinventoryid=1,this.printpriceinreceivingvoucher=!1,this.receivetransfers=!1,this.transactionserial=1,this.dispensingpolicy=1,this.percentagea=0,this.percentageb=0,this.percentagec=0,this.showcolor=!1,this.showsize=!1,this.showstyle=!1,this.showcomposition=!1,this.showseason=!1,this.showmodel=!1,this.allowitemnamerepeat=!1,this.taxcodeinitem=!1,this.garagebatchorderonbalance=!1,this.showexpireddatesforpatches=!1,this.jobordervoucher=!0,this.allowdecimalpack=!1,this.allowpack=!1,this.showspecialitemfields=!1,this.transferuserpermissions=!1,this.showstockbalance=!1,this.permissiontorepeatiteminVoucher=!1}},32904:function(t,e,i){"use strict";i.d(e,{m:function(){return s}});var s=function t(){n(this,t),this.code="",this.isactive=!0,this.subsidiaryid=null,this.costdifferencesofpurchasereturnaccountid=null,this.showcbmfieldinpurchaseorder=!1,this.purchaseseffect=1,this.purchasesreturneffect=1}},86382:function(t,e,i){"use strict";i.d(e,{C:function(){return s}});var s=function t(){n(this,t),this.code="",this.isactive=!0,this.subsidiaryid=null,this.sumcashpaymentvoucherid=1,this.salesreturneffect=null,this.creditsalesinstallmenttype=null,this.creationinvoicesetup=null,this.quotationpriceincrease=!1,this.installmentsforcreditsales=!1,this.dontallowcustphonerepeat=!1,this.mandatorycashcustomerincashsalereceipt=!1,this.payreceiptsaccordingtouserbranchsperms=!1,this.invoiceincreditnote=!0,this.allowcustnamerepeat=!1,this.printqrcodeininvoice=!1}},16638:function(t,e,i){"use strict";i.d(e,{N:function(){return s}});var s=function t(){n(this,t),this.id=0,this.departmentalternativetext="",this.departmentmandatory4re=!1,this.departmentisactive=!1,this.departmentmandatory4all=!1,this.departmentalternativetextar="",this.departmentmandatory4invtrans=!1,this.classalternativetext="",this.classmandatory4re=!1,this.classisactive=!1,this.classmandatory4all=!1,this.classalternativetextar="",this.classmandatory4invtrans=!1,this.locationalternativetext="",this.locationmandatory4re=!1,this.locationisactive=!1,this.locationmandatory4all=!1,this.locationalternativetextar="",this.locationmandatory4invtrans=!1,this.costcenteralternativetext="",this.costcentermandatory4re=!1,this.costcenterisactive=!1,this.costcentermandatory4all=!1,this.costcentermandatory4invtrans=!1,this.enablemulticurrency=!1,this.divisionalternativetext="",this.divisionmandatory4re=!1,this.divisionisactive=!1,this.divisionmandatory4all=!1,this.divisionmandatory4invtrans=!1,this.divisionalternativetextar="",this.enableconstruction=!1,this.enableclausesdefine=!1,this.enableconstructiondepartment=!1,this.enablerealstate=!1,this.multipleapprovals=!1,this.activeassets=!1}},26928:function(t,i,s){"use strict";s.d(i,{G:function(){return c}});var r=s(79996),a=s(529),l=s(31572),o=s(29063),c=function(){var t=function(){function t(e){n(this,t),this._http=e,this.baseUrl=a.N.apiUrl,this.reportUrl=a.N.aspDomain}return e(t,[{key:"GetApprovalsSettingMasterList",value:function(t){return this._http.post(this.baseUrl+"/Approvals/GetApprovalsSettingMasterList",t).pipe((0,r.U)(function(t){return t}))}},{key:"GetApprovalsSettingMasterCount",value:function(t){return this._http.post(this.baseUrl+"/Approvals/GetApprovalsSettingMasterCount",t).pipe((0,r.U)(function(t){return t}))}},{key:"ApprovalsTypesCreate",value:function(t){return this._http.post(this.baseUrl+"/Approvals/approvalstypesCreate",t).pipe((0,r.U)(function(t){return t}))}},{key:"ApprovalsTypesUpdate",value:function(t){return this._http.post(this.baseUrl+"/Approvals/ApprovalsTypesUpdate",t).pipe((0,r.U)(function(t){return t}))}},{key:"GetApprovalsTypesByID",value:function(t){return this._http.get("".concat(this.baseUrl,"/Approvals/GetApprovalsTypesByID?ID=").concat(t)).pipe((0,r.U)(function(t){return t}))}},{key:"DeleteApprovalsTypes",value:function(t){return this._http.get("".concat(this.baseUrl,"/Approvals/DeleteApprovalsTypes?ID=").concat(t)).pipe((0,r.U)(function(t){return t}))}},{key:"GetUsersBySubList",value:function(t,e){return this._http.get("".concat(this.baseUrl,"/Approvals/GetUsersBySubList?SubsidiaryID=").concat(t,"&SearchValue=").concat(e)).pipe((0,r.U)(function(t){return t}))}},{key:"GetEmployeesApprovalsBySub",value:function(t,e){return this._http.get("".concat(this.baseUrl,"/Approvals/GetEmployeesApprovalsBySub?SubsidiaryID=").concat(t,"&SearchValue=").concat(e)).pipe((0,r.U)(function(t){return t}))}},{key:"GetEmployeeRequestOwner",value:function(t){return this._http.get("".concat(this.baseUrl,"/Approvals/GetEmployeeRequestOwner?SubsidiaryID=").concat(t)).pipe((0,r.U)(function(t){return t}))}},{key:"GetLastApprovalsRequestsNumBySubs",value:function(t,e){return this._http.get("".concat(this.baseUrl,"/Approvals/GetLastApprovalsRequestsNumBySubs?subid=").concat(t,"&typeid=").concat(e)).pipe((0,r.U)(function(t){return t}))}},{key:"GetApprovalsTypeBySub",value:function(t,e){return this._http.get("".concat(this.baseUrl,"/Approvals/GetApprovalsTypeBySub?SubsidiaryID=").concat(t,"&SearchValue=").concat(e)).pipe((0,r.U)(function(t){return t}))}},{key:"ApprovalsStatus",value:function(t){return this._http.get("".concat(this.baseUrl,"/Approvals/ApprovalsStatus?Type=").concat(t)).pipe((0,r.U)(function(t){return t}))}},{key:"GetEmployeesManger",value:function(t){return this._http.get("".concat(this.baseUrl,"/Approvals/GetEmployeesManger?ID=").concat(t)).pipe((0,r.U)(function(t){return t}))}},{key:"GetApprovalRequestsList",value:function(t){return this._http.post(this.baseUrl+"/Approvals/GetApprovalRequestsList",t).pipe((0,r.U)(function(t){return t}))}},{key:"GetApprovalRequestsListCount",value:function(t){return this._http.post(this.baseUrl+"/Approvals/GetApprovalRequestsListCount",t).pipe((0,r.U)(function(t){return t}))}},{key:"ApprovalRequestsCreate",value:function(t){return this._http.post(this.baseUrl+"/Approvals/ApprovalRequestsCreate",t).pipe((0,r.U)(function(t){return t}))}},{key:"ApprovalRequestsUpdate",value:function(t){return this._http.post(this.baseUrl+"/Approvals/ApprovalRequestsUpdate",t).pipe((0,r.U)(function(t){return t}))}},{key:"GetApprovalRequestsByID",value:function(t){return this._http.get("".concat(this.baseUrl,"/Approvals/GetApprovalRequestsByID?ID=").concat(t)).pipe((0,r.U)(function(t){return t}))}},{key:"GetApprovalRequestsByReceiptId",value:function(t,e){return this._http.get("".concat(this.baseUrl,"/Approvals/GetApprovalRequestsByReceiptId?receiptId=").concat(t,"&settingId=").concat(e)).pipe((0,r.U)(function(t){return t}))}},{key:"DeleteApprovalRequests",value:function(t){return this._http.get("".concat(this.baseUrl,"/Approvals/DeleteApprovalRequests?ID=").concat(t)).pipe((0,r.U)(function(t){return t}))}},{key:"UploadFile",value:function(t){return this._http.post(this.baseUrl+"/Approvals/UploadFile",t).pipe((0,r.U)(function(t){return t}))}},{key:"DownLoadFile",value:function(t){return this._http.get("".concat(this.baseUrl,"/Approvals/DownLoadFile?path=").concat(t),{reportProgress:!0,observe:"events",responseType:"blob"})}},{key:"GetImage",value:function(t){return this._http.get(this.baseUrl+"/Approvals/GetImage?path=".concat(t),{responseType:"blob"})}},{key:"GetPdf",value:function(t){return this._http.get(this.baseUrl+"/Approvals/GetPdf?path=".concat(t),{responseType:"blob"})}},{key:"DeleteFiles",value:function(t){return this._http.post(this.baseUrl+"/Approvals/DeleteFiles",t).pipe((0,r.U)(function(t){return t}))}},{key:"GetTransactionList",value:function(){return this._http.get("".concat(this.baseUrl,"/Approvals/GetTransactionList")).pipe((0,r.U)(function(t){return t}))}},{key:"GetApprovalSettingsList",value:function(t){return this._http.post(this.baseUrl+"/Approvals/GetApprovalSettingsList",t).pipe((0,r.U)(function(t){return t}))}},{key:"GetApprovalSettingsByTransactionCode",value:function(t,e){return this._http.get("".concat(this.baseUrl,"/Approvals/GetApprovalSettingsByTransactionCode?code=").concat(t,"&subsidiaryId=").concat(e)).pipe((0,r.U)(function(t){return t}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l["\u0275\u0275inject"](o.eN))},t.\u0275prov=l["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t}()},41975:function(t,i,s){"use strict";s.d(i,{C:function(){return c}});var r=s(529),a=s(43605),l=s(31572),o=s(29063),c=function(){var t=function(){function t(e){n(this,t),this.http=e,this.baseUrl=r.N.apiUrl}return e(t,[{key:"GetAll",value:function(t){return this.http.get(this.baseUrl+"/Descriptions/GetAll?PageNum=".concat(t.pageNo,"&PageSize=").concat(t.pageSize,"&orderby=").concat(t.orderby,"&SearchValue=").concat(t.searchValue)).pipe((0,a.map)(function(t){return t}))}},{key:"GetById",value:function(t){return this.http.get(this.baseUrl+"/Descriptions/GetById?id=".concat(t)).pipe((0,a.map)(function(t){return t}))}},{key:"GetDescriptionsByCode",value:function(t){return this.http.get(this.baseUrl+"/Descriptions/GetDescriptionsByCode?code=".concat(t)).pipe((0,a.map)(function(t){return t}))}},{key:"CountOfDescriptions",value:function(t){return this.http.get(this.baseUrl+"/Descriptions/CountOfDescriptions?SearchValue=".concat(t)).pipe((0,a.map)(function(t){return t}))}},{key:"Create",value:function(t){return this.http.post(this.baseUrl+"/Descriptions/Create",t).pipe((0,a.map)(function(t){return t}))}},{key:"Update",value:function(t){return this.http.post(this.baseUrl+"/Descriptions/Update",t).pipe((0,a.map)(function(t){return t}))}},{key:"Delete",value:function(t){return this.http.get(this.baseUrl+"/Descriptions/Delete?id=".concat(t)).pipe((0,a.map)(function(t){return t}))}},{key:"GetMaxCode",value:function(){return this.http.get(this.baseUrl+"/Descriptions/GetMaxCode").pipe((0,a.map)(function(t){return t}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l["\u0275\u0275inject"](o.eN))},t.\u0275prov=l["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},37434:function(t,i,s){"use strict";s.d(i,{T:function(){return D}});var r=s(31572),a=s(94878),l=s(54189),o=s(25181),c=s(96898),u=s(7427),p=s(48160),h=s(62120),d=s(61511);function m(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"span"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&t){var n=r["\u0275\u0275nextContext"]().$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",null==n?null:n.catname," ")}}function f(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"span"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&t){var n=r["\u0275\u0275nextContext"]().$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](null==n?null:n.catname_ar)}}function v(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275template"](2,m,2,1,"span",8),r["\u0275\u0275template"](3,f,2,1,"span",8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](4,"br"),r["\u0275\u0275elementContainerEnd"]()),2&t){var n=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf","ar"!=n.lang),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","ar"==n.lang)}}function y(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](3,"br"),r["\u0275\u0275elementContainerEnd"]()),2&t){var n=e.$implicit;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",null==n?null:n.filename," ")}}function b(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](3,"br"),r["\u0275\u0275elementContainerEnd"]()),2&t){var n=e.$implicit;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",null==n?null:n.filenum," ")}}function g(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2),r["\u0275\u0275pipe"](3,"date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](4,"br"),r["\u0275\u0275elementContainerEnd"]()),2&t){var n=e.$implicit;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",r["\u0275\u0275pipeBind2"](3,1,null==n?null:n.filedate,"dd-MM-yyyy")," ")}}function S(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](3,"br"),r["\u0275\u0275elementContainerEnd"]()),2&t){var n=e.$implicit;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",null==n?null:n.description," ")}}function A(t,e){if(1&t){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"tr"),r["\u0275\u0275elementStart"](1,"td"),r["\u0275\u0275elementStart"](2,"div",6),r["\u0275\u0275elementStart"](3,"input",7),r["\u0275\u0275listener"]("change",function(){var t=r["\u0275\u0275restoreView"](n).$implicit;return r["\u0275\u0275nextContext"]().onFileSelect(t)}),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"td"),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"td"),r["\u0275\u0275template"](7,v,5,2,"ng-container",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"td"),r["\u0275\u0275template"](9,y,4,1,"ng-container",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"td"),r["\u0275\u0275template"](11,b,4,1,"ng-container",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"td"),r["\u0275\u0275template"](13,g,5,4,"ng-container",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"td"),r["\u0275\u0275template"](15,S,4,1,"ng-container",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"td"),r["\u0275\u0275text"](17),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&t){var i=e.$implicit,s=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("checked",i.isSelected),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](null==i?null:i.unassignedfilesopertaionid),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",s.FilterDocumentList(null==i?null:i.unassignedfilesopertaionid)),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",s.FilterDocumentList(null==i?null:i.unassignedfilesopertaionid)),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",s.FilterDocumentList(null==i?null:i.unassignedfilesopertaionid)),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",s.FilterDocumentList(null==i?null:i.unassignedfilesopertaionid)),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",s.FilterDocumentList(null==i?null:i.unassignedfilesopertaionid)),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](null==i?null:i.documentcount)}}var D=function(){var t=function(){function t(e,i,s,a,o,c,u,p){var h=this;n(this,t),this._documentservice=e,this.cd=i,this.toastr=s,this._router=a,this._generalService=o,this.translate=c,this._translateGlobalService=u,this.subsidiaryID=0,this.totalCount=0,this.DocumentMasterList=[],this.DocumentList=[],this.PageSize=100,this.PageNo=1,this.selectedItems=[],this.wrappersearch=new l.CU,this.selectedItem=new r.EventEmitter,this.subsidiaryID=this._generalService.SubsidiaryID,this.ngUnsubscribe=o.proadCastSubsidiaryID.subscribe(function(t){h.subsidiaryID=h._generalService.SubsidiaryID,h.PageSize=100,h.PageNo=1,h.AllUnassignedDocumentsList()}),this.ngTransUnsubscribe=this._translateGlobalService.currentLang.subscribe(function(t){h.lang=t.lang,h.dir=t.dir,h.translate.use(t.lang)})}return e(t,[{key:"ngOnInit",value:function(){this.AllUnassignedDocumentsList()}},{key:"AllUnassignedDocumentsList",value:function(){var t=this;this.wrappersearch.SubsidiaryID=this.subsidiaryID,this.wrappersearch.PageNo=this.PageNo,this.wrappersearch.PageSize=this.PageSize,this._documentservice.AllUnassignedDocuments(this.wrappersearch).subscribe(function(e){t.DocumentMasterList=e.obj,t.DocumentList=e.objdetails,t.totalCount=e.totalcount;for(var n=0;n<t.DocumentMasterList.length;n++)t.DocumentMasterList[n].isSelected=!1;console.log(t.DocumentMasterList),t.cd.markForCheck()})}},{key:"FilterDocumentList",value:function(t){return this.DocumentList.filter(function(e){return e.unassignedfilesopertaionid==t})}},{key:"onFileSelect",value:function(t){if(t.isSelected=!t.isSelected,null!=t.isSelected){if(1==t.isSelected)this.selectedItems.push(t.unassignedfilesopertaionid);else{var e=this.selectedItems.indexOf(t.unassignedfilesopertaionid);this.selectedItems.splice(e,1),console.log(this.selectedItems)}this.selectedItem.emit({list:this.selectedItems})}}},{key:"ngOnDestroy",value:function(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete(),this.ngTransUnsubscribe.next(),this.ngTransUnsubscribe.complete()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](a.S),r["\u0275\u0275directiveInject"](r.ChangeDetectorRef),r["\u0275\u0275directiveInject"](o._W),r["\u0275\u0275directiveInject"](c.F0),r["\u0275\u0275directiveInject"](u.m),r["\u0275\u0275directiveInject"](p.sK),r["\u0275\u0275directiveInject"](h.K),r["\u0275\u0275directiveInject"](c.gz))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["Documents-Modal"]],outputs:{selectedItem:"selectedItem"},features:[r["\u0275\u0275ProvidersFeature"]([a.S])],decls:30,vars:22,consts:[[1,"card"],[1,"card-body"],[1,"table-responsive"],[1,"table","text-center","m-0","table","table-striped"],[2,"background","#e9f1f5","color","cornflowerblue"],[4,"ngFor","ngForOf"],[1,"custom-control","custom-checkbox"],["type","checkbox",3,"checked","change"],[4,"ngIf"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"table",3),r["\u0275\u0275elementStart"](4,"thead"),r["\u0275\u0275elementStart"](5,"tr",4),r["\u0275\u0275element"](6,"td"),r["\u0275\u0275elementStart"](7,"th"),r["\u0275\u0275text"](8),r["\u0275\u0275pipe"](9,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"th"),r["\u0275\u0275text"](11),r["\u0275\u0275pipe"](12,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"th"),r["\u0275\u0275text"](14),r["\u0275\u0275pipe"](15,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"th"),r["\u0275\u0275text"](17),r["\u0275\u0275pipe"](18,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](19,"th"),r["\u0275\u0275text"](20),r["\u0275\u0275pipe"](21,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](22,"th"),r["\u0275\u0275text"](23),r["\u0275\u0275pipe"](24,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](25,"th"),r["\u0275\u0275text"](26),r["\u0275\u0275pipe"](27,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](28,"tbody"),r["\u0275\u0275template"](29,A,18,8,"tr",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](8),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](9,8,"Num")),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](12,10,"DocumentType")),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](15,12,"DocumentName")),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](18,14,"FileNumber")),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](21,16,"FileDate")),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](24,18,"Description")),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](27,20,"DocumentsCount")),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",e.DocumentMasterList))},directives:[d.sg,d.O5],pipes:[p.X$,d.uU],styles:[""],changeDetection:0}),t}()},60227:function(t,i,s){"use strict";s.d(i,{N:function(){return v}});var r=s(31572),a=s(61900),l=s(96898),o=s(48160),c=s(62120),u=s(41975),p=s(5851),h=s(61511);function d(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&t){var n=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",n.description," ")}}function m(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&t){var n=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",n.descriptionen," ")}}function f(t,e){if(1&t&&(r["\u0275\u0275template"](0,d,2,1,"p",2),r["\u0275\u0275template"](1,m,2,1,"p",2)),2&t){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("ngIf","ar"==n.lang),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","ar"!=n.lang)}}var v=function(){var t=function(){function t(e,i,s,r,a,l,o){n(this,t),this._ReceiptSharedService=e,this.cd=i,this._router=s,this.translate=a,this._translateGlobalService=l,this.DescriptionsService=o,this.lang="",this.code=""}return e(t,[{key:"getByCodeDescription",value:function(t){var e=this;this.code=t,this.DescriptionsService.GetDescriptionsByCode(this.code).subscribe(function(t){e.description=t.descriptionar,e.path=t.path_ar,e.descriptionen=t.descriptionen,e.pathen=t.path})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](a.t),r["\u0275\u0275directiveInject"](r.ChangeDetectorRef),r["\u0275\u0275directiveInject"](l.F0),r["\u0275\u0275directiveInject"](l.gz),r["\u0275\u0275directiveInject"](o.sK),r["\u0275\u0275directiveInject"](c.K),r["\u0275\u0275directiveInject"](u.C))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["description-tooltip"]],inputs:{lang:"lang",code:"code"},decls:4,vars:2,consts:[["htmlContent",""],["type","button","triggers","click","placement","top",1,"tooltip-btn",3,"autoClose","ngbTooltip","click"],[4,"ngIf"]],template:function(t,e){if(1&t&&(r["\u0275\u0275template"](0,f,2,2,"ng-template",null,0,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275elementStart"](2,"button",1),r["\u0275\u0275listener"]("click",function(){return e.getByCodeDescription(e.code)}),r["\u0275\u0275text"](3,"\u061f"),r["\u0275\u0275elementEnd"]()),2&t){var n=r["\u0275\u0275reference"](1);r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("autoClose","outside")("ngbTooltip",n)}},directives:[p._L,h.O5],styles:[".tooltip-btn[_ngcontent-%COMP%]{background-color:#ecf0f1!important;border-radius:50%;padding:0 9px;color:#bdc3c7!important;font-size:15px;margin:10px;border:0 solid #fff!important}"]}),t}()},49202:function(t,i,s){"use strict";s.d(i,{X:function(){return a}});var r=s(31572),a=function(){var t=function(){function t(e){n(this,t),this.el=e,this.regex=new RegExp(/^[-]?[0-9]+(\.[0-9]*)*$/g),this.specialKeys=["Backspace","Tab","ArrowLeft","ArrowRight","-"]}return e(t,[{key:"onKeyDown",value:function(t){if(-1===this.specialKeys.indexOf(t.key)&&!(86===t.keyCode&&(t.ctrlKey||t.metaKey)||67===t.keyCode&&(t.ctrlKey||t.metaKey))){var e=this.el.nativeElement.value.concat(t.key);e&&!String(e).match(this.regex)&&t.preventDefault()}}},{key:"onPaste",value:function(t){var e=t.clipboardData.getData("text"),n=this.el.nativeElement.value.concat(e);n&&!String(n).match(this.regex)&&t.preventDefault()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](r.ElementRef))},t.\u0275dir=r["\u0275\u0275defineDirective"]({type:t,selectors:[["","NumbersOnly",""]],hostBindings:function(t,e){1&t&&r["\u0275\u0275listener"]("keydown",function(t){return e.onKeyDown(t)})("paste",function(t){return e.onPaste(t)})}}),t}()},85338:function(t,e,n){"use strict";n.d(e,{N:function(){return i}});var i=function(t){return t[t.ApprovalsTypesView=17109]="ApprovalsTypesView",t[t.ApprovalsTypesAdd=17110]="ApprovalsTypesAdd",t[t.ApprovalsTypesEdit=17111]="ApprovalsTypesEdit",t[t.ApprovalsTypesDelete=17112]="ApprovalsTypesDelete",t[t.ApprovalsRequestsView=18100]="ApprovalsRequestsView",t[t.ApprovalsRequestsAdd=18101]="ApprovalsRequestsAdd",t[t.ApprovalsRequestsEdit=18102]="ApprovalsRequestsEdit",t[t.ApprovalsRequestsDelete=18103]="ApprovalsRequestsDelete",t}({})},88402:function(t,e,i){"use strict";i.d(e,{$:function(){return l}});var s=i(31572),r=i(61511),a=i(29743);i(10709),i(20345),i(42213);var l=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[r.ez],a.m8]}),t}()}}])}();