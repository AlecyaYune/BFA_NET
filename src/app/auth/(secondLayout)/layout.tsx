import Menu from '@/components/menu'
import Verification_Card from '@/components/verification_card'
import '@/styles/auth-layout.css'
import Link from 'next/link'

export default function SecondLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="second_auth_main_container">
            <section className="second_auth_principal_container">
                <div className="second_auth_children_container">
                  <Menu/> {children}
                </div>
            </section>
            <Verification_Card/>
        </main>
    )
}