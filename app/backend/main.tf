
# bucket for deploying the code
# bucket name has to be unique for all regions
resource "google_storage_bucket" "bucket" {
  name     = "dev-hello-world-storage"
  location = var.region
}

resource "google_storage_bucket_object" "archive" {
  name   = "index.zip"
  bucket = google_storage_bucket.bucket.name
  source = "./backend/src/index.zip"
}

resource "google_cloudfunctions_function" "function" {
  name        = "helloworldfunction"
  description = "My function"
  runtime     = "nodejs18"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.bucket.name
  source_archive_object = google_storage_bucket_object.archive.name
  trigger_http          = true
  entry_point           = "myHttpFunction" # entry point of the function handler
}

# IAM entry for all users to invoke the function
resource "google_cloudfunctions_function_iam_member" "invoker" {
  project        = google_cloudfunctions_function.function.project
  region         = google_cloudfunctions_function.function.region
  cloud_function = google_cloudfunctions_function.function.name

  role   = "roles/cloudfunctions.invoker"
  member = "allUsers"
}

