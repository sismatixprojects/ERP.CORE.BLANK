(self.webpackChunkapex_admin=self.webpackChunkapex_admin||[]).push([["default-src_app_page__services_Customer_service_ts-src_app_page__services_DashBoardContractor-27bf79","src_app_page__services_Customer_service_ts"],{75700:function(t,e,s){"use strict";s.d(e,{v:function(){return u}});var r=s(79996),i=s(529),o=s(31572),a=s(29063);let u=(()=>{class t{constructor(t){this.http=t,this.baseUrl=i.N.apiUrl}AllActiveCustomerCategory(){return this.http.get(`${this.baseUrl}/Customer/AllActiveCustomerCategory`).pipe((0,r.U)(t=>t))}CustomerList(t){return this.http.post(this.baseUrl+"/Customer/CustomerList",t).pipe((0,r.U)(t=>t))}CustomerListCount(t){return this.http.post(this.baseUrl+"/Customer/CustomerListCount",t).pipe((0,r.U)(t=>t))}CustomerByID(t,e){return this.http.get(`${this.baseUrl}/Customer/CustomerByID?CustomerID=${t}&subsidiaryID=${e}`).pipe((0,r.U)(t=>t))}SalesMenUsers(t){return this.http.get(`${this.baseUrl}/Customer/SalesMenUsers?subsidiaryID=${t}`).pipe((0,r.U)(t=>t))}VendorCategory(t){return this.http.get(`${this.baseUrl}/Customer/VendorCategory?CategoryType=${t}`).pipe((0,r.U)(t=>t))}CustomerStatuses(){return this.http.get(`${this.baseUrl}/Customer/CustomerStatusesList`).pipe((0,r.U)(t=>t))}Countries(){return this.http.get(`${this.baseUrl}/Customer/CountryList`).pipe((0,r.U)(t=>t))}ReceivableAccount(t){return this.http.get(`${this.baseUrl}/Customer/ReceivableAccount?subsidiaryID=${t}`).pipe((0,r.U)(t=>t))}CustomerBalance(t){return this.http.get(`${this.baseUrl}/Customer/CustomerBalance?CustomerID=${t}`).pipe((0,r.U)(t=>t))}CurrencyListBysubsidiaryID(t){return this.http.get(`${this.baseUrl}/Customer/CurrencyListBysubsidiaryID?subsidiaryID=${t}`).pipe((0,r.U)(t=>t))}GovernorateByCountryID(t){return this.http.get(`${this.baseUrl}/Customer/GovernorateByCountryID?CountryID=${t}`).pipe((0,r.U)(t=>t))}AreaByGovernorateID(t,e,s){return this.http.get(`${this.baseUrl}/Customer/AreaByGovernorateID?GovernorateID=${t}&SearchValue=${e}&lang=${s}`).pipe((0,r.U)(t=>t))}CustomerVendorCode(t){return this.http.get(`${this.baseUrl}/Customer/CustomerVendorCode?subsidiaryID=${t}`).pipe((0,r.U)(t=>t))}CheckCustomerCode(t,e,s){return this.http.get(`${this.baseUrl}/Customer/CheckCustomerCode?CustomerID=${t}&subsidiaryID=${e}&Code=${s}`).pipe((0,r.U)(t=>t))}CheckCustomerPhone(t,e,s){return this.http.get(`${this.baseUrl}/Customer/CheckCustomerPhone?CustomerID=${t}&subsidiaryID=${e}&Phone=${s}`).pipe((0,r.U)(t=>t))}CustomerCreate(t){return this.http.post(this.baseUrl+"/Customer/CustomerCreate",t).pipe((0,r.U)(t=>t))}CustomerUpdate(t){return this.http.post(this.baseUrl+"/Customer/CustomerUpdate",t).pipe((0,r.U)(t=>t))}CustomerInvoicesList(t,e,s,i,o){return this.http.get(`${this.baseUrl}/Customer/CustomerInvoicesList?CustomerID=${t}&SubsidiaryID=${e}&PageNo=${s}&PageSize=${i}&Lang=${o}`).pipe((0,r.U)(t=>t))}CustomerInvoicesCount(t,e){return this.http.get(`${this.baseUrl}/Customer/CustomerInvoicesCount?CustomerID=${t}&SubsidiaryID=${e}`).pipe((0,r.U)(t=>t))}CustomerContractList(t,e,s,i){return this.http.get(`${this.baseUrl}/Customer/CustomerContractList?CustomerID=${t}&SubsidiaryID=${e}&PageNo=${s}&PageSize=${i}`).pipe((0,r.U)(t=>t))}CustomerContractCount(t,e){return this.http.get(`${this.baseUrl}/Customer/CustomerContractCount?CustomerID=${t}&SubsidiaryID=${e}`).pipe((0,r.U)(t=>t))}CustomerAccountsList(t,e){return this.http.get(`${this.baseUrl}/Customer/CustomerAccountsList?SubsidiaryID=${t}&SearchValue=${e}`).pipe((0,r.U)(t=>t))}GetAllSubsidaryCustomer(t,e){return this.http.get(`${this.baseUrl}/Customer/GetAllSubsidaryCustomer?SubsidiaryID=${t}&SearchValue=${e}`).pipe((0,r.U)(t=>t))}GetVendorAccountsList(t,e){return this.http.get(`${this.baseUrl}/Customer/GetVendorAccountsList?SubsidiaryID=${t}&SearchValue=${e}`).pipe((0,r.U)(t=>t))}GetLCAccountsList(t,e,s){return this.http.get(`${this.baseUrl}/Customer/GetLCAccountsList?SubsidiaryID=${t}&lang=${e}&SearchValue=${s}`).pipe((0,r.U)(t=>t))}CustomerCostcenterList(t,e){return this.http.get(`${this.baseUrl}/Customer/CustomerCostcenterList?SubsidiaryID=${t}&SearchValue=${e}`).pipe((0,r.U)(t=>t))}AdditionalInfoTampalte(t){return this.http.get(`${this.baseUrl}/Customer/AdditionalInfoTampalte?SubsidiaryID=${t}`).pipe((0,r.U)(t=>t))}ActivityTypes(){return this.http.get(`${this.baseUrl}/Customer/ActivityTypes`).pipe((0,r.U)(t=>t))}OtherActivityTypes(){return this.http.get(`${this.baseUrl}/Customer/OtherActivityTypes`).pipe((0,r.U)(t=>t))}MaintenanceUsers(t){return this.http.get(`${this.baseUrl}/Customer/MaintenanceUsers?SubsidiaryID=${t}`).pipe((0,r.U)(t=>t))}AppointmentType(){return this.http.get(`${this.baseUrl}/Customer/AppointmentType`).pipe((0,r.U)(t=>t))}DeleteCustomerVendor(t){return this.http.get(`${this.baseUrl}/Customer/DeleteCustomerVendor?ID=${t}`).pipe((0,r.U)(t=>t))}RelCountCustomer_Vendor(t){return this.http.get(`${this.baseUrl}/Customer/RelCountCustomer_Vendor?ID=${t}`).pipe((0,r.U)(t=>t))}CustomerOrVendorCheck(t,e){return this.http.get(`${this.baseUrl}/Customer/CustomerOrVendorCheck?VendorID=${t}&TypeCheck=${e}`).pipe((0,r.U)(t=>t))}saveFuelCustomers(t){return this.http.post(`${this.baseUrl}/Customer/saveFuelCustomers`,t).pipe((0,r.U)(t=>t))}GarageCustomerByID(t,e){return this.http.get(`${this.baseUrl}/Customer/GarageCustomerByID?CustomerID=${t}&subsidiaryID=${e}`).pipe((0,r.U)(t=>t))}GarageCustomerCreate(t){return this.http.post(this.baseUrl+"/Customer/GarageCustomerCreate",t).pipe((0,r.U)(t=>t))}GarageCustomerUpdate(t){return this.http.post(this.baseUrl+"/Customer/GarageCustomerUpdate",t).pipe((0,r.U)(t=>t))}GetVehicles_Sizelist(t){return this.http.get(`${this.baseUrl}/Customer/GetVehicles_Sizelist?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}UploadFile(t){return this.http.post(this.baseUrl+"/Customer/UploadFile",t).pipe((0,r.U)(t=>t))}GetImage(t){return this.http.get(this.baseUrl+`/Customer/GetImage?path=${t}`,{responseType:"blob"})}DeleteFiles(t){return this.http.post(this.baseUrl+"/Customer/DeleteFiles",t).pipe((0,r.U)(t=>t))}CheckCustomerVehicleRegNo(t,e){return this.http.get(`${this.baseUrl}/Customer/CheckCustomerVehicleRegNo?CustomerID=${t}&Code=${e}`).pipe((0,r.U)(t=>t))}GetVehiclesByCustomerID(t){return this.http.get(`${this.baseUrl}/Customer/GetVehiclesByCustomerID?CustomerID=${t}`).pipe((0,r.U)(t=>t))}GetAllowCustNameRepeat(t){return this.http.get(`${this.baseUrl}/Customer/GetAllowCustNameRepeat?Subsid=${t}`).pipe((0,r.U)(t=>t))}CheckCustNameRepeat(t,e,s){return this.http.get(`${this.baseUrl}/Customer/CheckCustNameRepeat?CustomerID=${t}&name=${e}&name_ar=${s}`).pipe((0,r.U)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275inject"](a.eN))},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()},83569:function(t,e,s){"use strict";s.d(e,{E:function(){return u}});var r=s(79996),i=s(529),o=s(31572),a=s(29063);let u=(()=>{class t{constructor(t){this.http=t,this.baseUrl=i.N.apiUrl}getActiveCustomerProjects(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/Report_ActiveCustomerProjects?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}getTotalCustomerContracts(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/Report_TotalCustomerContracts?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}getCustomersRequests(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/Report_CustomersRequests?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}getApprovedRequests(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/Report_ApprovedRequests?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}getUnderCollection(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/Report_UnderCollection?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}getActiveContractorsContracts(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/Report_ActiveContractorsContracts?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}getotalContractorContracts(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/Report_TotalContractorContracts?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}getContractorsRequest(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/Report_ContractorsRequests?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}getApprovedRequestsContract(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/Report_ApprovedRequestsContract?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}getUnderExchange(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/Report_UnderExchange?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}GetAssetsCount(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/GetAssetsCount?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}GetTotalAssetsValue(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/GetTotalAssetsValue?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}GetTotalDeprication(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/GetTotalDeprication?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}GetCurrentCostAssetType(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/GetCurrentCostAssetType?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}GetDepricationAssetType(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/GetDepricationAssetType?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}GetExpiredAssets(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/GetExpiredAssets?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}GetCloselyExpiredAssets(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/GetCloselyExpiredAssets?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}GetExpiredAssetsCount(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/GetExpiredAssetsCount?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}GetCloselyExpiredAssetsCount(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/GetCloselyExpiredAssetsCount?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}GetAssetsReachedChangeOilDateCount(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/GetAssetsReachedChangeOilDateCount?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}GetAssetsReachedChangeOilDate(t){return this.http.get(`${this.baseUrl}/DashBoardContractor/GetAssetsReachedChangeOilDate?SubsidaryID=${t}`).pipe((0,r.U)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275inject"](a.eN))},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()}}]);