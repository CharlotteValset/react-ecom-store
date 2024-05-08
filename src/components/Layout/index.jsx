import { Header } from "./Header"
import { Footer } from "./Footer"
import { ProductCard } from "../Card"
import { ContactForm } from "../Pages/contact"


export const Layout = () => {
  return (
    <div>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  )
}