resource "google_project_service" "service" {
  for_each = toset([
    "artifactregistry.googleapis.com",
    "run.googleapis.com",
    "cloudbuild.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "containerregistry.googleapis.com",
    "iam.googleapis.com"
  ])

  service = each.key

  project            = var.project_id
  disable_on_destroy = true
}
