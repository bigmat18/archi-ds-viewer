import { IconButton, Portal, Stack, Tab, Tabs } from '@mui/material'
import { Add } from '@mui/icons-material'
import { useTabPanelContext } from '../context/TabContext'

function Content() {
  const { sidebarRef } = useTabPanelContext()
  return (
    <Stack>
      <Portal container={() => sidebarRef.current!}>
        <span>But I actually render here!</span>
      </Portal>
      <p>This is the main content of the tab.</p>
    </Stack>
  )
}

export function Toolbar() {
  const { plotInstances, selectedTab, setSelectedTab, insertTab } = useTabPanelContext()

  return (
    <Stack sx={{bgcolor: '#cccccc', flexDirection: 'row', alignItems: 'center' }}>
      <Tabs value={selectedTab ? selectedTab.id : false}>
        {plotInstances.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.name}
            value={tab.id}
            onClick={() => setSelectedTab(tab.id)}
          />
        ))}
      </Tabs>
      <IconButton onClick={() => insertTab('New Tab', <Content />)}><Add /></IconButton>
    </Stack>
  )
}