// QuoteStreamerTokenAuthResult model
export interface QuoteStreamerTokenAuthResult {
  'dxlink-url': string;
  'expires-at': string; // date-time
  'issued-at': string; // date-time
  level: string;
  token: string;
  'websocket-url': string;
}

// AccountAuthorityDecorator model
export interface AccountAuthorityDecorator {
  account: Account;
  'authority-level': string;
}

// Account model
export interface Account {
  'account-number': string;
  'account-type-name': string;
  'closed-at'?: string; // date-time
  'created-at'?: string; // date-time
  'day-trader-status'?: string;
  'ext-account-id'?: string;
  'ext-crm-id'?: string;
  'external-fdid'?: string;
  'external-id'?: string;
  'funding-date'?: string; // date
  'futures-account-purpose'?: string;
  'investment-objective'?: string;
  'investment-time-horizon'?: string;
  'is-closed'?: boolean;
  'is-firm-error'?: boolean;
  'is-firm-proprietary'?: boolean;
  'is-foreign'?: string;
  'is-futures-approved'?: boolean;
  'liquidity-needs'?: string;
  'margin-or-cash'?: string;
  nickname?: string;
  'opened-at'?: string; // date-time
  'regulatory-domain'?: string;
  'risk-tolerance'?: string;
  'submitting-user-id'?: string;
  'suitable-options-level'?: string;
}

// Customer model
export interface Customer {
  id: string;
  'first-name'?: string;
  'first-surname'?: string;
  'last-name'?: string;
  'middle-name'?: string;
  'prefix-name'?: string;
  'second-surname'?: string;
  'suffix-name'?: string;
  address?: Address;
  'customer-suitability'?: CustomerSuitability;
  'mailing-address'?: Address;
  'is-foreign'?: string;
  'regulatory-domain'?: string;
  'usa-citizenship-type'?: string;
  'home-phone-number'?: string;
  'mobile-phone-number'?: string;
  'work-phone-number'?: string;
  'birth-date'?: string;
  email?: string;
  'external-id'?: string;
  'foreign-tax-number'?: string;
  'tax-number'?: string;
  'tax-number-type'?: string;
  'birth-country'?: string;
  'citizenship-country'?: string;
  'visa-expiration-date'?: string;
  'visa-type'?: string;
  'agreed-to-margining'?: boolean;
  'subject-to-tax-withholding'?: boolean;
  'agreed-to-terms'?: boolean;
  'signature-of-agreement'?: boolean;
  'desk-customer-id'?: string;
  'ext-crm-id'?: string;
  'family-member-names'?: string;
  gender?: string;
  'has-industry-affiliation'?: boolean;
  'has-institutional-assets'?: string;
  'has-listed-affiliation'?: boolean;
  'has-political-affiliation'?: boolean;
  'industry-affiliation-firm'?: string;
  'is-investment-adviser'?: string;
  'listed-affiliation-symbol'?: string;
  'political-organization'?: string;
  'user-id'?: string;
  'has-delayed-quotes'?: boolean;
  'has-pending-or-approved-application'?: string;
  'is-professional'?: boolean;
  'permitted-account-types'?: string;
  'created-at'?: string;
  entity?: Entity;
  'identifiable-type'?: string;
  person?: Person;
}

// Address model
export interface Address {
  city?: string;
  country?: string;
  'is-domestic'?: string;
  'is-foreign'?: string;
  'postal-code'?: string;
  'state-region'?: string;
  'street-one'?: string;
  'street-three'?: string;
  'street-two'?: string;
}

// CustomerSuitability model
export interface CustomerSuitability {
  id?: string;
  'annual-net-income'?: number;
  'covered-options-trading-experience'?: string;
  'customer-id'?: number;
  'employer-name'?: string;
  'employment-status'?: string;
  'futures-trading-experience'?: string;
  'job-title'?: string;
  'liquid-net-worth'?: number;
  'marital-status'?: string;
  'net-worth'?: number;
  'number-of-dependents'?: number;
  occupation?: string;
  'stock-trading-experience'?: string;
  'tax-bracket'?: string;
  'uncovered-options-trading-experience'?: string;
}

// Entity model
export interface Entity {
  id?: string;
  address?: Address;
  'business-nature'?: string;
  email?: string;
  'entity-officers'?: EntityOfficer[];
  'entity-suitability'?: EntitySuitability;
  'entity-type'?: string;
  'foreign-institution'?: string;
  'grantor-birth-date'?: string;
  'grantor-email'?: string;
  'grantor-first-name'?: string;
  'grantor-last-name'?: string;
  'grantor-middle-name'?: string;
  'grantor-tax-number'?: string;
  'has-foreign-bank-affiliation'?: string;
  'has-foreign-institution-affiliation'?: string;
  'is-domestic'?: string;
  'legal-name'?: string;
  'phone-number'?: string;
  'tax-number'?: string;
}

// EntityOfficer model
export interface EntityOfficer {
  id?: string;
  'external-id'?: string;
  'first-name'?: string;
  'last-name'?: string;
  'middle-name'?: string;
  'prefix-name'?: string;
  'suffix-name'?: string;
  address?: Address;
  'birth-country'?: string;
  'birth-date'?: string;
  'citizenship-country'?: string;
  email?: string;
  'employer-name'?: string;
  'employment-status'?: string;
  'home-phone-number'?: string;
  'is-foreign'?: string;
  'job-title'?: string;
  'marital-status'?: string;
  'mobile-phone-number'?: string;
  'number-of-dependents'?: string;
  occupation?: string;
  'owner-of-record'?: boolean;
  'relationship-to-entity'?: string;
  'tax-number'?: string;
  'tax-number-type'?: string;
  'usa-citizenship-type'?: string;
  'visa-expiration-date'?: string;
  'visa-type'?: string;
  'work-phone-number'?: string;
}

// EntitySuitability model
export interface EntitySuitability {
  id?: string;
  'annual-net-income'?: number;
  'covered-options-trading-experience'?: string;
  'entity-id'?: number;
  'futures-trading-experience'?: string;
  'liquid-net-worth'?: number;
  'net-worth'?: number;
  'stock-trading-experience'?: string;
  'tax-bracket'?: string;
  'uncovered-options-trading-experience'?: string;
}

// Person model
export interface Person {
  'external-id'?: string;
  'first-name'?: string;
  'last-name'?: string;
  'middle-name'?: string;
  'prefix-name'?: string;
  'suffix-name'?: string;
  'birth-country'?: string;
  'birth-date'?: string;
  'citizenship-country'?: string;
  'usa-citizenship-type'?: string;
  'visa-expiration-date'?: string;
  'visa-type'?: string;
  'employer-name'?: string;
  'employment-status'?: string;
  'job-title'?: string;
  'marital-status'?: string;
  'number-of-dependents'?: string;
  occupation?: string;
}
