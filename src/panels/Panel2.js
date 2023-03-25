import React from 'react'
import {
  Panel,
  Group,
  View,
  Placeholder,
} from '@vkontakte/vkui'

const Panel2 = ({ id, placeholderText }) => (
  <View id={id} activePanel={id}>
    <Panel id={id}>
      <Group>
        <Placeholder header={placeholderText}/>
      </Group>
    </Panel>
  </View>
)

export default Panel2
