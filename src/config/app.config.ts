interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Company Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Company Owner', 'Company Recruiter'],
  tenantName: 'Company',
  applicationName: 'UpworkX',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own freelancer profile', 'Bid on projects', 'Edit bids', 'Leave reviews for projects'],
  ownerAbilities: ['Manage company information', 'Manage projects', 'Create and manage bids', 'Provide reviews'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e2cc9c61-a22e-42b8-8a36-bb757a7c3fee',
};
