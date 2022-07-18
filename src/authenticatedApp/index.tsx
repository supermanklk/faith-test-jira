import styled from '@emotion/styled'
import React from 'react'
import { useAuth } from '../context/authContext'
import ProjectList from '../pages/ProjectList'
import TryUseArray from '../pages/TryUseArray'
import { Row } from '../components/lib'
const AuthenticatedApp = () => {
  const { logout } = useAuth()
  return (
    <Container>
      <Header>
        <HeaderLeft gap={true} paddingLeft={1.2}>
          <div>logo</div> <div>项目</div> <div>用户</div>
        </HeaderLeft>
        <HeaderRight>
          <button
            onClick={() => {
              logout()
            }}>
            退出
          </button>
        </HeaderRight>
      </Header>
      <Nav>left</Nav>
      <Main>
        <ProjectList />
        <TryUseArray />
      </Main>
      <Aside>right</Aside>
      <Footer>footer</Footer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas: 'header header header' 'nav main aside' 'footer footer footer';
  height: 100vh;
`

const Header = styled.header`
  background: gray;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``

const Nav = styled.nav`
  background-color: yellow;
  grid-area: nav;
`

const Main = styled.main`
  grid-area: main;
`

const Aside = styled.aside`
  background-color: yellow;
  grid-area: aside;
`

const Footer = styled.footer`
  background-color: tomato;
  grid-area: footer;
`

export default AuthenticatedApp
