import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Container, Wrapper, Section, Logo, Link, Main } from './style'
import navbar from '../../utils/navbar'


export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Main>

                <Wrapper>
                    <Section onClick={() => navigate('/home')} logo>
                        <Logo /> <h3>Houzing</h3>
                    </Section>
                    <Section>
                        {
                            navbar.map(({ title, path }, index) => {
                                return <Link className={({ isActive }) => isActive && 'active'} to={path} key={index}>{title}</Link>
                            })
                        }
                    </Section>
                    <button>Sign in</button>
                </Wrapper>
            </Main>
            <Outlet />
        </Container>
    )
}
export default Navbar