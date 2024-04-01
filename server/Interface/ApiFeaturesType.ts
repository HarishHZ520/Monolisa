export interface QueryStringType {
    sort?: string;
    fields?: string;
    page?: number;
    limit?: number;
}

export interface QueryType {
    sort: (arg0: string) => any;
    select: (arg0: string) => any;
    skip: (arg0: number) => { (): any; new(): any; limit: { (arg0: number): any; new(): any; }; };
}
