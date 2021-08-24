import { Text } from '@chakra-ui/react'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { utils } from 'ethers'

/**
 * Component
 */
function Balance(): JSX.Element {

  const { account } = useEthers()
  const etherBalance = useEtherBalance(account).toString();
  const finalBalance = etherBalance ? utils.formatEther(etherBalance) : ''

  return <Text>{finalBalance.slice(0,5)} ETH</Text>
}

export default Balance