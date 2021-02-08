import { BaseInheritanceModel, DefaultClient, PBResponse, QueryArguments } from "./Client";

export class Provider implements BaseInheritanceModel {
    pk: number;
    name: string;
    authorization_flow: string;
    object_type: string;

    assigned_application_slug?: string;
    assigned_application_name?: string;

    verbose_name: string;
    verbose_name_plural: string;

    constructor() {
        throw Error();
    }

    static get(id: number): Promise<Provider> {
        return DefaultClient.fetch<Provider>(["providers", "all", id.toString()]);
    }

    static list(filter?: QueryArguments): Promise<PBResponse<Provider>> {
        return DefaultClient.fetch<PBResponse<Provider>>(["providers", "all"], filter);
    }

    static adminUrl(rest: string): string {
        return `/administration/providers/${rest}`;
    }
}
