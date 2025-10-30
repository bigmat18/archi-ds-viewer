import React, { useCallback } from 'react'

type PlotInstace = {
  id: string
  name: string
  node: React.ReactNode
}

type TabPanelContextProps = {
  plotInstances: PlotInstace[]
  selectedTab: PlotInstace | null
  sidebarRef: React.RefObject<HTMLDivElement | null>

  setSelectedTab: (id: string) => void
  removeTab: (id: string) => void
  insertTab: (name: string, node: React.ReactNode) => string
}

const TabPanelContext = React.createContext<TabPanelContextProps | undefined>(undefined)

export function useTabPanelContext() {
  return React.useContext(TabPanelContext)!
}

export function TabPanelProvider({ children }: { children: React.ReactNode }) {
  const [plotInstances, setPlotInstances] = React.useState<PlotInstace[]>([])
  const [selectedTab, setSelectedTab] = React.useState<PlotInstace | null>(null)
  const sidebarRef = React.useRef<HTMLDivElement>(null)

  const insertTab = useCallback((name: string, node: React.ReactNode) => {
    const id = Math.random().toString(36).slice(2, 9)
    const newTab = { id, name, node }
    setPlotInstances((prev) => [...prev, newTab])
    setSelectedTab(newTab)
    return id
  }, [])

  const removeTab = useCallback((id: string) => {
    setPlotInstances((prev) => prev.filter((tab) => tab.id !== id))
    setSelectedTab((prev) => (prev && prev.id === id ? null : prev))
  }, [])

  const handleSetSelectedTab = useCallback((id: string) => {
    const tab = plotInstances.find((tab) => tab.id === id) || null
    setSelectedTab(tab)
  }, [plotInstances])

  return (
    <TabPanelContext.Provider
      value={{
        plotInstances,
        selectedTab,
        sidebarRef,
        setSelectedTab: handleSetSelectedTab,
        removeTab,
        insertTab,
      }}
    >
      {children}
    </TabPanelContext.Provider>
  )
}