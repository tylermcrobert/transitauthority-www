export interface ICheckout {
  id: string
  ready: boolean
  requiresShipping: boolean
  note: any
  paymentDue: string
  paymentDueV2: IPrice
  webUrl: string
  orderStatusUrl: any
  taxExempt: string
  taxesIncluded: boolean
  currencyCode: string
  totalTax: string
  totalTaxV2: IPrice
  lineItemsSubtotalPrice: IPrice
  subtotalPrice: string
  subtotalPriceV2: IPrice
  totalPrice: string
  totalPriceV2: IPrice
  completedAt: any
  createdAt: string
  updatedAt: string
  email: any
  discountApplications: []
  appliedGiftCards: []
  shippingAddress: any
  shippingLine: any
  customAttributes: []
  order: any
  lineItems: []
}

interface IPrice {
  amount: string
  currencyCode: string
  type: {
    name: string
    kind: string
    fieldBaseTypes: {
      amount: string
      currencyCode: string
    }
    implementsNode: boolean
  }
}
