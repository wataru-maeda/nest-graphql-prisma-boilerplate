# -----------------------------------------------------------------
# TERRAFORM
# -----------------------------------------------------------------

terraform {
  /* backend "gcs" {
    bucket = "your-project-dev-tf-state"
    prefix = "terraform/state"
  } */

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.51.0"
    }
  }
}

# -----------------------------------------------------------------
# LOCALS
# -----------------------------------------------------------------

locals {
  project_id   = "api-demo-terraform" # CHANGE HERE
  service_name = "api"                # CHANGE HERE
  environment  = "dev"                # CHANGE HERE
  region       = "us-central1"        # CHANGE HERE
  zone         = "us-central1-c"      # CHANGE HERE
}

# -----------------------------------------------------------------
# PROVIDERS
# -----------------------------------------------------------------

provider "google" {
  project = local.project_id
  region  = local.region
  zone    = local.zone
}

provider "google-beta" {
  project = local.project_id
  region  = local.region
}

# -----------------------------------------------------------------
# STORAGE FOR TF STATE
# -----------------------------------------------------------------

resource "google_storage_bucket" "tfstate" {
  name                        = "${local.project_id}-${local.environment}-tf-state"
  location                    = local.region
  public_access_prevention    = "enforced"
  uniform_bucket_level_access = true

  versioning {
    enabled = true
  }
}

# -----------------------------------------------------------------
# MODULES
# -----------------------------------------------------------------

module "api" {
  source = "../../modules/api"

  project_id   = local.project_id
  service_name = local.service_name
  environment  = local.environment
  location     = local.region

  database_url = "file:./dev.db" # CHANGE HERE

  github_owner       = "wataru-maeda"                    # CHANGE HERE
  github_repo_name   = "nest-graphql-prisma-boilerplate" # CHANGE HERE
  github_branch_name = "^terraform-gcp-deploy$"          # CHANGE HERE
}
