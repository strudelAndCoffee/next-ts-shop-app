import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
} from '@react-email/components'
import { OrderInfo } from './components/OrderInfo'
import React from 'react'

type OrderHistoryEmailProps = {
  orders: {
    id: string
    pricePaidCents: number
    createdAt: Date
    downloadVerificationId: string
    product: {
      name: string
      imagePath: string
      description: string
    }
  }[]
}

OrderHistoryEmail.PreviewProps = {
  orders: [
    {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      pricePaidCents: 10000,
      downloadVerificationId: crypto.randomUUID(),
      product: {
        name: 'Product Name',
        imagePath:
          '/products/78b67449-d48f-4083-bae7-116a47467f75-Screenshot_20221226_035005.png',
        description: 'Product description',
      },
    },
    {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      pricePaidCents: 2000,
      downloadVerificationId: crypto.randomUUID(),
      product: {
        name: 'Product Name 2',
        imagePath: '/products/',
        description: 'Product 2 description',
      },
    },
  ],
} satisfies OrderHistoryEmailProps

export default function OrderHistoryEmail({ orders }: OrderHistoryEmailProps) {
  return (
    <Html>
      <Preview>Order History & Downloads</Preview>
      <Tailwind>
        <Head />
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Heading>Order History</Heading>
            {orders.map((order, index) => (
              <React.Fragment key={order.id}>
                <OrderInfo
                  order={order}
                  product={order.product}
                  downloadVerificationId={order.downloadVerificationId}
                />
                {index < orders.length - 1 && <Hr />}
              </React.Fragment>
            ))}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
