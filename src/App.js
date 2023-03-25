import React, { useState } from 'react';
import { AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Epic } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Panel2 from './panels/Panel2'
import Panel3 from './panels/Panel3'
import MainTabBar from './components/MainTabBar'
import { panelConfig } from './constants'

const App = () => {
	const [activeStory, setActiveStory] = useState('home');
	const { home, panel2, panel3 } = panelConfig;
	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							<Epic
								activeStory={activeStory}
								tabbar={<MainTabBar activeStory={activeStory} onStoryChange={setActiveStory} />}
							>
								<Home id={home.id} placeholderText={home.placeholder}/>
								<Panel2 id={panel2.id} placeholderText={panel2.placeholder}/>
								<Panel3 id={panel3.id} placeholderText={panel3.placeholder}/>
							</Epic>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
