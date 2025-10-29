import { Stack } from '@mui/material'
import './App.css'
import { useTabPanelContext } from './TabPanelContext'

export function SideBar() {
  const { sidebarRef } = useTabPanelContext()

  return (
    <Stack ref={sidebarRef} sx={{ width: '250px', bgcolor: '#f0f0f0', p: 2 }}>
      
    </Stack>
  )
}
