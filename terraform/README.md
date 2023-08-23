# Deploy the template to GCP

Here is the step by step guide to spin up the backend template up and running in GCP. In the boilerplate, We use terraform to manage infrastructure as code. We only use code-build and code-run with Github CI/CD for the template.

## Prerequities

1. Please install [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/gcp-get-started), [gcloud CLI](https://cloud.google.com/sdk/docs/install)  and [direnv](https://github.com/direnv/direnv/blob/master/docs/installation.md)
2. Complete [Prerequisites](https://cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code#prerequisites) section
3. Add terraform user from [IAM service account](https://console.cloud.google.com/iam-admin/serviceaccounts) and import the JSON key.
4. Place anywhere the downloaded JSON key. Update file path to the json key  `GOOGLE_APPLICATION_CREDENTIALS` in [.envrc](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/blob/main/.envrc.example)
5. Run following command to to enable api services 
```
gcloud services enable compute.googleapis.com run.googleapis.com storage.googleapis.com cloudresourcemanager.googleapis.com
```

## Quickstart

1. Go to [main.tf](https://github.com/wataru-maeda/nest-graphql-prisma-boilerplate/blob/main/terraform/environment/dev/main) and update the line # CHANGE HERE
2. Run `terraform init` and `terraform plan`
3. You'll see the all of GCP resources about to create. Confirm if the changes are correct or not. Once you confirm everything is ok, run `terraform apply -auto-approve`
4. In first attempt will fail since you need to connect to your github repository. Go to [Cloud Build Trigger](https://console.cloud.google.com/cloud-build/triggers) and connect to your repository.
5. Run again `terraform apply`