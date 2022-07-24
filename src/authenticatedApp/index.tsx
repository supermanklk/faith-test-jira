import styled from '@emotion/styled'
import React from 'react'
import { Dropdown, Menu } from 'antd'
import { ReactComponent as Logo } from '../logo.svg'
import { useAuth } from '../context/authContext'
import ProjectList from '../pages/ProjectList'
import TryUseArray from '../pages/TryUseArray'
import { Row } from '../components/lib'
const AuthenticatedApp = () => {
  const { logout, user } = useAuth()
  return (
    <Container>
      <Header>
        <HeaderLeft gap={true} paddingLeft={1.2}>
          <Logo width='5rem' height='5rem' />
          <div>项目</div> <div>用户</div>
        </HeaderLeft>
        <HeaderRight gap={true} paddingRight={1.2}>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={'logout'}>
                  <a href='javascript:;' onClick={logout}>
                    退出
                  </a>
                </Menu.Item>
              </Menu>
            }>
            <a onClick={(e) => e.preventDefault()}>hi,{user?.name}</a>
          </Dropdown>
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
  /* background: gray; */
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`

const HeaderLeft = styled(Row)``
const HeaderRight = styled(Row)``

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
