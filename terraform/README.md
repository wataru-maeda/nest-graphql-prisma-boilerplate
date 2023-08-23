# Deploy the template to GCP

Here is the step by step guide to spin up the backend template up and running in GCP. In the boilerplate, We use terraform to manage infrastructure as code. We only use code-build and code-run with Github CI/CD for the template.

## Prerequities

1. Please install [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/gcp-get-started), [gcloud CLI](https://cloud.google.com/sdk/docs/install)  and [direnv](https://github.com/direnv/direnv/blob/master/docs/installation.md)
2. Create a new project in [GCP Console](https://console.cloud.google.com/)
3. Run GCP command `gcloud config set project {YOUR-PROJECT-ID}` to set your project
4. Run following command to to enable api services 
```
gcloud services enable compute.googleapis.com run.googleapis.com storage.googleapis.com cloudresourcemanager.googleapis.com
```
5. Add terraform user from [IAM service account](https://console.cloud.google.com/iam-admin/serviceaccounts) and import the JSON key.
6. Place anywhere the downloaded JSON key. Update file path to the json key  `GOOGLE_APPLICATION_CREDENTIALS` in [.envrc](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/blob/main/.envrc.example). Please be sure you change file name from .envrc.example to `.envrc`


## Quickstart

1. Go to [main.tf](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/blob/main/terraform/environment/dev/main) and update the line # CHANGE HERE
2. Run `terraform init` and `terraform plan`
3. You'll see the all of GCP resources about to create. Confirm if the changes are correct or not. Once you confirm everything is ok, run `terraform apply -auto-approve`
4. It failed with the first attempt since we you need to connect with your repository. Go to [Cloud Build Trigger](https://console.cloud.google.com/cloud-build/triggers) and connect with your repository from creating new trigger option. You actually do not need to create a new trigger but you only need to connect with your repository.
5. Run again `terraform apply` and complete setup on cloud build with CI/CD pipeline.
6. Git push your source code to trigger deploy.