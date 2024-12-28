/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { FC } from 'react'
import { memo } from 'react'

export const LayersIcon: FC = memo(() => {
  return (
    <div style={{ display: 'flex' }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.81402 9.1664C2.73143 9.25234 2.65134 9.35917 2.59283 9.49151C2.45053 9.81338 2.45051 10.1803 2.59276 10.5022C2.70804 10.7631 2.90717 10.9248 3.04405 11.0229C3.17744 11.1185 3.34856 11.2188 3.52135 11.3201L9.2159 14.6596L9.24685 14.6779C9.35506 14.7423 9.53347 14.8485 9.73671 14.8923C9.91017 14.9296 10.0896 14.9297 10.2631 14.8923C10.4663 14.8486 10.6447 14.7424 10.7529 14.678L10.7839 14.6597L16.4783 11.3214C16.6511 11.2201 16.8223 11.1198 16.9557 11.0242C17.0926 10.9261 17.2917 10.7644 17.407 10.5036C17.5493 10.1817 17.5493 9.8148 17.4071 9.49291C17.3486 9.3605 17.2685 9.25364 17.1859 9.16767L9.99986 13.3804L2.81402 9.1664Z"
          fill="#626D82"/>
        <path
          d="M2.81402 12.1664L9.99986 16.3805L17.1859 12.1677C17.2685 12.2537 17.3486 12.3605 17.4071 12.4929C17.5493 12.8148 17.5493 13.1818 17.407 13.5036C17.2917 13.7645 17.0926 13.9262 16.9557 14.0242C16.8223 14.1198 16.6511 14.2201 16.4783 14.3214L10.7839 17.6597L10.7529 17.6781C10.6447 17.7424 10.4663 17.8486 10.2631 17.8923C10.0896 17.9297 9.91017 17.9297 9.73671 17.8923C9.53347 17.8485 9.35506 17.7423 9.24685 17.6779L9.2159 17.6596L3.52135 14.3201C3.34856 14.2188 3.17744 14.1185 3.04405 14.0229C2.90717 13.9248 2.70804 13.7631 2.59276 13.5022C2.45051 13.1803 2.45053 12.8134 2.59283 12.4915C2.65134 12.3592 2.73143 12.2524 2.81402 12.1664Z"
          fill="#626D82"/>
        <path
          d="M9.73198 2.10612C9.90533 2.06878 10.0846 2.06879 10.258 2.10616C10.4611 2.14995 10.6394 2.25611 10.7475 2.32051C10.7586 2.32709 10.7689 2.33324 10.7784 2.33884L16.4692 5.67834C16.6419 5.77963 16.8129 5.87994 16.9462 5.97554C17.083 6.07364 17.282 6.23537 17.3972 6.49622C17.5393 6.81811 17.5393 7.18506 17.3971 7.50692C17.2819 7.76776 17.0828 7.92946 16.946 8.02754C16.8127 8.12313 16.6417 8.22342 16.469 8.32469L10.7784 11.663C10.7688 11.6686 10.7585 11.6748 10.7475 11.6813C10.6393 11.7457 10.461 11.8519 10.2579 11.8956C10.0845 11.933 9.90524 11.933 9.73189 11.8956C9.52878 11.8518 9.3505 11.7456 9.24236 11.6812C9.2313 11.6747 9.22097 11.6685 9.21143 11.6629L3.5444 8.33735C3.53648 8.3327 3.52857 8.32806 3.52066 8.32342C3.34799 8.22213 3.17698 8.12181 3.04368 8.02621C2.90689 7.92811 2.70788 7.76638 2.59268 7.50553C2.45053 7.18364 2.45055 6.8167 2.59276 6.49483C2.70799 6.23399 2.90702 6.07229 3.04382 5.97421C3.17714 5.87863 3.34816 5.77833 3.52084 5.67707C3.52875 5.67243 3.53667 5.66778 3.54459 5.66314L9.21148 2.33873C9.22103 2.33313 9.23136 2.32699 9.24242 2.3204C9.35057 2.25602 9.52887 2.14988 9.73198 2.10612ZM9.99487 3.61794C9.98694 3.62258 9.97854 3.62751 9.9696 3.63276L4.3027 6.95716C4.2769 6.9723 4.25247 6.98664 4.22924 7.00029C4.25247 7.01395 4.2769 7.02829 4.3027 7.04343L9.96972 10.369C9.97867 10.3742 9.98707 10.3792 9.995 10.3838C10.0029 10.3792 10.0113 10.3742 10.0203 10.369L15.6872 7.04459C15.713 7.02945 15.7374 7.01511 15.7606 7.00146C15.7374 6.9878 15.713 6.97346 15.6872 6.95832L10.0201 3.63276C10.0112 3.62751 10.0028 3.62258 9.99487 3.61794Z"
          fill="#626D82"/>
      </svg>
    </div>
  )
})