// TODO(icons): replace with final SVG from Figma MCP Registry (node 2065:85436)
import type { FC } from 'react'
import { memo } from 'react'

export type DdlIconProps = {
  color?: string
  size?: number
}

export const DdlIcon: FC<DdlIconProps> = memo<DdlIconProps>(({ color, size = 20 }) => {
  return (
    <div style={{ display: 'flex' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="DdlIcon"
      >
        <path
          d="M3.5 4.5C3.5 3.94772 3.94772 3.5 4.5 3.5H15.5C16.0523 3.5 16.5 3.94772 16.5 4.5V6.5C16.5 7.05228 16.0523 7.5 15.5 7.5H4.5C3.94772 7.5 3.5 7.05228 3.5 6.5V4.5ZM3.5 9.5C3.5 8.94772 3.94772 8.5 4.5 8.5H15.5C16.0523 8.5 16.5 8.94772 16.5 9.5V11.5C16.5 12.0523 16.0523 12.5 15.5 12.5H4.5C3.94772 12.5 3.5 12.0523 3.5 11.5V9.5ZM3.5 14.5C3.5 13.9477 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.9477 12.5 14.5V15.5C12.5 16.0523 12.0523 16.5 11.5 16.5H4.5C3.94772 16.5 3.5 16.0523 3.5 15.5V14.5ZM5.25 5.25H6.75V5.75H5.25V5.25ZM5.25 10.25H8.75V10.75H5.25V10.25ZM5.25 14.75H8.75V15.25H5.25V14.75Z"
          fill={color ?? '#002B80'}
        />
      </svg>
    </div>
  )
})
