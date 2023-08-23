resource "google_cloud_run_service" "cloud_run" {
  name     = "${var.service_name}-${var.environment}-cloud-run"
  project  = var.project_id
  location = var.location

  template {
    spec {
      containers {
        image = "gcr.io/${var.project_id}/${var.service_name}-${var.environment}"
        env {
          name  = "NODE_ENV"
          value = var.environment
        }
        env {
          name  = "DATABASE_URL"
          value = var.database_url
        }
        env {
          name  = "THROTTLE_TTL"
          value = 60
        }
        env {
          name  = "THROTTLE_LIMIT"
          value = 600
        }
        resources {
          limits = {
            "cpu"    = "1000m"
            "memory" = "2Gi"
          }
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "member" {
  location = google_cloud_run_service.cloud_run.location
  project  = google_cloud_run_service.cloud_run.project
  service  = google_cloud_run_service.cloud_run.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}

output "url" {
  value = google_cloud_run_service.cloud_run.status[0].url
}
