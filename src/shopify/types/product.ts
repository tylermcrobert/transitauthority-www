import { IVariant } from './variant'

export interface IImage {
  id: string
  src: string
  altText: string
}

type Option = {
  name: string
  values: {
    value: string
  }[]
}

export interface IProduct {
  id: string
  createdAt: string
  updatedAt: string
  descriptionHtml: string
  description: string
  handle: string
  productType: string
  title: string
  vendor: string
  tags: string
  publishedAt: string
  onlineStoreUrl: string

  options: Option[]
  images: Array<IImage>
  variants?: Array<IVariant>
}

export interface IProductData {
  id: string
  createdAt: string
  updatedAt: string
  descriptionHtml: string
  description: string
  handle: string
  productType: string
  title: string
  vendor: string
  tags: string
  publishedAt: string
  onlineStoreUrl: string

  options: Array<{
    name: string
    values: Array<string>
  }>

  images: {
    pageInfo: {
      hasNextPage: boolean
      hasPreviousPage: boolean
    }
    edges: Array<{
      cursor: any
      node: IImage
    }>
  }

  variants: {
    pageInfo: {
      hasNextPage: boolean
      hasPreviousPage: boolean
    }
    edges: Array<{
      cursor: any
      node: IVariant
    }>
  }
}
