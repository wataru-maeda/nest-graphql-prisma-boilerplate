# Deploy the template to GCP

Here is the step-by-step guide to spin up the backend template up and running in GCP. We use Terraform to manage infrastructure as code to setup [Cloud Build](https://cloud.google.com/build) and [Cloud Run](https://cloud.google.com/run) for simplifying continuous deployment.

<img src="https://codelabs.developers.google.com/static/codelabs/cloud-run-deploy/img/db5f05c090d5ebcb_1920.png" width="100%" />


## Prerequities

1. Please install [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/gcp-get-started), [gcloud CLI](https://cloud.google.com/sdk/docs/install)  and [direnv](https://github.com/direnv/direnv/blob/master/docs/installation.md)
2. Create a new project in [GCP Console](https://console.cloud.google.com/). Make sure that [billing is enabled](https://cloud.google.com/billing/docs/how-to/verify-billing-enabled#console) for your Google Cloud project.
3. Run GCP command `gcloud config set project {YOUR-PROJECT-ID}` to set your project
4. Run the following command to enable API services 
```
gcloud services enable compute.googleapis.com run.googleapis.com storage.googleapis.com cloudresourcemanager.googleapis.com
```
5. Add terraform user from [IAM service account](https://console.cloud.google.com/iam-admin/serviceaccounts) and import the JSON key.
6. Place anywhere the downloaded JSON key. Update file path to the JSON key  `GOOGLE_APPLICATION_CREDENTIALS` in [.envrc](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/blob/main/terraform/environments/dev/.envrc.example). Please be sure you change the file name from .envrc.example to `.envrc`


## Quickstart

1. Go to [main.tf](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/blob/main/terraform/environments/dev/main.tf) and update the line # CHANGE HERE
2. Move to [dev](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/blob/main/terraform/environment/dev) directory then run `terraform init` and `terraform plan`
3. You'll see the all of GCP resources about to create. Once you confirm everything is ok, run `terraform apply -auto-approve`
4. It failed with the first attempt since we you need to connect with your repository. Go to [Cloud Build Trigger](https://console.cloud.google.com/cloud-build/triggers) and connect with your repository by creating a new trigger option. You actually do not need to create a new trigger but you only need to connect with your repository.
5. Run again `terraform apply` and complete the setup on cloud build for CI/CD pipeline.
6. Git push your change to trigger deployment. You'll see a new build process triggered in [Cloud Build History](https://console.cloud.google.com/cloud-build/builds)
7. After the build succeeds, build images are available in Cloud Run. Please run `terraform apply` again. Terraform will complete cloud run resources. Once the process is complete, you'll find API URL in [Cloud Run](https://console.cloud.google.com/run)

## Reference

- [Deploying to Cloud Run using Cloud Build](https://cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)
- [Continuous deployment from Git using Cloud Build](https://cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- [Managing infrastructure as code with Terraform, Cloud Build, and GitOps](https://cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code)
