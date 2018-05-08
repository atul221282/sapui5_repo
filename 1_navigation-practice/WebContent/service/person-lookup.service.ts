
namespace service {

    class PersonLookupService implements servicemodel.IPersonLookupService {
        getProducts(params: servicemodel.ODataReadParams): void {
            params.backendModel.read(`/Products`, {
                filters: params.filters,
                success: params.sucecssCallback,
                error: params.errorCallback
            });
        }
    }
    sap.ui.define([], () => new PersonLookupService());
}