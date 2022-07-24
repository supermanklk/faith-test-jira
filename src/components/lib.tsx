import styled from '@emotion/styled'

export const Row = styled.div<{
  gap: number | boolean
  between?: boolean
  marginBottom?: number
  paddingLeft?: number
  paddingRight?: number
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? 'space-berween' : undefined)};
  margin-bottom: ${(props) => props.marginBottom + 'rem'};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft + 'rem' : '0rem')};
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight + 'rem' : '0rem')};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) => (typeof props.gap === 'number' ? props.gap + 'rem' : '2rem')};
  }
`
