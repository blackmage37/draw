import { Confederation } from 'model/types'

import Team from './index'

export default class NationalTeam extends Team {
  coefficient: number
  confederation: Confederation
  host: boolean

  constructor(
    name: string,
    coefficient: number,
    confederation: Confederation,
    host: boolean,
  ) {
    super(name)
    this.coefficient = coefficient
    this.confederation = confederation
    this.host = host
  }
}
