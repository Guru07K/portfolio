/**
 * Download Resume configuration: the résumé is served from Google Drive.
 *
 * The button links straight to Drive's download URL. Drive only serves the
 * file to normal browser navigation (it rejects fetch()/CORS requests), so the
 * downloaded file is named after the file's NAME IN DRIVE. Keep that name as
 * "Gnanaguru_K_Resume.pdf" (renaming a Drive file keeps its ID).
 *
 * To update the résumé WITHOUT changing this code, keep the same file ID:
 *   Google Drive -> right-click the PDF -> File information -> Manage versions
 *   -> "Upload new version". Do not delete and re-upload (that creates a new ID).
 *
 * Sharing must stay: General access -> "Anyone with the link" -> Viewer.
 * The file ID is public (it is part of the share link); no credentials or API
 * keys are used.
 */

// Google Drive file ID, from https://drive.google.com/file/d/<FILE_ID>/view
export const RESUME_DRIVE_FILE_ID = "1y0mAJu6e3nMIkq74I59dHssVkue8nS4y";

// Expected file name in Drive (= name of the downloaded file).
export const RESUME_FILENAME = "Gnanaguru_K_Resume.pdf";

// Direct download endpoint: returns the PDF as an attachment. (The older
// drive.google.com/uc?export=download URL can answer 403.)
export const RESUME_URL = `https://drive.usercontent.google.com/download?id=${encodeURIComponent(RESUME_DRIVE_FILE_ID)}&export=download`;

// Drive's viewer page for the file.
export const RESUME_VIEW_URL = `https://drive.google.com/file/d/${encodeURIComponent(RESUME_DRIVE_FILE_ID)}/view`;
