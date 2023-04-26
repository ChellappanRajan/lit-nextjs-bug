import { Tabs, Tab } from '@/components/tab-wrapper'
import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
     <button>
     <Link href="/">Back</Link>
     </button>
      <div>
      While navigating this components props available in firstUpdate lifecyle
       <Tabs variant="test">
        <Tab title="Tab1"></Tab>
        <Tab title="Tab2"></Tab>
      </Tabs>
      </div>
    </div>
  )
}

export default index