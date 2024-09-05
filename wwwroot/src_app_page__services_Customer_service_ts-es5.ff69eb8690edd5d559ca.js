!function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(self.webpackChunkapex_admin=self.webpackChunkapex_admin||[]).push([["src_app_page__services_Customer_service_ts"],{75700:function(e,n,r){"use strict";r.d(n,{v:function(){return i}});var u=r(79996),o=r(529),s=r(31572),c=r(29063),i=function(){var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.http=t,this.baseUrl=o.N.apiUrl}var n,r,s;return n=e,(r=[{key:"AllActiveCustomerCategory",value:function(){return this.http.get("".concat(this.baseUrl,"/Customer/AllActiveCustomerCategory")).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerList",value:function(t){return this.http.post(this.baseUrl+"/Customer/CustomerList",t).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerListCount",value:function(t){return this.http.post(this.baseUrl+"/Customer/CustomerListCount",t).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerByID",value:function(t,e){return this.http.get("".concat(this.baseUrl,"/Customer/CustomerByID?CustomerID=").concat(t,"&subsidiaryID=").concat(e)).pipe((0,u.U)(function(t){return t}))}},{key:"SalesMenUsers",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/SalesMenUsers?subsidiaryID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"VendorCategory",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/VendorCategory?CategoryType=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerStatuses",value:function(){return this.http.get("".concat(this.baseUrl,"/Customer/CustomerStatusesList")).pipe((0,u.U)(function(t){return t}))}},{key:"Countries",value:function(){return this.http.get("".concat(this.baseUrl,"/Customer/CountryList")).pipe((0,u.U)(function(t){return t}))}},{key:"ReceivableAccount",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/ReceivableAccount?subsidiaryID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerBalance",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/CustomerBalance?CustomerID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"CurrencyListBysubsidiaryID",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/CurrencyListBysubsidiaryID?subsidiaryID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"GovernorateByCountryID",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/GovernorateByCountryID?CountryID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"AreaByGovernorateID",value:function(t,e,n){return this.http.get("".concat(this.baseUrl,"/Customer/AreaByGovernorateID?GovernorateID=").concat(t,"&SearchValue=").concat(e,"&lang=").concat(n)).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerVendorCode",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/CustomerVendorCode?subsidiaryID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"CheckCustomerCode",value:function(t,e,n){return this.http.get("".concat(this.baseUrl,"/Customer/CheckCustomerCode?CustomerID=").concat(t,"&subsidiaryID=").concat(e,"&Code=").concat(n)).pipe((0,u.U)(function(t){return t}))}},{key:"CheckCustomerPhone",value:function(t,e,n){return this.http.get("".concat(this.baseUrl,"/Customer/CheckCustomerPhone?CustomerID=").concat(t,"&subsidiaryID=").concat(e,"&Phone=").concat(n)).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerCreate",value:function(t){return this.http.post(this.baseUrl+"/Customer/CustomerCreate",t).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerUpdate",value:function(t){return this.http.post(this.baseUrl+"/Customer/CustomerUpdate",t).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerInvoicesList",value:function(t,e,n,r,o){return this.http.get("".concat(this.baseUrl,"/Customer/CustomerInvoicesList?CustomerID=").concat(t,"&SubsidiaryID=").concat(e,"&PageNo=").concat(n,"&PageSize=").concat(r,"&Lang=").concat(o)).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerInvoicesCount",value:function(t,e){return this.http.get("".concat(this.baseUrl,"/Customer/CustomerInvoicesCount?CustomerID=").concat(t,"&SubsidiaryID=").concat(e)).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerContractList",value:function(t,e,n,r){return this.http.get("".concat(this.baseUrl,"/Customer/CustomerContractList?CustomerID=").concat(t,"&SubsidiaryID=").concat(e,"&PageNo=").concat(n,"&PageSize=").concat(r)).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerContractCount",value:function(t,e){return this.http.get("".concat(this.baseUrl,"/Customer/CustomerContractCount?CustomerID=").concat(t,"&SubsidiaryID=").concat(e)).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerAccountsList",value:function(t,e){return this.http.get("".concat(this.baseUrl,"/Customer/CustomerAccountsList?SubsidiaryID=").concat(t,"&SearchValue=").concat(e)).pipe((0,u.U)(function(t){return t}))}},{key:"GetAllSubsidaryCustomer",value:function(t,e){return this.http.get("".concat(this.baseUrl,"/Customer/GetAllSubsidaryCustomer?SubsidiaryID=").concat(t,"&SearchValue=").concat(e)).pipe((0,u.U)(function(t){return t}))}},{key:"GetVendorAccountsList",value:function(t,e){return this.http.get("".concat(this.baseUrl,"/Customer/GetVendorAccountsList?SubsidiaryID=").concat(t,"&SearchValue=").concat(e)).pipe((0,u.U)(function(t){return t}))}},{key:"GetLCAccountsList",value:function(t,e,n){return this.http.get("".concat(this.baseUrl,"/Customer/GetLCAccountsList?SubsidiaryID=").concat(t,"&lang=").concat(e,"&SearchValue=").concat(n)).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerCostcenterList",value:function(t,e){return this.http.get("".concat(this.baseUrl,"/Customer/CustomerCostcenterList?SubsidiaryID=").concat(t,"&SearchValue=").concat(e)).pipe((0,u.U)(function(t){return t}))}},{key:"AdditionalInfoTampalte",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/AdditionalInfoTampalte?SubsidiaryID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"ActivityTypes",value:function(){return this.http.get("".concat(this.baseUrl,"/Customer/ActivityTypes")).pipe((0,u.U)(function(t){return t}))}},{key:"OtherActivityTypes",value:function(){return this.http.get("".concat(this.baseUrl,"/Customer/OtherActivityTypes")).pipe((0,u.U)(function(t){return t}))}},{key:"MaintenanceUsers",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/MaintenanceUsers?SubsidiaryID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"AppointmentType",value:function(){return this.http.get("".concat(this.baseUrl,"/Customer/AppointmentType")).pipe((0,u.U)(function(t){return t}))}},{key:"DeleteCustomerVendor",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/DeleteCustomerVendor?ID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"RelCountCustomer_Vendor",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/RelCountCustomer_Vendor?ID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"CustomerOrVendorCheck",value:function(t,e){return this.http.get("".concat(this.baseUrl,"/Customer/CustomerOrVendorCheck?VendorID=").concat(t,"&TypeCheck=").concat(e)).pipe((0,u.U)(function(t){return t}))}},{key:"saveFuelCustomers",value:function(t){return this.http.post("".concat(this.baseUrl,"/Customer/saveFuelCustomers"),t).pipe((0,u.U)(function(t){return t}))}},{key:"GarageCustomerByID",value:function(t,e){return this.http.get("".concat(this.baseUrl,"/Customer/GarageCustomerByID?CustomerID=").concat(t,"&subsidiaryID=").concat(e)).pipe((0,u.U)(function(t){return t}))}},{key:"GarageCustomerCreate",value:function(t){return this.http.post(this.baseUrl+"/Customer/GarageCustomerCreate",t).pipe((0,u.U)(function(t){return t}))}},{key:"GarageCustomerUpdate",value:function(t){return this.http.post(this.baseUrl+"/Customer/GarageCustomerUpdate",t).pipe((0,u.U)(function(t){return t}))}},{key:"GetVehicles_Sizelist",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/GetVehicles_Sizelist?SubsidaryID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"UploadFile",value:function(t){return this.http.post(this.baseUrl+"/Customer/UploadFile",t).pipe((0,u.U)(function(t){return t}))}},{key:"GetImage",value:function(t){return this.http.get(this.baseUrl+"/Customer/GetImage?path=".concat(t),{responseType:"blob"})}},{key:"DeleteFiles",value:function(t){return this.http.post(this.baseUrl+"/Customer/DeleteFiles",t).pipe((0,u.U)(function(t){return t}))}},{key:"CheckCustomerVehicleRegNo",value:function(t,e){return this.http.get("".concat(this.baseUrl,"/Customer/CheckCustomerVehicleRegNo?CustomerID=").concat(t,"&Code=").concat(e)).pipe((0,u.U)(function(t){return t}))}},{key:"GetVehiclesByCustomerID",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/GetVehiclesByCustomerID?CustomerID=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"GetAllowCustNameRepeat",value:function(t){return this.http.get("".concat(this.baseUrl,"/Customer/GetAllowCustNameRepeat?Subsid=").concat(t)).pipe((0,u.U)(function(t){return t}))}},{key:"CheckCustNameRepeat",value:function(t,e,n){return this.http.get("".concat(this.baseUrl,"/Customer/CheckCustNameRepeat?CustomerID=").concat(t,"&name=").concat(e,"&name_ar=").concat(n)).pipe((0,u.U)(function(t){return t}))}}])&&t(n.prototype,r),s&&t(n,s),Object.defineProperty(n,"prototype",{writable:!1}),e}();return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](c.eN))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e}()}}])}();