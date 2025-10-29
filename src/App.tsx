import { Box, Stack } from '@mui/material'
import './App.css'

import { useTabPanelContext } from './TabPanelContext'
import { Toolbar } from './Toolbar'
import { SideBar } from './SideBar'

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
