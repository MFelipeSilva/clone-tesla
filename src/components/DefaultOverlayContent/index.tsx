import { Container, Headers, Buttons } from "./styles"

interface Props {
  label: string
  description: string
}

export const DefaultOverlayContent: React.FC<Props> = ({ label, description}) => {
  return (
    <Container>
      <Headers>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Headers>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Demo Drive</button>
      </Buttons>
    </Container>
  )
}