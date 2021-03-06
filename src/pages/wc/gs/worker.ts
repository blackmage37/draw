import { firstPossibleGroup } from '@draws/engine'

import predicate from 'engine/predicates/wc'

// eslint-disable-next-line no-restricted-globals
addEventListener('message', e => {
  const {
    messageId,
    data: {
      pots,
      groups,
      selectedTeam,
    },
  } = e.data

  const pickedGroup = firstPossibleGroup(pots, groups, selectedTeam, predicate)

  postMessage({
    messageId,
    data: {
      pickedGroup,
    },
  })
})
