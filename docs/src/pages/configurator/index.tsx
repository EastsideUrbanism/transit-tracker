import Layout from "@theme/Layout"
import { ReactNode } from "react"

export default function Configurator(): ReactNode {
  return (
    <Layout title="Configurator" wrapperClassName="full-height">
      <iframe
        src="https://countdown-config.horner.tj"
        allow="serial; usb; bluetooth; clipboard-write; clipboard-read; geolocation; local-network-access *"
        style={{
          height: "100%",
          width: "100%",
          flex: "1",
        }}
      />
    </Layout>
  )
}
