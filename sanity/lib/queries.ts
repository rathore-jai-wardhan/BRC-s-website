export const upcomingRunsQuery = `*[_type == "run" && status == "upcoming"] | order(date asc) {
  ...,
  "routePdfUrl": routePdf.asset->url
}`