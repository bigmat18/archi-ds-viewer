import { Box, Stack } from '@mui/material'

import { useTabPanelContext } from './context/TabContext'
import { Toolbar } from './components/Toolbar'
import { SideBar } from './components/Sidebar'

export function App() {
  const { selectedTab } = useTabPanelContext()

  return (
    <>
      <Stack direction="row" sx={{ height: '100vh' }}>
        <SideBar />
        <Stack direction="column" sx={{ flexGrow: 1 }}>
          <Toolbar />
          {selectedTab ? selectedTab.node : <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No tab selected</Box>}
        </Stack>
      </Stack>
    </>
  )
}
