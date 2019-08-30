import { Predicate } from '@draws/engine'
import { sumBy } from 'lodash'

import { UefaCountry } from 'model/types'

import Team from 'model/team/GSTeam'
import getSmallestArrayLength from 'utils/getSmallestArrayLength'
import getHalfArrayOfIndex from 'utils/getHalfArrayOfIndex'
import rusUkrConstraint from '../rusUkrConstraint'

const GROUP_SIZE = 4

const big5: UefaCountry[] = [
  'England',
  'Spain',
  'Germany',
  'Italy',
  'France',
]

const isFrom = (country: string) =>
  (team: Team) =>
    team.country === country

const isFromCountryOf = (team: Team) =>
  isFrom(team.country)

function isTeamEqualTo(team: Team) {
  const { id } = team
  return (otherTeam: Team) =>
    otherTeam.id === id
}

function hasTeam(team: Team) {
  const isEqualToTeam = isTeamEqualTo(team)
  return (group: Team[]) =>
    group.some(isEqualToTeam)
}

const isBig5 = (team: Team) =>
  big5.includes(team.country)

const isBig5Number = (team: Team) =>
  isBig5(team) ? 1 : 0

function canFitBigTeamsEvenly(group: Team[]) {
  const bigs = sumBy(group, isBig5Number)
  const spareSlots = GROUP_SIZE - group.length
  return bigs <= 3 && bigs + spareSlots >= 2
}

export default (season: number) => {
  const isIncompatibleWith = rusUkrConstraint(season)

  const predicate: Predicate<Team> = (
    picked: Team,
    groups: Team[][],
    groupIndex: number,
  ) => {
    const group = groups[groupIndex]
    const currentPotIndex = getSmallestArrayLength(groups)

    const isImpossible = group.length > currentPotIndex
      || group.some(isFromCountryOf(picked))
      || group.some(isIncompatibleWith(picked))
      || !canFitBigTeamsEvenly([...group, picked])
      || picked.pairing && getHalfArrayOfIndex(groups, groupIndex).some(hasTeam(picked.pairing))

    return !isImpossible
  }

  return predicate
}
