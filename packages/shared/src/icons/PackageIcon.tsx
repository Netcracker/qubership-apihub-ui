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

export const PackageIcon: FC = memo(() => {
  return (
    <div style={{ display: 'flex' }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="white"/>
        <circle cx="10" cy="10" r="10" fill="#EDF1F5"/>
        <path
          d="M4.80175 13.366C4.80418 13.5801 4.80997 13.7712 4.82379 13.9403C4.84862 14.2441 4.90231 14.5294 5.03979 14.7991C5.25071 15.213 5.58726 15.5494 6.00122 15.7603C6.27103 15.8977 6.55635 15.9514 6.86026 15.9762C7.15164 16 7.50831 16 7.93562 16H12.0643C12.4917 16 12.8484 16 13.1397 15.9762C13.4437 15.9514 13.729 15.8977 13.9988 15.7603C14.4127 15.5494 14.7493 15.213 14.9602 14.7991C15.0977 14.5294 15.1514 14.2441 15.1762 13.9403C15.19 13.7712 15.1958 13.5801 15.1983 13.366C15.1788 13.3678 15.1593 13.3696 15.1397 13.3712C14.8484 13.395 14.4917 13.395 14.0644 13.3949H14.04H5.96H5.93564C5.50833 13.395 5.15164 13.395 4.86026 13.3712C4.84068 13.3696 4.82118 13.3678 4.80175 13.366ZM16 10.2729C16 10.2607 16 10.2483 16 10.2358L16 9.53403C16 9.10686 16 8.75026 15.9762 8.45898C15.9514 8.15516 15.8977 7.86992 15.7602 7.60018C15.5493 7.18635 15.2127 6.84989 14.7988 6.63903C14.529 6.5016 14.2436 6.44793 13.9397 6.4231C13.6483 6.3993 13.2917 6.39931 12.8644 6.39932H12.8C12.7998 6.12397 12.7981 5.88391 12.7817 5.6825C12.7623 5.44536 12.7195 5.2095 12.6038 4.98254C12.4312 4.64394 12.1559 4.36866 11.8172 4.19613C11.5902 4.08049 11.3542 4.03771 11.117 4.01834C10.8923 3.99998 10.6195 3.99999 10.3032 4H9.69687C9.3806 3.99999 9.10771 3.99998 8.88298 4.01834C8.64577 4.03771 8.40984 4.08049 8.18281 4.19613C7.84412 4.36866 7.56876 4.64394 7.39618 4.98254C7.28051 5.2095 7.23772 5.44537 7.21834 5.68251C7.20188 5.88391 7.20018 6.12398 7.20001 6.39932H7.13565C6.70833 6.39931 6.35165 6.3993 6.06026 6.4231C5.75635 6.44793 5.47103 6.5016 5.20122 6.63904C4.78726 6.8499 4.45071 7.18636 4.23979 7.6002C4.10231 7.86993 4.04862 8.15517 4.02379 8.45899C3.99999 8.75029 3.99999 9.10686 4 9.53404V10.2762C4.00004 10.7118 4.00104 11.008 4.0198 11.2376C4.03857 11.4672 4.07208 11.577 4.10899 11.6494C4.20487 11.8375 4.35785 11.9905 4.54601 12.0863C4.61846 12.1232 4.72828 12.1567 4.95798 12.1755C5.19468 12.1948 5.50205 12.1953 5.96 12.1953H14.04C14.4979 12.1953 14.8053 12.1948 15.042 12.1755C15.2717 12.1567 15.3815 12.1232 15.454 12.0863C15.6422 11.9905 15.7951 11.8375 15.891 11.6494C15.9279 11.577 15.9614 11.4672 15.9802 11.2376C15.999 11.0074 16 10.7103 16 10.2729ZM8.98069 5.21401C9.1507 5.20013 9.37406 5.19966 9.71999 5.19966H10.28C10.6259 5.19966 10.8493 5.20013 11.0193 5.21401C11.1823 5.22733 11.2427 5.24993 11.2724 5.26504C11.3853 5.32254 11.4771 5.41431 11.5346 5.52717C11.5497 5.55683 11.5723 5.61724 11.5857 5.78019C11.5979 5.92964 11.5997 6.12033 11.6 6.39932H8.40004C8.4003 6.12033 8.40214 5.92964 8.41435 5.7802C8.42767 5.61724 8.45027 5.55683 8.46539 5.52717C8.52291 5.41431 8.6147 5.32255 8.7276 5.26504C8.75727 5.24993 8.8177 5.22733 8.98069 5.21401Z"
          fill="#626D82"
        />
      </svg>
    </div>
  )
})