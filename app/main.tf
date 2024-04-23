terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.25.0"
    }
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "5.25.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

provider "google-beta" {
  project = var.project_id
  region  = var.region
}


#specifies the actual resource the api agteway service
resource "google_api_gateway_api" "helloworldAPI" {
  provider = google-beta
  api_id = "helloworld"
}

# specifies the openAPI configuration 
resource "google_api_gateway_api_config" "api_cfg" {
  provider = google-beta
  api = google_api_gateway_api.helloworldAPI.api_id
  api_config_id = "my-config"

  openapi_documents {
    document {
      path = "./API_Specification.yml"
      contents = filebase64("./API_Specification.yml")
    }
  }
  lifecycle {
    create_before_destroy = true
  }
}

#specifies the endpoint to the outside
resource "google_api_gateway_gateway" "api_gateway" {
  provider = google-beta
  gateway_id  = "simple-api-gateway"
  api_config  = google_api_gateway_api_config.api_cfg.id
}

resource "google_api_gateway_gateway_iam_member" "public_invoker" {
  provider = google-beta

  gateway  = google_api_gateway_gateway.api_gateway.name
  project  = var.project_id
  region   = var.region
  role     = "roles/apigateway.invoker"
  member   = "allUsers"

}


output "api_gateway_url" {
  value = google_api_gateway_gateway.api_gateway.default_hostname
}


module "backend" {
     source = "./backend"
     region = var.region
  
}
