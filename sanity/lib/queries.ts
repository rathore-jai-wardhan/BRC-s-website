export const upcomingRunsQuery = `*[
  _type == "run" &&
  status == "upcoming"
] | order(date asc) {
  ...,
  "routePdfUrl": routePdf.asset->url
}`;

export const pastRunsQuery = `*[
  _type == "run" &&
  status == "past"
] | order(date desc) {
  ...,
  "routePdfUrl": routePdf.asset->url
}`;

export const latestRunQuery = `*[
  _type == "run" &&
  status == "upcoming"
] | order(date asc)[0] {
  ...,
  "routePdfUrl": routePdf.asset->url
}`;