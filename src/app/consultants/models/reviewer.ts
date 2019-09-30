export interface Reviewer {
    firstName?: string;
    lastName?: string;
    email: string;
    membershipNumber?: number;
    isAnonymous: boolean;
    isAlias: boolean;
    aliasName?: string;
}