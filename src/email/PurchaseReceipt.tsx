import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
} from '@react-email/components'
import { OrderInfo } from './components/OrderInfo'

type PurchaseReceiptEmailProps = {
  product: {
    name: string
    imagePath: string
    description: string
  }
  order: { id: string; createdAt: Date; pricePaidCents: number }
  downloadVerificationId: string
}

PurchaseReceiptEmail.PreviewProps = {
  product: {
    name: 'Product Name',
    imagePath: '/products/',
    description: 'Product description',
  },
  order: {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    pricePaidCents: 10000,
  },
  downloadVerificationId: crypto.randomUUID(),
} satisfies PurchaseReceiptEmailProps

export default function PurchaseReceiptEmail({
  product,
  order,
  downloadVerificationId,
}: PurchaseReceiptEmailProps) {
  return (
    <Html>
      <Preview>Download {product.name} and view receipt</Preview>
      <Tailwind>
        <Head />
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Heading>Purchase Receipt</Heading>
            <OrderInfo
              order={order}
              product={product}
              downloadVerificationId={downloadVerificationId}
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
