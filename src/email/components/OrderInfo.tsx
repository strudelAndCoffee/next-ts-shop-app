import { formatCurrency } from '@/lib/formatters'
import {
  Button,
  Column,
  Img,
  Row,
  Section,
  Text,
} from '@react-email/components'

const dateFormatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium' })

type OrderInfoProps = {
  order: { id: string; createdAt: Date; pricePaidCents: number }
  product: { name: string; imagePath: string; description: string }
  downloadVerificationId: string
}

export function OrderInfo({
  order,
  product,
  downloadVerificationId,
}: OrderInfoProps) {
  return (
    <>
      <Section>
        <Row>
          <Column>
            <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
              Order ID
            </Text>
            <Text className="mt-0 mr-4">{order.id}</Text>
          </Column>
          <Column>
            <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
              Purchased On
            </Text>
            <Text className="mt-0 mr-4">
              {dateFormatter.format(order.createdAt)}
            </Text>
          </Column>
          <Column>
            <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
              Price Paid
            </Text>
            <Text className="mt-0 mr-4">
              {formatCurrency(order.pricePaidCents / 100)}
            </Text>
          </Column>
        </Row>
      </Section>
      <Section className="border border-solid border-gray-500 rounded-lg p-4 md:p-6 my-4">
        <Img
          width="100%"
          alt={product.name}
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.imagePath}`}
        />
        <Row className="mt-8">
          <Column className="align-bottom">
            <Text className="text-lg font-bold m-0 mr-4">{product.name}</Text>
          </Column>
          <Column align="right">
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/products/download/${downloadVerificationId}`}
              className="bg-black text-white px-6 py-4 rounded text-lg"
            >
              Download
            </Button>
          </Column>
          <Row>
            <Column>
              <Text className="text-gray-500 mb-0">{product.description}</Text>
            </Column>
          </Row>
        </Row>
      </Section>
    </>
  )
}
