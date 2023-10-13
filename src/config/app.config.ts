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
  ownerRoles: ['Delivery Personnel'],
  customerRoles: ['Customer'],
  tenantRoles: ['Team Member', 'Farm Supplier', 'Delivery Personnel'],
  tenantName: 'Organization',
  applicationName: 'Online Organic Vegetables',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View personal information',
    'Update personal information',
    'View associated organization information',
    'Create new organization',
  ],
  ownerAbilities: [
    'Deliver orders',
    'Update order status',
    'View assigned orders',
    'Contact customers for delivery details',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/1799416a-3223-45de-bcfd-f74678a39a21',
};
