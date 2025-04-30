import { memo, type FC } from 'react'

/**
 * @deprecated Remove it if it is not really needed
 */
export const AppPlaceholder: FC = memo(() => {
  return (
    <div style={{ padding: 20, fontSize: 14 }}>
      Please, wait...
    </div>
  )
})
