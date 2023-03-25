import React from 'react';
import { Tabbar, TabbarItem } from '@vkontakte/vkui'
import { Icon28ChainCircleFillBlue, Icon28CheckCircleOff } from '@vkontakte/icons';
import { panelConfig } from '../constants'

const MainTabBar = ({ activeStory, onStoryChange }) => {
  const { home, panel2, panel3 } = panelConfig;
  return (
    <Tabbar>
      <TabbarItem
        onClick={() => onStoryChange(panel2.id)}
        selected={activeStory === panel2.id}
        data-story={panel2.id}
        text={panel2.text}
      >
        <Icon28ChainCircleFillBlue />
      </TabbarItem>
      <TabbarItem
        onClick={() => onStoryChange(home.id)}
        selected={activeStory === home.id}
        data-story={home.id}
        text={home.text}
      >
        <Icon28CheckCircleOff />
      </TabbarItem>
      <TabbarItem
        onClick={() => onStoryChange(panel3.id)}
        selected={activeStory === panel3.id}
        data-story={panel3.id}
        text={panel3.text}
      >
        <Icon28ChainCircleFillBlue />
      </TabbarItem>
    </Tabbar>
  )
}

export default MainTabBar;
