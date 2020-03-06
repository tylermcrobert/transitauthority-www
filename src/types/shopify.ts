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
  lineItems: ICheckoutLineItem[]
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

export interface ICheckoutLineItem {
  id: string
  title: string
  quantity: number
  variant: {
    id: string
    title: string
    price: string
    priceV2: IPrice
    presentmentPrices: any
    weight: number
    available: boolean
    sku: string
    compareAtPrice: any
    compareAtPriceV2: any
    image: {
      id: string
      src: string
      altText: string
    }
    selectedOptions: any
  }
}
