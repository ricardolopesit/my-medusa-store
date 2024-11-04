import MyTaxProvider from "./my-tax";
import {ModuleProvider} from "@medusajs/utils";
import {Modules} from "@medusajs/framework/utils";

const services = [MyTaxProvider];

export default ModuleProvider(Modules.TAX,{
    services
});