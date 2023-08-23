resource "google_artifact_registry_repository" "repo" {
  provider      = google-beta
  location      = var.location
  repository_id = var.github_repo_name
  format        = "DOCKER"
  depends_on = [
    google_project_service.service["artifactregistry.googleapis.com"]
  ]
}

resource "google_cloudbuild_trigger" "trigger" {
  provider = google-beta
  name     = "${var.service_name}-${var.environment}-trigger"

  github {
    name  = var.github_repo_name
    owner = var.github_owner
    push {
      branch = var.github_branch_name
    }
  }

  substitutions = {
    _DATABASE_URL      = var.database_url
    _GOOGLE_PROJECT_ID = var.project_id
    _CLOUD_RUN_SERVICE = "${var.service_name}-${var.environment}"
    _REGION            = var.location
  }

  filename = "cloudbuild.yaml"
}
