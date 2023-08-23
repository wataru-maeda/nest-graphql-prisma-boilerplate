variable "service_name" {
  type        = string
  description = "service name"
}

variable "environment" {
  type        = string
  description = "environment name"
}

variable "project_id" {
  type        = string
  description = "GCP project id"
}

variable "location" {
  type        = string
  description = "GCP location"
}

variable "database_url" {
  type        = string
  description = "SQLigte database url"
}

variable "github_repo_name" {
  type        = string
  description = "github repository"
}

variable "github_owner" {
  type        = string
  description = "github owner"
}

variable "github_branch_name" {
  type        = string
  description = "github branch name"
}