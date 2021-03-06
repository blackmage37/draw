import styled, { css } from 'styled-components'

import CellWithFlag from '../table/CellWithFlag'

const Selected = css`
  color: blue;
`

const Picked = css`
  filter: grayscale(0.5);
  opacity: 0.4;
`

interface Props {
  selected: boolean,
  picked: boolean,
}

const PotCell = styled(CellWithFlag)<Props>`
  ${props => props.selected && Selected}
  ${props => props.picked && Picked}
`

export default PotCell
