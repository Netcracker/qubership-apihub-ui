import {Typography} from '@mui/material'
import type {AiDocumentScoring} from '../types/document-scoring'
import type {AiIssue} from '../types/issues'
import type {GridTemplateRow} from '../UxSummaryTable'

// Section "OriginalScoring" or "Enhanced Scoring"

export function transformScoringToGridTemplateRows(scoring: AiDocumentScoring | undefined): GridTemplateRow[] {
  if (!scoring) {
    return []
  }

  const rows: GridTemplateRow[] = []

  const {overallScore, details} = scoring
  rows.push([
    'Overall Score',
    <Typography
      variant='body2'
      sx={{
        fontWeight: 'bold',
        color: overallScore.includes('Great')
          ? 'success.main'
          : 'error.main',
      }}
    >{overallScore}</Typography>,
  ])

  for (const scoringParameterDetails of details) {
    rows.push([scoringParameterDetails.name, scoringParameterDetails.value])
  }

  return rows
}

// Section "Enhancements"

export function transformAiDocumentIssuesToGridTemplateRows(aiDocumentIssues: AiIssue[]): GridTemplateRow[] {
  const countByCategory: Map<string, number> = new Map()
  for (const issue of aiDocumentIssues) {
    const category = issue.category.toLowerCase()
    if (!countByCategory.has(category)) {
      countByCategory.set(category, 0)
    }
    countByCategory.set(category, countByCategory.get(category)! + 1)
  }

  const sortedCountByCategory: Array<[string, number]> =
    Array.from(countByCategory.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)

  return transformEnhancementsToGridTemplateRows(sortedCountByCategory)
}

function transformEnhancementsToGridTemplateRows(enhancements: Array<[string, number]>): GridTemplateRow[] {
  if (!enhancements.length) {
    return []
  }

  const rows: GridTemplateRow[] = []

  for (const [issueCategory, issuesCount] of enhancements) {
    rows.push([
      issueCategory,
      <Typography variant='body2' sx={{fontWeight: 'bold'}}>
        {issuesCount} issue(s)
      </Typography>,
    ])
  }

  return rows
}
