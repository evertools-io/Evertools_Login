import LicenseModelGenerated from "./generated/LicenseModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = LicenseModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await LicenseModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...LicenseModelGenerated,
  ...customModel
};
